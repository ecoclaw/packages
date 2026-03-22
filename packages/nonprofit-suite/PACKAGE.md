# Nonprofit Suite — $149/mo (mission pricing)

Grant proposals to impact stories — 4 skills for changemakers.

---

## What's Included

### Skills
- `/grant-proposal` — draft a compelling grant proposal narrative with problem statement, program description, theory of change, evaluation plan, and budget justification
- `/donor-report` — produce a donor impact report with program outcomes, stories, financial stewardship summary, and forward-looking gratitude narrative
- `/impact-story` — craft a compelling impact story centered on a beneficiary, community, or program milestone suitable for newsletters, social media, or annual reports
- `/board-update` — generate a structured board update package with executive summary, program metrics, financial highlights, key decisions needed, and upcoming milestones

### Deliverables (Per Use)
- Grant proposal narrative covering all standard funder sections, ready for program officer review
- Donor report formatted for mid-year or annual stewardship, with outcome data and story integration
- Impact story in 300–600 word narrative format with a pull quote and suggested photo caption
- Board update document with dashboard summary, committee updates, and action items for the meeting

### Support
- Async support via email
- Skill update notifications via GitHub releases

---

## Setup Instructions

### Step 1: Install via npx
```bash
npx @gonzih/skills-nonprofit
```

### Step 2: Install Skills into Claude
```bash
cp -r node_modules/@gonzih/skills-nonprofit/skills/grant-proposal ~/.claude/skills/
cp -r node_modules/@gonzih/skills-nonprofit/skills/donor-report ~/.claude/skills/
cp -r node_modules/@gonzih/skills-nonprofit/skills/impact-story ~/.claude/skills/
cp -r node_modules/@gonzih/skills-nonprofit/skills/board-update ~/.claude/skills/
```

### Step 3: Add to MCP Config (optional)
Add to `~/.claude/mcp_config.json`:
```json
{
  "mcpServers": {
    "skills-nonprofit": {
      "command": "npx",
      "args": ["@gonzih/skills-nonprofit"]
    }
  }
}
```

### Step 4: First Run
```
/grant-proposal   ← Describe the program, funder priorities, and funding amount
/donor-report     ← Provide outcome data, key programs, and donor segment
/impact-story     ← Share a beneficiary story or program milestone to feature
/board-update     ← Input meeting agenda items, metrics, and decisions needed
```

---

## Who It's For

Nonprofit development staff, executive directors, and communications teams at mission-driven organizations who need professional grant writing and donor communications without stretching a lean team.

---

## Note on Mission Pricing

This suite is offered at reduced mission pricing for nonprofit organizations. Contact us for additional discounts for small nonprofits operating under a $500K annual budget.

---

## Upgrade Path

Growing organizations that need executive communications and operational documentation alongside fundraising tooling can add the [Operations Suite](../operations-suite/PACKAGE.md) for SOP writing, board memos, and stakeholder updates.

---

## GitHub
[https://github.com/Gonzih/skills-nonprofit](https://github.com/Gonzih/skills-nonprofit)
