---
name: vendor-evaluation
description: Create a weighted vendor scorecard with criteria, scoring, and a final recommendation
license: MIT
triggers: ["vendor evaluation", "vendor scorecard", "vendor selection", "vendor comparison", "RFP evaluation", "supplier evaluation"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Vendor Evaluation

## What this skill does

Builds a structured, defensible vendor evaluation that takes subjectivity out of software and supplier selection decisions. The output gives procurement teams and leadership a clear, data-backed recommendation with the reasoning trail to support it.

1. **Evaluation criteria definition** — establishes weighted categories tailored to the purchase type (software, services, hardware, etc.)
2. **Scoring rubric** — creates a 1–5 scale with defined anchors for each criterion so scores are consistent across evaluators
3. **Weighted scorecard** — applies category weights to each vendor's scores and calculates a total weighted score
4. **Narrative commentary** — adds qualitative observations that numbers alone don't capture
5. **Recommendation with rationale** — states a clear winner and explains why, including risk factors and runner-up notes

## How to invoke

```
/vendor-evaluation
```

Claude will ask:
- What are you evaluating? (software category, service type, hardware, etc.)
- Which vendors are being compared? (names and brief descriptions)
- What are your top evaluation priorities? (e.g., cost, security, ease of use, support, integration)
- What is the budget range and contract length under consideration?
- Who are the stakeholders evaluating this, and do they have different priority weights?

## Workflow steps

### Step 1 — Criteria and Weighting
Claude works with you to define 5–8 evaluation criteria and assign percentage weights that total 100%. Weights reflect your organization's priorities — a security-first company will weight security higher than a cost-first buyer.

### Step 2 — Scoring Rubric Construction
Claude defines explicit 1–5 anchors for each criterion so every evaluator is scoring against the same standard. This prevents one person's "4" from being another's "2."

### Step 3 — Scorecard Completion
Claude builds the weighted scoring table, applies weights to raw scores, and calculates total weighted scores for each vendor. Ties and close calls are flagged explicitly.

### Step 4 — Recommendation Write-Up
Claude drafts a 1–2 page recommendation memo explaining the winner, the rationale, key risk factors, and what to negotiate before signing. Runner-up and disqualifying factors are noted.

## Example outputs

### Example: Project Management Software Evaluation (3 Vendors)

**Input:** Evaluating Asana, Monday.com, and ClickUp for a 120-person professional services firm. Priorities: ease of adoption, Salesforce integration, reporting, mobile app, pricing. 3-year contract. IT and Operations are co-evaluating.

**Scorecard draft:**
```
VENDOR EVALUATION SCORECARD
Project:    Project Management Platform Selection
Date:       March 21, 2026
Evaluators: IT Director, Operations Director
Vendors:    Asana | Monday.com | ClickUp

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCORING RUBRIC (1–5 scale)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5 — Fully exceeds requirements; best-in-class
4 — Meets all requirements with meaningful strengths
3 — Meets requirements adequately; no significant gaps
2 — Partially meets requirements; notable gaps
1 — Does not meet requirements; significant risk

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WEIGHTED SCORECARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Criterion              Weight  Asana  Monday  ClickUp
────────────────────────────────────────────────────────
Ease of adoption         25%     4      5       3
Salesforce integration   20%     5      4       3
Reporting & dashboards   20%     4      5       4
Mobile app quality       10%     4      3       4
Pricing (3-yr TCO)       15%     3      2       5
Implementation support   10%     5      4       3
────────────────────────────────────────────────────────
Raw total (out of 5)             25     23      22

WEIGHTED SCORES:
Asana:      (4×.25)+(5×.20)+(4×.20)+(4×.10)+(3×.15)+(5×.10)
            = 1.00 + 1.00 + 0.80 + 0.40 + 0.45 + 0.50 = 4.15

Monday.com: (5×.25)+(4×.20)+(5×.20)+(3×.10)+(2×.15)+(4×.10)
            = 1.25 + 0.80 + 1.00 + 0.30 + 0.30 + 0.40 = 4.05

ClickUp:    (3×.25)+(3×.20)+(4×.20)+(4×.10)+(5×.15)+(3×.10)
            = 0.75 + 0.60 + 0.80 + 0.40 + 0.75 + 0.30 = 3.60

────────────────────────────────────────────────────────
FINAL RANKING:
  1st  Asana       4.15  ✓ RECOMMENDED
  2nd  Monday.com  4.05
  3rd  ClickUp     3.60
────────────────────────────────────────────────────────

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUALITATIVE COMMENTARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ASANA (Recommended — 4.15)
Asana's native Salesforce integration via the certified connector is the
strongest of the three, allowing bidirectional sync of deals to project
tasks without middleware. Its implementation team provides a dedicated
Customer Success Manager for contracts of this size, which meaningfully
reduces adoption risk. Pricing is mid-range; negotiate for annual billing
and a free pilot period for 20 users.

MONDAY.COM (Runner-up — 4.05)
Monday.com earned the highest ease-of-adoption score in evaluator demos —
non-technical staff picked it up fastest. Its reporting dashboards are
visually superior. The gap with Asana comes down to Salesforce integration
depth (Monday requires a Zapier or Make bridge, adding cost and
maintenance burden) and a higher 3-year TCO at our user count ($147K vs.
$112K for Asana). If Salesforce integration is ever deprioritized,
Monday.com becomes the stronger choice.

CLICKUP (Not Recommended — 3.60)
ClickUp's pricing is the lowest of the three and its mobile app is solid.
However, evaluators flagged a steep learning curve and the Salesforce
integration requires a custom API build. Implementation support is
self-serve at the quoted tier. Not recommended for a 120-person rollout
without a dedicated internal project manager.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RECOMMENDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Proceed with Asana. Before signing:
• Negotiate 3-year prepay discount (target 15–20% off list)
• Confirm Salesforce connector is included at no additional license fee
• Request a 30-day pilot for 20 users before full rollout commitment
• Ensure SLA includes 99.9% uptime with credits for downtime

Estimated 3-year TCO: $112,000 (120 users, Business tier)
```

**Abridged executive summary variant:**
```
VENDOR RECOMMENDATION SUMMARY — PM Platform Selection

Recommended: Asana (weighted score: 4.15 / 5.00)

Key reasons:
• Strongest Salesforce integration of vendors evaluated
• Dedicated implementation support at our contract size
• 3-year TCO $35K lower than Monday.com at 120 seats

Before signing: negotiate prepay discount and confirm Salesforce
connector pricing. Request 30-day pilot for 20 users.

Runner-up: Monday.com (4.05) — superior UX, higher cost and
integration complexity at our Salesforce dependency level.
```

**Next steps:**
- Share scorecard with all evaluators for sign-off before presenting to leadership
- Request final pricing proposals from Asana and Monday.com using the scorecard as negotiating leverage
- Schedule a contract review with Legal before countersigning
- Set a go/no-go decision date and communicate it to all vendors
