---
name: compliance-comms-review
description: "Reviews draft client communications — emails, newsletters, social posts, presentation slides — against common financial services compliance standar..."
license: MIT
triggers:
  - compliance-comms-review
  - compliance comms review
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---
# Compliance Comms Review
**Package:** @gonzih/skills-finance
**Command:** /compliance-comms-review

## What it does
Reviews draft client communications — emails, newsletters, social posts, presentation slides — against common financial services compliance standards (FINRA, SEC, state RIA rules). Flags potentially problematic language, missing disclosures, performance representation issues, and required disclaimers. Produces a marked-up version with suggested fixes.

## When to use
- Before sending a market commentary or newsletter
- Reviewing social media posts for a registered advisor
- Pre-clearing a client presentation before a prospect meeting

## Example output
**Compliance Review — Draft Client Email**

**Original:** "Our strategy has consistently outperformed the market, and we expect this to continue in 2026."

🔴 **Flag:** "Consistently outperformed" requires substantiation with specific, audited performance data per FINRA Rule 2210. "We expect this to continue" implies a forward-looking guarantee — prohibited.

**Suggested revision:** "Our strategy has outperformed its benchmark in X of the past Y years. Past performance does not guarantee future results."

---

**Original:** "Now is a great time to move into equities."

🟡 **Flag:** Blanket market timing recommendation without suitability context. Consider adding: "Whether this applies to your situation depends on your individual goals, risk tolerance, and time horizon — please contact us to discuss."

---

**Overall:** Add standard disclosure footer before sending. Required elements: firm name, registration status, "for informational purposes only" language, past performance disclaimer.

*This review is a compliance aid, not a legal opinion. Consult your compliance officer before publishing.*
