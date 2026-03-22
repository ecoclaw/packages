---
name: offer-analyzer
description: Summarize and compare real estate offers side-by-side with net proceeds calculations, contingency flags, and recommended response.
triggers: ["offer analyzer", "analyze offer", "compare offers", "offer review", "multiple offers", "net proceeds"]
---

# Offer Analyzer

## What this skill does

Transforms a stack of offers into a clear, actionable comparison:

1. **Side-by-side comparison table** — price, down payment, financing, contingencies, close date, and escalation
2. **Net proceeds estimate** — adjusts for concessions, closing costs, and credits to show true seller yield
3. **Risk flags** — surfaces contingency language, financing risk, appraisal exposure, and inspection scope
4. **Recommended response** — suggested counter or acceptance rationale with negotiation leverage notes

## How to invoke

```
/offer-analyzer
```

Claude will ask:
- How many offers to compare?
- For each offer: purchase price, down payment %, financing type, contingencies (inspection, financing, appraisal), close date, any credits or concessions requested, escalation clause details
- List price and any seller priorities (speed, certainty, price)?
- Estimated seller closing costs or agent commission?

## Workflow steps

### Step 1 — Offer Intake
Claude structures each offer into a normalized format for apples-to-apples comparison.

### Step 2 — Comparison Table
```
| Term                 | Offer A | Offer B | Offer C |
|----------------------|---------|---------|---------|
| Purchase Price       |         |         |         |
| Down Payment         |         |         |         |
| Financing Type       |         |         |         |
| Inspection           |         |         |         |
| Financing Contingency|         |         |         |
| Appraisal            |         |         |         |
| Close Date           |         |         |         |
| Credits Requested    |         |         |         |
| Escalation Clause    |         |         |         |
| Est. Net to Seller   |         |         |         |
```

### Step 3 — Risk Assessment
For each offer, flags:
- **Financing risk**: conventional vs. FHA/VA, pre-approval strength, down payment %
- **Appraisal exposure**: if purchase price exceeds likely appraised value
- **Contingency risk**: timeline and scope of inspection, financing contingency duration
- **Escalation ceiling**: effective max price and gap clause analysis

### Step 4 — Recommendation
Clear recommendation with rationale:
- Which offer represents the best combination of price, certainty, and timeline
- Suggested counter language if appropriate
- Notes on how to present options to seller

## Example outputs

### Example: 3-Offer Scenario, Listed at $550K

**Comparison Table:**
```
| Term                  | Offer A       | Offer B       | Offer C       |
|-----------------------|---------------|---------------|---------------|
| Purchase Price        | $562,000      | $555,000      | $575,000*     |
| Down Payment          | 20% Conv.     | 5% Conv.      | 3.5% FHA      |
| Inspection            | Yes (10 days) | Waived        | Yes (15 days) |
| Financing Contingency | 21 days       | 21 days       | 30 days       |
| Appraisal             | Waived        | Yes           | Yes           |
| Close Date            | 30 days       | 21 days       | 45 days       |
| Credits               | None          | $3,000        | $5,000        |
| Est. Net to Seller    | $533,100      | $524,350      | $536,250      |
*Offer C escalates to $575K if competing offer above $565K verified
```

**Recommendation:**
> Offer A presents the strongest combination of certainty and net proceeds. The appraisal waiver eliminates your biggest risk in a market where recent comps are tight. The 20% down conventional loan is low-risk financing. Recommend accepting Offer A or using Offer C's escalation ceiling as leverage to counter Offer A to $568K with a 25-day close.

**Next steps:**
- Verify pre-approval letters for all offers before responding
- Confirm with seller their priority: speed (Offer B), price certainty (Offer A), or max price (Offer C)
- Draft counter using language from your state's approved addendum forms
