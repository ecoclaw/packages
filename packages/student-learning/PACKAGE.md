# Student Learning Suite — $149/mo

AI-powered academic excellence from middle school through university.

---

## What's Included

### Skills
- `/story-teacher` — interactive educational storytelling for children 5–12; math, science, history, vocabulary, coding, and ecology embedded in choose-your-own-adventure narratives
- `/exam-prep-mcp` — AP, SAT, ACT, and college course exam preparation with FSRS-5 spaced repetition, readiness scoring, and mock exam simulation
- `/debate-coach` — structured debate practice for teens; argues both sides, detects 20 logical fallacies in real time, scores argument quality
- `/research-rabbit` — real academic paper search across ArXiv, Semantic Scholar, OpenAlex, and PubMed; literature mapping, gap analysis, and citation formatting

### Deliverables (Monthly)
- Up to 2 exam prep tracks configured (e.g., AP Biology + SAT)
- Personalized study plan per exam track, updated monthly
- Story-teacher sessions ready for up to 2 children aged 5–12
- Readiness score dashboard updated after each study session
- Monthly learning progress summary

### Support
- Async support via Telegram or email
- Study plan review call available on request
- Exam date reminders and final-week mock exam scheduling

---

## Setup Instructions

### Step 1: Onboarding
1. List the exams being prepared for and their dates
2. Identify which children (if any) will use story-teacher and their ages
3. Confirm citation format preference for research-rabbit (APA / MLA / Chicago)
4. Share any course syllabi or exam guides for custom question generation

### Step 2: Install Skills
```bash
git clone https://github.com/ecoclaw/packages
cd packages
mkdir -p ~/.claude/skills
cp -r skills/story-teacher ~/.claude/skills/
cp -r skills/exam-prep-mcp ~/.claude/skills/
cp -r skills/debate-coach ~/.claude/skills/
cp -r skills/research-rabbit ~/.claude/skills/
```

### Step 3: Configure MCP
Add to your MCP config file (`~/.claude/mcp_config.json`):
```json
{
  "mcpServers": {
    "exam-prep-mcp": {
      "command": "npx",
      "args": ["@gonzih/exam-prep-mcp"],
      "env": {
        "EXAM_TARGET": "AP Biology",
        "EXAM_DATE": "2026-05-12",
        "SESSIONS_PER_WEEK": "4",
        "FSRS_DB_PATH": "./exam-prep.db"
      }
    },
    "story-teacher": {
      "command": "npx",
      "args": ["@gonzih/story-teacher"],
      "env": {
        "CHILD_NAME": "your-child-name",
        "CHILD_AGE": "9",
        "DEFAULT_WORLD": "number-kingdom"
      }
    }
  }
}
```

### Step 4: Run Diagnostic
Start with the exam prep diagnostic before regular study sessions:
```
/exam-prep-mcp   ← Run diagnostic to establish readiness baseline
/story-teacher   ← Run a sample session to confirm age calibration
```

---

## What We Need From You

- **Exam details**: Name of each exam, date, and target score if known
- **30 minutes for diagnostic**: The initial readiness diagnostic takes 20-30 minutes and makes every subsequent session more efficient
- **Session commitment**: 3-5 study sessions per week for best results; the system adapts but rewards consistency
- **Feedback after first week**: Let us know if the difficulty level feels right so we can calibrate

---

## Upgrade to Complete Education Suite

Add family safety tools for younger siblings or combine with professional growth for parents. [See Complete Education Suite →](../complete-education-suite/PACKAGE.md)
