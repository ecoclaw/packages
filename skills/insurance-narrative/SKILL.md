---
name: insurance-narrative
description: Write a predetermination or prior authorization narrative for dental procedures
license: MIT
triggers: ["insurance narrative", "predetermination", "prior auth", "dental authorization", "insurance justification", "procedure narrative"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Insurance Narrative

## What this skill does

Produces a well-structured clinical narrative for dental insurance predetermination and prior authorization requests — written in the precise, evidence-supported language that payers expect, increasing approval rates and reducing back-and-forth with insurance companies.

1. **Clinical findings summary** — documentation of exam, radiographic, and periodontal findings supporting the claim
2. **Diagnosis and medical necessity rationale** — clear explanation of why the procedure is dentally necessary, not elective
3. **Procedure description** — what is planned, including any alternatives considered and why they were ruled out
4. **Supporting documentation summary** — list of attachments (X-rays, perio chart, photos, prior treatment history)
5. **Expected outcomes** — what the procedure is designed to achieve and prognosis if untreated

## How to invoke

```
/insurance-narrative
```

Claude will ask:
- What procedure is being requested (include CDT code if known)?
- What tooth or region is affected, and what are the key clinical findings (pocket depths, decay extent, fracture, symptoms)?
- What diagnostics support the case (periapical X-ray, bitewing, CBCT, photos)?
- Has any prior treatment been attempted? What was the outcome?
- What is the patient's insurance carrier and plan type (if known), and what is their typical documentation standard?

## Workflow steps

### Step 1 — Clinical Data Intake
Claude collects the procedure, tooth number, clinical findings, radiographic evidence, and any prior treatment history to anchor the narrative in documented facts.

### Step 2 — Narrative Draft
A formal, clinically precise narrative is generated in the standard predetermination format: findings, diagnosis, necessity, treatment plan, alternatives considered, and expected outcome.

### Step 3 — CDT Code and Documentation Checklist
Claude provides the applicable CDT code(s) and a checklist of supporting attachments the payer is likely to require.

### Step 4 — Appeal Variant (optional)
If a claim has already been denied, Claude produces an appeal narrative that directly addresses the stated denial reason with additional clinical justification.

## Example outputs

### Example: Predetermination Narrative for a Full-Coverage Crown on Tooth #19

**Input:** Tooth #19, large existing amalgam (MOD) with cracked cusp confirmed on clinical exam and periapical radiograph. Patient reports sensitivity to chewing. No endodontic involvement. Plan: full-coverage porcelain-fused-to-metal crown (D2750). Alternative filling considered and ruled out due to insufficient tooth structure. Insurance: Delta Dental PPO.

**Predetermination narrative draft:**
```
DENTAL PREDETERMINATION NARRATIVE
Procedure: Full-Coverage Crown (D2750)
Tooth: #19 (mandibular left first molar)
Provider: [Provider Name, DDS] | NPI: [NPI] | Date: March 21, 2026
Patient: [Patient ID / Member ID]

---

CLINICAL FINDINGS

Clinical examination of tooth #19 reveals a large existing MOD amalgam
restoration with visible craze lines extending through the lingual cusp.
Direct examination confirms a fractured lingual cusp with mobility of the
cuspal fragment. The patient reports sharp pain to biting pressure and
thermal sensitivity, consistent with cracked tooth syndrome.

Periapical radiograph (attached) demonstrates:
  - Existing MOD amalgam occupying greater than 60% of the clinical crown
  - No periapical pathology
  - Normal periodontal ligament space
  - Intact alveolar bone

Periodontal assessment: Pocket depths within normal limits (2–3 mm);
no mobility beyond the fractured cusp; BOP negative.

DIAGNOSIS

D0220 — Periapical radiograph confirming existing large restoration and
cusp fracture without periapical pathology.

Primary diagnosis: Fractured tooth (S02.5XXA) with cracked cusp secondary
to undermined tooth structure from existing large amalgam restoration.

MEDICAL NECESSITY

The existing MOD amalgam restoration has undermined the structural integrity
of the lingual cusp of tooth #19. The confirmed cusp fracture represents an
acute risk of complete crown fracture, which would likely result in non-
restorability and extraction of the tooth. Without full-coverage restoration,
the fracture line is expected to propagate with normal occlusal loading.

Full-coverage crown (D2750) is the appropriate and necessary treatment to
restore functional occlusion, protect the remaining tooth structure, and
prevent tooth loss.

ALTERNATIVES CONSIDERED

Direct composite or amalgam buildup was considered and determined to be
clinically inadequate. The remaining tooth structure following removal of
the existing restoration is insufficient to support a direct restoration
with predictable long-term success. A direct restoration would not address
the fractured cusp or provide adequate structural reinforcement.

TREATMENT PLAN

D2750 — Crown, porcelain fused to metal (non-high noble), tooth #19
Estimated 2 appointments; temporary crown placed at preparation visit.

EXPECTED OUTCOME

Full-coverage crown is expected to restore functional occlusal contact,
eliminate the risk of further cusp fracture, and provide long-term
structural protection with appropriate prognosis. Failure to treat carries
a high risk of complete crown fracture and likely tooth loss.

SUPPORTING DOCUMENTATION ATTACHED
  ☐ Periapical radiograph (current, dated within 12 months)
  ☐ Clinical photograph demonstrating cusp fracture
  ☐ Periodontal chart
  ☐ Completed ADA claim form (J430D)

Please contact our office at [phone] with any questions regarding this
predetermination request.

[Provider Signature / Date]
```

**Appeal variant — opening for denied claim:**
```
RE: Appeal of Denied Predetermination — Claim #[Claim Number]
Denial Reason Cited: "Tooth does not meet criteria for crown; direct
restoration considered adequate."

We respectfully appeal the denial of predetermination for a full-coverage
crown on tooth #19. The clinical documentation submitted demonstrates that
direct restoration is not a clinically viable alternative due to the
extent of the existing MOD amalgam and confirmed cusp fracture. We provide
the following additional clinical justification:

[Continue with expanded clinical narrative and reference to ADA clinical
practice guidelines for crown placement criteria.]
```

**Next steps:**
- Replace all bracketed fields with patient and provider data before submitting
- Attach current periapical radiograph (taken within the past 12 months)
- Confirm CDT code matches what is loaded in your practice management software
- If submitting electronically, include narrative in the "remarks" or "attachment" field per payer requirements
- Save a copy of the narrative in the patient chart for audit purposes
