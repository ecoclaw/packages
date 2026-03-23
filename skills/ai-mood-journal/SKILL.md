---
name: ai-mood-journal
description: Daily AI mood check-ins for children, longitudinal emotional pattern tracking, spiral detection, and weekly parent digest via Telegram or email.
license: MIT
triggers: ["mood journal", "emotional check in", "child mental health", "mood tracking", "weekly digest", "emotional patterns"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# AI Mood Journal

## What this skill does

1. **Daily check-in** — a gentle, conversational mood check-in ("How are you feeling today?") tailored to the child's age and recent emotional history
2. **Longitudinal tracking** — sentiment and emotional themes are stored in SQLite across sessions, building a picture of emotional trends over time
3. **Spiral detection** — algorithm flags declining mood trends (3+ consecutive negative sessions, significant drop from baseline) and triggers parent notification
4. **Weekly parent digest** — every Sunday, parents receive a digest: mood trend chart, notable themes, any flags, and conversation-starter suggestions
5. **Age-appropriate language** — check-in prompts and reflection questions are calibrated to the child's developmental stage

## How to invoke

```
/ai-mood-journal
```

Claude will ask:
- What is the child's name and age?
- Are we starting a new check-in or reviewing the weekly digest?
- Preferred delivery for weekly digest: Telegram or email?
- Any emotional topics or themes the parent wants to track specifically?

## Workflow steps

### Step 1 — Daily Check-In
Claude opens with a warm, age-appropriate prompt. The child responds in their own words. Claude asks 1-2 follow-up questions to understand the feeling more fully.

### Step 2 — Sentiment Logging
The session is logged to SQLite with a sentiment score, detected emotional themes, and notable phrases.

### Step 3 — Pattern Analysis
After each session, the system checks for spiral indicators: sustained negative trend, sharp mood drop, themes of isolation or hopelessness.

### Step 4 — Alert (if needed)
If spiral indicators are present, a parent alert is sent immediately via Telegram with the relevant session excerpts and suggested responses.

### Step 5 — Weekly Digest
Each Sunday, the parent digest compiles the week's mood data, highlights notable sessions, and includes 3-5 conversation starters tailored to what the child expressed.

## Example outputs

### Example: Weekly Digest Output

**Input:** 10-year-old child, 5 check-ins over the week.

**Digest excerpt:**
"This week, [Child] mostly expressed feeling tired and a little left out at school (3 of 5 sessions). No spiral flags. A good conversation starter: 'I heard you mentioned feeling left out this week — want to tell me more about what's been happening at school?' Mood trend: slightly down from last week's baseline."

**Next steps:**
- Confirm SQLite storage path and Telegram/email credentials
- Schedule the daily check-in time (recommended: after school, before dinner)
- Review the first weekly digest to calibrate baseline expectations
