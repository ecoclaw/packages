# Complete Education Suite — $349/mo

Everything from bedtime stories to career advancement. AI that makes every age smarter.

---

## What's Included

### Skills
- `/story-teacher` — educational choose-your-own-adventure for children 5–12
- `/exam-prep-mcp` — AP/SAT/ACT/college exam prep with FSRS-5 spaced repetition
- `/debate-coach` — critical thinking and logical reasoning for teens
- `/research-rabbit` — real academic paper search across 5 databases
- `/micro-learn` — daily 5-minute professional learning in 25+ domains
- `/skill-radar` — 90-day personalized skill gap plan against 2026 market trends
- `/safe-personas` — age-appropriate AI personas for each child (5–17)
- `/homework-scaffold` — Socratic anti-cheating tutor for all subjects

### Deliverables (Monthly)
- All Student Learning Suite deliverables (exam prep tracks, story sessions, study plans)
- All Professional Growth Suite deliverables (daily lessons, skill radar, 90-day plan)
- Safe personas configured for up to 3 children
- Homework scaffold active for all children's sessions
- Unified monthly summary: all learners in the household, all progress in one report

### Support
- Priority async support via Telegram or email
- Monthly 30-minute household learning review call (optional)
- Quarterly skill radar refresh for the professional learning track
- Exam date reminders and final-week mock scheduling

---

## Setup Instructions

### Step 1: Onboarding
1. List all learners in the household: each child's name and age, and the adult's role/career goal
2. List all target exams and dates
3. Choose adult learning domain(s) and Telegram delivery time
4. Confirm citation format for research-rabbit (APA / MLA / Chicago)

### Step 2: Install Skills
```bash
git clone https://github.com/ecoclaw/packages
cd packages
mkdir -p ~/.claude/skills
cp -r skills/story-teacher ~/.claude/skills/
cp -r skills/exam-prep-mcp ~/.claude/skills/
cp -r skills/debate-coach ~/.claude/skills/
cp -r skills/research-rabbit ~/.claude/skills/
cp -r skills/micro-learn ~/.claude/skills/
cp -r skills/skill-radar ~/.claude/skills/
cp -r skills/safe-personas ~/.claude/skills/
cp -r skills/homework-scaffold ~/.claude/skills/
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
        "EXAM_TARGET": "AP Chemistry",
        "EXAM_DATE": "2026-05-08",
        "SESSIONS_PER_WEEK": "4",
        "FSRS_DB_PATH": "./exam-prep.db"
      }
    },
    "story-teacher": {
      "command": "npx",
      "args": ["@gonzih/story-teacher"],
      "env": {
        "CHILD_NAME": "your-child-name",
        "CHILD_AGE": "8",
        "DEFAULT_WORLD": "eco-explorer"
      }
    },
    "micro-learn": {
      "command": "npx",
      "args": ["@gonzih/micro-learn"],
      "env": {
        "DOMAINS": "system-design,negotiation",
        "DELIVERY_TIME": "07:30",
        "TIMEZONE": "America/New_York",
        "TELEGRAM_BOT_TOKEN": "your-bot-token",
        "TELEGRAM_CHAT_ID": "your-chat-id",
        "LEVEL": "intermediate",
        "SM2_DB_PATH": "./micro-learn.db"
      }
    },
    "safe-personas": {
      "command": "npx",
      "args": ["@gonzih/safe-personas"],
      "env": {
        "CHILD_AGE": "8",
        "PERSONA_NAME": "Luna"
      }
    }
  }
}
```

### Step 4: First Week Kickoff
```
/skill-radar        ← Start here — 10 min, informs adult learning track
/exam-prep-mcp      ← Run diagnostic for each exam target
/story-teacher      ← Run a sample session to confirm age calibration
/safe-personas      ← Configure persona for each child
/micro-learn        ← Activate after skill radar is complete
```

---

## What We Need From You

- **Learner profiles**: Name, age, and goal for every learner in the household
- **30 minutes for setup**: Diagnostics and profile configuration; most families complete this in one sitting
- **Daily 5 minutes (adult)**: Read and respond to the daily micro-learn lesson
- **3-5 study sessions/week (students)**: The exam prep system adapts but rewards consistency
- **Quarterly check-in**: 15 minutes to refresh the skill radar and update exam timelines

---

## Upgrade to Family AI Safety Suite

Add full child safety infrastructure on top of learning. [See Family AI Safety Suite →](../family-ai-safety/PACKAGE.md)
