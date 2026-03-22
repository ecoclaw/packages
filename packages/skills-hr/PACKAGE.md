# HR Skills Suite — @gonzih/skills-hr

AI-powered hiring and people management tools for HR managers and recruiters.

---

## What's Included

### Skills
- `/job-description-writer` — generate inclusive, legally compliant job descriptions with structured requirements, responsibilities, and DEI-optimized language
- `/interview-kit` — build role-specific interview guides with behavioral, situational, and technical questions mapped to competencies
- `/offer-letter-generator` — draft professional offer letters with compensation summary, contingencies, and onboarding next steps
- `/performance-review-helper` — structure performance review narratives with goal assessment, behavior examples, and development plans

### Deliverables (Per Use)
- Job description (internal + external posting versions) with EEOC compliance note
- Interview kit: question bank, scoring rubric, and interviewer guidance per round
- Offer letter draft with compensation breakdown, start date, and contingency language
- Performance review narrative with rating rationale, STAR examples, and 90-day development plan

### Support
- Async support via email
- Skill update notifications via GitHub releases

---

## Setup Instructions

### Step 1: Install via npm
```bash
npm install -g @gonzih/skills-hr
```

### Step 2: Install Skills into Claude
```bash
cp -r node_modules/@gonzih/skills-hr/skills/job-description-writer ~/.claude/skills/
cp -r node_modules/@gonzih/skills-hr/skills/interview-kit ~/.claude/skills/
cp -r node_modules/@gonzih/skills-hr/skills/offer-letter-generator ~/.claude/skills/
cp -r node_modules/@gonzih/skills-hr/skills/performance-review-helper ~/.claude/skills/
```

### Step 3: Configure Company Settings
Add to `~/.claude/mcp_config.json`:
```json
{
  "mcpServers": {
    "skills-hr": {
      "command": "npx",
      "args": ["@gonzih/skills-hr"],
      "env": {
        "COMPANY_NAME": "Your Company",
        "COMPANY_STATE": "CA",
        "ATS_PLATFORM": "greenhouse"
      }
    }
  }
}
```

### Step 4: First Run
```
/job-description-writer      ← Provide role title, team, and key requirements
/interview-kit               ← Specify role and interview stages
/offer-letter-generator      ← Input candidate name, role, and comp details
/performance-review-helper   ← Provide employee context and rating period
```

---

## GitHub
[https://github.com/Gonzih/skills-hr](https://github.com/Gonzih/skills-hr)
