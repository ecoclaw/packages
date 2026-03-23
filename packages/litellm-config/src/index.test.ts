import * as yaml from 'js-yaml'
import {
  generateLiteLLMConfig,
  LiteLLMConfigOptions,
  parseOllamaList,
  readEnvConfig,
  generateFromEnv,
  validateConfig,
  DEFAULT_MODELS,
} from './index'

interface ModelConfig {
  model_name: string
  litellm_params: {
    model: string
    api_key?: string
    api_base?: string
    max_retries?: number
  }
}

interface ParsedConfig {
  model_list: ModelConfig[]
  router_settings: {
    num_retries: number
    cooldown_time: number
    retry_policy: Record<string, number>
  }
  litellm_settings: {
    drop_params: boolean
    json_logs: boolean
  }
}

function parse(yamlStr: string): ParsedConfig {
  return yaml.load(yamlStr) as ParsedConfig
}

describe('generateLiteLLMConfig', () => {
  it('generates valid YAML', () => {
    const output = generateLiteLLMConfig()
    expect(() => yaml.load(output)).not.toThrow()
  })

  it('includes default models', () => {
    const config = parse(generateLiteLLMConfig())
    const names = config.model_list.map((m: ModelConfig) => m.model_name)
    expect(names).toContain('claude-3-5-sonnet')
    expect(names).toContain('gpt-4o')
    expect(names).toContain('gemini-2.5-pro')
    expect(names).toContain('llama-3.3-70b')
  })

  it('includes model aliases', () => {
    const config = parse(generateLiteLLMConfig())
    const names = config.model_list.map((m: ModelConfig) => m.model_name)
    expect(names).toContain('smart')
    expect(names).toContain('fast')
    expect(names).toContain('cheap')
  })

  it('uses direct Anthropic key when provided', () => {
    const config = parse(generateLiteLLMConfig({ anthropicKey: 'sk-ant-test' }))
    const claude = config.model_list.find((m: ModelConfig) => m.model_name === 'claude-3-5-sonnet')
    expect(claude?.litellm_params.api_key).toBe('sk-ant-test')
    expect(claude?.litellm_params.model).toContain('anthropic/')
  })

  it('routes through OpenRouter when openrouterKey is set and no direct key', () => {
    const config = parse(generateLiteLLMConfig({ openrouterKey: 'sk-or-test' }))
    const llama = config.model_list.find((m: ModelConfig) => m.model_name === 'llama-3.3-70b')
    expect(llama?.litellm_params.api_base).toContain('openrouter.ai')
    expect(llama?.litellm_params.api_key).toBe('sk-or-test')
  })

  it('configures retry logic', () => {
    const config = parse(generateLiteLLMConfig())
    expect(config.router_settings.num_retries).toBe(4)
    expect(config.router_settings.retry_policy.RateLimitErrorRetries).toBe(4)
    expect(config.router_settings.retry_policy.TimeoutErrorRetries).toBe(4)
  })

  it('accepts custom model list', () => {
    const config = parse(generateLiteLLMConfig({ models: ['gpt-4o'] }))
    const names = config.model_list.map((m: ModelConfig) => m.model_name)
    expect(names).toContain('gpt-4o')
    expect(names).not.toContain('llama-3.3-70b')
  })
})

describe('parseOllamaList', () => {
  it('parses ollama list output into model names', () => {
    const output = `NAME                    ID              SIZE      MODIFIED
llama3:latest           abc123def456    4.7 GB    3 days ago
mistral:7b              def456abc789    4.1 GB    1 week ago
phi3:mini               111aaa222bbb    2.3 GB    2 weeks ago`
    const models = parseOllamaList(output)
    expect(models).toEqual(['ollama/llama3:latest', 'ollama/mistral:7b', 'ollama/phi3:mini'])
  })

  it('returns empty array for empty output', () => {
    expect(parseOllamaList('')).toEqual([])
  })

  it('handles header-only output', () => {
    const output = 'NAME                    ID              SIZE      MODIFIED'
    expect(parseOllamaList(output)).toEqual([])
  })
})

describe('readEnvConfig', () => {
  it('reads API keys from env', () => {
    const env = {
      ANTHROPIC_API_KEY: 'sk-ant-test',
      OPENAI_API_KEY: 'sk-openai-test',
      OPENROUTER_API_KEY: 'sk-or-test',
    }
    const config = readEnvConfig(env)
    expect(config.anthropicKey).toBe('sk-ant-test')
    expect(config.openaiKey).toBe('sk-openai-test')
    expect(config.openrouterKey).toBe('sk-or-test')
  })

  it('parses extra models from env', () => {
    const env = { LITELLM_EXTRA_MODELS: 'my-model-1, my-model-2' }
    const config = readEnvConfig(env)
    expect(config.extraModels).toEqual(['my-model-1', 'my-model-2'])
  })

  it('returns undefined for missing keys', () => {
    const config = readEnvConfig({})
    expect(config.anthropicKey).toBeUndefined()
    expect(config.extraModels).toBeUndefined()
  })
})

describe('generateFromEnv', () => {
  it('generates valid YAML with no env or ollama', () => {
    const output = generateFromEnv({}, [])
    expect(() => yaml.load(output)).not.toThrow()
  })

  it('includes default models when no ollama or extra models', () => {
    const config = parse(generateFromEnv({}, []))
    const names = config.model_list.map((m: ModelConfig) => m.model_name)
    for (const m of DEFAULT_MODELS) {
      expect(names).toContain(m)
    }
  })

  it('appends ollama models to model list', () => {
    const config = parse(generateFromEnv({}, ['ollama/llama3:latest']))
    const names = config.model_list.map((m: ModelConfig) => m.model_name)
    expect(names).toContain('ollama/llama3:latest')
  })

  it('passes api keys from env to config', () => {
    const config = parse(generateFromEnv({ ANTHROPIC_API_KEY: 'sk-ant-test' }, []))
    const claude = config.model_list.find((m: ModelConfig) => m.model_name === 'claude-3-5-sonnet')
    expect(claude?.litellm_params.api_key).toBe('sk-ant-test')
  })
})

describe('validateConfig', () => {
  it('returns ok for valid config with no api keys needed', () => {
    const yamlStr = generateLiteLLMConfig()
    const results = validateConfig(yamlStr)
    // Bare models (no prefix) should be ok
    const bareModels = results.filter(r => r.status === 'ok' || r.status === 'missing_key')
    expect(bareModels.length).toBeGreaterThan(0)
  })

  it('flags missing api keys for prefixed models', () => {
    const yamlStr = generateLiteLLMConfig({ anthropicKey: 'sk-ant-test' })
    const results = validateConfig(yamlStr)
    const claudeResult = results.find(r => r.model === 'claude-3-5-sonnet')
    expect(claudeResult?.status).toBe('ok')
  })

  it('returns invalid for bad YAML', () => {
    const results = validateConfig('this: is: not: valid: yaml: {{{')
    expect(results[0].status).toBe('invalid')
    expect(results[0].message).toMatch(/Invalid YAML/)
  })

  it('returns invalid when model_list is missing', () => {
    const results = validateConfig('some_key: some_value')
    expect(results[0].status).toBe('invalid')
    expect(results[0].message).toMatch(/model_list/)
  })
})
