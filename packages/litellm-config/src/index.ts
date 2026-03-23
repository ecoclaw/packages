import * as yaml from 'js-yaml'
import { execSync } from 'child_process'

export interface LiteLLMConfigOptions {
  openrouterKey?: string
  anthropicKey?: string
  openaiKey?: string
  models?: string[]
}

interface ModelConfig {
  model_name: string
  litellm_params: {
    model: string
    api_key?: string
    api_base?: string
    max_retries?: number
  }
}

interface RouterSettings {
  retry_policy: {
    BadRequestErrorRetries: number
    AuthenticationErrorRetries: number
    TimeoutErrorRetries: number
    RateLimitErrorRetries: number
    ContentPolicyViolationErrorRetries: number
    InternalServerErrorRetries: number
  }
  num_retries: number
  allowed_fails: number
  cooldown_time: number
}

interface LiteLLMConfig {
  model_list: ModelConfig[]
  router_settings: RouterSettings
  litellm_settings: {
    drop_params: boolean
    set_verbose: boolean
    json_logs: boolean
    success_callback: string[]
    failure_callback: string[]
  }
}

export const DEFAULT_MODELS = [
  'claude-3-5-sonnet',
  'gpt-4o',
  'gemini-2.5-pro',
  'llama-3.3-70b',
]

const MODEL_ALIASES: Record<string, string> = {
  smart: 'claude-3-5-sonnet',
  fast: 'claude-3-5-haiku',
  cheap: 'llama-3.3-70b',
  balanced: 'gpt-4o',
}

const OPENROUTER_BASE = 'https://openrouter.ai/api/v1'

function resolveModelParams(
  modelName: string,
  opts: LiteLLMConfigOptions
): ModelConfig['litellm_params'] {
  const isClaude = modelName.includes('claude')
  const isGpt = modelName.includes('gpt')
  const isGemini = modelName.includes('gemini')
  const isLlama = modelName.includes('llama')

  // Direct API keys take precedence over OpenRouter
  if (isClaude && opts.anthropicKey) {
    return {
      model: `anthropic/${modelName}`,
      api_key: opts.anthropicKey,
      max_retries: 4,
    }
  }
  if (isGpt && opts.openaiKey) {
    return {
      model: `openai/${modelName}`,
      api_key: opts.openaiKey,
      max_retries: 4,
    }
  }
  // Route everything else (and fallback) through OpenRouter
  if (opts.openrouterKey) {
    const routerModel = isLlama
      ? `meta-llama/${modelName}`
      : isGemini
      ? `google/${modelName}`
      : isClaude
      ? `anthropic/${modelName}`
      : isGpt
      ? `openai/${modelName}`
      : modelName
    return {
      model: `openrouter/${routerModel}`,
      api_key: opts.openrouterKey,
      api_base: OPENROUTER_BASE,
      max_retries: 4,
    }
  }
  // Bare model name — user must configure separately
  return { model: modelName, max_retries: 4 }
}

export function generateLiteLLMConfig(options: LiteLLMConfigOptions = {}): string {
  const models = options.models ?? DEFAULT_MODELS
  const modelList: ModelConfig[] = []

  // Primary models
  for (const modelName of models) {
    modelList.push({
      model_name: modelName,
      litellm_params: resolveModelParams(modelName, options),
    })
  }

  // Alias models (smart, fast, cheap, balanced)
  for (const [alias, target] of Object.entries(MODEL_ALIASES)) {
    if (models.includes(target) || alias === 'fast') {
      modelList.push({
        model_name: alias,
        litellm_params: resolveModelParams(
          alias === 'fast' ? 'claude-3-5-haiku' : target,
          options
        ),
      })
    }
  }

  const config: LiteLLMConfig = {
    model_list: modelList,
    router_settings: {
      retry_policy: {
        BadRequestErrorRetries: 0,
        AuthenticationErrorRetries: 0,
        TimeoutErrorRetries: 4,
        RateLimitErrorRetries: 4,
        ContentPolicyViolationErrorRetries: 0,
        InternalServerErrorRetries: 4,
      },
      num_retries: 4,
      allowed_fails: 3,
      cooldown_time: 60,
    },
    litellm_settings: {
      drop_params: true,
      set_verbose: false,
      json_logs: true,
      success_callback: ['langfuse'],
      failure_callback: ['langfuse'],
    },
  }

  return yaml.dump(config, { lineWidth: 120, quotingType: '"', noRefs: true })
}

