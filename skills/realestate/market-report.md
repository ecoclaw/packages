---
name: market-report
description: "Transforms raw MLS data — median prices, days on market, inventory levels, list-to-sale ratios — into a polished, client-ready market narrative"
license: MIT
triggers:
  - market-report
  - market report
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---
# Market Report
**Package:** @gonzih/skills-realestate
**Command:** /market-report

## What it does
Transforms raw MLS data — median prices, days on market, inventory levels, list-to-sale ratios — into a polished, client-ready market narrative. Outputs a summary paragraph, a data highlights section, and a brief outlook statement suitable for email newsletters, social posts, or buyer/seller consultations.

## When to use
- Monthly client newsletter is due
- A buyer or seller asks "how's the market?"
- You're presenting at a community event or open house

## Example output
**March 2026 — Eastside Market Snapshot**

The Eastside market remained competitive through February, with median home prices holding at $875,000 — up 4.2% year-over-year. Inventory ticked up slightly to 1.8 months of supply, giving well-prepared buyers slightly more breathing room than this time last year. Homes priced correctly are still selling in under 14 days on average, and 68% closed at or above list price.

**Outlook:** With spring inventory expected to rise, buyers who've been waiting may find more options — but rate-sensitive segments could see softening if financing costs remain elevated.
