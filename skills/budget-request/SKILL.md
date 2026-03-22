---
name: budget-request
description: Write a budget request memo with business case, cost breakdown, ROI framing, and approval ask
triggers: ["budget request", "budget memo", "capital request", "spending request", "budget justification", "business case"]
---

# Budget Request

## What this skill does

Produces a professional budget request memo that gives approvers everything they need to say yes — and anticipates the questions that would make them say no. The memo is structured around the business need first, the money second, which shifts the conversation from "this costs X" to "not doing this costs us Y."

1. **Executive summary** — one paragraph with the ask, the amount, and the primary justification
2. **Business need** — the problem, opportunity, or risk driving the request, with supporting data
3. **Proposed spend with line-item breakdown** — detailed cost table so there are no surprises in implementation
4. **ROI and cost avoidance framing** — quantified return, payback period, or risk reduction where possible
5. **Alternatives considered** — demonstrates due diligence; explains why this option beats the alternatives
6. **Clear approval ask** — specific action, amount, and timeline requested from the approver

## How to invoke

```
/budget-request
```

Claude will ask:
- What is the purchase or investment you're requesting budget for?
- What is the total amount requested, and what is the proposed timeline to spend it?
- What business problem, opportunity, or risk does this address?
- What are the line items? (hardware, software, labor, training, contingency, etc.)
- What alternatives were considered, and why is this option the right choice?

## Workflow steps

### Step 1 — Framing the Business Case
Claude leads with the business need, not the product. The strongest budget requests open with a problem the reader already recognizes, then present the spend as the solution.

### Step 2 — Cost Table Construction
Claude builds a line-item breakdown by category with one-time vs. recurring costs separated, so the reader understands both the upfront commitment and the ongoing expense.

### Step 3 — ROI and Payback Calculation
Claude frames the return in the approver's terms — time saved × FTE cost, revenue enabled, risk cost avoided, or compliance exposure eliminated. Assumptions are stated explicitly.

### Step 4 — Memo Assembly and Approval Ask
Claude assembles the full memo with executive summary, numbered sections, and a precise approval ask that specifies amount, authority level, and deadline.

## Example outputs

### Example: $75K Budget Request for HR Software Platform

**Input:** Requesting $75,000 for a new HRIS platform (Rippling). Current state: HR manages 180 employees across 4 spreadsheets, manual payroll processing takes 3 days/month, onboarding takes 2 weeks per hire. 12 hires expected this year. Alternatives considered: ADP Workforce Now, staying on spreadsheets. Requester: VP of People.

