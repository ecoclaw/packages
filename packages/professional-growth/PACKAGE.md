# Professional Growth Suite — $99/mo

Stay ahead of the skills gap. 5 minutes a day builds compounding expertise.

---

## What's Included

### Skills
- `/micro-learn` — daily 5-minute learning sessions across 25+ professional domains, delivered via Telegram with SM-2 spaced repetition and streak tracking
- `/skill-radar` — skill gap analysis against 2026 market trends for your role, with a personalized 90-day learning plan and free resource curation

### Deliverables (Monthly)
- Skill radar analysis (run once at setup, updated quarterly or on request)
- 90-day learning plan with weekly micro-actions
- Daily Telegram lessons in your chosen domain(s)
- Weekly learning summary: concepts covered, retention rate, streak status
- Monthly progress report: skill gaps closed, readiness scores improved

### Support
- Async support via Telegram or email
- Quarterly skill radar refresh to update the plan as market trends evolve

---

## Setup Instructions

### Step 1: Onboarding
1. Run `/skill-radar` first — the output informs which micro-learn domain(s) to prioritize
2. Choose up to 3 learning domains for daily lessons
3. Set your preferred Telegram delivery time for daily lessons
4. Share your role, seniority, and 12-month career goal for the skill radar analysis

### Step 2: Install Skills
```bash
git clone https://github.com/ecoclaw/packages
cd packages
mkdir -p ~/.claude/skills
cp -r skills/micro-learn ~/.claude/skills/
cp -r skills/skill-radar ~/.claude/skills/
```

### Step 3: Configure MCP
Add to your MCP config file (`~/.claude/mcp_config.json`):
```json
{
  "mcpServers": {
    "micro-learn": {
      "command": "npx",
      "args": ["@gonzih/micro-learn"],
      "env": {
        "DOMAINS": "system-design,financial-literacy",
        "DELIVERY_TIME": "08:00",
        "TIMEZONE": "America/Los_Angeles",
        "TELEGRAM_BOT_TOKEN": "your-bot-token",
        "TELEGRAM_CHAT_ID": "your-chat-id",
        "LEVEL": "intermediate",
        "SM2_DB_PATH": "./micro-learn.db"
      }
    }
  }
}
```

### Step 4: Start Learning
```
/skill-radar     ← Run first — takes 10 minutes, informs everything else
/micro-learn     ← Configure daily delivery after skill radar is complete
```

---

## What We Need From You

- **10 minutes for skill radar**: Answer questions about your role, current skills, and career goals — this makes the 90-day plan specific to you, not generic
- **5 minutes per day**: Read the daily lesson and answer the two practice questions in Telegram
- **Telegram setup**: You'll need a Telegram account; we'll walk you through creating a bot token in under 5 minutes
- **Quarterly check-in**: 15 minutes every quarter to refresh the skill radar as market conditions evolve

---

## Upgrade to Complete Education Suite

Add student learning tools for your household or the complete suite for maximum coverage. [See Complete Education Suite →](../complete-education-suite/PACKAGE.md)
