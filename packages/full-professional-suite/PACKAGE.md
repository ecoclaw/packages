# Full Professional Suite — $1,499/mo

Every professional skill in one install — 64 AI skills across 16 domains.

---

## What's Included

### Skills

**Marketing (4 skills)**
- `/content-calendar` — structured monthly or quarterly content calendars with themes, formats, and publishing cadence
- `/campaign-brief` — comprehensive campaign briefs with objectives, audience, messaging hierarchy, and success metrics
- `/brand-voice-guide` — brand voice and tone guides with personality attributes and channel-specific examples
- `/competitor-teardown` — competitor positioning analysis with messaging gaps and differentiation opportunities

**Sales (4 skills)**
- `/discovery-call-prep` — structured discovery call guides with research summaries, hypothesis questions, and qualification criteria
- `/proposal-writer` — professional client proposals with scope of work, pricing rationale, and timeline
- `/objection-handler` — full objection-handling playbooks with evidence-backed responses and turn language
- `/deal-review` — deal review summaries with stage assessment, risk flags, and recommended next actions

**Product (4 skills)**
- `/prd-writer` — structured product requirements documents with problem statement, goals, and scope
- `/user-story-generator` — complete user story sets with acceptance criteria, edge cases, and priority tiers
- `/roadmap-builder` — prioritized product roadmaps with initiative summaries, dependencies, and strategic rationale
- `/release-notes` — polished user-facing release notes from shipped features and bug fix lists

**Engineering (4 skills)**
- `/architecture-doc` — system architecture documents with component overviews, data flows, and key decisions
- `/incident-postmortem` — structured postmortems with root cause analysis, impact summary, and action items
- `/tech-spec` — technical specifications covering design decisions, API contracts, and data models
- `/code-review-summary` — code review summaries with severity-tiered findings and improvement recommendations

**Operations (4 skills)**
- `/sop-writer` — clear, step-by-step SOPs with roles, triggers, decision points, and exception handling
- `/vendor-evaluation` — structured vendor scorecards with criteria weighting and recommendation summaries
- `/budget-request` — business case and budget request memos with ROI rationale and approval pathway
- `/process-audit` — process audit reports identifying bottlenecks, gaps, and prioritized improvements

**Nonprofit (4 skills)**
- `/grant-proposal` — compelling grant proposal narratives with theory of change and budget justification
- `/donor-report` — donor impact reports with outcome summaries and stewardship narratives
- `/impact-story` — beneficiary-centered impact stories suitable for newsletters and annual reports
- `/board-update` — structured board update packages with metrics, decisions needed, and milestones

**Accounting (4 skills)**
- `/tax-memo` — tax planning and research memos with issue identification and recommended position
- `/client-advisory-letter` — professional client advisory letters for year-end planning and proactive guidance
- `/engagement-letter` — complete engagement letters with scope, fee structure, and standard terms
- `/audit-finding-summary` — audit finding reports with severity classification and remediation timelines

**Insurance (4 skills)**
- `/coverage-explainer` — plain-language coverage summaries translated from complex policy language
- `/claim-summary` — structured claim summaries with coverage analysis and documentation checklists
- `/underwriting-notes` — structured underwriting notes with risk assessment and pricing rationale
- `/renewal-letter` — professional policy renewal letters with coverage highlights and review recommendations

**Dental (4 skills)**
- `/treatment-plan-explainer` — patient-facing treatment plan explanations with rationale and sequencing
- `/patient-recall-letter` — personalized patient recall letters for overdue preventive and follow-up care
- `/insurance-narrative` — clinical narratives for insurance pre-authorization with necessity justification
- `/referral-letter` — professional referral letters with clinical summary and urgency indication

**Restaurant (4 skills)**
- `/menu-writer` — compelling menu descriptions with sensory language and dietary indicators
- `/catering-proposal` — professional catering proposals with menu options, staffing, and pricing tiers
- `/review-response` — on-brand responses to guest reviews across all sentiment types
- `/staff-update` — clear internal staff communications for briefings, policy updates, and event rundowns

