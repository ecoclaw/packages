import * as path from 'path'
import * as fs from 'fs'
import * as os from 'os'
import { discoverSkills, buildSkillContext, filterByApiKeys, SkillManifest } from './index'

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
