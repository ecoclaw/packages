# HR & Recruiting Suite — $199 one-time install

AI-powered tools for HR professionals and recruiters — from job descriptions to performance reviews.

---

## What's Included

### Skills
- `/job-description-writer` — generate inclusive, compelling job descriptions with clear requirements, responsibilities, and culture fit signals
- `/interview-kit` — build a structured interview guide with role-specific questions, scoring rubrics, and legal compliance notes
- `/offer-letter-generator` — draft professional offer letters with compensation details, start date, and onboarding instructions
- `/performance-review-helper` — produce balanced, specific performance review drafts from manager notes and self-assessment inputs

### Deliverables (Per Use)
- Job description ready for ATS posting with inclusive language review flag
- Complete interview kit: question bank, scoring rubric, and interviewer guide
- Offer letter draft with all standard terms, ready for legal review and signature
- Performance review draft with strengths, development areas, and goal alignment

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

### Step 3: Configure Organization Settings
Add to `~/.claude/mcp_config.json`:
```json
{
  "mcpServers": {
    "skills-hr": {
      "command": "npx",
      "args": ["@gonzih/skills-hr"],
      "env": {
        "COMPANY_NAME": "Your Company Name",
        "INDUSTRY": "your-industry",
        "JURISDICTION": "your-state-or-country"
      }
    }
  }
}
```

### Step 4: First Run
```
/job-description-writer     ← Provide role title, level, and key requirements
/interview-kit              ← Specify role and seniority level
/offer-letter-generator     ← Input candidate name, role, and comp details
/performance-review-helper  ← Paste manager notes and self-assessment
```

---

## Who It's For

HR generalists, recruiters, and people managers at companies of all sizes who want to move faster on hiring and reviews without sacrificing quality or compliance. Especially useful for teams without a dedicated HR ops function.

---

## Upgrade Path

Combine with the [Executive Leadership Suite](../executive-leadership-suite/PACKAGE.md) for leaders managing OKRs, board communications, and strategic decision-making alongside people operations.

---

## GitHub
[https://github.com/Gonzih/skills-hr](https://github.com/Gonzih/skills-hr)
