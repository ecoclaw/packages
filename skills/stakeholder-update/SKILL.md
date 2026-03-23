---
name: stakeholder-update
description: Compose concise, audience-tuned stakeholder updates for boards, investors, employees, or customers — covering progress, blockers, and next steps.
license: MIT
triggers: ["stakeholder update", "investor update", "team update", "company update", "all hands update", "progress update"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Stakeholder Update

## What this skill does

Generates clear, credible stakeholder communications tailored to the audience's level of detail and decision-making role:

1. **Audience routing** — board, investors, all-company, team, or customers
2. **Metrics snapshot** — key numbers with context (not just raw data)
3. **Progress narrative** — what's going well and why it matters
4. **Blockers and asks** — honest about challenges; specific about what help is needed
5. **Next period focus** — what the organization is doing next and why

## How to invoke

```
/stakeholder-update
```

Claude will ask:
- Who is this update for? (board, investors, all-company, specific team, customers)
- What time period does this cover? (weekly, monthly, quarterly)
- Key metrics to share? (with prior period for comparison)
- What went well this period?
- What is behind plan or presents risk?
- Any specific asks of this audience?
- Preferred format? (email, slide narrative, memo, Slack message)

## Workflow steps

### Step 1 — Audience Calibration
Claude adjusts depth, tone, and terminology:
- **Board/investors:** Governance lens — financial, strategic risk, and capital decisions
- **All-company:** Motivation and context — why decisions were made and how it affects the team
- **Team:** Tactical clarity — priorities, blockers, and their role in the next sprint
- **Customers:** Trust and transparency — what's changing and what it means for them

### Step 2 — Metrics with Context
Numbers are presented with comparison and interpretation:
```
ARR: $4.2M (+12% QoQ) — on track to $18M exit rate by year-end
NPS: 42 (was 31 last quarter) — driven by onboarding improvements in March
Burn: $780K/month (down from $1.1M) — runway extended to 14 months
```

### Step 3 — Structured Narrative
```
✅ What's working
⚠ What's at risk or behind plan
🎯 Focus for next period
🙏 What we need from you [if applicable]
```

### Step 4 — Format Optimization
- Email: subject line, concise body, clear CTA
- Slide narrative: speaker notes for each section
- Memo: formal structure with date and distribution
- Slack: scannable with headers and emoji anchors

## Example outputs

### Example: Monthly Investor Update — March 2026

**Subject:** Acme Inc. — March 2026 Update

```
Hi [Investor names],

March update below. Happy to discuss anything on our monthly call Thursday.

METRICS
ARR: $4.2M (+8% MoM, +71% YoY)
New ARR: $340K | Churn ARR: $42K | Net Revenue Retention: 118%
Cash: $6.1M | Burn: $780K/mo | Runway: ~8 months at current burn
Headcount: 31 (no change)

WHAT'S WORKING
Trial-to-paid conversion hit 23% in March, up from 18% in January. The onboarding
redesign shipped mid-February is working — time-to-first-value dropped from 14 days
to 9 days. Two enterprise deals closed in the last week of the month, contributing
$180K of the month's new ARR.

WHAT'S AT RISK
Our Head of Sales gave notice last week. We're running a fast process — two strong
internal candidates and one external finalist. We expect to name a replacement within
30 days. Pipeline coverage for Q2 remains 2.8x quota; we don't expect material
disruption, but we're watching it closely.

NEXT 30 DAYS
• Close Series B extension ($2M remaining; two term sheets in hand)
• Promote interim Head of Sales or close external hire
• Ship API v2 (enables our top 3 integration partner requests)

ONE ASK
If any of you have a warm relationship at [Strategic Partner], an intro would be
timely — we're in early partnership discussions and a reference from an existing
investor would accelerate the conversation.

Thanks for your continued support.

Jane
CEO, Acme Inc.
```

**Next steps:**
- Send on a consistent day each month (first Monday, or day 5 of the new month)
- Log investor responses and follow-ups in your CRM
- Attach board deck or data room link for investors who want more detail
- Use `/board-memo` for formal board-level decision requests beyond regular updates
