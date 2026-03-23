import * as fs from 'fs'
import * as path from 'path'
import * as yaml from 'js-yaml'

export { REGISTRY, searchRegistry, resolvePackageName, writeManifest, readManifest } from './registry'
export type { SkillPackageInfo, ManifestEntry, SkillsManifest } from './registry'

export interface SkillManifest {
  id: string
  name: string
  description: string
  license: string
  triggers: string[]
  author: string
  dataSources: string[]
  byokKeys: string[]
  compatibility: string
  filePath: string
}

interface SkillFrontmatter {
  name?: string
  description?: string
  license?: string
  triggers?: string[]
  metadata?: {
    'skill-author'?: string
    'data-sources'?: string[]
    compatibility?: string
    byok?: string[]
  }
}

function parseFrontmatter(content: string): SkillFrontmatter | null {
  const match = content.match(/^---\n([\s\S]*?)\n---/)
  if (!match) return null
  try {
    return yaml.load(match[1]) as SkillFrontmatter
  } catch {
    return null
  }
}

export function discoverSkills(dir: string): SkillManifest[] {
  const results: SkillManifest[] = []

  if (!fs.existsSync(dir)) return results

  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      // Check for SKILL.md directly in this directory
      const skillMdPath = path.join(entryPath, 'SKILL.md')
      if (fs.existsSync(skillMdPath)) {
        const content = fs.readFileSync(skillMdPath, 'utf-8')
        const fm = parseFrontmatter(content)
        if (fm) {
          results.push({
            id: entry.name,
            name: fm.name ?? entry.name,
            description: fm.description ?? '',
            license: fm.license ?? 'MIT',
            triggers: fm.triggers ?? [],
            author: fm.metadata?.['skill-author'] ?? 'ecoclaw',
            dataSources: fm.metadata?.['data-sources'] ?? [],
            byokKeys: fm.metadata?.byok ?? [],
            compatibility: fm.metadata?.compatibility ?? 'claude-code>=1.0',
            filePath: skillMdPath,
          })
        }
      }
      // Also recurse into subdirectories
      const nested = discoverSkills(entryPath)
      results.push(...nested)
    } else if (entry.isFile() && entry.name.endsWith('.md') && entry.name !== 'SKILL.md') {
      // Handle flat .md skill files (like skills/executive/board-memo.md)
      const content = fs.readFileSync(entryPath, 'utf-8')
      const fm = parseFrontmatter(content)
      if (fm && fm.name) {
        const id = entry.name.replace(/\.md$/, '')
        results.push({
          id,
          name: fm.name,
          description: fm.description ?? '',
          license: fm.license ?? 'MIT',
          triggers: fm.triggers ?? [],
          author: fm.metadata?.['skill-author'] ?? 'ecoclaw',
          dataSources: fm.metadata?.['data-sources'] ?? [],
          byokKeys: fm.metadata?.byok ?? [],
          compatibility: fm.metadata?.compatibility ?? 'claude-code>=1.0',
          filePath: entryPath,
        })
      }
    }
  }

  return results
}

export function buildSkillContext(selectedSkillNames: string[]): string {
  if (selectedSkillNames.length === 0) return ''
  const quoted = selectedSkillNames.map(n => `'${n}'`).join(', ')
  return `Make sure to use the skills: ${quoted}`
}

export function filterByApiKeys(
  skills: SkillManifest[],
  env: Record<string, string>
): SkillManifest[] {
  return skills.filter(skill => {
    if (skill.byokKeys.length === 0) return true
    // A skill is available if ALL required keys (those without "(optional)" suffix) are present
    // Keys marked as optional just enable extra features — skill still works without them
    const requiredKeys = skill.byokKeys.filter(k => !k.toLowerCase().includes('optional'))
    return requiredKeys.every(key => {
      const keyName = key.split(' ')[0] // strip any trailing notes
      return !!env[keyName]
    })
  })
}
