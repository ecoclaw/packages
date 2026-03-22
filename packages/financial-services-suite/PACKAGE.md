# Financial Services Suite — $599/mo

From portfolios to audits to claims — 12 skills for financial professionals.

---

## What's Included

### Skills
- `/portfolio-narrative` — generate personalized portfolio commentary for client reviews, explaining performance, allocation decisions, and outlook in plain language
- `/market-commentary` — produce timely market commentary for newsletters, client emails, or social media — macro-aware and jargon-free
- `/financial-plan-summary` — draft a clear executive summary of a financial plan covering goals, strategies, projections, and next steps
- `/compliance-comms-review` — review client-facing communications for common regulatory red flags (promissory language, performance guarantees, unbalanced presentation)
- `/tax-memo` — draft a clear tax planning or research memo with issue identification, applicable code sections, analysis, and a recommended position
- `/client-advisory-letter` — produce a professional client advisory letter suitable for year-end planning, major life events, or proactive guidance
- `/engagement-letter` — generate a complete engagement letter with scope of services, fee structure, client responsibilities, and standard terms
- `/audit-finding-summary` — summarize audit findings with severity classification, supporting evidence, management response template, and remediation timeline
- `/coverage-explainer` — translate complex insurance policy language into plain-language coverage summaries for clients or internal training
- `/claim-summary` — produce a structured claim summary with coverage analysis, loss narrative, supporting documentation checklist, and recommended next steps
- `/underwriting-notes` — generate structured underwriting notes with risk assessment, exposure summary, pricing rationale, and conditions or exclusions
- `/renewal-letter` — draft a professional policy renewal letter with coverage highlights, changes from prior term, and recommended coverage review items

### Deliverables (Per Use)
- Portfolio commentary tailored to client risk profile, benchmark comparison, and review period
- Market commentary piece ready for newsletter, email distribution, or social media adaptation
- Financial plan summary memo covering goals, strategies, projections, and recommended actions
- Compliance review report with flagged language, risk level, and suggested rewrites
- Tax memo with issue statement, code analysis, conclusion, and planning recommendations
- Client advisory letter ready for partner review and personalized client delivery
- Engagement letter with full scope definition, fee schedule, and signature block
- Audit finding report with risk-tiered findings, remediation owners, and target completion dates
- Coverage explainer document structured for client delivery or staff training use
- Claim summary with coverage mapping, documentation checklist, and adjuster communication guide
- Underwriting notes with risk narrative, exposure quantification, and pricing justification
- Renewal letter with coverage change highlights, gap analysis callouts, and review recommendations

### Support
- Async support via email
- Skill update notifications via GitHub releases

---

## Setup Instructions

### Step 1: Install via npx
```bash
npx @gonzih/skills-finance
npx @gonzih/skills-accounting
npx @gonzih/skills-insurance
```

### Step 2: Install Skills into Claude
```bash
cp -r node_modules/@gonzih/skills-finance/skills/portfolio-narrative ~/.claude/skills/
cp -r node_modules/@gonzih/skills-finance/skills/market-commentary ~/.claude/skills/
cp -r node_modules/@gonzih/skills-finance/skills/financial-plan-summary ~/.claude/skills/
cp -r node_modules/@gonzih/skills-finance/skills/compliance-comms-review ~/.claude/skills/
cp -r node_modules/@gonzih/skills-accounting/skills/tax-memo ~/.claude/skills/
cp -r node_modules/@gonzih/skills-accounting/skills/client-advisory-letter ~/.claude/skills/
cp -r node_modules/@gonzih/skills-accounting/skills/engagement-letter ~/.claude/skills/
cp -r node_modules/@gonzih/skills-accounting/skills/audit-finding-summary ~/.claude/skills/
cp -r node_modules/@gonzih/skills-insurance/skills/coverage-explainer ~/.claude/skills/
cp -r node_modules/@gonzih/skills-insurance/skills/claim-summary ~/.claude/skills/
cp -r node_modules/@gonzih/skills-insurance/skills/underwriting-notes ~/.claude/skills/
cp -r node_modules/@gonzih/skills-insurance/skills/renewal-letter ~/.claude/skills/
```

### Step 3: Add to MCP Config (optional)
Add to `~/.claude/mcp_config.json`:
```json
{
  "mcpServers": {
    "skills-finance": {
      "command": "npx",
      "args": ["@gonzih/skills-finance"]
    },
    "skills-accounting": {
      "command": "npx",
      "args": ["@gonzih/skills-accounting"]
    },
    "skills-insurance": {
      "command": "npx",
      "args": ["@gonzih/skills-insurance"]
    }
  }
}
```

### Step 4: First Run
```
/portfolio-narrative       ← Provide period, benchmark, and key positions
/market-commentary         ← Specify time period and audience type
/financial-plan-summary    ← Paste plan highlights and client goals
/compliance-comms-review   ← Paste draft communication for review
/tax-memo                  ← Describe the tax issue, client facts, and jurisdiction
/client-advisory-letter    ← Specify client situation and advisory focus
/engagement-letter         ← Input client name, services scope, and fee structure
/audit-finding-summary     ← Describe findings, severity, and affected controls
/coverage-explainer        ← Paste policy language or specify coverage type
/claim-summary             ← Input loss details, policy type, and coverage in question
/underwriting-notes        ← Describe applicant, risk class, and exposure data
/renewal-letter            ← Provide prior term details and any coverage changes
```

---

## Who It's For

CPAs, financial advisors, insurance professionals, and financial services firms that operate across multiple specialties and need one unified toolkit for client communications, compliance documentation, and technical drafting.

---

## Upgrade Path

For financial services firms also managing people and operations, the [Full Professional Suite](../full-professional-suite/PACKAGE.md) adds HR, ops, executive communication, and every other professional domain in a single install.

---

## Important Disclaimer

These skills assist with communication drafting and documentation only. All output must be reviewed by a licensed professional before use. These tools do not provide investment, tax, or insurance advice.

---

## GitHub
[https://github.com/Gonzih/skills-finance](https://github.com/Gonzih/skills-finance), [https://github.com/Gonzih/skills-accounting](https://github.com/Gonzih/skills-accounting), and [https://github.com/Gonzih/skills-insurance](https://github.com/Gonzih/skills-insurance)
