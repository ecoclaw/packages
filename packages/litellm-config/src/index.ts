import * as yaml from 'js-yaml'

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

const DEFAULT_MODELS = [
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