**Budget request memo draft:**
```
MEMORANDUM

To:      CFO and Executive Leadership Team
From:    Marisol Vega, VP of People
Date:    March 21, 2026
Re:      Budget Request — HRIS Platform Implementation ($75,000)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EXECUTIVE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
We are requesting $75,000 to implement Rippling, a unified HR Information
System (HRIS), replacing our current patchwork of four spreadsheets and
manual payroll processing. At our current headcount of 180 and a projected
12 hires this year, our existing approach is creating compliance risk and
consuming roughly $42,000 in annual HR staff time on preventable manual
tasks. Implementation will deliver a payback period of approximately 21
months, with ongoing annual savings of $38,000 thereafter.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. BUSINESS NEED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Our HR function currently manages 180 employees using four disconnected
spreadsheets for personnel records, benefits enrollment, time-off tracking,
and onboarding checklists. Payroll is processed manually each month by our
HR Generalist, requiring approximately 24 hours of data entry and
reconciliation. New hire onboarding takes an average of 14 business days
from offer acceptance to Day 1 productivity.

This creates three compounding problems:

a) Compliance risk: California's SB 1162 pay transparency requirements and
   our upcoming SOC 2 Type II audit both require audit-ready employee
   records. Our current spreadsheet system cannot produce the required
   documentation without significant manual effort.

b) Operational cost: At our HR Generalist's fully loaded rate of $72/hr,
   manual payroll processing costs approximately $20,700/year. New-hire
   onboarding at 14 days vs. an industry average of 7 days costs an
   estimated $21,600/year in lost productivity (12 hires × 7 days ×
   $257/day average blended rate).

c) Scaling risk: We are projecting 35% headcount growth over 24 months.
   Our current process does not scale without additional HR headcount.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. PROPOSED SPEND — LINE-ITEM BREAKDOWN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ONE-TIME COSTS
Item                                    Amount
──────────────────────────────────────────────
Implementation and configuration        $18,000
Data migration (3 spreadsheets)          $6,500
IT integration (SSO, Active Directory)   $4,000
Staff training (2 sessions, 15 staff)    $3,500
──────────────────────────────────────────────
One-time subtotal                       $32,000

RECURRING ANNUAL COSTS (Year 1)
Item                                    Amount
──────────────────────────────────────────────
Rippling platform license (180 users
  × $19/user/month × 12 months)        $41,040
Annual support and success package       $1,960
──────────────────────────────────────────────
Year 1 recurring subtotal              $43,000

TOTAL YEAR 1 REQUEST:                  $75,000
Ongoing annual cost (Year 2+):         $43,000

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. EXPECTED ROI AND COST AVOIDANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Annual savings delivered by Rippling:
  Payroll automation (saves 20 hrs/month × $72/hr × 12)  = $17,280
  Onboarding time reduction (7 days × 12 hires × $257)   = $21,588
  Benefits admin automation (est. 4 hrs/month × $72)     = $3,456
  ─────────────────────────────────────────────────────────────────
  Total annual quantified savings:                        = $42,324

  Compliance risk avoidance (estimated cost of a single
  DLSE audit finding or SOC 2 remediation):              ~$50,000+
  (Not included in payback calculation; treated as
  risk reduction benefit)

Net annual benefit after Year 1 licensing: $42,324 - $43,000 = ($676)
Net annual benefit after Year 2+ licensing: $42,324 - $43,000 + growth
  savings from 35% headcount growth (est. $14,800 additional) = $14,124

Payback period: ~21 months from go-live

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. ALTERNATIVES CONSIDERED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Option A: ADP Workforce Now
  Evaluated. 3-year TCO is approximately $189,000 — $18,000 more than
  Rippling over the same period. Implementation timeline is 5–6 months
  vs. Rippling's 6–8 weeks. ADP does not include device management,
  which we would need separately.

Option B: Continue with current spreadsheet system + hire additional HR staff
  A junior HR Coordinator to absorb growing manual work would cost
  $58,000–$65,000/year in fully loaded compensation — more than the
  ongoing Rippling license with no compliance or productivity benefit.

Option C: Rippling (recommended)
  Best-fit feature set for our size, fastest implementation, native
  Slack and Google Workspace integration already in our stack, and
  lowest 3-year TCO of options evaluated.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. APPROVAL REQUEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
We are requesting approval of $75,000 from the Operations budget for
Year 1 implementation and licensing of Rippling. Approval by April 4,
2026 allows us to begin implementation before Q2 hiring begins and
onboard the platform before our SOC 2 audit window in July.

Questions: Contact Marisol Vega at m.vega@company.com or x4412.

Attachments:
  - Rippling proposal and pricing sheet (dated March 14, 2026)
  - ADP Workforce Now comparison summary
  - HR process time study (February 2026)
```

**Executive one-pager variant:**
```
BUDGET REQUEST — QUICK SUMMARY
HR Platform (Rippling) | $75,000 | Q2 2026

ASK: $75K year-one investment (implementation + license, 180 users)
ONGOING: ~$43K/year

WHY NOW: SOC 2 audit in July; 12 hires planned in Q2–Q3; current
process costs $42K/year in manual labor — more than the license.

ROI: Payback in ~21 months. Year 2+ net savings: ~$14K/year plus
~$50K compliance risk avoidance.

APPROVED BY REQUEST OF: Marisol Vega, VP People | Decision needed by April 4
```

**Next steps:**
- Get CFO and budget owner signatures on the final memo before circulating
- Attach vendor proposal, comparison summary, and any supporting data as exhibits
- Schedule a 20-minute budget review meeting to walk leadership through Section 3 (ROI)
- If approved, begin vendor contracting process and set implementation kickoff date
