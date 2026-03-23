import * as yaml from 'js-yaml'
import { generateLiteLLMConfig, LiteLLMConfigOptions } from './index'

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
