#!/usr/bin/env node
import { execSync } from 'child_process'
import * as path from 'path'
import { REGISTRY, searchRegistry, resolvePackageName, writeManifest, readManifest } from './registry'

const [, , command, ...args] = process.argv

function printHelp(): void {
  console.log(`
skill-discovery — discover and install @gonzih/skills-* packages

USAGE
  npx skill-discovery search <query>      Find skill packages matching a query
  npx skill-discovery install <domain>    Install a skill package by domain name
  npx skill-discovery list                List all available skill packages

EXAMPLES
  npx skill-discovery search "competitor analysis"
  npx skill-discovery install marketing
  npx skill-discovery list
`.trim())
}

function cmdSearch(query: string): void {
  if (!query) {
    console.error('Usage: skill-discovery search <query>')
    process.exit(1)
  }
  const results = searchRegistry(query)
  if (results.length === 0) {
    console.log(`No packages found for "${query}"`)
    return
  }
  console.log(`Found ${results.length} package(s) matching "${query}":\n`)
  for (const { pkg, info } of results) {
    console.log(`  ${pkg}`)
    console.log(`    ${info.description}`)
    console.log(`    Triggers: ${info.triggers.slice(0, 4).join(', ')}${info.triggers.length > 4 ? ', ...' : ''}`)
    if (info.preferredModel) console.log(`    Preferred model: ${info.preferredModel}`)
    console.log()
  }
  console.log(`Install with: npx skill-discovery install <domain>`)
}

function cmdInstall(domain: string): void {
  if (!domain) {
    console.error('Usage: skill-discovery install <domain>')
    process.exit(1)
  }

  const pkg = resolvePackageName(domain)
  if (!pkg) {
    console.error(`Package not found for domain "${domain}". Run "skill-discovery list" to see available packages.`)
    process.exit(1)
  }

  console.log(`Installing ${pkg}...`)
  try {
    execSync(`npm install ${pkg}`, { stdio: 'inherit', cwd: process.cwd() })
  } catch (err) {
    console.error(`npm install failed: ${(err as Error).message}`)
    process.exit(1)
  }

  // Update manifest
  const cwd = process.cwd()
  const existing = readManifest(cwd).map(e => e.package)
  const updated = Array.from(new Set([...existing, pkg]))
  writeManifest(cwd, updated)

  const manifestPath = path.join(cwd, '.claude', 'skills-manifest.json')
  console.log(`\nInstalled ${pkg}`)
  console.log(`Skills manifest updated: ${manifestPath}`)
}

function cmdList(): void {
  const entries = Object.entries(REGISTRY)
  console.log(`${entries.length} available skill packages:\n`)
  for (const [pkg, info] of entries) {
    const domain = pkg.replace('@gonzih/skills-', '')
    console.log(`  ${pkg}`)
    console.log(`    ${info.description}`)
    console.log(`    Install: npx skill-discovery install ${domain}`)
    console.log()
  }
}

switch (command) {
  case 'search':
    cmdSearch(args.join(' '))
    break
  case 'install':
    cmdInstall(args[0])
    break
  case 'list':
    cmdList()
    break
  default:
    printHelp()
    if (command) process.exit(1)
}
