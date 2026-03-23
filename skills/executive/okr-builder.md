---
name: okr-builder
description: "Helps executives and team leads draft well-formed OKRs (Objectives and Key Results) from strategic priorities"
license: MIT
triggers:
  - okr-builder
  - okr builder
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---
# OKR Builder
**Package:** @gonzih/skills-executive
**Command:** /okr-builder

## What it does
Helps executives and team leads draft well-formed OKRs (Objectives and Key Results) from strategic priorities. Takes a narrative goal and converts it into a properly structured Objective with 3-5 measurable Key Results. Applies OKR best practices: ambitious but achievable objectives, quantitative KRs, output vs. outcome framing.

## When to use
- Quarterly OKR planning
- Coaching teams that are new to OKR methodology
- Aligning team OKRs to company-level objectives

## Example output
**OKR — Q2 2026**

**Objective:** Establish our product as the default choice for mid-market financial advisors

*Why this matters: We've proven product-market fit in the small-firm segment. Q2 is our window to move upmarket before a well-funded competitor completes their enterprise build.*

**Key Results:**
1. Close 15 new mid-market accounts (AUM $100M–$500M) by June 30
2. Achieve NPS ≥ 45 among mid-market cohort (baseline: 31)
3. Reduce mid-market time-to-value from 34 days to under 21 days
4. Publish 3 mid-market case studies with named client approval

**Common mistakes to avoid:**
- KR1 measures output (accounts closed), not just activity (demos run) — keep it that way
- Resist adding a 5th KR unless it measures something meaningfully different
- Review these at the 6-week mark, not just end of quarter
