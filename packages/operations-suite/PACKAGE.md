# Operations Suite — $349/mo

SOPs to board memos — 8 skills for people who run things.

---

## What's Included

### Skills
- `/sop-writer` — generate clear, step-by-step standard operating procedures with roles, triggers, decision points, and exception handling
- `/vendor-evaluation` — produce a structured vendor evaluation scorecard with criteria weighting, risk assessment, and a recommendation summary
- `/budget-request` — draft a business case and budget request memo with cost breakdown, ROI rationale, and approval pathway
- `/process-audit` — create a process audit report identifying bottlenecks, redundancies, compliance gaps, and prioritized improvement recommendations
- `/board-memo` — draft clear, concise board memos and board update packages with executive summary, key decisions, and supporting data
- `/stakeholder-update` — produce tailored stakeholder updates for investors, employees, customers, or partners at the right level of detail
- `/decision-log` — document strategic decisions with context, options considered, rationale, and assigned owners for institutional memory
- `/monthly-report` — generate a comprehensive monthly operational report with KPI performance, initiative status, risks, and priorities for the month ahead

### Deliverables (Per Use)
- SOP document with numbered steps, responsible roles, required tools, and exception escalation paths
- Vendor evaluation scorecard with weighted criteria scoring, vendor comparison matrix, and recommendation memo
- Budget request memo with line-item breakdown, strategic alignment statement, risk factors, and approval summary
- Process audit report with current-state map, gap analysis, quick wins, and phased improvement roadmap
- Board memo with executive summary, decision items, financial highlights, and appendix structure
- Stakeholder update formatted for the specific audience — investor letter, all-hands memo, or external announcement
- Decision log entry with decision summary, alternatives considered, rationale, risks, and next steps
- Monthly report with KPI dashboard narrative, project status grid, risk register, and outlook section

### Support
- Async support via email
- Skill update notifications via GitHub releases

---

## Setup Instructions

### Step 1: Install via npx
```bash
npx @gonzih/skills-ops
npx @gonzih/skills-executive
```

### Step 2: Install Skills into Claude
```bash
cp -r node_modules/@gonzih/skills-ops/skills/sop-writer ~/.claude/skills/
cp -r node_modules/@gonzih/skills-ops/skills/vendor-evaluation ~/.claude/skills/
cp -r node_modules/@gonzih/skills-ops/skills/budget-request ~/.claude/skills/
cp -r node_modules/@gonzih/skills-ops/skills/process-audit ~/.claude/skills/
cp -r node_modules/@gonzih/skills-executive/skills/board-memo ~/.claude/skills/
cp -r node_modules/@gonzih/skills-executive/skills/stakeholder-update ~/.claude/skills/
cp -r node_modules/@gonzih/skills-executive/skills/decision-log ~/.claude/skills/
cp -r node_modules/@gonzih/skills-executive/skills/monthly-report ~/.claude/skills/
```

### Step 3: Add to MCP Config (optional)
Add to `~/.claude/mcp_config.json`:
```json
{
  "mcpServers": {
    "skills-ops": {
      "command": "npx",
      "args": ["@gonzih/skills-ops"]
    },
    "skills-executive": {
      "command": "npx",
      "args": ["@gonzih/skills-executive"]
    }
  }
}
```

### Step 4: First Run
```
/sop-writer          ← Describe the process, team, and tools involved
/vendor-evaluation   ← List vendors and evaluation criteria
/budget-request      ← Describe the initiative and cost components
/process-audit       ← Describe the process scope and known pain points
/board-memo          ← Provide agenda items and key metrics
/stakeholder-update  ← Specify audience type and key message
/decision-log        ← Describe the decision, context, and options
/monthly-report      ← Input KPIs, project status, and key events for the month
```

---

## Who It's For

Operations managers, COOs, and business leaders who need both the day-to-day documentation tooling to keep systems running and the executive communication skills to keep stakeholders aligned. Works for companies from Series A through enterprise.

---

## Upgrade Path

Add the [Agency Suite](../agency-suite/PACKAGE.md) if your operations function also needs marketing and sales enablement tooling, or move to the [Full Professional Suite](../full-professional-suite/PACKAGE.md) for all 64 skills across every domain.

---

## GitHub
[https://github.com/Gonzih/skills-ops](https://github.com/Gonzih/skills-ops) and [https://github.com/Gonzih/skills-executive](https://github.com/Gonzih/skills-executive)
