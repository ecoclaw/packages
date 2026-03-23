---
name: coverage-explainer
description: Write a plain-language explanation of insurance coverage terms, limits, exclusions, and what's actually covered
license: MIT
triggers: ["coverage explainer", "insurance coverage", "policy explanation", "what does it cover", "coverage summary", "insurance terms"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Coverage Explainer

## What this skill does

Translates complex insurance policy language into plain-language explanations that a business owner, homeowner, or individual can actually understand and act on. The output covers what the policy covers, what it does not cover, how limits and sublimits work in practice, how to file a claim, and concrete real-world examples of covered versus not-covered scenarios.

1. **Coverage overview** — what the policy type is designed to do and who it protects
2. **Key coverages and limits** — what's covered, to what dollar amount, and under what conditions
3. **Common exclusions** — what the policy explicitly does not cover, in plain language
4. **How claims work** — step-by-step claim process from loss to payment
5. **Covered vs. not-covered scenarios** — side-by-side examples grounding the abstract in the real

## How to invoke

```
/coverage-explainer
```

Claude will ask:
- What type of insurance policy needs to be explained (CGL, commercial property, professional liability, workers' comp, homeowners, auto, umbrella, etc.)?
- Who is the audience — business owner, individual policyholder, or claims professional?
- Are there specific terms, exclusions, or scenarios the client is confused about?
- What are the key policy limits (per-occurrence, aggregate, deductible)?
- Should the explainer focus on a specific claim situation or serve as a general policy overview?

## Workflow steps

### Step 1 — Policy Type and Audience Framing
Claude identifies the policy form (ISO standard form, manuscript, or proprietary), the coverage trigger (occurrence vs. claims-made), and the intended reader's level of insurance literacy. The language is calibrated accordingly — no jargon for a business owner, more technical for an adjuster or broker.

### Step 2 — Coverage Mapping
Claude maps the major insuring agreements into plain language, then lists each coverage part with its limit, sublimit (if any), and a one-sentence plain-language translation.

### Step 3 — Exclusions Translation
Claude identifies the most common and consequential exclusions for the policy type — not every exclusion, but the ones most likely to surprise the insured — and explains them in plain language with examples.

### Step 4 — Scenarios and Q&A
Claude provides 4–6 concrete "would this be covered?" scenarios drawn from the specific policy type and limits provided, with clear YES/NO/MAYBE answers and brief explanations.

## Example outputs

### Example: Plain-Language Explanation of a Commercial General Liability Policy

**Input:** Small contractor, commercial general liability (CGL) policy, ISO CG 00 01 form. Limits: $1M per occurrence / $2M general aggregate / $2M products-completed operations aggregate. $500 deductible does not apply to BI/PD claims. Claims-made exclusion does not apply — this is an occurrence form. Client question: "What does this actually cover and what should I worry about?"

**Coverage explainer draft:**
```
COMMERCIAL GENERAL LIABILITY (CGL) POLICY — PLAIN LANGUAGE GUIDE

Prepared for: [Client Name]
Policy Period: [Effective Date] to [Expiration Date]
Insurer: [Carrier Name] | Policy No.: [XXXXXXXXXX]

---

WHAT IS A CGL POLICY?

A Commercial General Liability (CGL) policy protects your business
when someone else claims your work or operations caused them bodily
injury (BI) or property damage (PD), or when someone claims you
said or did something that harmed their reputation or business
(personal and advertising injury).

Think of it as the policy that pays when someone sues you — or
threatens to — over something your business did or failed to do.

---

YOUR KEY COVERAGES AT A GLANCE

COVERAGE A — BODILY INJURY AND PROPERTY DAMAGE
What it covers: If a third party (a customer, visitor, or bystander)
is injured, or their property is damaged, because of your business
operations or completed work, Coverage A pays for:
  - Legal defense costs (no dollar cap — the insurer pays defense
    costs in addition to the limit, not out of it)
  - Settlements or judgments up to your policy limit
  - Medical payments to injured parties who don't sue (see below)

Your limits:
  $1,000,000  per occurrence (each separate incident)
  $2,000,000  general aggregate (max paid in one policy year for
              all Coverage A and B claims combined)
  $2,000,000  products-completed operations aggregate (max paid
              for claims arising from your completed work)

Plain-language version: If a subcontractor trips over your equipment
on a job site and breaks an arm, Coverage A handles the lawsuit.
If the tile work you completed causes a water leak that damages a
client's flooring, Coverage A handles that too — under the
completed operations aggregate.

---

COVERAGE B — PERSONAL AND ADVERTISING INJURY
What it covers: Claims that your business harmed someone through:
  - False arrest or malicious prosecution
  - Wrongful eviction (for landlords)
  - Defamation (libel or slander)
  - Copyright infringement in your advertising
  - Invasion of privacy

Limit: Included within the $1M per-occurrence / $2M aggregate above.

Plain-language version: If a competitor claims your brochure copied
their logo, or a former employee claims you defamed them in an
industry publication, Coverage B may respond.

---

COVERAGE C — MEDICAL PAYMENTS
What it covers: Pays reasonable medical expenses to a person injured
on your premises or because of your operations — regardless of fault
— as a goodwill gesture to prevent a lawsuit.

Limit: Typically $5,000–$10,000 per person (confirm your schedule).

Plain-language version: A customer cuts their hand on exposed metal
at your shop. You can pay their urgent care bill directly through
this coverage without admitting liability — and without needing them
to file a lawsuit.

---

WHAT THIS POLICY DOES NOT COVER (KEY EXCLUSIONS)

Here are the exclusions most likely to catch business owners off guard:

1. YOUR OWN PROPERTY AND WORK
   The CGL does not cover damage to property you own, rent, or that
   is in your care, custody, or control. It also does not cover the
   cost to redo your own faulty work. If your crew installs the wrong
   tile and it has to be ripped out, the CGL does not pay for the
   reinstallation — only for resulting damage to other property
   (e.g., the subfloor that was damaged because of the water intrusion).

2. PROFESSIONAL ERRORS
   If you give advice — design recommendations, specifications,
   consulting guidance — and that advice causes a loss, the CGL
   does not cover it. That's what Errors & Omissions (E&O) or
   Professional Liability insurance is for.

3. AUTOMOBILE LIABILITY
   Vehicles you own, lease, or operate are not covered under the CGL.
   You need a commercial auto policy for liability arising from vehicle
   use. Note: hired and non-owned auto coverage is an endorsement
   available for vehicles you don't own but use for business.

4. WORKERS' COMPENSATION / EMPLOYER LIABILITY
   Injuries to your own employees are excluded. Workers' compensation
   insurance covers employee injuries; it's separate and usually
   required by law.

5. POLLUTION
   The absolute pollution exclusion eliminates coverage for most claims
   involving pollutants — including chemical spills, mold, lead paint,
   and asbestos. A pollution liability policy is needed if your work
   involves environmental exposure.

6. INTENTIONAL ACTS
   Damage you or your employees cause intentionally is excluded.
   The CGL only covers accidents, not deliberate actions.

---

HOW A CLAIM WORKS (STEP BY STEP)

1. LOSS OCCURS — A third party is injured or property is damaged
   due to your operations.

2. REPORT PROMPTLY — Notify your broker or insurer as soon as you
   become aware of the incident, even if no one has filed a claim yet.
   Most policies require "prompt" notice; delay can jeopardize coverage.

3. INSURER ASSIGNS AN ADJUSTER — An adjuster contacts you to gather
   facts, inspect any damage, and evaluate the claim.

4. DEFENSE IS ARRANGED — If a lawsuit is filed, the insurer appoints
   defense counsel and pays legal fees. You retain the right to
   approve any settlement (within policy limits).

5. SETTLEMENT OR JUDGMENT — The insurer negotiates a settlement or,
   if the case goes to trial, pays any judgment up to your limit.
   Amounts above your limit are your responsibility.

6. AGGREGATE TRACKS — Each payment reduces your annual aggregate.
   If you exhaust your aggregate mid-year, you have no remaining
   CGL coverage until renewal. This is when an umbrella policy matters.

---

COVERED OR NOT? REAL-WORLD SCENARIOS

Scenario 1: A visitor slips on wet concrete at your worksite
and fractures their wrist.
  COVERED — Bodily injury to a third party arising from your
  operations. Coverage A responds.

Scenario 2: Your employee accidentally backs a company truck
into a client's parked car.
  NOT COVERED by the CGL — Vehicle liability requires a
  commercial auto policy.

Scenario 3: Water damage occurs to a finished bathroom you
tiled six months ago. The water intrusion damages the client's
hardwood floors in the adjacent hallway.
  SPLIT — The cost to repair or replace your own tile work is
  not covered (your work exclusion). Damage to the hardwood
  floors may be covered under the completed operations aggregate,
  subject to investigation.

Scenario 4: A competitor claims your website copied their product
descriptions, infringing their copyright.
  LIKELY COVERED — Coverage B (advertising injury) covers copyright
  infringement in your advertising. Tender the claim to your
  insurer immediately.

Scenario 5: A client claims your design recommendation caused a
structural problem and is suing for $300,000.
  NOT COVERED by the CGL — This is a professional liability
  (E&O) claim. If you do not have E&O coverage, you would need
  to defend and potentially pay this claim out of pocket.

---

QUESTIONS ABOUT YOUR COVERAGE?

Contact your broker before a loss, not after, to discuss coverage gaps.
Consider these additional coverages based on your operations:
  - Umbrella / Excess Liability — adds limits above your CGL
  - Professional Liability / E&O — covers advice and professional services
  - Pollution Liability — covers environmental claims if relevant
  - Hired and Non-Owned Auto — covers vehicles not on your commercial
    auto policy

---
DISCLAIMER: This coverage explainer is for informational purposes only
and does not constitute insurance or legal advice. Coverage determinations
depend on the specific policy language, endorsements, and facts of each
claim. Consult a licensed insurance professional for guidance specific
to your policy and situation.
```

**Next steps:**
- Provide the client with the actual declarations page alongside this explainer so limits and endorsements are confirmed
- Flag any endorsements (e.g., additional insured requirements, waiver of subrogation) that modify the standard form
- If coverage gaps are identified (no E&O, no pollution), prepare a coverage gap memo using `/claim-summary` or `/underwriting-notes`
- Schedule an annual policy review 60 days before renewal to ensure limits keep pace with revenue and exposure growth
