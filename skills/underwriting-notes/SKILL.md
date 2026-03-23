---
name: underwriting-notes
description: Write underwriting notes with risk profile summary, appetite assessment, and recommended terms or declination
license: MIT
triggers: ["underwriting notes", "risk assessment", "underwriting memo", "risk profile", "underwriting analysis", "appetite assessment"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Underwriting Notes

## What this skill does

Produces structured underwriting notes that document the underwriter's analysis of a submission, support the pricing and terms decision, and create an audit trail for the underwriting file. The notes summarize the risk, identify positive and adverse characteristics, assess fit against the carrier's appetite, and conclude with a recommended action — bind on proposed terms, modify terms, request additional information, or decline with rationale.

1. **Submission summary** — insured profile, coverage requested, limits, and effective date
2. **Risk characteristics** — key facts about the risk (operations, loss history, financials, location)
3. **Positive underwriting factors** — attributes that support binding or favorable terms
4. **Adverse underwriting factors** — concerns, red flags, or factors that increase exposure
5. **Appetite assessment and recommended terms** — decision with pricing rationale or declination basis

## How to invoke

```
/underwriting-notes
```

Claude will ask:
- What line of business is this submission (commercial property, GL, professional liability, D&O, marine, surety, etc.)?
- What are the key facts about the risk — business type, location, revenues, and operations?
- What is the loss history — frequency, severity, and any large or unusual losses?
- What coverage and limits are being requested?
- Does this risk fit the carrier's appetite, or are there known concerns to evaluate?

## Workflow steps

### Step 1 — Submission Summary
Claude assembles the header block: insured, broker, effective date, coverage requested, limits, current carrier (if renewal), and expiring premium. This matches standard underwriting system data entry format.

### Step 2 — Risk Profile Development
Claude translates the submitted information into a structured risk profile — operations description, location and occupancy, revenue, employee count, prior carrier history, and 5-year loss run summary — organized for quick review by a senior underwriter or manager.

### Step 3 — Underwriting Factor Analysis
Claude identifies and weighs positive factors (favorable loss history, risk management practices, industry tenure, financial stability) against adverse factors (cat exposure, heavy concentration, adverse loss trends, coverage concerns, prior declinations). Each factor is named and briefly explained, not just listed.

### Step 4 — Decision and Terms
Claude states the recommended action clearly — bind, modify, request information, or decline — with the rationale tied to the factors above. For bind or modify decisions, Claude recommends specific terms: premium, rate, deductible, key conditions, and any endorsements required. For declinations, Claude cites the specific appetite conflict or risk factor driving the decision.

## Example outputs

### Example: Commercial Property Submission — Coastal Market

**Input:** New business submission. Insured: Pelican Shores Hotel Group LLC, operating a 94-room boutique hotel in Galveston, TX. Built 1987, frame construction, updated roof 2019 (wind-rated shingles), updated electrical 2021. Revenue $3.8M annually. No sprinkler system. Loss history: 1 wind claim in 2021 ($42,000), 1 slip-and-fall GL claim in 2023 ($18,500 settled). Requesting: Building $8.2M, BPP $600K, Business Income 12 months. Broker requesting wind coverage included, no wind deductible buyback. Current carrier nonrenewing due to book exit from coastal TX.

**Underwriting notes draft:**
```
COMMERCIAL LINES UNDERWRITING NOTES

Submission No.:    UW-2026-07741
Line of Business:  Commercial Property (Primary)
Date Prepared:     March 21, 2026
Underwriter:       [Underwriter Name]
Team:              Gulf Coast Property Unit

===================================================================
SECTION 1: SUBMISSION SUMMARY
===================================================================

Insured:           Pelican Shores Hotel Group LLC
d/b/a:             Pelican Shores Boutique Hotel
Location:          1204 Seawall Blvd., Galveston, TX 77550
Business Type:     Hospitality — Boutique Hotel (94 rooms)
Years in Business: 18 years (established 2008)
Broker:            [Broker Name], [Agency Name], Houston TX
Effective Date:    May 1, 2026

Coverage Requested:
  Building                $8,200,000
  Business Personal Prop. $600,000
  Business Income         12 months (actual loss sustained)
  Wind/Hail               Requested — included, no buyback
  Flood                   Not requested

Prior Carrier:     [Carrier A] — nonrenewing, coastal TX book exit
Expiring Premium:  $142,000 (estimated — expiring policy not yet in file)

===================================================================
SECTION 2: RISK PROFILE
===================================================================

Operations:
Pelican Shores is a 94-room boutique hotel operating on Galveston's
Seawall Boulevard in a mixed hospitality/retail corridor. The hotel
offers seasonal leisure occupancy (peak June–August) with some
conference and group business. Revenue of $3.8M represents 40% ADR
improvement over 2022 levels per the submission application. Hotel
is owner-managed; no franchise affiliation.

Construction and Condition:
  Year Built:        1987
  Construction:      Wood Frame (Class 1)
  Square Footage:    Approx. 62,000 sq. ft. (6 stories)
  Roof:              Replaced 2019; wind-rated architectural shingles
  Electrical:        Updated 2021 (full panel replacement documented)
  Plumbing:          Original; no updates noted
  Fire Protection:   Smoke detectors throughout; NO sprinkler system

Location and CAT Exposure:
  FEMA Flood Zone:   AE (high-risk flood zone, mandatory flood insurance
                     required for mortgaged properties)
  Wind Zone:         Texas Windstorm Zone — Tier 1 coastal
  Hurricane History: Property is within Galveston Island seawall
                     footprint; significant storm surge exposure
  Distance to Coast: Approximately 100 feet from Seawall Blvd.;
                     direct Gulf of Mexico exposure

Loss History (5 Years):
  Year    Cause       Paid       Status
  ------  ----------  ---------  --------
  2021    Wind/Hail   $42,000    Closed
  2023    GL — Slip   $18,500    Closed
  2022    None        —          —
  2024    None        —          —
  2025    None        —          (partial year; broker to confirm)

5-Year Loss Ratio: Favorable in isolation, but one wind event is
insufficient history for a coastal frame hotel of this size. The
current carrier's exit is a market condition, not loss-driven per
broker representation.

Financial Indicators:
  Revenue:           $3.8M (2025 per broker submission)
  Ownership:         Single-member LLC; personal financial
                     statement not submitted
  Mortgagee:         Texas Gulf Community Bank (first lien)

===================================================================
SECTION 3: POSITIVE UNDERWRITING FACTORS
===================================================================

1. ROOF AGE AND QUALITY — The 2019 roof replacement with wind-rated
   shingles is a meaningful risk improvement. Frame hotels with
   updated, wind-rated roofing perform materially better in wind
   events than those with aged or standard shingles.

2. ELECTRICAL UPDATE — Full 2021 panel replacement reduces fire risk
   and indicates a management team willing to invest in property
   maintenance.

3. FAVORABLE LOSS FREQUENCY — Two losses in 5 years on a property
   of this type and location is better than average. Neither loss
   exhibits severity concerns.

4. ESTABLISHED OPERATOR — 18 years in business with an owner-managed
   operation is a positive signal. No prior declinations reported;
   current nonrenewal is market-driven, not account-specific.

5. REVENUE TREND — Improving ADR and revenue growth indicate a
   financially healthy operation, reducing the probability of
   underinsurance or deferred maintenance.

===================================================================
SECTION 4: ADVERSE UNDERWRITING FACTORS
===================================================================

1. COASTAL FRAME CONSTRUCTION — Wood frame in Tier 1 coastal Texas
   is our single largest appetite concern on this submission. Frame
   construction in a Gulf-exposed location carries materially higher
   wind and storm surge severity than masonry or superior construction.
   This factor alone would push many carriers to decline or require
   substantial wind deductible.

2. NO SPRINKLER SYSTEM — A 6-story, 94-room hotel with no automatic
   fire suppression system is a significant underwriting concern from
   both a fire severity and a life safety standpoint. Many commercial
   property carriers exclude or sublimit non-sprinklered hospitality
   risks above certain story or square footage thresholds.

3. DIRECT SEAWALL BOULEVARD FRONTAGE — 100-foot setback from the
   Gulf means this property has full exposure to storm surge inundation.
   Galveston saw up to 12 feet of storm surge in Hurricane Ike (2008).
   Even with no flood requested, a major hurricane event creates
   a scenario where the building loss (wind) and the flood loss are
   inseparably intermixed — increasing adjustment complexity and
   potential coverage disputes.

4. NO WIND DEDUCTIBLE BUYBACK REQUESTED — In Tier 1 coastal Texas,
   wind deductibles of 2–5% of building value are standard. At
   $8.2M, a 2% wind deductible is $164,000. The broker's request
   to write without a wind deductible (or buyback option) is not
   consistent with our filed rating approach for this zone.

5. PLUMBING NOT UPDATED — Original plumbing in a 1987 building is
   a water loss risk concern. At 38 years of age, pipe failure
   frequency increases materially.

6. PRIOR CARRIER NONRENEWAL — While broker represents this is
   market-driven, loss runs and the nonrenewal letter should be
   confirmed before binding.

===================================================================
SECTION 5: APPETITE ASSESSMENT AND RECOMMENDED TERMS
===================================================================

Appetite Fit: MARGINAL — Bindable with Significant Modifications

This risk is at the outer edge of our coastal property appetite.
The coastal frame construction, absence of sprinklers, and direct
Gulf exposure are material concerns. However, the roof and electrical
updates, favorable loss history, and experienced operator bring the
risk into a range where a modified offer is defensible.

RECOMMENDED TERMS

Building:                    $8,200,000 (confirm RCV with appraisal)
Business Personal Property:  $600,000
Business Income:             12 months (actual loss sustained)
Deductible — AOP:            $25,000
Deductible — Wind/Hail:      5% of building value ($410,000)
                             Wind deductible buyback NOT available
                             at this location under our filed form

Conditions for Binding:
  1. Receipt and review of 5-year certified loss runs from prior carrier
  2. Signed statement from insured confirming no pending losses or
     unreported claims
  3. Replacement cost valuation (appraisal or desk review by our
     valuation vendor) — current submission does not include one
  4. Confirmation of mortgagee flood insurance compliance (FEMA AE zone)

Exclusions / Limitations to Endorse:
  - Sprinkler leakage — not applicable (no sprinklers, so no exposure)
  - Flood — excluded; confirm insured has NFIP or private flood in force
    as mortgagee requires; we will require evidence of flood insurance
    at binding
  - Ordinance or Law — exclude or sublimit to $250,000 (1987 building
    will face code upgrade requirements in the event of major loss)

Estimated Premium Range:    $168,000 – $195,000
                            (pending appraisal; wind rate filed at
                            $X per $100 for Tier 1 frame — apply
                            filed rate plus approved loading for
                            non-sprinklered hospitality)

Alternative — Declination Basis (if conditions not met):
If the insured declines to accept the 5% wind deductible, or if
the loss runs reveal undisclosed losses, this account should be
declined on the basis of: (1) excessive wind exposure without
adequate deductible participation, and (2) non-sprinklered frame
construction in Tier 1 coastal zone outside filed appetite guidelines.

===================================================================
SECTION 6: OPEN ITEMS BEFORE BINDING
===================================================================

  Item                              Responsible    Due
  --------------------------------  -------------  ----------
  5-year certified loss runs        Broker         April 5
  Replacement cost appraisal        Underwriter    April 10
  Flood insurance evidence          Broker         April 15
  Nonrenewal letter from prior      Broker         April 5
    carrier (confirm market exit)
  Insured signed no-known-loss      Broker         April 15
    statement

  Target bind date: May 1, 2026 (subject to receipt of above)

---
DISCLAIMER: These underwriting notes are for informational purposes
only and do not constitute insurance coverage, a commitment to insure,
or professional underwriting advice. Coverage and terms are subject to
the carrier's appetite guidelines, filed rates, and approval processes.
Consult a licensed insurance professional for guidance specific to a
particular risk or submission.
```

**Next steps:**
- Send a formal indication letter to the broker outlining the proposed terms and outstanding conditions
- Order the replacement cost valuation through the underwriting vendor panel before binding
- Flag the non-sprinklered condition for property engineering review if the submitted premium is above the engineering review threshold
- Document the appetite rationale in the underwriting system so the decision record is complete if the account is audited or re-underwritten at renewal
