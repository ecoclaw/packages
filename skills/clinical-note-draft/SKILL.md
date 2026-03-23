---
name: clinical-note-draft
description: Generate structured SOAP or APSO clinical note drafts from de-identified visit summaries, with ICD-10 suggestions and attestation-ready formatting.
license: MIT
triggers: ["clinical note", "soap note", "apso note", "visit note", "clinical documentation", "progress note"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Clinical Note Draft

## What this skill does

Produces structured, attestation-ready clinical note drafts for outpatient and inpatient encounters:

1. **SOAP or APSO format** — provider selects preferred structure
2. **ICD-10 suggestions** — primary and secondary diagnoses with codes
3. **CPT code guidance** — E&M level recommendation based on complexity
4. **Medication and order prompts** — flags common next steps based on assessment
5. **Attestation reminder** — formatted footer noting draft status and required review

## How to invoke

```
/clinical-note-draft
```

Claude will ask:
- Note format preference? (SOAP or APSO)
- Visit type? (new patient, established, annual wellness, urgent, procedure)
- Specialty? (primary care, internal medicine, pediatrics, etc.)
- Provide a de-identified visit summary (chief complaint, history, exam findings, plan)
- Any specific diagnoses or orders to include?

**Important:** Do not include any patient PHI (name, DOB, MRN, SSN). Use de-identified summaries only.

## Workflow steps

### Step 1 — Visit Summary Intake
Claude parses the de-identified visit summary and maps it to SOAP/APSO structure.

### Step 2 — Note Draft
Full structured note with:
- **Subjective/Assessment:** chief complaint, HPI, ROS, PMH/PSH/FH/SH summary
- **Objective/Plan:** vital signs fields, exam findings, labs/imaging if noted
- **Assessment:** problem list with ICD-10 codes
- **Plan:** medications, orders, referrals, patient education, follow-up interval

### Step 3 — Coding Guidance
```
Primary Dx: [Description] — [ICD-10 Code]
Secondary Dx: [Description] — [ICD-10 Code]
Suggested E&M Level: [99213 / 99214 / 99215] — based on [MDM/time]
CPT Note: Confirm with your billing team before coding
```

### Step 4 — Attestation Block
```
*** DRAFT — Generated with AI assistance ***
Provider review and attestation required before this note is final.
Clinical content must be verified against the actual patient encounter.
[Provider Name, Credentials] | [Date] | [Signature line]
```

## Example outputs

### Example: Established Patient, Hypertension Follow-Up

**Input (de-identified):** 54-year-old male, established, follow-up HTN. BP 148/92 today, was 152/94 last visit. On lisinopril 10mg daily. Reports occasional headaches, no chest pain, no SOB. Exam: regular rate, no murmur, lungs clear. Plan to uptitrate lisinopril.

**SOAP Note Draft:**
```
SUBJECTIVE
CC: Hypertension follow-up
HPI: 54-year-old male presents for routine HTN management. Patient reports
occasional frontal headaches but denies chest pain, shortness of breath,
palpitations, or vision changes. Medication adherence confirmed. Currently
on lisinopril 10mg daily.

OBJECTIVE
BP: 148/92 | HR: [   ] | RR: [   ] | Temp: [   ] | O2 Sat: [   ]
Cardiovascular: Regular rate and rhythm, no murmur, rub, or gallop
Respiratory: Clear to auscultation bilaterally
General: Well-appearing, no acute distress

ASSESSMENT
1. Essential hypertension, uncontrolled — I10
2. Headache, unspecified — R51.9

PLAN
1. Uptitrate lisinopril to 20mg daily
2. Recheck BP in 4 weeks; patient instructed to monitor at home
3. BMP ordered to monitor renal function and potassium
4. Patient counseled on low-sodium diet and exercise
5. Return visit: 4 weeks or sooner if BP >160/100 or new symptoms

Suggested E&M: 99213 (low-moderate complexity established)
```

**Next steps:**
- Review and edit objective findings based on actual encounter
- Verify ICD-10 codes with your coding team
- Attest and finalize in your EHR before end of day
- Do not share this draft outside your practice without removing all PHI
