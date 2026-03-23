---
name: tax-memo
description: Write a tax research memo with relevant IRC code sections, analysis, conclusion, and recommendations
license: MIT
triggers: ["tax memo", "tax research", "tax analysis", "IRC research", "tax opinion", "tax position"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Tax Memo

## What this skill does

Produces a structured tax research memo formatted for client delivery or internal file documentation. The memo walks through the governing Internal Revenue Code sections, Treasury Regulations, and relevant case law or IRS guidance, then applies them to the specific facts to reach a defensible conclusion and practical recommendations.

1. **Issue statement** — a precise, answerable question that frames the entire analysis
2. **Applicable IRC sections and regulations** — primary authority cited with full citations
3. **Facts summary** — relevant facts as provided, clearly distinguished from assumptions
4. **Analysis** — step-by-step application of law to facts, including exceptions and edge cases
5. **Conclusion** — a direct answer to the issue statement with confidence level noted

## How to invoke

```
/tax-memo
```

Claude will ask:
- What is the tax issue or question to be researched?
- What are the relevant facts (entity type, transaction details, amounts, dates)?
- Who is the intended audience — client, internal file, or tax counsel?
- What jurisdiction applies (federal, state, or both)?
- Are there any known prior positions, elections, or rulings that affect the analysis?

## Workflow steps

### Step 1 — Issue Identification
Claude frames a precise, one-sentence issue statement. A well-formed issue names the taxpayer type, the transaction, and the specific tax question (e.g., deductibility, recognition, characterization, basis).

### Step 2 — Authority Research
Claude identifies the controlling IRC section(s), the applicable Treasury Regulations (proposed, temporary, or final), and any relevant IRS guidance (Revenue Rulings, PLRs, Chief Counsel Advice, or Notice) and case law. Citations follow standard Bluebook/tax citation format.

### Step 3 — Facts and Analysis
Claude separates stipulated facts from assumptions, then applies the legal framework to each material fact. Where the law is ambiguous or the facts create uncertainty, Claude identifies the risk and notes the weight of authority.

### Step 4 — Conclusion and Recommendations
Claude states the conclusion directly, notes the confidence level (e.g., "should," "more likely than not," "substantial authority"), and provides 2–4 practical recommendations — including any elections, disclosures, or documentation steps the taxpayer should take.

## Example outputs

### Example: Deductibility of Business Meals Under IRC §274

**Input:** A closely held S corporation in the restaurant and hospitality industry incurred $42,000 in business meal expenses in 2025. Meals were with clients and prospective clients. The company maintained receipts and a business purpose log. The owner asks whether the meals are 50% or 100% deductible.

**Tax memo draft:**
```
TAX RESEARCH MEMORANDUM

To:      File / [Client Name]
From:    [Preparer Name], CPA
Date:    March 21, 2026
Re:      Deductibility of Business Meal Expenses — IRC §274
Privilege: Prepared in anticipation of tax filing; confidential

-----------------------------------------------------------------------
ISSUE
-----------------------------------------------------------------------
Whether business meal expenses incurred by an S corporation in the
hospitality industry are deductible at 50% or 100% under IRC §274
for the 2025 tax year, and whether any exception to the 50% limitation
applies to the facts presented.

-----------------------------------------------------------------------
APPLICABLE AUTHORITY
-----------------------------------------------------------------------
Primary:
  IRC §162(a)         — Ordinary and necessary business expenses
  IRC §274(a)         — Disallowance of entertainment expenses
  IRC §274(k)         — 50% limitation on food and beverage expenses
  IRC §274(n)         — Additional 50% limitation; exceptions enumerated
  Treas. Reg. §1.274-12 — Substantiation requirements for meals

Secondary / Guidance:
  IRS Notice 2018-76  — Interim guidance on meal deductibility post-TCJA
  IRS Notice 2021-25  — Temporary 100% deduction for restaurant meals
                         (applicable to 2021–2022 only; expired)

-----------------------------------------------------------------------
FACTS
-----------------------------------------------------------------------
1. Taxpayer is an S corporation operating in the restaurant and
   hospitality industry.
2. During 2025, the company incurred $42,000 in business meal expenses
   with clients and prospective clients.
3. Meals were not lavish or extravagant under the circumstances.
4. The taxpayer maintained contemporaneous records: receipts, names of
   attendees, business purpose, and business relationship.
5. No meals were provided to employees as compensation includible in
   gross income.

ASSUMPTION: Meals were purchased from restaurants or similar food
service establishments (not prepared in-house for on-site events).

-----------------------------------------------------------------------
ANALYSIS
-----------------------------------------------------------------------
General Rule — 50% Limitation
Under IRC §274(k), no deduction is allowed for food or beverage expenses
unless (1) the expense is not lavish or extravagant, and (2) the taxpayer
or an employee of the taxpayer is present. IRC §274(n) then limits the
allowable deduction to 50% of the amount that would otherwise be deductible
under IRC §162.

Post-TCJA, the Tax Cuts and Jobs Act of 2017 eliminated the deduction
for entertainment expenses under §274(a)(1) but preserved the deduction
for business meals subject to the 50% limitation. IRS Notice 2018-76
confirmed that meals with clients remain deductible at 50% provided:
  (a) the expense is an ordinary and necessary business expense under §162,
  (b) the taxpayer or employee is present,
  (c) the food and beverages are not lavish or extravagant, and
  (d) the meal is not provided during or at an entertainment activity
      (or, if so, is separately stated on the bill).

Temporary 100% Exception — Inapplicable
IRS Notice 2021-25 provided a temporary 100% deduction for food and
beverages purchased from restaurants during 2021 and 2022. This exception
expired December 31, 2022. For the 2025 tax year, the general 50%
limitation under §274(n) applies.

Hospitality Industry Exception — Not Applicable Here
IRC §274(n)(2)(B) exempts from the 50% limitation amounts treated as
compensation to the recipient. This would apply if meals were includible
in an employee's W-2 income. The facts do not indicate this scenario.
IRC §274(n)(2)(A) exempts amounts excludable under §132 (de minimis
fringe) — meals provided on the employer's premises for the employer's
convenience. Client meals off-premises do not qualify.

Substantiation
IRC §274(d) and Treas. Reg. §1.274-5T require contemporaneous records
establishing amount, time and place, business purpose, and business
relationship of persons entertained. The taxpayer's receipt-and-log
system satisfies this requirement.

-----------------------------------------------------------------------
CONCLUSION
-----------------------------------------------------------------------
The $42,000 in business meal expenses is deductible at 50%, yielding a
$21,000 deduction for 2025, subject to proper substantiation. No exception
to the 50% limitation applies under the facts presented. Confidence level:
SHOULD (high degree of certainty; controlling authority directly on point).

-----------------------------------------------------------------------
RECOMMENDATIONS
-----------------------------------------------------------------------
1. Report $21,000 as the net meal deduction on the S corporation's 2025
   Form 1120-S (Schedule K, line 12d or as otherwise required).

2. Retain all meal receipts, business purpose logs, and attendee records
   for a minimum of 7 years. The §274(d) substantiation requirement is a
   threshold requirement — inadequate records can result in full
   disallowance even if the expense was genuinely incurred.

3. Separate any meal charges that appear on the same invoice as
   entertainment to avoid the risk of full disallowance under §274(a).
   Train staff to request itemized checks when meals accompany events.

4. Monitor any legislative developments. Congress has periodically
   considered reinstating temporary 100% meal deductions; tracking
   IRS Notices through the remainder of 2026 is advisable.

-----------------------------------------------------------------------
DISCLAIMER
-----------------------------------------------------------------------
This memorandum is for informational purposes only and does not
constitute tax or legal advice specific to your situation. Tax law
is complex and fact-dependent; consult a qualified CPA or tax attorney
before taking a position on your return. This memo does not constitute
a "covered opinion" under Circular 230.
```

**Next steps:**
- Have a second reviewer verify all IRC citations before delivering to the client
- Attach supporting authority (Notice 2018-76, relevant Treas. Reg.) to the file copy
- If the amount is material, consider whether a §6662 penalty disclosure is warranted
- Use `/engagement-letter` to document the scope of the tax research engagement
