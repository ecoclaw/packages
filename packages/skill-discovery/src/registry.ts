import * as fs from 'fs'
import * as path from 'path'

export interface SkillPackageInfo {
  description: string
  triggers: string[]
  preferredModel?: string
}

export interface ManifestEntry {
  package: string
  description: string
  triggers: string[]
  preferredModel?: string
}

export interface SkillsManifest {
  installedSkills: ManifestEntry[]
  updatedAt: string
}

export const REGISTRY: Record<string, SkillPackageInfo> = {
  '@gonzih/skills-marketing': {
    description: 'Campaign creation, brand strategy, audience targeting, and content marketing',
    triggers: ['campaign', 'audience', 'brand', 'marketing', 'content strategy', 'social media', 'email campaign', 'ad copy', 'lead generation', 'growth hacking'],
    preferredModel: 'claude-3-5-sonnet',
  },
  '@gonzih/skills-sales': {
    description: 'CRM management, pipeline tracking, prospect outreach, and deal closing',
    triggers: ['crm', 'pipeline', 'prospect', 'sales', 'outreach', 'deal', 'quota', 'cold email', 'follow-up', 'objection handling'],
    preferredModel: 'gpt-4o',
  },
  '@gonzih/skills-engineering': {
    description: 'Code review, architecture design, debugging, and technical documentation',
    triggers: ['code review', 'architecture', 'debug', 'engineering', 'refactor', 'api design', 'system design', 'technical debt'],
    preferredModel: 'claude-3-5-sonnet',
  },
  '@gonzih/skills-devops': {
    description: 'CI/CD pipelines, infrastructure as code, monitoring, and deployment automation',
    triggers: ['devops', 'ci/cd', 'infrastructure', 'deployment', 'kubernetes', 'docker', 'terraform', 'monitoring', 'alerting'],
    preferredModel: 'claude-3-5-sonnet',
  },
  '@gonzih/skills-finance': {
    description: 'Financial modeling, budgeting, forecasting, and investment analysis',
    triggers: ['finance', 'budget', 'forecast', 'financial model', 'investment', 'roi', 'revenue', 'cost analysis', 'p&l'],
    preferredModel: 'gpt-4o',
  },
  '@gonzih/skills-legal': {
    description: 'Contract review, compliance checks, legal research, and document drafting',
    triggers: ['contract', 'compliance', 'legal', 'clause', 'regulatory', 'law', 'terms of service', 'nda', 'ip'],
    preferredModel: 'claude-3-5-sonnet',
  },
  '@gonzih/skills-hr': {
    description: 'Recruiting, onboarding, performance reviews, and HR policy management',
    triggers: ['recruiting', 'hiring', 'onboarding', 'hr', 'performance review', 'job description', 'interview', 'employee'],
    preferredModel: 'gpt-4o',
  },
  '@gonzih/skills-data-science': {
    description: 'Data analysis, machine learning, visualization, and statistical modeling',
    triggers: ['data analysis', 'machine learning', 'statistics', 'visualization', 'dataset', 'model training', 'jupyter', 'pandas'],
    preferredModel: 'claude-3-5-sonnet',
  },
  '@gonzih/skills-design': {
    description: 'UI/UX design, design systems, user research, and visual design guidance',
    triggers: ['design', 'ux', 'ui', 'wireframe', 'prototype', 'user research', 'accessibility', 'figma', 'design system'],
    preferredModel: 'claude-3-5-sonnet',
  },
  '@gonzih/skills-product': {
    description: 'Product roadmapping, feature prioritization, PRDs, and stakeholder communication',
    triggers: ['product', 'roadmap', 'feature', 'prd', 'user story', 'sprint', 'backlog', 'stakeholder', 'okr'],
    preferredModel: 'gpt-4o',
  },
  '@gonzih/skills-executive': {
    description: 'Executive communications, board decks, strategic planning, and OKR setting',
    triggers: ['executive', 'board deck', 'strategy', 'okrs', 'leadership', 'vision', 'mission', 'investor update'],
    preferredModel: 'claude-3-5-sonnet',
  },
  '@gonzih/skills-healthcare': {
    description: 'Clinical documentation, patient communication, medical billing, and compliance',
    triggers: ['healthcare', 'clinical', 'patient', 'medical', 'hipaa', 'billing', 'ehr', 'diagnosis'],
    preferredModel: 'claude-3-5-sonnet',
  },
  '@gonzih/skills-realestate': {
    description: 'Property listings, market analysis, client communications, and transaction management',
    triggers: ['real estate', 'listing', 'property', 'mls', 'buyer', 'seller', 'appraisal', 'transaction'],
    preferredModel: 'gpt-4o',
  },
  '@gonzih/skills-education': {
    description: 'Curriculum development, lesson planning, student assessment, and learning materials',
    triggers: ['education', 'curriculum', 'lesson plan', 'assessment', 'learning objective', 'student', 'rubric'],
    preferredModel: 'claude-3-5-sonnet',
  },
  '@gonzih/skills-nonprofit': {
    description: 'Grant writing, donor communications, impact reporting, and volunteer management',
    triggers: ['nonprofit', 'grant', 'donor', 'fundraising', 'impact report', 'volunteer', 'mission', 'charity'],
    preferredModel: 'claude-3-5-sonnet',
  },
  '@gonzih/skills-operations': {
    description: 'Process optimization, SOP creation, supply chain management, and operational metrics',
    triggers: ['operations', 'process', 'sop', 'supply chain', 'logistics', 'kpi', 'workflow', 'efficiency'],
    preferredModel: 'gpt-4o',
  },
  '@gonzih/skills-customer-success': {
    description: 'Customer onboarding, churn prevention, NPS analysis, and support escalations',
    triggers: ['customer success', 'churn', 'nps', 'onboarding', 'retention', 'support', 'escalation', 'renewal'],
    preferredModel: 'gpt-4o',
  },
  '@gonzih/skills-security': {
    description: 'Security audits, threat modeling, incident response, and compliance frameworks',
    triggers: ['security', 'threat model', 'incident response', 'vulnerability', 'penetration test', 'soc2', 'iso27001'],
    preferredModel: 'claude-3-5-sonnet',
  },
  '@gonzih/skills-research': {
    description: 'Literature review, competitive analysis, market research, and report writing',
    triggers: ['research', 'literature review', 'competitive analysis', 'market research', 'survey', 'synthesis'],
    preferredModel: 'claude-3-5-sonnet',
  },
  '@gonzih/skills-writing': {
    description: 'Long-form content, copywriting, technical writing, and editing',
    triggers: ['writing', 'copywriting', 'content', 'blog', 'article', 'editing', 'proofreading', 'ghostwriting'],
    preferredModel: 'claude-3-5-sonnet',
  },
  '@gonzih/skills-analytics': {
    description: 'Web analytics, conversion tracking, A/B testing, and performance reporting',
    triggers: ['analytics', 'conversion', 'a/b test', 'funnel', 'cohort', 'attribution', 'ga4', 'mixpanel'],
    preferredModel: 'gpt-4o',
  },
  '@gonzih/skills-social': {
    description: 'Social media strategy, content calendars, community management, and influencer outreach',
    triggers: ['social media', 'instagram', 'twitter', 'linkedin', 'tiktok', 'content calendar', 'community', 'influencer'],
    preferredModel: 'claude-3-5-sonnet',
  },
  '@gonzih/skills-seo': {
    description: 'Keyword research, on-page optimization, link building, and SEO audits',
    triggers: ['seo', 'keyword', 'backlink', 'meta description', 'serp', 'on-page', 'technical seo', 'ranking'],
    preferredModel: 'gpt-4o',
  },
  '@gonzih/skills-pr': {
    description: 'Press releases, media outreach, crisis communications, and thought leadership',
    triggers: ['pr', 'press release', 'media', 'journalist', 'crisis', 'thought leadership', 'public relations'],
    preferredModel: 'claude-3-5-sonnet',
  },
  '@gonzih/skills-startup': {
    description: 'Pitch decks, fundraising narratives, MVP planning, and founder communications',
    triggers: ['startup', 'pitch deck', 'fundraising', 'venture capital', 'mvp', 'founder', 'term sheet', 'seed'],
    preferredModel: 'claude-3-5-sonnet',
  },
  '@gonzih/skills-ecommerce': {
    description: 'Product descriptions, category pages, checkout optimization, and marketplace listings',
    triggers: ['ecommerce', 'product description', 'amazon', 'shopify', 'cart', 'checkout', 'marketplace'],
    preferredModel: 'gpt-4o',
  },
  '@gonzih/skills-hospitality': {
    description: 'Guest communications, menu copy, event planning, and hospitality operations',
    triggers: ['hospitality', 'hotel', 'restaurant', 'guest', 'menu', 'event', 'reservation', 'front desk'],
    preferredModel: 'gpt-4o',
  },
  '@gonzih/skills-financial-advisor': {
    description: 'Client portfolio reviews, financial planning documents, and investment communications',
    triggers: ['financial advisor', 'portfolio', 'investment', 'retirement', 'wealth management', 'fiduciary'],
    preferredModel: 'claude-3-5-sonnet',
  },
  '@gonzih/skills-project-management': {
    description: 'Project plans, status reports, risk registers, and stakeholder updates',
    triggers: ['project management', 'status report', 'risk', 'milestone', 'gantt', 'jira', 'agile', 'scrum'],
    preferredModel: 'gpt-4o',
  },
  '@gonzih/skills-training': {
    description: 'Training materials, e-learning content, workshops, and competency frameworks',
    triggers: ['training', 'e-learning', 'workshop', 'competency', 'certification', 'instructional design'],
    preferredModel: 'claude-3-5-sonnet',
  },
  '@gonzih/skills-compliance': {
    description: 'Regulatory compliance, audit preparation, policy documentation, and risk assessment',
    triggers: ['compliance', 'audit', 'regulatory', 'policy', 'risk assessment', 'gdpr', 'sox', 'pci'],
    preferredModel: 'claude-3-5-sonnet',
  },
  '@gonzih/skills-full-stack': {
    description: 'Full-stack development, API integration, database design, and deployment',
    triggers: ['full stack', 'api', 'database', 'react', 'node.js', 'backend', 'frontend', 'postgresql', 'rest'],
    preferredModel: 'claude-3-5-sonnet',
  },
  '@gonzih/skills-competitor-analysis': {
    description: 'Competitor benchmarking, market positioning, SWOT analysis, and battle cards',
    triggers: ['competitor analysis', 'competitive intelligence', 'benchmarking', 'swot', 'market positioning', 'battle card'],
    preferredModel: 'claude-3-5-sonnet',
  },
}

