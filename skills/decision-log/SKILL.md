---
name: decision-log
description: Document decisions with context, alternatives considered, rationale, DACI ownership, and follow-up actions for organizational memory.
license: MIT
triggers: ["decision log", "log decision", "decision record", "document decision", "adr", "decision doc"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Decision Log

## What this skill does

Creates structured decision records that preserve context and rationale over time:

1. **Decision statement** — clear, unambiguous description of what was decided
2. **Context and drivers** — why this decision needed to be made and when
3. **Options considered** — alternatives evaluated with pros/cons
4. **Rationale** — why this option was chosen over the others
5. **DACI ownership** — Driver, Approver, Contributor, Informed
6. **Consequences and follow-ups** — what changes as a result and who does what next

## How to invoke

```
/decision-log
```

Claude will ask:
- What was decided?
- What problem or question triggered the decision?
- What alternatives were considered?
- Why was this option chosen over the others?
- Who made the decision and who was consulted?
- What are the immediate follow-up actions?
- Any sunset date — when should this decision be revisited?

## Workflow steps

### Step 1 — Decision Header
```
Decision: [Clear, past-tense statement of what was decided]
Date: [Date]
Status: [Decided / Superseded / Under review]
Review date: [When to revisit — optional]
```

### Step 2 — Context Block
- Problem statement: what question needed answering
- Relevant constraints: time, budget, technical, regulatory
- What happens if we decide nothing (status quo option)

### Step 3 — Options Matrix
```
| Option | Pros | Cons | Effort | Risk |
|--------|------|------|--------|------|
| A      |      |      |        |      |
| B      |      |      |        |      |
| C      |      |      |        |      |
```

### Step 4 — DACI and Follow-Ups
```
Driver (led the decision): _______________
Approver (final authority): _______________
Contributors (input given): _______________
Informed (notified of outcome): _______________

Follow-up actions:
□ [Action] — [Owner] — by [date]
□ [Action] — [Owner] — by [date]
```

## Example outputs

### Example: Migrate from Heroku to AWS ECS

**Decision:** We will migrate our production infrastructure from Heroku to AWS ECS (Fargate) by June 30, 2026.

**Date:** March 21, 2026 | **Status:** Decided | **Review:** Dec 2026

**Context:**
Heroku's cost at our current scale ($18K/month) is 3.4x equivalent AWS capacity. Heroku's Nov 2022 free tier removal and subsequent pricing increases have eliminated the startup convenience premium that justified the platform. We need a solution that scales with ARR, not against it.

**Options Considered:**
| Option | Pros | Cons | Effort | Risk |
|--------|------|------|--------|------|
| Stay on Heroku | Zero migration effort | Cost unsustainable at $1M ARR | None | High (financial) |
| AWS ECS (Fargate) | 70% cost reduction, AWS ecosystem, autoscaling | Migration effort; team must learn ECS | High | Medium |
| Fly.io | Simple migration, Heroku-like DX | Less mature, smaller ecosystem | Medium | Medium |
| Render | Very easy migration, predictable pricing | Limited enterprise features | Low | Low |

**Rationale:**
AWS ECS was selected over Render and Fly.io because (a) our CTO and two senior engineers have prior ECS production experience, reducing risk significantly; (b) we are already on AWS for S3, RDS, and CloudFront — consolidation simplifies our security and billing posture; (c) the cost reduction ($13K+/month) justifies the one-time migration investment within 2 months.

**DACI:**
```
Driver: Alex Kim (CTO)
Approver: Sarah Lee (CEO)
Contributors: Infra team, Finance (cost model)
Informed: All engineering, Product, Board (Q2 ops memo)
```

**Follow-up actions:**
```
□ Draft migration plan with rollback strategy — Alex Kim — by April 4
□ Provision staging ECS environment — Infra team — by April 11
□ Complete production migration with zero-downtime cutover — by June 30
□ Decommission Heroku — by July 15
```

**Next steps:**
- Store this log in your team wiki (Notion, Confluence) or repo `/docs/decisions/`
- Share with Informed parties today
- Link this decision from your Q2 OKRs if migration is a key result
- Use `/stakeholder-update` to communicate the decision to broader audience
