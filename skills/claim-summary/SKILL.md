---
name: claim-summary
description: Write a claim summary memo with loss description, coverage analysis, exposure estimate, and reserve recommendation
license: MIT
triggers: ["claim summary", "claims memo", "loss summary", "coverage analysis", "claims report", "reserve recommendation"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Claim Summary

## What this skill does

Produces a structured claim summary memo used by adjusters, claims professionals, and coverage counsel to document the facts of a loss, analyze applicable coverage, estimate financial exposure, and recommend reserves. The memo serves as the central record for claim file management and provides a clear basis for reserve decisions, coverage positions, and litigation strategy.

1. **Insured and loss information** — policy details, claimant, date of loss, and reported date
2. **Coverage in force** — applicable insuring agreements, limits, deductibles, and relevant endorsements
3. **Loss description and timeline** — factual narrative of how the loss occurred and what is known
4. **Coverage analysis** — which coverages apply, which may be implicated, and any coverage concerns
5. **Exposure estimate and reserve recommendation** — indemnity, expense, and total incurred reserve

## How to invoke

```
/claim-summary
```

Claude will ask:
- What type of claim is this (property, liability, workers' comp, auto, professional liability, etc.)?
- Who is the insured and what are the basic loss facts (date, location, what happened)?
- What coverage is in force — policy type, limits, deductibles, and key endorsements?
- What is known about damages or injuries — preliminary estimates or confirmed amounts?
- Are there any coverage concerns, reservations of rights issues, or subrogation potential?

## Workflow steps

### Step 1 — Loss and Coverage Fact Gathering
Claude assembles the claim header: insured name, policy number, claim number, date of loss, date reported, type of loss, and coverage in force. This section is structured so it can be dropped directly into a claims management system.

### Step 2 — Loss Narrative
Claude drafts a factual, objective description of the loss based on the information provided. The narrative separates confirmed facts from unverified allegations and notes any gaps in the investigation still to be closed.

### Step 3 — Coverage Analysis
Claude analyzes the applicable insuring agreement(s) against the facts, identifies potential exclusions or conditions that may affect coverage, and flags any reservation of rights considerations. Coverage analysis is structured as: applicable coverage → potential issues → preliminary position.

### Step 4 — Exposure and Reserve Recommendation
Claude estimates indemnity exposure (the likely settlement or judgment range), allocated loss adjustment expense (ALAE — defense costs), and recommends an initial reserve with rationale. Reserves are set at a realistic probable outcome, not worst case.

## Example outputs

### Example: Property Damage Claim — Water Loss at a Commercial Building

**Input:** Insured: Greenbrook Office Properties LLC. Commercial property policy. Date of loss: February 14, 2026. A burst pipe on the 3rd floor of a 4-story office building caused water damage to the 3rd and 2nd floors, including tenant improvements, business personal property, and common area flooring. Building is 60% occupied. Estimated contractor quote for remediation: $185,000. Tenant personal property claims pending. Business income interruption claimed by two tenants. Policy: Building limit $4.2M, BPP $500K, Business Income (rental income) $750K, $25,000 deductible.

**Claim summary draft:**
```
CLAIM SUMMARY MEMORANDUM

Claim No.:        [CLAIM-2026-04821]
Date Prepared:    March 21, 2026
Prepared By:      [Adjuster Name], Senior Property Adjuster
File Status:      Open — Investigation in Progress

===================================================================
SECTION 1: CLAIM IDENTIFICATION
===================================================================

Insured:          Greenbrook Office Properties LLC
Policy No.:       [POL-XXXXXXXX]
Policy Period:    January 1, 2026 – January 1, 2027
Carrier:          [Carrier Name]
Date of Loss:     February 14, 2026
Date Reported:    February 15, 2026
Loss Location:    1840 Commerce Drive, Suite 300, Denver, CO 80202
Type of Loss:     Water — Burst Pipe (Accidental Discharge)
Assigned:         March 21, 2026

===================================================================
SECTION 2: COVERAGE IN FORCE
===================================================================

Coverage          Limit                Deductible     Coinsurance
-----------       -------------------  -------------  -----------
Building          $4,200,000           $25,000        80%
Business Personal
Property (BPP)    $500,000             $25,000        80%
Business Income   $750,000 / 12 mos.  $25,000 (72hr) N/A
  (Rental Income) [monthly rental
                   income form]

Key Endorsements:
  - Tenant improvements and betterments — included in BPP limit
  - Ordinance or law — not endorsed; exclusion applies
  - Equipment breakdown — endorsed; may apply to pipe failure cause
  - Mold remediation sublimit — $25,000

Mortgagee:        First Western Bank, N.A. (loss payee — building)
No other insurance reported; confirmation pending.

===================================================================
SECTION 3: LOSS DESCRIPTION AND TIMELINE
===================================================================

February 14, 2026 (approx. 2:00 AM):
A copper water supply line serving the 3rd floor restrooms failed,
releasing water continuously for an estimated 4–6 hours before the
building manager was notified by a tenant arriving at 6:15 AM.
Water migrated through the 3rd floor slab and into the 2nd floor
ceiling cavity, affecting approximately 4,200 sq. ft. of the 3rd
floor and 2,800 sq. ft. of the 2nd floor ceiling and walls.

February 14–15, 2026:
Emergency water extraction and drying equipment was deployed by
Restore-Pro Restoration (insured-retained vendor). Eight drying
units and industrial dehumidifiers are in place as of this writing.

February 15, 2026:
Loss reported to the carrier. Field adjuster inspected the property
and retained Building Consultants Associates (independent adjuster /
building consultant) to assist with scope development.

February 21, 2026:
Preliminary contractor estimate received from Morrison Mechanical
& Restoration: $185,000 for structural drying, demolition of
affected drywall and flooring, and reconstruction. Does not include
tenant improvements or BPP.

STATUS AS OF MARCH 21, 2026:
  - Structural drying complete; moisture readings within acceptable range
  - Scope of reconstruction finalized; contractor mobilizing April 1
  - Two tenants (Suites 210 and 305) have vacated; business income
    claims received
  - Cause of pipe failure under investigation — see Coverage Section

INVESTIGATION ITEMS OUTSTANDING:
  - Plumber's root cause report (expected April 5)
  - Tenant BPP inventory submissions (due March 31)
  - Business income documentation from Tenants 210 and 305

===================================================================
SECTION 4: COVERAGE ANALYSIS
===================================================================

4.1  Building Damage — Coverage A (Building)
Coverage appears to apply. The loss resulted from accidental discharge
of water from a plumbing system — a covered cause of loss under the
Special Form. The deductible of $25,000 applies. Coinsurance requires
confirmation that the $4.2M limit represents at least 80% of
replacement cost value (RCV). A formal appraisal is not currently in
file; if RCV has increased materially since last valuation, a coinsurance
penalty could reduce the recoverable loss.

ACTION: Order an updated RCV estimate from the building consultant.

4.2  Tenant Improvements and Betterments — Coverage B (BPP)
Tenant improvements within the BPP coverage respond to damage to
permanent alterations installed by the insured (Greenbrook) in the
demised premises. Improvements installed and owned by tenants are
the tenants' responsibility (covered under their own policies).
Confirmation of ownership of specific improvements required.

4.3  Business Income — Rental Income
The policy covers loss of rental income during the period of
restoration. Two suites are vacated: Suite 210 (1,100 sq. ft.,
$3,850/month) and Suite 305 (1,400 sq. ft., $4,900/month).
The 72-hour waiting period has been satisfied.

Estimated monthly rental loss: $8,750
Estimated period of restoration: 3–4 months (to July/August 2026)
Estimated business income exposure: $26,250 – $35,000

Note: The policy covers rental income, not tenant BI loss.
Tenants must seek coverage under their own commercial
property/business income policies.

4.4  Coverage Concern — Ordinance or Law
If code-required upgrades are identified during reconstruction (e.g.,
upgraded pipe materials mandated by current Denver plumbing code),
the cost of code upgrades is excluded because the policy does not
carry an Ordinance or Law endorsement. Recommend flagging this
issue with the contractor at pre-construction meeting.

4.5  Coverage Concern — Mold Sublimit
If mold is discovered during demolition, coverage is capped at
$25,000 per the mold remediation sublimit endorsement. Building
consultant should assess mold risk given the duration of water
exposure before detection.

4.6  Subrogation Potential
If the pipe failure was caused by defective materials, faulty
installation, or improper maintenance by a third party (prior
contractor, manufacturer, or HVAC service vendor), subrogation
may exist. Preservation of the failed pipe section has been
requested. Subrogation file to be opened upon cause determination.

===================================================================
SECTION 5: EXPOSURE ESTIMATE AND RESERVE RECOMMENDATION
===================================================================

Component                        Low Est.    High Est.   Reserve
-------------------------------  ----------  ----------  ---------
Building repair (structural)     $175,000    $215,000    $195,000
Tenant improvements (BPP)        $18,000     $35,000     $25,000
Emergency mitigation (already    $28,400     $28,400     $28,400
  invoiced — Restore-Pro)
Rental income (BI)               $26,250     $35,000     $30,000
Mold (contingency)               $0          $25,000     $10,000
Less: Deductible                 ($25,000)   ($25,000)   ($25,000)
-------------------------------  ----------  ----------  ---------
Total Indemnity Estimate         $222,650    $313,400    $263,400

ALAE (Defense/Adjuster Fees)     $8,000      $15,000     $10,000
-------------------------------  ----------  ----------  ---------
TOTAL INCURRED RESERVE           $230,650    $328,400    $273,400

Reserve Basis: Reserve set at the midpoint of the probable range
pending receipt of outstanding documentation. Reserve will be
reviewed upon receipt of the cause-of-loss report (April 5) and
tenant BPP submissions (March 31).

Supervisor approval required for reserve above $250,000 per
claims authority matrix.

===================================================================
SECTION 6: NEXT STEPS
===================================================================

  Priority  Action                              Owner        Due
  --------  ----------------------------------  -----------  --------
  HIGH      Order RCV estimate; confirm         Field Adj.   April 1
            coinsurance compliance
  HIGH      Obtain plumber's root cause report  Field Adj.   April 5
  HIGH      Collect tenant BPP inventories      Field Adj.   March 31
  MEDIUM    Evaluate subrogation potential;     Sub. Unit    April 10
            preserve failed pipe section
  MEDIUM    Review code upgrade exposure with   Field Adj.   April 1
            contractor at pre-construction mtg
  LOW       Confirm no other insurance on       Field Adj.   March 28
            tenant improvements

---
DISCLAIMER: This claim summary is for informational purposes only and
does not constitute insurance, legal, or coverage advice. Coverage
determinations are fact-specific and subject to the actual policy
language, endorsements, and applicable law. Consult a licensed
claims professional or coverage counsel for guidance on specific claims.
```

**Next steps:**
- Submit the reserve recommendation to the claims supervisor for approval before the reserve is established in the system
- Issue a reservation of rights letter if the coinsurance or ordinance-or-law issues become material
- Open a subrogation file in the claims system now so investigation work is properly documented from the start
- Calendar the outstanding action items with automatic escalation alerts in the claims management platform
