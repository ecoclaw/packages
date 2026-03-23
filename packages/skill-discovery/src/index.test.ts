import * as path from 'path'
import * as fs from 'fs'
import * as os from 'os'
import { discoverSkills, buildSkillContext, filterByApiKeys, SkillManifest, REGISTRY, searchRegistry, resolvePackageName, writeManifest, readManifest } from './index'

function createTmpSkillDir(skills: Array<{ id: string; content: string }>): string {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'skill-discovery-test-'))
  for (const skill of skills) {
    const skillDir = path.join(tmpDir, skill.id)
    fs.mkdirSync(skillDir)
    fs.writeFileSync(path.join(skillDir, 'SKILL.md'), skill.content)
  }
  return tmpDir
}

const BASIC_SKILL = `---
name: seo-blog-post
description: Generate SEO-optimized blog posts for law firms
license: MIT
triggers:
  - seo blog
  - write blog post
metadata:
  skill-author: ecoclaw
  compatibility: claude-code>=1.0
  byok: []
---
# SEO Blog Post
`

const BYOK_SKILL = `---
name: google-ads-campaign
description: Generate Google Ads campaigns with AI optimization
license: MIT
triggers:
  - google ads
  - create campaign
metadata:
  skill-author: ecoclaw
  compatibility: claude-code>=1.0
  byok:
    - OPENAI_API_KEY (optional, for GPT-4 headline generation)
    - GOOGLE_ADS_API_KEY (required for live campaign creation)
---
# Google Ads Campaign
`

const REQUIRED_KEY_SKILL = `---
name: crm-sync
description: Sync leads to CRM via API
license: MIT
triggers:
  - sync crm
metadata:
  skill-author: ecoclaw
  compatibility: claude-code>=1.0
  byok:
    - CRM_API_KEY
---
# CRM Sync
`

describe('discoverSkills', () => {
  it('returns empty array for non-existent directory', () => {
    expect(discoverSkills('/does/not/exist')).toEqual([])
  })

  it('discovers a skill with valid frontmatter', () => {
    const dir = createTmpSkillDir([{ id: 'seo-blog-post', content: BASIC_SKILL }])
    const skills = discoverSkills(dir)
    expect(skills).toHaveLength(1)
    expect(skills[0].name).toBe('seo-blog-post')
    expect(skills[0].description).toBe('Generate SEO-optimized blog posts for law firms')
    expect(skills[0].triggers).toEqual(['seo blog', 'write blog post'])
    expect(skills[0].author).toBe('ecoclaw')
    expect(skills[0].byokKeys).toEqual([])
  })

  it('discovers multiple skills', () => {
    const dir = createTmpSkillDir([
      { id: 'seo-blog-post', content: BASIC_SKILL },
      { id: 'google-ads-campaign', content: BYOK_SKILL },
    ])
    const skills = discoverSkills(dir)
    expect(skills).toHaveLength(2)
  })

  it('parses byok keys from frontmatter', () => {
    const dir = createTmpSkillDir([{ id: 'google-ads-campaign', content: BYOK_SKILL }])
    const skills = discoverSkills(dir)
    expect(skills[0].byokKeys).toHaveLength(2)
    expect(skills[0].byokKeys[0]).toContain('OPENAI_API_KEY')
  })
})

describe('buildSkillContext', () => {
  it('returns empty string for no skills', () => {
    expect(buildSkillContext([])).toBe('')
  })

  it('builds context string for single skill', () => {
    expect(buildSkillContext(['seo-blog-post'])).toBe("Make sure to use the skills: 'seo-blog-post'")
  })

  it('builds context string for multiple skills', () => {
    const result = buildSkillContext(['seo-blog-post', 'social-media-week', 'email-newsletter'])
    expect(result).toBe("Make sure to use the skills: 'seo-blog-post', 'social-media-week', 'email-newsletter'")
  })
})

