# Healthcare Group Practice Suite — $449/mo

Clinical notes to patient education — 8 skills for healthcare teams.

---

## What's Included

### Skills
- `/clinical-note-draft` — generate SOAP/APSO note drafts from visit summaries, with ICD-10 code suggestions and chief complaint structuring
- `/patient-education` — produce plain-language patient education handouts tailored to diagnosis, literacy level, and language
- `/prior-auth-writer` — draft prior authorization letters with clinical justification, supporting criteria, and appeal language
- `/research-digest` — summarize clinical trials, systematic reviews, and guideline updates into actionable clinical pearls
- `/treatment-plan-explainer` — translate a dental or medical treatment plan into clear patient-facing language with rationale, sequencing, and cost context
- `/patient-recall-letter` — generate personalized patient recall and reactivation letters for overdue preventive care, follow-ups, or recommended treatment
- `/insurance-narrative` — draft a clinical narrative for insurance pre-authorization or claims, with supporting diagnosis codes and necessity justification
- `/referral-letter` — produce a professional referral letter with clinical summary, reason for referral, relevant history, and urgency indication

### Deliverables (Per Use)
- Structured clinical note draft ready for provider review and attestation
- Patient handout (PDF-ready) at specified reading level (3rd–8th grade selectable)
- Prior auth letter with clinical necessity argument, CPT/ICD-10 codes, and supporting literature
- Research digest with study summary, key findings, applicability to practice, and level of evidence
- Treatment plan explainer document tailored to patient literacy level and appointment sequence
- Patient recall letter personalized by care gap, last visit date, and preferred contact channel
- Insurance narrative with diagnosis coding, medical necessity rationale, and supporting clinical documentation outline
- Referral letter formatted for specialist receipt with complete clinical handoff information

### Support
- Async support via email
- Skill update notifications via GitHub releases
- HIPAA guidance note: do not input PHI; use de-identified case summaries

---

## Setup Instructions

### Step 1: Install via npx
```bash
npx @gonzih/skills-healthcare
npx @gonzih/skills-dental
```

### Step 2: Install Skills into Claude
```bash
cp -r node_modules/@gonzih/skills-healthcare/skills/clinical-note-draft ~/.claude/skills/
cp -r node_modules/@gonzih/skills-healthcare/skills/patient-education ~/.claude/skills/
cp -r node_modules/@gonzih/skills-healthcare/skills/prior-auth-writer ~/.claude/skills/
cp -r node_modules/@gonzih/skills-healthcare/skills/research-digest ~/.claude/skills/
cp -r node_modules/@gonzih/skills-dental/skills/treatment-plan-explainer ~/.claude/skills/
cp -r node_modules/@gonzih/skills-dental/skills/patient-recall-letter ~/.claude/skills/
cp -r node_modules/@gonzih/skills-dental/skills/insurance-narrative ~/.claude/skills/
cp -r node_modules/@gonzih/skills-dental/skills/referral-letter ~/.claude/skills/
```

### Step 3: Add to MCP Config (optional)
Add to `~/.claude/mcp_config.json`:
```json
{
  "mcpServers": {
    "skills-healthcare": {
      "command": "npx",
      "args": ["@gonzih/skills-healthcare"]
    },
    "skills-dental": {
      "command": "npx",
      "args": ["@gonzih/skills-dental"]
    }
  }
}
```

### Step 4: First Run
```
/clinical-note-draft       ← Provide de-identified visit summary
/patient-education         ← Specify diagnosis and patient literacy level
/prior-auth-writer         ← Input CPT code, diagnosis, and payer
/research-digest           ← Paste abstract or provide PubMed ID
/treatment-plan-explainer  ← Describe planned procedures and sequencing
/patient-recall-letter     ← Specify care gap type and time since last visit
/insurance-narrative       ← Input procedure codes, diagnosis, and payer
/referral-letter           ← Describe patient, reason for referral, and specialist type
```

---

## Who It's For

Multi-specialty practices, dental groups, and healthcare organizations running both medical and dental services that need unified documentation and patient communication tooling across their full clinical team.

---

## Important Disclaimer

These skills assist with documentation drafting only. All clinical content must be reviewed and attested by a licensed provider before use. Do not input patient PHI.

---

## Upgrade Path

For practice administrators managing team performance and operations, pair with the [Operations Suite](../operations-suite/PACKAGE.md) for SOP writing, vendor evaluation, and monthly reporting.

---

## GitHub
[https://github.com/Gonzih/skills-healthcare](https://github.com/Gonzih/skills-healthcare) and [https://github.com/Gonzih/skills-dental](https://github.com/Gonzih/skills-dental)
