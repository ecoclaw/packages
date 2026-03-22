# Legal Professional Suite — $249 one-time install

AI-powered legal workflow tools for attorneys, paralegals, and legal ops teams — from contract review to client intake.

---

## What's Included

### Skills
- `/contract-scanner` — review contracts for missing clauses, unusual terms, and risk flags with a structured issue summary
- `/research-brief` — produce a concise legal research brief from a question or fact pattern, with case citations and analysis
- `/client-intake` — generate a structured intake questionnaire and summary memo for new matter onboarding
- `/settlement-summary` — draft a clear settlement summary memo covering terms, obligations, deadlines, and next steps

### Deliverables (Per Use)
- Contract review report with flagged clauses, risk rating, and suggested edits
- Research brief with issue statement, applicable law, analysis, and conclusion
- Intake questionnaire tailored to matter type, plus a summary memo for the file
- Settlement summary memo ready for client review and file documentation

### Support
- Async support via email
- Skill update notifications via GitHub releases

---

## Setup Instructions

### Step 1: Install via npm
```bash
npm install -g @gonzih/skills-legal
```

### Step 2: Install Skills into Claude
```bash
cp -r node_modules/@gonzih/skills-legal/skills/contract-scanner ~/.claude/skills/
cp -r node_modules/@gonzih/skills-legal/skills/research-brief ~/.claude/skills/
cp -r node_modules/@gonzih/skills-legal/skills/client-intake ~/.claude/skills/
cp -r node_modules/@gonzih/skills-legal/skills/settlement-summary ~/.claude/skills/
```

### Step 3: Configure Practice Settings
Add to `~/.claude/mcp_config.json`:
```json
{
  "mcpServers": {
    "skills-legal": {
      "command": "npx",
      "args": ["@gonzih/skills-legal"],
      "env": {
        "PRACTICE_AREA": "your-practice-area",
        "JURISDICTION": "your-jurisdiction",
        "FIRM_NAME": "Your Firm Name"
      }
    }
  }
}
```

### Step 4: First Run
```
/contract-scanner    ← Paste contract text or upload document
/research-brief      ← State your legal question or fact pattern
/client-intake       ← Specify matter type to generate intake form
/settlement-summary  ← Paste settlement terms for memo draft
```

---

## Who It's For

Solo practitioners, small firm attorneys, and in-house legal teams who want to accelerate routine legal work without sacrificing quality. Works across practice areas — transactional, litigation, and regulatory.

---

## Important Disclaimer

These skills assist with drafting and research only. All output must be reviewed by a licensed attorney before use or reliance. Do not input confidential client information without appropriate data handling measures in place.

---

## Upgrade Path

Environmental law firms may also benefit from the [ecoclaw MCP](../ecoclaw-mcp/PACKAGE.md) for specialized regulatory and compliance workflows.

---

## GitHub
[https://github.com/Gonzih/skills-legal](https://github.com/Gonzih/skills-legal)