describe('filterByApiKeys', () => {
  const makeSkill = (id: string, byokKeys: string[]): SkillManifest => ({
    id,
    name: id,
    description: '',
    license: 'MIT',
    triggers: [],
    author: 'ecoclaw',
    dataSources: [],
    byokKeys,
    compatibility: 'claude-code>=1.0',
    filePath: `/skills/${id}/SKILL.md`,
  })

  it('includes skills with no byok requirements', () => {
    const skills = [makeSkill('basic', [])]
    expect(filterByApiKeys(skills, {})).toHaveLength(1)
  })

  it('includes skills when all required keys are present', () => {
    const skills = [makeSkill('crm-sync', ['CRM_API_KEY'])]
    expect(filterByApiKeys(skills, { CRM_API_KEY: 'abc123' })).toHaveLength(1)
  })

  it('excludes skills when required keys are missing', () => {
    const skills = [makeSkill('crm-sync', ['CRM_API_KEY'])]
    expect(filterByApiKeys(skills, {})).toHaveLength(0)
  })

  it('includes skills when only optional keys are missing', () => {
    const skills = [makeSkill('google-ads', ['OPENAI_API_KEY (optional, for GPT-4 headline generation)'])]
    expect(filterByApiKeys(skills, {})).toHaveLength(1)
  })

  it('filters mixed required/optional keys correctly', () => {
    const skills = [
      makeSkill('a', []),
      makeSkill('b', ['REQUIRED_KEY']),
      makeSkill('c', ['OPTIONAL_KEY (optional)']),
    ]
    const result = filterByApiKeys(skills, {})
    expect(result.map(s => s.id)).toEqual(['a', 'c'])
  })
})

describe('REGISTRY', () => {
  it('contains 32 or more packages', () => {
    expect(Object.keys(REGISTRY).length).toBeGreaterThanOrEqual(32)
  })

  it('all packages are scoped under @gonzih/skills-', () => {
    for (const pkg of Object.keys(REGISTRY)) {
      expect(pkg.startsWith('@gonzih/skills-')).toBe(true)
    }
  })

  it('all entries have triggers array and description', () => {
    for (const [pkg, info] of Object.entries(REGISTRY)) {
      expect(Array.isArray(info.triggers)).toBe(true)
      expect(info.triggers.length).toBeGreaterThan(0)
      expect(typeof info.description).toBe('string')
      expect(info.description.length).toBeGreaterThan(0)
    }
  })
})

describe('searchRegistry', () => {
  it('returns empty array for empty query', () => {
    expect(searchRegistry('')).toEqual([])
  })

  it('finds marketing package by trigger keyword', () => {
    const results = searchRegistry('campaign')
    const pkgs = results.map(r => r.pkg)
    expect(pkgs).toContain('@gonzih/skills-marketing')
  })

  it('finds competitor analysis package by multi-word query', () => {
    const results = searchRegistry('competitor analysis')
    expect(results.length).toBeGreaterThan(0)
    expect(results[0].pkg).toBe('@gonzih/skills-competitor-analysis')
  })

  it('returns results sorted by score descending', () => {
    const results = searchRegistry('seo keyword')
    for (let i = 1; i < results.length; i++) {
      expect(results[i - 1].score).toBeGreaterThanOrEqual(results[i].score)
    }
  })

  it('returns empty for unrelated query', () => {
    const results = searchRegistry('xyzzy-nonexistent-term-1234')
    expect(results).toEqual([])
  })
})

describe('resolvePackageName', () => {
  it('resolves exact package name', () => {
    expect(resolvePackageName('@gonzih/skills-marketing')).toBe('@gonzih/skills-marketing')
  })

  it('resolves domain name to full package', () => {
    expect(resolvePackageName('marketing')).toBe('@gonzih/skills-marketing')
  })

  it('returns null for unknown domain', () => {
    expect(resolvePackageName('nonexistent-xyz')).toBeNull()
  })
})

describe('writeManifest / readManifest', () => {
  let tmpDir: string

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'manifest-test-'))
  })

  afterEach(() => {
    fs.rmSync(tmpDir, { recursive: true, force: true })
  })

  it('writes and reads back installed packages', () => {
    writeManifest(tmpDir, ['@gonzih/skills-marketing', '@gonzih/skills-seo'])
    const entries = readManifest(tmpDir)
    expect(entries).toHaveLength(2)
    expect(entries[0].package).toBe('@gonzih/skills-marketing')
    expect(entries[0].triggers.length).toBeGreaterThan(0)
  })

  it('creates .claude directory if missing', () => {
    writeManifest(tmpDir, ['@gonzih/skills-sales'])
    const manifestPath = path.join(tmpDir, '.claude', 'skills-manifest.json')
    expect(fs.existsSync(manifestPath)).toBe(true)
  })

  it('returns empty array when no manifest exists', () => {
    expect(readManifest(tmpDir)).toEqual([])
  })

  it('ignores unknown packages when writing', () => {
    writeManifest(tmpDir, ['@gonzih/skills-marketing', '@unknown/package'])
    const entries = readManifest(tmpDir)
    expect(entries).toHaveLength(1)
    expect(entries[0].package).toBe('@gonzih/skills-marketing')
  })
})
