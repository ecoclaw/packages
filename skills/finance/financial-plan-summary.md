---
name: financial-plan-summary
description: "Converts detailed financial plan inputs — goals, timelines, current assets, income, savings rate, projected expenses — into a clear client-facing e..."
license: MIT
triggers:
  - financial-plan-summary
  - financial plan summary
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---
# Financial Plan Summary
**Package:** @gonzih/skills-finance
**Command:** /financial-plan-summary

## What it does
Converts detailed financial plan inputs — goals, timelines, current assets, income, savings rate, projected expenses — into a clear client-facing executive summary. Covers where the client stands today, what's on track, what needs attention, and the three most important next actions.

## When to use
- Delivering a new financial plan
- Annual plan review summaries
- Onboarding a new client and presenting initial findings

## Example output
**Financial Plan Summary — The Chen Family**

**Where you stand today:**
Net worth: $1.24M | Retirement assets: $890K | Emergency fund: 5.2 months | Debt: $312K mortgage (3.1% fixed)

**What's on track:**
✅ Retirement savings rate (18% of gross income) is well-positioned to support a target retirement at age 62
✅ College savings for both children on pace for 70% funding at current contribution levels
✅ Term life insurance coverage adequate through 2031

**What needs attention:**
⚠️ Estate documents (will, powers of attorney) have not been updated since 2018 — recommend review given recent changes to family and asset levels
⚠️ Taxable account is concentrated in a single employer stock position (~22% of investable assets) — consider a phased diversification strategy

**Your three next actions:**
1. Schedule estate planning attorney meeting — target Q2
2. Review employer stock position at next meeting — we'll model diversification scenarios
3. Increase 529 contribution by $200/month to close the college funding gap

*This summary is for planning purposes only. Consult your advisor before making financial decisions.*
