---
name: offer-letter-generator
description: Draft professional offer letters with compensation summary, contingencies, onboarding next steps, and jurisdiction-appropriate language.
triggers: ["offer letter", "generate offer", "job offer", "employment offer", "offer package"]
---

# Offer Letter Generator

## What this skill does

Produces professional, legally grounded offer letters for full-time, part-time, and contractor hires:

1. **Offer letter draft** — full employment offer with all standard terms
2. **Compensation summary table** — base, bonus, equity, benefits summary for candidate clarity
3. **Contingency language** — background check, reference, I-9, and any role-specific requirements
4. **At-will disclaimer** — jurisdiction-appropriate at-will statement (flags non-at-will states)
5. **Onboarding checklist** — next steps for candidate and HR after offer acceptance

## How to invoke

```
/offer-letter-generator
```

Claude will ask:
- Candidate name and role title?
- Start date and work location (remote, office, or hybrid)?
- Employment type? (full-time, part-time, contractor/1099)
- Compensation: base salary, bonus target (%), equity (shares or % and vesting schedule)?
- Benefits summary to highlight? (health, 401k match, PTO, etc.)
- Any contingencies? (background check, reference check, drug screen)
- State of employment? (for at-will and other jurisdiction-specific language)
- Offer expiration date?

## Workflow steps

### Step 1 — Employment Type Routing
Claude selects the appropriate template framework:
- W-2 employee: full offer letter with benefits and at-will language
- 1099 contractor: SOW-style offer with project scope and no benefits enrollment
- Part-time: modified letter with pro-rated benefits note

### Step 2 — Offer Letter Draft
Sections:
- Congratulatory opening
- Role, department, and reporting structure
- Start date and work arrangement
- Compensation details (base, bonus, equity)
- Benefits overview with enrollment note
- Contingencies (if applicable)
- At-will statement
- Offer expiration and signature block

### Step 3 — Compensation Summary Table
```
Compensation Component   | Details
-------------------------|---------------------------
Base Salary              | $[X] / year
Annual Bonus Target      | [X]% of base (~$[Y])
Equity                   | [X] RSUs over 4 years (1-year cliff)
Health Insurance         | [Coverage level] — employer covers [X]%
401(k)                   | [X]% match up to [X]% of salary
PTO                      | [X] days / year + holidays
Total Est. Year 1 Value  | ~$[Z]
```

### Step 4 — Jurisdiction Note
Flags state-specific considerations:
- California: no non-compete clauses enforceable; CCPA notices; itemized wage statement requirements
- New York: freelance isn't free act; notice requirements
- Other states: flags where local counsel review is recommended

## Example outputs

### Example: Senior Product Manager, Remote, California

**Letter excerpt:**
```
Dear [Candidate Name],

We are thrilled to extend an offer of employment for the position of Senior Product
Manager at [Company Name], reporting to [Manager Name, Title].

Start Date: [Date]
Work Arrangement: Remote (US)

COMPENSATION
• Base Salary: $175,000 per year, paid [bi-weekly/semi-monthly]
• Annual Bonus: Target of 15% of base salary (~$26,250), based on company and
  individual performance; prorated in year one
• Equity: 3,000 RSUs vesting over four years (25% after 12-month cliff,
  quarterly thereafter), subject to Board approval

BENEFITS
[Company] offers comprehensive benefits including medical, dental, and vision
coverage (employer covers 90% of employee premium), a 4% 401(k) match,
unlimited PTO, and a $1,500 annual learning stipend.

CONTINGENCIES
This offer is contingent upon successful completion of a background check.

EMPLOYMENT STATUS
Your employment with [Company] is at-will, meaning either party may terminate
the employment relationship at any time, with or without cause or notice.

This offer expires on [Date]. Please sign and return by that date to confirm acceptance.

[Signature block]
```

**Jurisdiction Note:** California — ensure offer letter does not include non-compete or non-solicitation language. PIIA agreement should be executed at or before start date.

**Next steps:**
- Have legal or HR counsel review before sending in any new jurisdiction
- Send via DocuSign or HelloSign for digital signature and timestamp
- Trigger onboarding workflow in HRIS upon signed return
- Schedule Day 1 check-in and manager introduction before start date
