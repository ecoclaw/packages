---
name: research-digest
description: Summarize clinical trials, systematic reviews, and guideline updates into actionable clinical pearls for healthcare providers.
triggers: ["research digest", "summarize study", "clinical research", "literature summary", "guideline update", "journal club"]
---

# Research Digest

## What this skill does

Converts dense clinical literature into actionable insights for busy providers:

1. **Study summary** — design, population, intervention, comparator, primary endpoints
2. **Key findings** — primary and secondary outcomes in plain clinical language
3. **Level of evidence** — Oxford/GRADE rating with methodology quality note
4. **Clinical applicability** — how findings translate to your practice
5. **Limitations and caveats** — what the study can't tell you
6. **Bottom line** — one-sentence clinical pearl

## How to invoke

```
/research-digest
```

Claude will ask:
- Paste the abstract or full text, or provide a PubMed ID / DOI
- What's your specialty or clinical context? (helps frame applicability)
- Is this for personal reference, journal club, patient counseling, or a clinical decision?
- Any specific question you want answered by the research?

## Workflow steps

### Step 1 — Study Characterization
Claude identifies:
- Study design (RCT, cohort, meta-analysis, guideline, etc.)
- Population (n, inclusion/exclusion criteria, demographics)
- Intervention and comparator
- Follow-up duration
- Funding source (potential conflict of interest flag)

### Step 2 — Results Extraction
Primary and secondary outcomes with:
- Effect size (RR, OR, HR, ARR, NNT where applicable)
- Statistical significance and confidence intervals
- Clinical significance vs. statistical significance note

### Step 3 — Evidence Rating
```
Level of Evidence: [1a / 1b / 2a / 2b / 3 / 4 / 5] (Oxford CEBM)
GRADE Quality: [High / Moderate / Low / Very Low]
Bias Risk: [Low / Some concern / High] — [primary reason]
```

### Step 4 — Clinical Pearl
```
Bottom line: [One sentence that tells a busy clinician exactly what to do
              with this information in practice]
```

## Example outputs

### Example: EMPEROR-Reduced (Empagliflozin in HFrEF)

**Study Summary:**
- **Design:** Randomized, double-blind, placebo-controlled trial
- **Population:** 3,730 patients with HFrEF (EF ≤40%), symptomatic HF despite standard therapy
- **Intervention:** Empagliflozin 10mg daily vs. placebo
- **Primary endpoint:** Composite of CV death or hospitalization for HF
- **Follow-up:** Median 16 months

**Key Findings:**
- Primary endpoint reduced by 25% with empagliflozin (HR 0.75, 95% CI 0.65–0.86, p<0.001)
- NNT to prevent 1 primary event: ~19 patients over 16 months
- Benefit seen regardless of diabetes status
- eGFR decline was slower in empagliflozin group

**Evidence Rating:**
```
Level of Evidence: 1b (individual RCT)
GRADE Quality: High
Bias Risk: Low — industry-funded (Boehringer Ingelheim/Lilly); methodology robust
```

**Clinical Applicability:**
For patients with HFrEF on maximally tolerated GDMT, empagliflozin (or any SGLT2i) should be added regardless of diabetes status. This class is now a pillar of HFrEF management per 2022 AHA/ACC/HFSA guidelines.

**Key Limitation:**
Generalizability: ~97% of patients were already on ACEi/ARB or ARNi and beta-blocker. Benefit in treatment-naive patients is inferred, not directly studied.

**Bottom line:** Add an SGLT2 inhibitor to all eligible HFrEF patients — the mortality and hospitalization benefit is real, durable, and diabetes-independent.

**Next steps:**
- Share digest at next journal club or team meeting
- Review your HFrEF panel for patients not yet on SGLT2i
- Check formulary and payer coverage for empagliflozin or dapagliflozin
