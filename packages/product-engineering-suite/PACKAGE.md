# Product & Engineering Suite — $399/mo

From PRD to postmortem — 8 skills for builders.

---

## What's Included

### Skills
- `/prd-writer` — generate a structured product requirements document with problem statement, goals, user stories, scope boundaries, and open questions
- `/user-story-generator` — produce a full set of user stories with acceptance criteria, edge cases, and priority tiers from a feature description
- `/roadmap-builder` — build a prioritized product roadmap with initiative summaries, effort estimates, dependencies, and strategic rationale
- `/release-notes` — draft polished, user-facing release notes from a list of shipped features, bug fixes, and known issues
- `/architecture-doc` — produce a system architecture document with component overview, data flow diagrams in text format, integration points, and key decisions
- `/incident-postmortem` — generate a structured incident postmortem with timeline, root cause analysis, impact summary, and action items
- `/tech-spec` — draft a technical specification for a feature or system change, covering design decisions, API contracts, data models, and migration considerations
- `/code-review-summary` — summarize a code review with flagged issues categorized by severity, suggested improvements, and an overall assessment

### Deliverables (Per Use)
- PRD with goals, non-goals, user stories, technical constraints, and success metrics
- User story set with acceptance criteria, edge case coverage, and story point guidance
- Roadmap document with initiative briefs, dependency map, and quarterly theme alignment
- Release notes formatted for developer changelog, product blog, or in-app notification
- Architecture document with component descriptions, integration summary, and decision log
- Postmortem report with 5-why root cause analysis, severity classification, and owner-assigned action items
- Tech spec with API endpoints, data models, rollout plan, and rollback strategy
- Code review summary with severity-tiered findings and suggested next actions

### Support
- Async support via email
- Skill update notifications via GitHub releases

---

## Setup Instructions

### Step 1: Install via npx
```bash
npx @gonzih/skills-product
npx @gonzih/skills-engineering
```

### Step 2: Install Skills into Claude
```bash
cp -r node_modules/@gonzih/skills-product/skills/prd-writer ~/.claude/skills/
cp -r node_modules/@gonzih/skills-product/skills/user-story-generator ~/.claude/skills/
cp -r node_modules/@gonzih/skills-product/skills/roadmap-builder ~/.claude/skills/
cp -r node_modules/@gonzih/skills-product/skills/release-notes ~/.claude/skills/
cp -r node_modules/@gonzih/skills-engineering/skills/architecture-doc ~/.claude/skills/
cp -r node_modules/@gonzih/skills-engineering/skills/incident-postmortem ~/.claude/skills/
cp -r node_modules/@gonzih/skills-engineering/skills/tech-spec ~/.claude/skills/
cp -r node_modules/@gonzih/skills-engineering/skills/code-review-summary ~/.claude/skills/
```

### Step 3: Add to MCP Config (optional)
Add to `~/.claude/mcp_config.json`:
```json
{
  "mcpServers": {
    "skills-product": {
      "command": "npx",
      "args": ["@gonzih/skills-product"]
    },
    "skills-engineering": {
      "command": "npx",
      "args": ["@gonzih/skills-engineering"]
    }
  }
}
```

### Step 4: First Run
```
/prd-writer             ← Describe the problem and feature goal
/user-story-generator   ← Provide feature description and user types
/roadmap-builder        ← List initiatives and strategic priorities
/release-notes          ← Paste shipped items and target audience
/architecture-doc       ← Describe system components and integration points
/incident-postmortem    ← Input incident timeline and impact details
/tech-spec              ← Describe the feature and technical constraints
/code-review-summary    ← Paste review comments or diff for summarization
```

---

## Who It's For

Product managers and engineering leads at product-led tech companies who need structured documentation without the overhead. Works for early-stage startups shipping fast and growth-stage teams building process maturity.

---

## Upgrade Path

Pair with the [Full Professional Suite](../full-professional-suite/PACKAGE.md) for enterprise teams that also need ops, finance, and HR tooling alongside product and engineering workflows.

---

## GitHub
[https://github.com/Gonzih/skills-product](https://github.com/Gonzih/skills-product) and [https://github.com/Gonzih/skills-engineering](https://github.com/Gonzih/skills-engineering)