**Executive (4 skills)**
- `/board-memo` — concise board memos and update packages with key decisions and supporting data
- `/stakeholder-update` — tailored stakeholder updates for investors, employees, customers, or partners
- `/decision-log` — strategic decision documentation with context, options, rationale, and owners
- `/monthly-report` — comprehensive monthly operational reports with KPIs, project status, and outlook

**Healthcare (4 skills)**
- `/clinical-note-draft` — SOAP/APSO note drafts with ICD-10 suggestions and chief complaint structuring
- `/patient-education` — plain-language patient education handouts at selectable reading levels
- `/prior-auth-writer` — prior authorization letters with clinical justification and appeal language
- `/research-digest` — clinical trial and guideline summaries distilled into actionable clinical pearls

**HR (4 skills)**
- `/job-description-writer` — inclusive, compelling job descriptions with clear requirements and culture signals
- `/interview-kit` — structured interview guides with role-specific questions and scoring rubrics
- `/offer-letter-generator` — professional offer letters with compensation details and onboarding instructions
- `/performance-review-helper` — balanced performance review drafts from manager notes and self-assessments

**Real Estate (4 skills)**
- `/listing-writer` — MLS-ready property listings with SEO-optimized descriptions and social snippets
- `/market-report` — neighborhood and city-level market reports with price trends and buyer/seller positioning
- `/client-followup` — personalized post-showing, post-offer, and closing follow-up messages
- `/offer-analyzer` — side-by-side offer comparisons with net proceeds calculations and risk flags

**Finance (4 skills)**
- `/portfolio-narrative` — personalized portfolio commentary for client reviews in plain language
- `/market-commentary` — timely market commentary for newsletters, client emails, or social media
- `/financial-plan-summary` — executive summaries of financial plans covering goals, strategies, and projections
- `/compliance-comms-review` — compliance review of client-facing communications for regulatory red flags

**Legal (4 skills)**
- `/contract-scanner` — contract reviews with flagged clauses, risk ratings, and suggested edits
- `/research-brief` — concise legal research briefs with case citations and analysis
- `/client-intake` — structured intake questionnaires and summary memos for new matter onboarding
- `/settlement-summary` — clear settlement summary memos covering terms, obligations, and next steps

### Deliverables (Per Use)
- Professional, publish-ready documents across all 16 domains — every skill produces structured output ready for review and use
- Consistent formatting and quality across marketing, legal, clinical, financial, and operational content
- Domain-appropriate disclaimers and compliance guidance built into relevant skill outputs

### Support
- Priority support via email with guaranteed 24-hour response
- Onboarding call to configure all packages for your organization
- Quarterly check-ins to review skill usage, updates, and expansion opportunities
- Skill update notifications via GitHub releases

---

## Setup Instructions

### Step 1: Install via npx
```bash
npx @gonzih/skills-marketing
npx @gonzih/skills-sales
npx @gonzih/skills-product
npx @gonzih/skills-engineering
npx @gonzih/skills-ops
npx @gonzih/skills-nonprofit
npx @gonzih/skills-accounting
npx @gonzih/skills-insurance
npx @gonzih/skills-dental
npx @gonzih/skills-restaurant
npx @gonzih/skills-executive
npx @gonzih/skills-healthcare
npx @gonzih/skills-hr
npx @gonzih/skills-realestate
npx @gonzih/skills-finance
npx @gonzih/skills-legal
```

