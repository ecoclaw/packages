# Prior Auth Writer
**Package:** @gonzih/skills-healthcare
**Command:** /prior-auth-writer

## What it does
Drafts prior authorization request letters and peer-to-peer talking points for medications, procedures, or specialist referrals. Structures clinical justification around payer criteria, relevant diagnosis codes, and evidence-based guidelines to maximize first-pass approval rates.

## When to use
- Requesting PA for a non-formulary medication
- Justifying an advanced imaging study (MRI, PET)
- Appealing a denied authorization

## Example output
**Prior Authorization Request — Adalimumab (Humira) for Moderate-Severe Crohn's Disease**

**Patient:** [Patient Name], DOB [Date]
**Diagnosis:** Crohn's disease, moderate-severe (ICD-10: K50.10)
**Requested therapy:** Adalimumab 160mg SQ initial dose, 80mg week 2, 40mg EOW maintenance

**Clinical justification:**
Patient has documented moderate-to-severe Crohn's disease confirmed by colonoscopy (report attached). Conventional therapy has been trialed and failed:
- Mesalamine: 12-week trial — inadequate response
- Azathioprine: discontinued due to elevated LFTs (labs attached)
- Prednisone: repeated steroid courses; patient meets steroid-dependent criteria

Adalimumab is consistent with ACG Clinical Guidelines (2021) as first-line biologic therapy following conventional therapy failure. Biosimilar alternatives have been considered; prescriber has documented clinical rationale for branded agent.

**Requested decision:** Expedited review requested given active disease activity.
