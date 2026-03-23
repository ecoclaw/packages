---
name: renewal-letter
description: Write a policy renewal letter that highlights coverage changes, premium adjustments, and renewal recommendations
license: MIT
triggers: ["renewal letter", "policy renewal", "renewal notice", "insurance renewal", "coverage renewal", "renewal communication"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Renewal Letter

## What this skill does

Produces a professional policy renewal letter that communicates clearly what is changing, what is staying the same, and what the insured should do before the renewal effective date. The letter is structured to protect the broker-client relationship during a difficult renewal, explain premium changes without jargon, and prompt timely action to avoid a coverage lapse.

1. **Policy term and renewal date** — clear identification of the expiring and renewing policy period
2. **Coverage summary** — what coverages are in force, with limits at a glance
3. **Changes from prior year** — new coverages, removed coverages, limit changes, and endorsement changes
4. **Premium change with explanation** — how much more (or less) the client will pay and why
5. **Recommended next steps** — what the client needs to do and by when

## How to invoke

```
/renewal-letter
```

Claude will ask:
- What type of policy is renewing (commercial auto, property, CGL, professional liability, workers' comp, homeowners, etc.)?
- Who is the insured and what are the renewing policy details (carrier, limits, effective date)?
- What is changing at renewal — coverage, limits, endorsements, deductibles?
- What is the premium change — amount and percentage?
- What is the reason for the premium change (rate increase, exposure change, loss history, market conditions)?

## Workflow steps

### Step 1 — Renewal Summary Header
Claude drafts a clear header block: insured name, policy number, line of business, expiring date, renewing date, expiring premium, and renewing premium. This is the first thing the client sees and must be unambiguous.

### Step 2 — Coverage Change Narrative
Claude produces a plain-language summary of what is changing — new endorsements, removed coverages, limit adjustments, deductible changes — and what is remaining the same. Changes are highlighted with a "New," "Removed," or "Revised" tag so the client can scan the letter quickly.

### Step 3 — Premium Explanation
Claude explains the premium change in terms the client understands. Rate increases are attributed to specific drivers (market hardening, loss history, exposure growth, inflation factors) without using carrier jargon. Where the broker negotiated a reduction from the initial indication, that is highlighted.

### Step 4 — Action Items and Deadline
Claude ends with a numbered list of actions the insured must take — sign and return the renewal application, pay the deposit, update vehicle schedules, add new locations — with specific deadlines. A lapse warning is included if the renewal is close to the effective date.

## Example outputs

### Example: Commercial Auto Policy Renewal with 12% Premium Increase

**Input:** Insured: Summit Mechanical Contractors Inc. Commercial auto policy renewing May 1, 2026. Fleet: 14 vehicles (8 pickup trucks, 4 service vans, 2 flatbeds). Liability limit $1M CSL. Physical damage: ACV with $1,000 collision deductible. Expiring premium: $38,400. Renewing premium: $43,000 (12% increase). Premium drivers: filed rate increase (6%), two at-fault accidents in 2025 (resulting in 8% surcharge offset partially by safe driver credits). Two vehicles added to schedule in 2025, increasing exposure. No coverage changes except one new endorsement: hired auto liability added.

**Renewal letter draft:**
```
[AGENCY LETTERHEAD]

March 21, 2026

David K. Ostrowski
President, Summit Mechanical Contractors Inc.
3811 Industrial Loop Road
Colorado Springs, CO 80910

Re: Commercial Auto Policy Renewal Notice
    Policy No.: [CA-XXXXXXXX] | [Carrier Name]
    Renewal Effective: May 1, 2026

Dear David,

Your commercial auto policy is coming up for renewal. We have
completed our review of your account and want to give you a full
picture of what is renewing, what is changing, and what action
you need to take before May 1.

---

YOUR RENEWAL AT A GLANCE

  Policy Period:    May 1, 2026 – May 1, 2027
  Prior Period:     May 1, 2025 – May 1, 2026
  Vehicles Insured: 14 (see schedule attached)
  Carrier:          [Carrier Name]

  COVERAGE SUMMARY
  -----------------------------------------------
  Liability               $1,000,000 CSL
  Uninsured Motorist      $1,000,000 CSL
  Medical Payments        $5,000 per person
  Comprehensive           ACV / $500 deductible
  Collision               ACV / $1,000 deductible
  Hired Auto Liability    $1,000,000 (NEW — see below)
  Non-Owned Auto Liab.    $1,000,000 (unchanged)
  -----------------------------------------------

  Expiring Premium:   $38,400
  Renewing Premium:   $43,000
  Change:             + $4,600 (+12.0%)

---

WHAT IS CHANGING AT RENEWAL

NEW — Hired Auto Liability Endorsement
We have added hired auto liability to your policy at no additional
charge at renewal (the cost is absorbed in the rate). This covers
liability arising when you or your employees rent vehicles for
business use — for example, when you rent a truck while a fleet
vehicle is being serviced. If any of your team members rents
vehicles for business, this coverage is important to have.

REVISED — Vehicle Schedule
Your fleet grew by two vehicles in 2025 (Unit 13, 2024 Ford F-250
and Unit 14, 2024 Ram ProMaster cargo van). Both have been added
to the renewing schedule. The additional exposure from these vehicles
accounts for approximately $1,400 of the renewal premium increase.

NO CHANGE — Liability Limits and Deductibles
Your $1M combined single limit and your physical damage deductibles
($500 comprehensive / $1,000 collision) are unchanged. We reviewed
whether an umbrella limit increase would be appropriate given the
fleet expansion but determined your current limits remain adequate
for your operations.

---

WHY YOUR PREMIUM IS INCREASING

We want to be straightforward about the factors behind the 12% increase:

Factor                              Impact on Premium
----------------------------------  -------------------
Filed rate increase (industry-wide)      + $2,304   (+ 6.0%)
Two at-fault accidents in 2025           + $3,072   (+ 8.0% surcharge)
Two additional vehicles added            + $1,400   (exposure)
Safe driver credit (6 drivers            - $2,176   (- 5.7% credit)
  with 3+ clean years)
Net increase                             + $4,600   (+12.0%)

A few notes on this:
- The 6% filed rate increase is a market-wide adjustment applied
  across all commercial auto policyholders by this carrier — it
  is not specific to your account. Commercial auto rates have
  increased nationally due to rising repair costs, increased
  accident frequency, and higher jury verdicts in auto liability
  cases over the past two years.

- The two at-fault accidents in 2025 (January — rear-end collision
  at $8,200 paid; September — backing accident at $4,100 paid)
  resulted in a surcharge on your renewal. The surcharge will reduce
  or be eliminated at the 2027 renewal if no additional incidents
  occur in the next 12 months.

- We negotiated a safe driver credit based on your six drivers with
  clean three-year records. This saved you approximately $2,176
  compared to the initial indication we received from the carrier.

We believe this is a competitive renewal given your 2025 loss activity.
We did market this account to two additional carriers; the alternatives
came in at $46,200 and $49,800 respectively. We recommend renewing
with your current carrier.

---

STEPS TO TAKE BEFORE MAY 1

Please complete the following before April 18 to ensure no lapse
in coverage:

  1. REVIEW AND SIGN the attached renewal application and vehicle
     schedule. Confirm all vehicle details are correct — VINs,
     ownership (owned vs. leased), and garaging location. Return
     to our office by April 18.

  2. PAY THE RENEWAL PREMIUM. You will receive a premium invoice
     from [Carrier Name] directly. Payment is due no later than
     May 1. If you prefer to pay monthly, contact our office by
     April 15 to enroll in the premium financing plan (estimated
     monthly payment: $3,870/month, subject to finance charges).

  3. CONFIRM DRIVER LIST. Please review the attached driver list
     and notify us of any drivers who should be added or removed.
     Newly hired drivers operating your vehicles who are not on
     the policy may not be covered.

  4. CERTIFICATES OF INSURANCE. If you need updated certificates
     for general contractors or project owners, contact our office
     after May 1 when the new policy number is assigned. We can
     send certificates electronically within one business day.

IMPORTANT: If we do not receive your signed application and payment
by May 1, your policy will lapse. A lapse in commercial auto coverage
may result in suspension of your DOT operating authority and puts
your vehicles at risk of being uninsured in the event of an accident.
Please do not let this deadline pass.

---

ADDITIONAL COVERAGE TO CONSIDER

Based on our review of your operations, we recommend discussing
the following at our next meeting:

  - Umbrella / Excess Liability: Your $1M auto limit is the minimum
    for a fleet of your size. A $2–5M umbrella adds significant
    protection for approximately $800–$2,400/year additional premium.

  - Inland Marine / Tools and Equipment: Your field tools and
    contractor equipment are not covered under your commercial
    auto policy. An inland marine policy covers equipment while
    in transit and on job sites.

We are happy to provide a no-cost quote for either of these.
Call or email any time.

---

Thank you for allowing us to serve Summit Mechanical. We are committed
to making sure your coverage keeps up with your growing business.

Sincerely,

[Agent Name], CPCU
[Agency Name]
[Phone] | [Email]
[License No.]

Enclosures: Renewal Application, Vehicle Schedule, Driver MVR Summary

---
DISCLAIMER: This renewal letter is for informational purposes only
and does not constitute a binder, insurance contract, or guarantee
of coverage. Coverage is subject to the terms, conditions, exclusions,
and endorsements of the issued policy. Consult a licensed insurance
professional for advice specific to your situation.
```

**Estimated premium comparison variant:**
```
PREMIUM COMPARISON — MARKET SUMMARY

Carrier              Premium     Liability   Comments
-------------------  ----------  ----------  ---------------------------
[Current Carrier]    $43,000     $1M CSL     Incumbent; full history
[Market A]           $46,200     $1M CSL     Higher rate; fewer credits
[Market B]           $49,800     $1M CSL     Surcharge for loss history
                                             applied more aggressively

Recommendation: Renew with current carrier. Savings vs. best
alternative: $3,200.
```

**Next steps:**
- Send the renewal letter with the application and vehicle schedule attached at least 45 days before the renewal date
- Create a follow-up task for April 10 if the signed application has not been returned
- Add the two 2025 accidents to the loss history tracker and calendar a reminder to review their impact at the 2027 renewal
- Request MVRs for any new drivers added to the fleet before binding
