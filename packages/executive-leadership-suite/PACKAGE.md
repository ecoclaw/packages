# Executive Leadership Suite — $299 one-time install

AI-powered strategic communication and decision-support tools for executives, founders, and senior leaders.

---

## What's Included

### Skills
- `/board-memo` — draft clear, concise board memos and board update packages with executive summary, key decisions, and supporting data
- `/okr-builder` — generate structured OKR frameworks for teams or the whole organization, with key results that are measurable and time-bound
- `/decision-log` — document strategic decisions with context, options considered, rationale, and assigned owners for institutional memory
- `/stakeholder-update` — produce tailored stakeholder updates for investors, employees, customers, or partners at the right level of detail

### Deliverables (Per Use)
- Board memo with executive summary, decision items, financial highlights, and appendix structure
- OKR set with objective statement, 3–5 key results per objective, and suggested tracking cadence
- Decision log entry with decision summary, alternatives, rationale, risks, and next steps
- Stakeholder update formatted for the specific audience — investor letter, all-hands memo, or external announcement

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

### Step 3: Configure Leadership Context
Add to `~/.claude/mcp_config.json`:
```json
{
  "mcpServers": {
    "skills-executive": {
      "command": "npx",
      "args": ["@gonzih/skills-executive"],
      "env": {
        "COMPANY_NAME": "Your Company Name",
        "ROLE": "CEO",
        "FISCAL_YEAR_START": "January"
      }
    }
  }
}
```

### Step 4: First Run
```
/board-memo          ← Provide agenda items and key metrics
/okr-builder         ← State company focus areas for the quarter
/decision-log        ← Describe the decision, context, and options
/stakeholder-update  ← Specify audience type and key message
```

---

## Who It's For

CEOs, COOs, VPs, and founders who need to communicate clearly and move fast. Also useful for chiefs of staff and executive assistants who support C-suite communications and planning.

---

## Upgrade Path

For financial leaders, pair with the [Financial Advisor Suite](../financial-advisor-suite/PACKAGE.md) for portfolio narratives, market commentary, and compliance communications.

---

## GitHub
[https://github.com/Gonzih/skills-executive](https://github.com/Gonzih/skills-executive)