### Step 2: Install Skills into Claude
```bash
cp -r node_modules/@gonzih/skills-marketing/skills/content-calendar ~/.claude/skills/
cp -r node_modules/@gonzih/skills-marketing/skills/campaign-brief ~/.claude/skills/
cp -r node_modules/@gonzih/skills-marketing/skills/brand-voice-guide ~/.claude/skills/
cp -r node_modules/@gonzih/skills-marketing/skills/competitor-teardown ~/.claude/skills/
cp -r node_modules/@gonzih/skills-sales/skills/discovery-call-prep ~/.claude/skills/
cp -r node_modules/@gonzih/skills-sales/skills/proposal-writer ~/.claude/skills/
cp -r node_modules/@gonzih/skills-sales/skills/objection-handler ~/.claude/skills/
cp -r node_modules/@gonzih/skills-sales/skills/deal-review ~/.claude/skills/
cp -r node_modules/@gonzih/skills-product/skills/prd-writer ~/.claude/skills/
cp -r node_modules/@gonzih/skills-product/skills/user-story-generator ~/.claude/skills/
cp -r node_modules/@gonzih/skills-product/skills/roadmap-builder ~/.claude/skills/
cp -r node_modules/@gonzih/skills-product/skills/release-notes ~/.claude/skills/
cp -r node_modules/@gonzih/skills-engineering/skills/architecture-doc ~/.claude/skills/
cp -r node_modules/@gonzih/skills-engineering/skills/incident-postmortem ~/.claude/skills/
cp -r node_modules/@gonzih/skills-engineering/skills/tech-spec ~/.claude/skills/
cp -r node_modules/@gonzih/skills-engineering/skills/code-review-summary ~/.claude/skills/
cp -r node_modules/@gonzih/skills-ops/skills/sop-writer ~/.claude/skills/
cp -r node_modules/@gonzih/skills-ops/skills/vendor-evaluation ~/.claude/skills/
cp -r node_modules/@gonzih/skills-ops/skills/budget-request ~/.claude/skills/
cp -r node_modules/@gonzih/skills-ops/skills/process-audit ~/.claude/skills/
cp -r node_modules/@gonzih/skills-nonprofit/skills/grant-proposal ~/.claude/skills/
cp -r node_modules/@gonzih/skills-nonprofit/skills/donor-report ~/.claude/skills/
cp -r node_modules/@gonzih/skills-nonprofit/skills/impact-story ~/.claude/skills/
cp -r node_modules/@gonzih/skills-nonprofit/skills/board-update ~/.claude/skills/
cp -r node_modules/@gonzih/skills-accounting/skills/tax-memo ~/.claude/skills/
cp -r node_modules/@gonzih/skills-accounting/skills/client-advisory-letter ~/.claude/skills/
cp -r node_modules/@gonzih/skills-accounting/skills/engagement-letter ~/.claude/skills/
cp -r node_modules/@gonzih/skills-accounting/skills/audit-finding-summary ~/.claude/skills/
cp -r node_modules/@gonzih/skills-insurance/skills/coverage-explainer ~/.claude/skills/
cp -r node_modules/@gonzih/skills-insurance/skills/claim-summary ~/.claude/skills/
cp -r node_modules/@gonzih/skills-insurance/skills/underwriting-notes ~/.claude/skills/
cp -r node_modules/@gonzih/skills-insurance/skills/renewal-letter ~/.claude/skills/
cp -r node_modules/@gonzih/skills-dental/skills/treatment-plan-explainer ~/.claude/skills/
cp -r node_modules/@gonzih/skills-dental/skills/patient-recall-letter ~/.claude/skills/
cp -r node_modules/@gonzih/skills-dental/skills/insurance-narrative ~/.claude/skills/
cp -r node_modules/@gonzih/skills-dental/skills/referral-letter ~/.claude/skills/
cp -r node_modules/@gonzih/skills-restaurant/skills/menu-writer ~/.claude/skills/
cp -r node_modules/@gonzih/skills-restaurant/skills/catering-proposal ~/.claude/skills/
cp -r node_modules/@gonzih/skills-restaurant/skills/review-response ~/.claude/skills/
cp -r node_modules/@gonzih/skills-restaurant/skills/staff-update ~/.claude/skills/
cp -r node_modules/@gonzih/skills-executive/skills/board-memo ~/.claude/skills/
cp -r node_modules/@gonzih/skills-executive/skills/stakeholder-update ~/.claude/skills/
cp -r node_modules/@gonzih/skills-executive/skills/decision-log ~/.claude/skills/
cp -r node_modules/@gonzih/skills-executive/skills/monthly-report ~/.claude/skills/
cp -r node_modules/@gonzih/skills-healthcare/skills/clinical-note-draft ~/.claude/skills/
cp -r node_modules/@gonzih/skills-healthcare/skills/patient-education ~/.claude/skills/
cp -r node_modules/@gonzih/skills-healthcare/skills/prior-auth-writer ~/.claude/skills/
cp -r node_modules/@gonzih/skills-healthcare/skills/research-digest ~/.claude/skills/
cp -r node_modules/@gonzih/skills-hr/skills/job-description-writer ~/.claude/skills/
cp -r node_modules/@gonzih/skills-hr/skills/interview-kit ~/.claude/skills/
cp -r node_modules/@gonzih/skills-hr/skills/offer-letter-generator ~/.claude/skills/
cp -r node_modules/@gonzih/skills-hr/skills/performance-review-helper ~/.claude/skills/
cp -r node_modules/@gonzih/skills-realestate/skills/listing-writer ~/.claude/skills/
cp -r node_modules/@gonzih/skills-realestate/skills/market-report ~/.claude/skills/
cp -r node_modules/@gonzih/skills-realestate/skills/client-followup ~/.claude/skills/
cp -r node_modules/@gonzih/skills-realestate/skills/offer-analyzer ~/.claude/skills/
cp -r node_modules/@gonzih/skills-finance/skills/portfolio-narrative ~/.claude/skills/
cp -r node_modules/@gonzih/skills-finance/skills/market-commentary ~/.claude/skills/
cp -r node_modules/@gonzih/skills-finance/skills/financial-plan-summary ~/.claude/skills/
cp -r node_modules/@gonzih/skills-finance/skills/compliance-comms-review ~/.claude/skills/
cp -r node_modules/@gonzih/skills-legal/skills/contract-scanner ~/.claude/skills/
cp -r node_modules/@gonzih/skills-legal/skills/research-brief ~/.claude/skills/
cp -r node_modules/@gonzih/skills-legal/skills/client-intake ~/.claude/skills/
cp -r node_modules/@gonzih/skills-legal/skills/settlement-summary ~/.claude/skills/
```

