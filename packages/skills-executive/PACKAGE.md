# Executive Skills Suite — @gonzih/skills-executive

AI-powered strategic communication and planning tools for executives and senior leaders.

---

## What's Included

### Skills
- `/board-memo` — draft board-ready memos and briefing documents with executive summary, context, recommendation, and risk sections
- `/okr-builder` — structure quarterly OKRs with measurable key results, owner assignments, and confidence scoring
- `/decision-log` — document decisions with context, alternatives considered, rationale, and follow-up owners
- `/stakeholder-update` — compose concise stakeholder updates tailored by audience (board, investors, team, customers)

### Deliverables (Per Use)
- Board memo (1–3 pages): situation, analysis, recommendation, risk/mitigation, ask
- OKR set: 3–5 objectives with 2–4 key results each, success metrics, and review cadence
- Decision log entry: structured DACI/RACI context, options matrix, decision rationale, and action items
- Stakeholder update: audience-tuned narrative with key metrics, progress summary, blockers, and next steps

### Support
- Async support via email
- Skill update notifications via GitHub releases

---

## Setup Instructions

### Step 1: Install via npm
```bash
npm install -g @gonzih/skills-executive
```

### Step 2: Install Skills into Claude
```bash
cp -r node_modules/@gonzih/skills-executive/skills/board-memo ~/.claude/skills/
cp -r node_modules/@gonzih/skills-executive/skills/okr-builder ~/.claude/skills/
cp -r node_modules/@gonzih/skills-executive/skills/decision-log ~/.claude/skills/
cp -r node_modules/@gonzih/skills-executive/skills/stakeholder-update ~/.claude/skills/
```

### Step 3: Configure Organization Settings
Add to `~/.claude/mcp_config.json`:
```json
{
  "mcpServers": {
    "skills-executive": {
      "command": "npx",
      "args": ["@gonzih/skills-executive"],
      "env": {
        "COMPANY_NAME": "Your Company",
        "FISCAL_YEAR_START": "January",
        "OKR_CADENCE": "quarterly"
      }
    }
  }
}
```

### Step 4: First Run
```
/board-memo           ← Provide topic, recommendation, and key data
/okr-builder          ← Specify team, quarter, and strategic priorities
/decision-log         ← Describe decision context and options considered
/stakeholder-update   ← Select audience and provide progress summary
```

---

## GitHub
[https://github.com/Gonzih/skills-executive](https://github.com/Gonzih/skills-executive)
