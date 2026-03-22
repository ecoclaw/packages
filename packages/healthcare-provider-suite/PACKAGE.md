# Healthcare Provider Suite — $249 one-time install

AI-powered clinical documentation and patient communication tools for physicians, NPs, and PAs.

---

## What's Included

### Skills
- `/clinical-note-draft` — generate SOAP/APSO note drafts from visit summaries, with ICD-10 code suggestions and chief complaint structuring
- `/patient-education` — produce plain-language patient education handouts tailored to diagnosis, literacy level, and language
- `/prior-auth-writer` — draft prior authorization letters with clinical justification, supporting criteria, and appeal language
- `/research-digest` — summarize clinical trials, systematic reviews, and guideline updates into actionable clinical pearls

### Deliverables (Per Use)
- Structured clinical note draft ready for provider review and attestation
- Patient handout (PDF-ready) at specified reading level (3rd–8th grade selectable)
- Prior auth letter with clinical necessity argument, CPT/ICD-10 codes, and supporting literature
- Research digest: study summary, key findings, applicability to practice, level of evidence

### Support
- Async support via email
- HIPAA guidance note: do not input PHI; use de-identified case summaries

---

## Setup Instructions

### Step 1: Install via npm
```bash
npm install -g @gonzih/skills-healthcare
```

### Step 2: Install Skills into Claude
```bash
cp -r node_modules/@gonzih/skills-healthcare/skills/clinical-note-draft ~/.claude/skills/
cp -r node_modules/@gonzih/skills-healthcare/skills/patient-education ~/.claude/skills/
cp -r node_modules/@gonzih/skills-healthcare/skills/prior-auth-writer ~/.claude/skills/
cp -r node_modules/@gonzih/skills-healthcare/skills/research-digest ~/.claude/skills/
```

### Step 3: Configure Practice Settings
Add to `~/.claude/mcp_config.json`:
```json
{
  "mcpServers": {
    "skills-healthcare": {
      "command": "npx",
      "args": ["@gonzih/skills-healthcare"],
      "env": {
        "SPECIALTY": "your-specialty",
        "PRACTICE_NAME": "Your Practice Name",
        "EHR_FORMAT": "epic"
      }
    }
  }
}
```

### Step 4: First Run
```
/clinical-note-draft   ← Provide de-identified visit summary
/patient-education     ← Specify diagnosis and patient literacy level
/prior-auth-writer     ← Input CPT code, diagnosis, and payer
/research-digest       ← Paste abstract or provide PubMed ID
```

---

## Who It's For

Physicians, nurse practitioners, and physician assistants in outpatient, inpatient, and telehealth settings who want to reduce documentation burden and improve patient communication without sacrificing clinical accuracy.

---

## Important Disclaimer

These skills assist with documentation drafting only. All clinical content must be reviewed and attested by a licensed provider before use. Do not input patient PHI.

---

## Upgrade Path

Combine with the [Executive Leadership Suite](../executive-leadership-suite/PACKAGE.md) for practice administrators managing team performance and strategic communications.

---

## GitHub
[https://github.com/Gonzih/skills-healthcare](https://github.com/Gonzih/skills-healthcare)