### Step 3: Add to MCP Config (optional)
Add to `~/.claude/mcp_config.json`:
```json
{
  "mcpServers": {
    "skills-marketing": { "command": "npx", "args": ["@gonzih/skills-marketing"] },
    "skills-sales": { "command": "npx", "args": ["@gonzih/skills-sales"] },
    "skills-product": { "command": "npx", "args": ["@gonzih/skills-product"] },
    "skills-engineering": { "command": "npx", "args": ["@gonzih/skills-engineering"] },
    "skills-ops": { "command": "npx", "args": ["@gonzih/skills-ops"] },
    "skills-nonprofit": { "command": "npx", "args": ["@gonzih/skills-nonprofit"] },
    "skills-accounting": { "command": "npx", "args": ["@gonzih/skills-accounting"] },
    "skills-insurance": { "command": "npx", "args": ["@gonzih/skills-insurance"] },
    "skills-dental": { "command": "npx", "args": ["@gonzih/skills-dental"] },
    "skills-restaurant": { "command": "npx", "args": ["@gonzih/skills-restaurant"] },
    "skills-executive": { "command": "npx", "args": ["@gonzih/skills-executive"] },
    "skills-healthcare": { "command": "npx", "args": ["@gonzih/skills-healthcare"] },
    "skills-hr": { "command": "npx", "args": ["@gonzih/skills-hr"] },
    "skills-realestate": { "command": "npx", "args": ["@gonzih/skills-realestate"] },
    "skills-finance": { "command": "npx", "args": ["@gonzih/skills-finance"] },
    "skills-legal": { "command": "npx", "args": ["@gonzih/skills-legal"] }
  }
}
```