export function searchRegistry(
  query: string
): Array<{ pkg: string; info: SkillPackageInfo; score: number }> {
  const tokens = query.toLowerCase().split(/\s+/).filter(Boolean)
  if (tokens.length === 0) return []

  const results: Array<{ pkg: string; info: SkillPackageInfo; score: number }> = []

  for (const [pkg, info] of Object.entries(REGISTRY)) {
    let score = 0
    const allText = [...info.triggers, info.description, pkg].join(' ').toLowerCase()

    for (const token of tokens) {
      if (allText.includes(token)) {
        score += 1
        if (info.triggers.some(t => t.toLowerCase().includes(token))) {
          score += 1
        }
      }
    }

    if (score > 0) {
      results.push({ pkg, info, score })
    }
  }

  return results.sort((a, b) => b.score - a.score)
}

export function resolvePackageName(domain: string): string | null {
  // Exact match first
  if (REGISTRY[domain]) return domain

  // Try @gonzih/skills-<domain>
  const candidate = `@gonzih/skills-${domain}`
  if (REGISTRY[candidate]) return candidate

  // Fuzzy: find by partial domain name
  for (const pkg of Object.keys(REGISTRY)) {
    const suffix = pkg.replace('@gonzih/skills-', '')
    if (suffix === domain || suffix.startsWith(domain)) return pkg
  }

  return null
}

export function writeManifest(cwd: string, installedPackages: string[]): void {
  const claudeDir = path.join(cwd, '.claude')
  if (!fs.existsSync(claudeDir)) {
    fs.mkdirSync(claudeDir, { recursive: true })
  }

  const entries: ManifestEntry[] = installedPackages
    .filter(pkg => REGISTRY[pkg])
    .map(pkg => ({
      package: pkg,
      description: REGISTRY[pkg].description,
      triggers: REGISTRY[pkg].triggers,
      preferredModel: REGISTRY[pkg].preferredModel,
    }))

  const manifest: SkillsManifest = {
    installedSkills: entries,
    updatedAt: new Date().toISOString(),
  }

  fs.writeFileSync(path.join(claudeDir, 'skills-manifest.json'), JSON.stringify(manifest, null, 2))
}

export function readManifest(cwd: string): ManifestEntry[] {
  const manifestPath = path.join(cwd, '.claude', 'skills-manifest.json')
  if (!fs.existsSync(manifestPath)) return []
  try {
    const data = JSON.parse(fs.readFileSync(manifestPath, 'utf-8')) as SkillsManifest
    return data.installedSkills ?? []
  } catch {
    return []
  }
}
