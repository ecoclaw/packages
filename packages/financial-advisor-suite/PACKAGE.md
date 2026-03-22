# Financial Advisor Suite — $299 one-time install

AI-powered communication and compliance tools for financial advisors, wealth managers, and RIAs.

---

## What's Included

### Skills
- `/portfolio-narrative` — generate personalized portfolio commentary for client reviews, explaining performance, allocation decisions, and outlook in plain language
- `/market-commentary` — produce timely market commentary for newsletters, client emails, or social media — macro-aware and jargon-free
- `/financial-plan-summary` — draft a clear executive summary of a financial plan covering goals, strategies, projections, and next steps
- `/compliance-comms-review` — review client-facing communications for common regulatory red flags (promissory language, performance guarantees, unbalanced presentation)

### Deliverables (Per Use)
- Portfolio commentary draft tailored to client risk profile and review period
- Market commentary piece ready for newsletter or email distribution
- Financial plan summary memo suitable for client delivery and file documentation
- Compliance review report with flagged language, risk level, and suggested rewrites

### Support
- Async support via email
- Skill update notifications via GitHub releases

---

## Setup Instructions

### Step 1: Install via npm
```bash
npm install -g @gonzih/skills-finance
```

### Step 2: Install Skills into Claude
```bash
cp -r node_modules/@gonzih/skills-finance/skills/portfolio-narrative ~/.claude/skills/
cp -r node_modules/@gonzih/skills-finance/skills/market-commentary ~/.claude/skills/
cp -r node_modules/@gonzih/skills-finance/skills/financial-plan-summary ~/.claude/skills/
cp -r node_modules/@gonzih/skills-finance/skills/compliance-comms-review ~/.claude/skills/
```

### Step 3: Configure Advisor Settings
Add to `~/.claude/mcp_config.json`:
```json
{
  "mcpServers": {
    "skills-finance": {
      "command": "npx",
      "args": ["@gonzih/skills-finance"],
      "env": {
        "FIRM_NAME": "Your Firm Name",
        "ADVISOR_NAME": "Your Name",
        "CUSTODIAN": "your-custodian",
        "COMPLIANCE_JURISDICTION": "SEC"
      }
    }
  }
}
```

### Step 4: First Run
```
/portfolio-narrative       ← Provide period, benchmark, and key positions
/market-commentary         ← Specify time period and audience (client/prospect)
/financial-plan-summary    ← Paste plan highlights and client goals
/compliance-comms-review   ← Paste draft communication for review
```

---

## Who It's For

Independent financial advisors, RIAs, wealth managers, and financial planning teams who need to produce high-quality client communications at scale without compromising compliance. Works for BD-affiliated and fee-only advisors.

---

## Important Disclaimer

These skills assist with communication drafting only. All output must be reviewed by a licensed advisor and your firm's compliance team before distribution. This tool does not provide investment advice.

---

## Upgrade Path

Combine with the [Executive Leadership Suite](../executive-leadership-suite/PACKAGE.md) for advisory firm principals managing team OKRs, board reporting, and strategic stakeholder communications.

---

## GitHub
[https://github.com/Gonzih/skills-finance](https://github.com/Gonzih/skills-finance)
