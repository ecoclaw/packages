---
name: prior-auth-writer
description: Draft prior authorization letters with clinical necessity justification, supporting criteria, and appeal-ready language.
triggers: ["prior auth", "prior authorization", "insurance authorization", "auth letter", "peer to peer", "appeal letter"]
---

# Prior Auth Writer

## What this skill does

Generates complete prior authorization submissions and appeal letters:

1. **Initial authorization letter** — clinical necessity argument with diagnosis, treatment rationale, and supporting evidence
2. **Supporting criteria alignment** — maps request to payer coverage criteria and clinical guidelines
3. **Appeal letter** — first-level appeal with peer-reviewed literature and escalation language
4. **Peer-to-peer prep** — talking points for peer-to-peer review calls

## How to invoke

```
/prior-auth-writer
```

Claude will ask:
- Request type? (initial auth, first-level appeal, second-level appeal, peer-to-peer prep)
- What service, medication, or procedure needs authorization? (CPT/HCPCS code if known)
- Primary diagnosis and relevant comorbidities? (ICD-10 codes helpful)
- Patient's clinical history related to this request? (prior treatments tried, failures, contraindications)
- Payer name if known?
- Any specific payer criteria to address?

## Workflow steps

### Step 1 — Clinical Justification Framework
Claude identifies the strongest clinical necessity arguments based on:
- Diagnosis and severity
- Prior treatment history and documented failures
- Relevant clinical guidelines (AHA, ACS, USPSTF, specialty societies)
- Step therapy requirements and how patient has met them

### Step 2 — Letter Draft
Full letter with:
- Patient/provider/payer header block (with placeholders for identifying info)
- Clinical summary: diagnosis, severity, functional impact
- Treatment history: what was tried, why it failed or is contraindicated
- Requested treatment: mechanism, evidence base, expected outcome
- Supporting guidelines and literature citations
- Specific appeal to payer's coverage criteria language

### Step 3 — Literature Support
2–3 relevant citations formatted for inclusion:
```
[Author et al. Journal. Year. PMID: XXXXXXXX]
Key finding: [One sentence relevant to the auth request]
```

### Step 4 — Peer-to-Peer Talking Points
If peer-to-peer review is requested:
- 60-second case summary
- Top 3 clinical necessity arguments
- Anticipated objections and responses
- Escalation language if the reviewer denies

## Example outputs

### Example: Biologic for Moderate-Severe Crohn's Disease

**Letter excerpt:**
```
RE: Prior Authorization Request — Adalimumab (Humira) for Crohn's Disease
CPT: J0135 | ICD-10: K50.10

Dear Medical Director,

We are writing to request authorization for adalimumab (Humira) for [Patient Initials],
a [age]-year-old [gender] with moderate-to-severe Crohn's disease (ICD-10: K50.10).

CLINICAL SUMMARY
Patient presents with active luminal Crohn's disease confirmed by colonoscopy with
biopsy [date on file]. Current disease activity is moderate-to-severe based on
Harvey-Bradshaw Index score of [X] and documented fistulizing involvement.

TREATMENT HISTORY AND MEDICAL NECESSITY
Patient has completed adequate trials of the following therapies without adequate
response or with documented intolerance:
• Mesalamine [dose] — inadequate response after [X] weeks
• Azathioprine [dose] — discontinued due to [documented intolerance]
• Prednisone — short-term relief only; chronic use contraindicated per current
  guidelines given patient's [comorbidity]

Per the ACG Clinical Guideline (Lichtenstein et al., 2018), biologic therapy with
a TNF-α inhibitor is indicated for moderate-to-severe Crohn's disease refractory
to conventional therapy. Adalimumab has demonstrated sustained remission in 36%
of patients at 56 weeks in the CHARM trial (Colombel et al., Gastroenterology, 2007).

We respectfully request approval for adalimumab per the above clinical rationale.
```

**Next steps:**
- Insert patient and provider identifying information in all placeholder fields
- Attach supporting documentation: colonoscopy report, prior auth denials, lab results
- Have the treating physician sign before submission
- Log submission date and follow up within payer's required response window
