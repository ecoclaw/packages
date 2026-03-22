# Family AI Safety Suite — $299/mo

Complete AI safety infrastructure for families with children using AI.

---

## What's Included

### Skills
- `/parental-control` — real-time content guardrails, 7-category classification, hold-for-approval flow, and parent notifications via Telegram, iMessage, or WhatsApp
- `/safe-personas` — age-appropriate AI personas for each child (5–17), five developmental tiers with universal safety layer
- `/ai-mood-journal` — daily emotional check-ins, longitudinal pattern tracking, spiral detection, and weekly parent digest
- `/homework-scaffold` — anti-cheating Socratic tutor that guides kids to answers without doing the work for them
- `/attachment-guard` — detects unhealthy AI dependency and parasocial bonding; responds with therapeutic reframing and parent alerts
- `/screen-time-mcp` — daily caps, quiet hours, cool-down periods, gamified streaks, and weekly usage reports

### Deliverables (Monthly)
- One-time setup for up to 3 child profiles (additional profiles: $49/child)
- Telegram bot configured for parent notifications (iMessage/WhatsApp available on request)
- Weekly automated parent digest delivered every Sunday
- Crisis escalation protocol configured and tested
- Age-appropriate personas selected, customized, and installed for each child
- Monthly usage and safety summary report

### Support
- Async support via Telegram or email
- Monthly 30-minute parent review call (optional)
- Crisis protocol walkthrough on setup

---

## Setup Instructions

### Step 1: Onboarding
1. Complete the Child Profile Questionnaire for each child (name, age, any known sensitivities)
2. Choose notification channel: Telegram (recommended), iMessage, or WhatsApp
3. Set parent override PIN for screen time exceptions
4. Confirm quiet hours and daily usage limits per child

### Step 2: Install Skills
```bash
git clone https://github.com/ecoclaw/packages
cd packages
mkdir -p ~/.claude/skills
cp -r skills/parental-control ~/.claude/skills/
cp -r skills/safe-personas ~/.claude/skills/
cp -r skills/ai-mood-journal ~/.claude/skills/
cp -r skills/homework-scaffold ~/.claude/skills/
cp -r skills/attachment-guard ~/.claude/skills/
cp -r skills/screen-time-mcp ~/.claude/skills/
```

### Step 3: Configure MCP
Add to your MCP config file (`~/.claude/mcp_config.json`):
```json
{
  "mcpServers": {
    "parental-control": {
      "command": "npx",
      "args": ["@gonzih/parental-control"],
      "env": {
        "CHILD_PROFILE": "child-name-age",
        "NOTIFY_CHANNEL": "telegram",
        "TELEGRAM_BOT_TOKEN": "your-bot-token",
        "TELEGRAM_CHAT_ID": "your-chat-id",
        "APPROVAL_TIMEOUT_MIN": "30"
      }
    },
    "safe-personas": {
      "command": "npx",
      "args": ["@gonzih/safe-personas"],
      "env": {
        "CHILD_AGE": "10",
        "PERSONA_NAME": "Ziggy"
      }
    },
    "ai-mood-journal": {
      "command": "npx",
      "args": ["@gonzih/ai-mood-journal"],
      "env": {
        "CHILD_NAME": "your-child-name",
        "DIGEST_CHANNEL": "telegram",
        "TELEGRAM_BOT_TOKEN": "your-bot-token"
      }
    },
    "screen-time-mcp": {
      "command": "npx",
      "args": ["@gonzih/screen-time-mcp"],
      "env": {
        "DAILY_LIMIT_MIN": "45",
        "QUIET_HOURS_START": "21:00",
        "QUIET_HOURS_END": "07:00",
        "COOLDOWN_MIN": "30",
        "PARENT_PIN": "your-4-digit-pin"
      }
    }
  }
}
```

### Step 4: Test Before Going Live
Run a quick test session with each child profile before activating:
```
/parental-control   ← Verify notification is received on parent device
/safe-personas      ← Confirm persona tone matches child's age
/screen-time-mcp    ← Test a quiet-hours block and the 5-min warning
```

---

## What We Need From You

- **Child profiles**: Name, age, any sensitivities or topics to restrict, for each child
- **Notification setup**: Telegram bot token (we'll walk you through creating one) or iMessage/WhatsApp contact
- **15 minutes per child**: To review persona selection and confirm settings before going live
- **Weekly review**: 10 minutes to read the Sunday digest and check any flagged alerts

---

## Upgrade to Student Learning Suite

Add student learning tools for homework support and academic growth. [See Student Learning Suite →](../student-learning/PACKAGE.md)
