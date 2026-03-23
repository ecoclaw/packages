---
name: settlement-summary
description: "Converts settlement terms into a clear, client-readable summary document covering key financial terms, non-monetary provisions, release scope, conf..."
license: MIT
triggers:
  - settlement-summary
  - settlement summary
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---
# Settlement Summary
**Package:** @gonzih/skills-legal
**Command:** /settlement-summary

## What it does
Converts settlement terms into a clear, client-readable summary document covering key financial terms, non-monetary provisions, release scope, confidentiality obligations, and next steps. Bridges the gap between a dense term sheet and a conversation your client can understand and sign off on.

## When to use
- Presenting a settlement offer to a client for decision
- Summarizing final terms before formal agreement drafting
- Creating a record of verbal settlement discussions

## Example output
**Settlement Summary — Johnson v. Meridian Logistics**

**Settlement Amount:** $185,000 gross; estimated net to client after fees and costs: ~$118,000

**Key Terms:**
- Full release of all claims arising from employment, including wrongful termination, harassment, and wage claims
- No admission of liability by Meridian
- Mutual non-disparagement — neither party may make negative public statements about the other
- Confidentiality — client agrees not to disclose settlement amount or terms
- Cooperation clause — client agrees to cooperate with any future government investigation (standard provision)

**What this means for you:** Accepting this offer resolves all claims permanently. You would receive payment within 30 days of execution. You could not later bring additional claims related to your employment at Meridian.

**Next steps:** Review, ask questions, decide. No pressure — this offer is open for 10 days.

*This summary is not a substitute for reviewing the full settlement agreement with your attorney.*
