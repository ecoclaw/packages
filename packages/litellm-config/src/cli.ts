#!/usr/bin/env node
import * as fs from 'fs'
import * as path from 'path'
import { generateFromEnv, validateConfig, detectOllamaModels } from './index'

const [, , command] = process.argv

function printHelp(): void {
  console.log(`
litellm-config — generate LiteLLM proxy config from env + Ollama models

USAGE
  npx litellm-config generate    Generate litellm_config.yaml in CWD
  npx litellm-config validate    Validate an existing litellm_config.yaml

ENV VARS
  ANTHROPIC_API_KEY       Direct Anthropic API key
  OPENAI_API_KEY          Direct OpenAI API key
  OPENROUTER_API_KEY      OpenRouter API key (fallback for all models)
  OPENAI_API_BASE         Custom OpenAI-compatible endpoint base URL
  LITELLM_EXTRA_MODELS    Comma-separated list of extra model names to add
`.trim())
}

function cmdGenerate(): void {
  console.log('Detecting Ollama models...')
  const ollamaModels = detectOllamaModels()
  if (ollamaModels.length > 0) {
    console.log(`Found ${ollamaModels.length} Ollama model(s): ${ollamaModels.join(', ')}`)
  } else {
    console.log('No Ollama models detected (ollama not running or not installed)')
  }

  const yamlStr = generateFromEnv(process.env as Record<string, string | undefined>, ollamaModels)
  const outPath = path.join(process.cwd(), 'litellm_config.yaml')
  fs.writeFileSync(outPath, yamlStr)
  console.log(`\nGenerated: ${outPath}`)

  const results = validateConfig(yamlStr)
  const missing = results.filter(r => r.status === 'missing_key')
  if (missing.length > 0) {
    console.log('\nWarning: some models are missing API keys:')
    for (const r of missing) {
      console.log(`  ${r.model}: ${r.message}`)
    }
  }
}

function cmdValidate(): void {
  const configPath = path.join(process.cwd(), 'litellm_config.yaml')
  if (!fs.existsSync(configPath)) {
    console.error(`No litellm_config.yaml found at ${configPath}`)
    console.error('Run "litellm-config generate" first.')
    process.exit(1)
  }

  const yamlStr = fs.readFileSync(configPath, 'utf-8')
  const results = validateConfig(yamlStr)

  let allOk = true
  for (const r of results) {
    const icon = r.status === 'ok' ? '✓' : r.status === 'missing_key' ? '!' : '✗'
    const msg = r.message ? ` — ${r.message}` : ''
    console.log(`  ${icon} ${r.model}${msg}`)
    if (r.status !== 'ok') allOk = false
  }

  if (allOk) {
    console.log('\nAll models valid.')
  } else {
    console.log('\nSome models have issues. Check warnings above.')
    process.exit(1)
  }
}

switch (command) {
  case 'generate':
    cmdGenerate()
    break
  case 'validate':
    cmdValidate()
    break
  default:
    printHelp()
    if (command) process.exit(1)
}
