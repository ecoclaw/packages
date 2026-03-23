---
name: screen-time-mcp
description: Enforces AI usage limits for children — daily caps, quiet hours, weekly budgets, cool-down periods, gamified streaks, and parent usage reports.
license: MIT
triggers: ["screen time", "ai time limit", "usage limit", "quiet hours", "daily limit", "ai schedule"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Screen Time MCP

## What this skill does

1. **Daily and weekly caps** — configurable per-child limits (e.g., 45 min/day, 3 hrs/week); graceful 5-minute warnings before cutoff, never a hard crash
2. **Quiet hours** — no AI sessions during configured quiet hours (e.g., 9pm-7am, during school hours); attempts during quiet hours receive a warm redirect
3. **Cool-down periods** — enforces minimum breaks between sessions (e.g., 30-minute break required after 45 minutes of use)
4. **Gamified streaks** — children earn streak rewards for respecting daily limits; positive reinforcement rather than punitive cutoffs
5. **Parent usage reports** — weekly report showing daily usage, peak times, subject distribution, and streak achievements; parent override PIN for exceptions

## How to invoke

```
/screen-time-mcp
```

Claude will ask:
- What is the child's name and age?
- What daily usage limit should we set? (recommended by age group will be suggested)
- What are the quiet hours for this child?
- What cool-down period between sessions? (default: 30 minutes)
- What's the parent override PIN?

## Workflow steps

### Step 1 — Profile Configuration
Claude sets up the child's usage profile: daily cap, weekly budget, quiet hours, cool-down duration, and streak targets.

### Step 2 — Session Gating
At the start of each session, usage is checked against the daily and weekly budget. Sessions that would exceed the limit require parent PIN override.

### Step 3 — Warm Warnings
At 5 minutes before the session cap, Claude issues a friendly heads-up: "We've got about 5 minutes left today — let's finish up what you were working on."

### Step 4 — Quiet Hours Redirect
Attempts to start sessions during quiet hours receive: "It's rest time right now. Let's pick this up tomorrow — your brain does its best thinking after a good night's sleep!"

### Step 5 — Weekly Report
Every Sunday, parent receives a usage report: total time, daily breakdown, subjects explored, cool-down compliance, and the child's current streak status.

## Example outputs

### Example: Daily Limit Reached

**Input:** Child tries to start a session after hitting the 45-minute daily limit.

**Response:**
"You've done great thinking today — 45 minutes of exploring! Your limit for today is reached. Want to write down what you want to explore tomorrow so you don't forget?"

**Parent report excerpt:**
"This week: 3h 20min total (Mon 40min, Tue 38min, Wed 45min, Thu 42min, Fri 35min). Top subjects: math homework, creative writing. Current streak: 5 days under limit."

**Next steps:**
- Set the parent override PIN before going live
- Share the streak reward structure with the child so they're motivated by it
- Pair with `/parental-control` for content guardrails alongside time management

MCP config context: `npx @gonzih/screen-time-mcp`
