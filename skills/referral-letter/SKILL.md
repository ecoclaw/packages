---
name: referral-letter
description: Write a dental specialist referral letter with clinical summary, reason for referral, and pertinent history
license: MIT
triggers: ["referral letter", "dental referral", "specialist referral", "endodontic referral", "oral surgery referral", "perio referral"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Referral Letter

## What this skill does

Produces a professional, clinically complete specialist referral letter that gives the receiving provider everything they need to prepare for the consultation — while reflecting well on your practice. Works for referrals to endodontists, periodontists, oral surgeons, orthodontists, prosthodontists, and pediatric dentists.

1. **Patient demographics and referral header** — date, referring provider, receiving provider, and patient identifiers
2. **Reason for referral** — specific clinical question or procedure requested, stated clearly
3. **Clinical and radiographic findings** — objective exam data, pocket depths, symptoms, relevant imaging
4. **Treatment provided to date** — what has already been done and the outcome
5. **Specific consultation request** — exactly what you're asking the specialist to evaluate, treat, or advise on

## How to invoke

```
/referral-letter
```

Claude will ask:
- Who are you referring to (specialty and, if known, specific provider/practice)?
- What is the reason for referral and what do you want the specialist to do (evaluate only, treat, consult and return)?
- What are the key clinical findings, symptoms, and radiographic findings for this patient?
- What treatment has already been provided, and what was the result?
- Any relevant medical history, medications, or patient concerns to flag?

## Workflow steps

### Step 1 — Referral Parameters
Claude gathers the referring and receiving provider details, patient summary, and the specific clinical question or treatment request.

### Step 2 — Letter Draft
A structured referral letter is produced with a professional header, concise clinical summary, clear referral request, and contact information for follow-up.

### Step 3 — Urgency Flag
If the case is urgent (active infection, severe pain, suspected pathology), Claude adds an urgency note and suggests the appropriate timeline for the consultation.

### Step 4 — Records Checklist
Claude provides a list of records to include with the referral packet (X-rays, perio chart, photos, medical history form).

## Example outputs

### Example: Referral to Endodontist for Suspected Cracked Tooth Syndrome — Molar

**Input:** Patient, 47-year-old female, presents with sharp, sharp pain to biting on tooth #30, no cold sensitivity, no swelling. Periapical X-ray WNL. Bite stick test positive on MB cusp. No periapical pathology. Tooth has existing DO amalgam. Pulp vitality: positive. Suspect cracked tooth. Referring to endodontist for evaluation and treatment recommendation. Referring provider: Dr. Sarah Kim, DDS. Practice: Lakeview Dental Group.

**Referral letter draft:**
```
LAKEVIEW DENTAL GROUP
[Address] | [Phone] | [Fax] | [Email]

March 21, 2026

[Endodontist Name, DDS/DMD]
[Specialty Practice Name]
[Address]

RE: Referral for Endodontic Evaluation
Patient: [Patient Name] | DOB: [DOB] | Chart #: [Chart #]

Dear Dr. [Last Name],

Thank you for seeing our patient, [Patient First Name] [Last Name], a
47-year-old female presenting with localized pain on tooth #30. We are
referring her for endodontic evaluation and treatment recommendation for
suspected cracked tooth syndrome.

REASON FOR REFERRAL

Endodontic evaluation of tooth #30 (mandibular right first molar) for
suspected vertical or oblique crown fracture. We are requesting your
assessment of pulpal and periapical status and your recommendation
regarding treatability and appropriate treatment pathway.

CLINICAL FINDINGS

Chief Complaint: Sharp, momentary pain to biting pressure on the lower
right, onset approximately 6 weeks ago. Patient denies spontaneous pain,
lingering cold sensitivity, or swelling.

Clinical Examination:
  - Tooth #30: Existing DO amalgam, no visible crack lines on clinical
    exam under magnification; however, bite stick test is sharply positive
    on the mesiobuccal cusp
  - Percussion: Mildly positive to vertical; negative to lateral
  - Palpation: Negative
  - Probing: Within normal limits bilaterally (2–3 mm); no isolated deep
    pocketing suggestive of vertical root fracture
  - Mobility: Within normal limits

Pulp Vitality Testing:
  - Cold (Endo Ice): Positive, response normal in duration
  - EPT: Responsive, consistent with vital pulp

Radiographic Findings:
  - Periapical radiograph (attached, dated March 18, 2026): No periapical
    pathology; intact lamina dura; PDL space within normal limits; existing
    DO amalgam noted, no secondary caries visible radiographically

DIFFERENTIAL DIAGNOSIS

  1. Cracked tooth syndrome (most likely) — MB cusp fracture without
     complete separation
  2. Dentinal hypersensitivity — less likely given location and provocation
     specificity
  3. Occlusal trauma — not ruled out; patient bruxes (nightguard use
     inconsistent)

TREATMENT TO DATE

  - Occlusal adjustment performed at previous visit; minimal effect on
    symptoms reported by patient
  - Patient counseled on cracked tooth syndrome and treatment options;
    expressed preference for tooth retention if possible

MEDICAL HISTORY HIGHLIGHTS

  - No significant systemic conditions; no medications affecting healing
    or coagulation
  - No known drug allergies
  - Patient is not pregnant

REQUEST

Please evaluate tooth #30 for pulpal status and the extent of any crack,
and advise on treatment options (RCT + crown, extraction, or continued
monitoring). Patient is aware that crack propagation may limit treatability.
She would like to understand her options before committing to a treatment
plan.

Please forward your consultation findings to our office. We are happy to
coordinate the restorative phase (crown) following any endodontic treatment.

ENCLOSURES
  ☐ Periapical radiograph (digital, March 18, 2026)
  ☐ Completed health history form
  ☐ Clinical notes from presenting visit

Please do not hesitate to contact our office at [phone] with any questions.
Thank you for your excellent care of our patients.

Sincerely,

Sarah Kim, DDS
Lakeview Dental Group
[Phone] | [Fax] | [Email]
```

**Oral surgery variant — opening paragraph:**
```
RE: Referral for Surgical Evaluation and Management
Patient: [Patient Name] | DOB: [DOB]

Dear Dr. [Last Name],

We are referring [Patient Name] for evaluation and management of tooth #17
(mandibular left third molar), which is partially erupted with recurrent
pericoronitis and impaction confirmed on panoramic radiograph. Given the
clinical history of two symptomatic episodes in the past six months and
the degree of impaction, we feel extraction is in the patient's best
interest and are requesting your surgical evaluation.
```

**Next steps:**
- Replace all bracketed fields with patient and provider information
- Confirm the receiving provider's fax number or secure email before sending
- Attach current radiographs, perio chart, and health history as noted
- Document the referral in the patient's chart, including date sent and provider
- Follow up in 2–3 weeks if no consultation report has been received