// ── Ollama detection ────────────────────────────────────────────────────────

export function parseOllamaList(output: string): string[] {
  const lines = output.trim().split('\n')
  // Skip the header line (NAME  ID  SIZE  MODIFIED)
  return lines
    .slice(1)
    .map(line => line.split(/\s+/)[0])
    .filter(name => name && name.length > 0)
    .map(name => `ollama/${name}`)
}

export function detectOllamaModels(): string[] {
  try {
    const output = execSync('ollama list', { timeout: 5000, stdio: ['pipe', 'pipe', 'pipe'] }).toString()
    return parseOllamaList(output)
  } catch {
    return []
  }
}

// ── Env-based config ────────────────────────────────────────────────────────

export interface EnvConfig {
  anthropicKey?: string
  openaiKey?: string
  openrouterKey?: string
  openaiApiBase?: string
  extraModels?: string[]
}

export function readEnvConfig(
  env: Record<string, string | undefined> = process.env as Record<string, string | undefined>
): EnvConfig {
  return {
    anthropicKey: env['ANTHROPIC_API_KEY'],
    openaiKey: env['OPENAI_API_KEY'],
    openrouterKey: env['OPENROUTER_API_KEY'],
    openaiApiBase: env['OPENAI_API_BASE'],
    extraModels: env['LITELLM_EXTRA_MODELS']
      ?.split(',')
      .map(m => m.trim())
      .filter(Boolean),
  }
}

export function generateFromEnv(
  env?: Record<string, string | undefined>,
  ollamaModels?: string[]
): string {
  const config = readEnvConfig(env)
  const detected = ollamaModels ?? detectOllamaModels()
  const extra = config.extraModels ?? []

  const models =
    detected.length > 0 || extra.length > 0
      ? [...DEFAULT_MODELS, ...extra, ...detected]
      : undefined

  return generateLiteLLMConfig({
    anthropicKey: config.anthropicKey,
    openaiKey: config.openaiKey,
    openrouterKey: config.openrouterKey,
    models,
  })
}

// ── Config validation ───────────────────────────────────────────────────────

export interface ValidationResult {
  model: string
  status: 'ok' | 'missing_key' | 'invalid'
  message?: string
}

export function validateConfig(yamlStr: string): ValidationResult[] {
  let config: Record<string, unknown>
  try {
    config = yaml.load(yamlStr) as Record<string, unknown>
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e)
    return [{ model: 'config', status: 'invalid', message: `Invalid YAML: ${msg}` }]
  }

  if (!config?.model_list || !Array.isArray(config.model_list)) {
    return [{ model: 'config', status: 'invalid', message: 'Missing model_list' }]
  }

  return (config.model_list as Array<Record<string, unknown>>).map(m => {
    const params = (m.litellm_params ?? {}) as Record<string, unknown>
    if (!params.model) {
      return { model: String(m.model_name ?? ''), status: 'invalid' as const, message: 'Missing litellm_params.model' }
    }
    const modelStr = String(params.model)
    const needsKey =
      modelStr.includes('anthropic/') ||
      modelStr.includes('openai/') ||
      modelStr.includes('openrouter/')
    if (needsKey && !params.api_key) {
      return {
        model: String(m.model_name ?? ''),
        status: 'missing_key' as const,
        message: `No api_key for ${modelStr}`,
      }
    }
    return { model: String(m.model_name ?? ''), status: 'ok' as const }
  })
}
