---
name: client-advisory-letter
description: Write a professional financial advisory letter with findings, recommendations, and action steps
license: MIT
triggers: ["advisory letter", "client letter", "financial advisory", "CPA letter", "accounting letter", "client communication"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Client Advisory Letter

## What this skill does

Produces a professional client advisory letter that translates accounting findings and financial analysis into clear, actionable guidance. The letter is structured for a non-technical reader — a business owner, executive, or individual — who needs to understand their situation, see the key findings, and know exactly what to do next.

1. **Situation summary** — brief context setting out why the letter is being written
2. **Key findings** — prioritized observations drawn from the engagement work
3. **Recommendations** — specific, reasoned guidance tied directly to each finding
4. **Action steps with deadlines** — numbered to-do list with owner and due date
5. **Follow-up items** — open questions, upcoming deadlines, and next meeting agenda

## How to invoke

```
/client-advisory-letter
```

Claude will ask:
- Who is the client and what type of engagement does this letter follow?
- What are the 3–5 key findings or observations to communicate?
- What specific recommendations should accompany each finding?
- What is the tone — routine advisory, urgent corrective action, or year-end planning?
- What are the relevant deadlines or upcoming filing dates the client needs to know?

## Workflow steps

### Step 1 — Context Framing
Claude establishes the purpose and occasion of the letter: what engagement was performed, what period it covers, and what the client should understand going into the findings section.

### Step 2 — Findings Prioritization
Claude organizes findings from highest to lowest impact. Each finding is stated plainly — no accounting jargon without definition — and tied to a dollar amount or risk consequence where relevant.

### Step 3 — Recommendations and Rationale
Each finding is paired with a specific recommendation. Claude explains the "why" behind each recommendation so the client understands the consequence of action vs. inaction.

### Step 4 — Action Plan Assembly
Claude produces a numbered action plan with a responsible party (client, CPA, attorney, bookkeeper) and a specific deadline for each item. Vague tasks ("discuss further") are converted to concrete actions ("schedule a call by April 15 to review payroll tax deposits").

## Example outputs

### Example: Year-End Tax Planning Advisory Letter for a Small Business Owner

**Input:** S corporation client, calendar year end, net income significantly above prior year (~$380K vs. $210K prior year), no estimated tax payments made in Q3 or Q4, owner takes a $90K salary. Findings: underpayment penalty exposure, opportunity for retirement plan contribution, need to review reasonable compensation, potential QBI deduction optimization.

**Advisory letter draft:**
```
[FIRM LETTERHEAD]

March 21, 2026

James R. Holloway
President, Holloway Fabrication & Design, Inc.
4812 Industrial Parkway
Sacramento, CA 95834

Re: Year-End Tax Planning Advisory — Tax Year 2025

Dear Jim,

Thank you for the time you and your team spent with us over the past
several weeks pulling together your 2025 financials. This letter
summarizes our key findings from that review and our recommendations
for your consideration before we finalize your 2025 returns.

Please read this letter carefully. Several items require action by
specific deadlines, and a few have material dollar consequences.

---

SITUATION SUMMARY

Holloway Fabrication & Design, Inc. had a strong 2025. Preliminary
net income before officer compensation adjustments is approximately
$380,000 — a significant increase from $210,000 in 2024. While this
is excellent news for the business, it creates several planning
considerations we want to address before the filing deadline.

---

KEY FINDINGS AND RECOMMENDATIONS

Finding 1: Underpayment Penalty Exposure — Estimated $4,200–$6,100
You made no estimated tax payments in Q3 or Q4 2025. Based on
preliminary income, we estimate you may owe between $68,000 and
$74,000 in personal income tax for 2025 (federal and California
combined). Without adequate withholding or estimated payments, the
IRS and FTB impose underpayment penalties under IRC §6654 and
R&TC §19136, respectively.

Recommendation: We recommend making an immediate 2025 Q4 catch-up
payment before filing and carefully planning your 2026 Q1 estimated
payment (due April 15, 2026) based on the annualized income method
if income is lumpy during the year. We will calculate your exact
penalty exposure when we prepare your returns.

Finding 2: Retirement Plan Contribution — Up to $69,000 Available
You currently have no company retirement plan in place. A SEP-IRA
established before your tax return due date (including extensions)
allows a 2025 contribution of up to 25% of compensation, to a
maximum of $69,000. At your W-2 salary of $90,000, this equates
to a potential $22,500 deduction — saving you approximately $8,100
in combined federal and California income tax.

A Solo 401(k) offers an even larger potential contribution if you
are the only participant, but must have been established by
December 31, 2025 to make 2025 contributions. We can still
establish one for 2026 contributions.

Recommendation: Establish a SEP-IRA by October 15, 2026 (your
extended due date) and fund a $22,500 contribution. This is one
of the highest-return actions you can take this filing season.

Finding 3: Reasonable Compensation Review
Your W-2 salary of $90,000 on $380,000 of S corporation net income
represents approximately 24% of gross receipts. The IRS requires
S corporation owner-employees to receive reasonable compensation for
services rendered before taking distributions. Based on published
compensation data for fabrication shop operators and managers in
Northern California, we believe a defensible reasonable compensation
range is $120,000–$145,000 per year.

An IRS audit that recharacterizes $30,000–$55,000 of distributions
as wages would result in additional payroll tax liability of
approximately $4,300–$8,000 plus interest and penalties.

Recommendation: We recommend you increase your 2026 salary to at
least $120,000. For 2025, we will document the basis for your
current compensation in the engagement file. We strongly recommend
conducting a formal compensation study if this issue is raised
on examination.

Finding 4: Qualified Business Income Deduction Optimization
Your preliminary 2025 QBI deduction under IRC §199A is limited by
the W-2 wage limitation because your taxable income exceeds the
$383,900 married filing jointly threshold. Increasing your W-2
wages in 2026 (per Finding 3) and/or funding retirement accounts
will increase your QBI deduction dollar-for-dollar in many
scenarios.

Recommendation: We will model two or three scenarios for your
2026 planning call to optimize the interplay between salary,
retirement contributions, and the QBI deduction.

---

ACTION PLAN

  #   Action                              Owner      Deadline
  --  ----------------------------------  ---------  -----------
  1   Make Q4 2025 catch-up estimated     Jim        ASAP
      tax payment (amount TBD — we will
      send a calculation by March 28)
  2   Open SEP-IRA account at brokerage   Jim        April 30
      of choice (Fidelity, Schwann, etc.)
  3   Confirm 2025 SEP-IRA contribution   Jim/CPA    Oct 15, 2026
      amount and fund before due date
  4   Review 2026 payroll and increase    Jim/PEO    May 1
      salary to $120,000 effective Q2
  5   Schedule 2026 planning call         Jim/CPA    April 15

---

UPCOMING DEADLINES

  April 15, 2026  —  2025 Form 1040 due (extension recommended)
  April 15, 2026  —  2026 Q1 estimated tax payment due
  September 15    —  2025 Form 1120-S extended due date
  October 15      —  2025 Form 1040 extended due date; SEP-IRA
                      contribution deadline

---

We are here to help you navigate all of the above. Please do not
hesitate to call or email with questions. We will follow up with
the estimated tax calculation by March 28.

Sincerely,

[CPA Name], CPA
[Firm Name]
[Phone] | [Email]

---
DISCLAIMER: This letter is for informational purposes only and does
not constitute tax or legal advice specific to your situation. Tax
rules are complex and fact-dependent. Consult a qualified tax
professional before taking any action described above.
```

**Next steps:**
- Verify all income and payroll figures against the finalized trial balance before sending
- Attach the IRS estimated tax worksheet or your firm's penalty calculation exhibit
- Confirm client signature is not required — or use an engagement addendum if this changes the scope of services
- Calendar the April 15 Q1 estimated tax deadline as a follow-up task in your practice management system
