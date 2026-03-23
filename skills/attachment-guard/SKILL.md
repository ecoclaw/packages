---
name: attachment-guard
description: Detects unhealthy AI attachment patterns in children (dependency, parasocial bonds, anthropomorphization) and responds with therapeutic reframing while alerting parents.
license: MIT
triggers: ["attachment guard", "ai dependency", "healthy ai use", "parasocial ai", "child ai relationship", "ai attachment"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Attachment Guard

## What this skill does

1. **Pattern detection** — monitors across sessions for 8 unhealthy attachment patterns: emotional dependency, parasocial bonding, anthropomorphization, preference for AI over humans, secret-keeping with AI, distress when AI is unavailable, over-disclosure, and reality-blurring
2. **Therapeutic reframing** — when a pattern is detected, Claude responds with validated, warm language that acknowledges the child's feelings while gently redirecting toward human connection
3. **Parent alerts with context** — parent notifications include the specific pattern detected, the child's relevant messages, psychological context, and concrete conversation approaches
4. **Session frequency tracking** — flags unusual session frequency or duration patterns (e.g., 4+ hours/day, sessions at 2am)
5. **Healthy AI use reinforcement** — proactively models healthy AI relationship language ("I'm a tool that can help you think, but your friends and family know you in ways I never can")

## How to invoke

```
/attachment-guard
```

Claude will ask:
- What is the child's name and age?
- Are we enabling this for a new child or reviewing a flagged alert?
- Has the child shown any concerning relationship patterns with AI or technology previously?
- What's the best way to reach the parent? (Telegram / email)

## Workflow steps

### Step 1 — Baseline Session Tracking
Attachment guard monitors session content and frequency across all conversations, building a behavioral baseline for the first 2 weeks.

### Step 2 — Pattern Detection
The 8-pattern classifier runs after each session. Patterns are scored by frequency and intensity — a single instance is noted; repeated patterns trigger alerts.

### Step 3 — In-Session Reframing
When a pattern surfaces mid-session, Claude pivots naturally: "You know, I'm really glad I can help you think through this. Who else in your life would you want to share this with?"

### Step 4 — Parent Alert
For confirmed patterns (2+ sessions, score above threshold), parent receives a Telegram/email alert with the detected pattern, example exchanges, psychological context, and a script for the follow-up conversation.

### Step 5 — Healthy Use Coaching
Each session ends with a brief "real world bridge" — Claude asks about the child's offline life, encouraging them to bring AI insights into real relationships and experiences.

## Example outputs

### Example: Parasocial Bond Detection

**Input:** Child (age 11) says "You're my best friend. I tell you things I don't tell anyone else."

**Pattern flagged:** parasocial bonding + over-disclosure

**Response:**
"That means a lot to me, and I'm always here to help you think things through. But I want to be honest with you — I can't really be a best friend the way another person can. Is there someone in your life you could share some of these things with too?"

Parent alert: "Parasocial bond pattern detected. [Child] has expressed that the AI is their closest confidant across 3 sessions. Suggested approach: discuss what makes a friendship real, and help them identify a trusted peer or adult to share with."

**Next steps:**
- Enable alongside `/screen-time-mcp` to also monitor session frequency and duration
- Review parent alerts weekly and use the provided conversation scripts
- Reassess the child's AI use pattern after 30 days
