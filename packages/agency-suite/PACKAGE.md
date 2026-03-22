# Agency Suite — $399/mo

From brand voice to closed deals — 8 skills for revenue teams.

---

## What's Included

### Skills
- `/content-calendar` — build a structured monthly or quarterly content calendar with themes, formats, channels, and publishing cadence tailored to campaign goals
- `/campaign-brief` — generate a comprehensive campaign brief covering objectives, target audience, messaging hierarchy, creative direction, and success metrics
- `/brand-voice-guide` — produce a brand voice and tone guide with personality attributes, do/don't examples, and channel-specific guidelines
- `/competitor-teardown` — analyze a competitor's positioning, messaging, content strategy, and gaps to surface differentiation opportunities
- `/discovery-call-prep` — prepare a structured discovery call guide with research summary, hypothesis questions, and qualification criteria for each prospect
- `/proposal-writer` — draft a professional client proposal with executive summary, scope of work, pricing rationale, timeline, and next steps
- `/objection-handler` — generate a full objection-handling playbook for common sales objections with evidence-backed responses and turn language
- `/deal-review` — produce a deal review summary with stage assessment, risk flags, stakeholder map, and recommended next actions

### Deliverables (Per Use)
- Content calendar with topic clusters, formats, channels, and owner assignments for each publishing slot
- Campaign brief with audience personas, messaging pillars, channel mix, creative specs, and KPI targets
- Brand voice guide with personality traits, vocabulary lists, tone-by-channel guidance, and annotated examples
- Discovery call prep sheet with account research, hypothesis stack, and qualification scorecard
- Client proposal with scoped deliverables, investment summary, and client-facing timeline
- Objection-handling playbook with trigger phrases, response scripts, and evidence points

### Support
- Async support via email
- Skill update notifications via GitHub releases

---

## Setup Instructions

### Step 1: Install via npx
```bash
npx @gonzih/skills-marketing
npx @gonzih/skills-sales
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
```

### Step 3: Add to MCP Config (optional)
Add to `~/.claude/mcp_config.json`:
```json
{
  "mcpServers": {
    "skills-marketing": {
      "command": "npx",
      "args": ["@gonzih/skills-marketing"]
    },
    "skills-sales": {
      "command": "npx",
      "args": ["@gonzih/skills-sales"]
    }
  }
}
```

### Step 4: First Run
```
/content-calendar     ← Specify channels, cadence, and campaign themes
/campaign-brief       ← Describe campaign goal and target audience
/brand-voice-guide    ← Provide brand overview and audience description
/competitor-teardown  ← Name the competitor and focus area
/discovery-call-prep  ← Input prospect name, industry, and known context
/proposal-writer      ← Describe client, scope, and engagement type
/objection-handler    ← Specify product/service and top sales objections
/deal-review          ← Provide deal stage, contacts, and current blockers
```

---

## Who It's For

Marketing agencies, in-house growth teams, and revenue-focused startups that need both marketing content and sales execution tooling in one place. Ideal for teams where marketing and sales work closely together and share a common pipeline.

---

## Upgrade Path

Add the [Operations Suite](../operations-suite/PACKAGE.md) if your agency or growth team also needs SOPs, vendor evaluations, and board-level reporting — or step up to the [Full Professional Suite](../full-professional-suite/PACKAGE.md) for all 64 skills across every domain.

---

## GitHub
[https://github.com/Gonzih/skills-marketing](https://github.com/Gonzih/skills-marketing) and [https://github.com/Gonzih/skills-sales](https://github.com/Gonzih/skills-sales)