### Step 4: First Run
```
/content-calendar          ← Specify channels, cadence, and campaign themes
/campaign-brief            ← Describe campaign goal and target audience
/brand-voice-guide         ← Provide brand overview and audience description
/competitor-teardown       ← Name the competitor and focus area
/discovery-call-prep       ← Input prospect name, industry, and known context
/proposal-writer           ← Describe client, scope, and engagement type
/objection-handler         ← Specify product/service and top sales objections
/deal-review               ← Provide deal stage, contacts, and current blockers
/prd-writer                ← Describe the problem and feature goal
/user-story-generator      ← Provide feature description and user types
/roadmap-builder           ← List initiatives and strategic priorities
/release-notes             ← Paste shipped items and target audience
/architecture-doc          ← Describe system components and integration points
/incident-postmortem       ← Input incident timeline and impact details
/tech-spec                 ← Describe the feature and technical constraints
/code-review-summary       ← Paste review comments for summarization
/sop-writer                ← Describe the process, team, and tools involved
/vendor-evaluation         ← List vendors and evaluation criteria
/budget-request            ← Describe the initiative and cost components
/process-audit             ← Describe the process scope and known pain points
/grant-proposal            ← Describe the program, funder priorities, and amount
/donor-report              ← Provide outcome data, key programs, and donor segment
/impact-story              ← Share a beneficiary story or program milestone
/board-update              ← Input meeting agenda items, metrics, and decisions
/tax-memo                  ← Describe the tax issue, client facts, and jurisdiction
/client-advisory-letter    ← Specify client situation and advisory focus
/engagement-letter         ← Input client name, services scope, and fee structure
/audit-finding-summary     ← Describe findings, severity, and affected controls
/coverage-explainer        ← Paste policy language or specify coverage type
/claim-summary             ← Input loss details, policy type, and coverage in question
/underwriting-notes        ← Describe applicant, risk class, and exposure data
/renewal-letter            ← Provide prior term details and any coverage changes
/treatment-plan-explainer  ← Describe planned procedures and sequencing
/patient-recall-letter     ← Specify care gap type and time since last visit
/insurance-narrative       ← Input procedure codes, diagnosis, and payer
/referral-letter           ← Describe patient, reason for referral, and specialist type
/menu-writer               ← Provide dish names, key ingredients, and cuisine style
/catering-proposal         ← Describe the event type, guest count, and service needs
/review-response           ← Paste the guest review and specify response tone
/staff-update              ← Describe the update topic and target staff group
/board-memo                ← Provide agenda items and key metrics
/stakeholder-update        ← Specify audience type and key message
/decision-log              ← Describe the decision, context, and options
/monthly-report            ← Input KPIs, project status, and key events for the month
/clinical-note-draft       ← Provide de-identified visit summary
/patient-education         ← Specify diagnosis and patient literacy level
/prior-auth-writer         ← Input CPT code, diagnosis, and payer
/research-digest           ← Paste abstract or provide PubMed ID
/job-description-writer    ← Provide role title, level, and key requirements
/interview-kit             ← Specify role and seniority level
/offer-letter-generator    ← Input candidate name, role, and comp details
/performance-review-helper ← Paste manager notes and self-assessment
/listing-writer            ← Paste property details, get MLS-ready copy
/market-report             ← Specify zip code or neighborhood
/client-followup           ← Select touchpoint type and client context
/offer-analyzer            ← Paste offer terms for instant comparison
/portfolio-narrative       ← Provide period, benchmark, and key positions
/market-commentary         ← Specify time period and audience type
/financial-plan-summary    ← Paste plan highlights and client goals
/compliance-comms-review   ← Paste draft communication for review
/contract-scanner          ← Paste contract text or upload document
/research-brief            ← State your legal question or fact pattern
/client-intake             ← Specify matter type to generate intake form
/settlement-summary        ← Paste settlement terms for memo draft
```

---

## Who It's For

Enterprise teams, consulting firms, and organizations that span multiple professional domains — from legal and finance to marketing and clinical — and want a single, consistently maintained toolkit powering every team from one install.

---

## Upgrade Path

This is the top tier. Every domain is covered. Contact us to discuss custom skill development or enterprise licensing for larger teams.

---

## GitHub
[https://github.com/Gonzih](https://github.com/Gonzih) — all packages
