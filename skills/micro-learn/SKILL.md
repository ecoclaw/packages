---
name: micro-learn
description: 5-minute daily AI learning sessions for professionals across 25+ domains with spaced repetition, streak tracking, and Telegram delivery.
triggers: ["micro learn", "daily lesson", "5 minute learning", "professional learning", "daily skill", "learn daily", "micro learning"]
---

# Micro Learn

## What this skill does

1. **25+ learning domains** — system design, financial literacy, mental health literacy, public speaking, climate literacy, marketing growth, negotiation, contract law, AI/ML basics, leadership, data literacy, productivity, UX design, personal finance, behavioral economics, and more
2. **Consistent lesson format** — every lesson follows the same 5-part structure: hook (why this matters today), core concept, real-world example, 2 practice questions, and a single actionable takeaway
3. **SM-2 spaced repetition** — the SuperMemo SM-2 algorithm schedules when each concept returns for review, optimizing long-term retention across your chosen domain(s)
4. **Streak tracking** — daily learning streaks with milestone rewards; the system gently re-engages after a missed day without shame
5. **Telegram delivery** — daily lessons delivered at your preferred time via Telegram bot; reply in-chat to answer the practice questions and log your session

## How to invoke

```
/micro-learn
```

Claude will ask:
- Which domain(s) would you like to learn? (can choose up to 3 simultaneously)
- What time should daily lessons arrive? (Telegram delivery time)
- Current knowledge level in the chosen domain? (beginner / familiar / intermediate)
- Any specific concepts or gaps you want prioritized?

## Workflow steps

### Step 1 — Domain Setup
Claude configures the learning track for the chosen domain(s), sets the difficulty calibration based on self-reported level, and schedules the first lesson.

### Step 2 — Daily Lesson Delivery
At the configured time, the lesson is delivered via Telegram: hook, concept, example, 2 questions, takeaway. Total read time: 4-6 minutes.

### Step 3 — In-Chat Interaction
The user answers the two practice questions directly in Telegram. Claude responds with explanation and feedback regardless of whether answers are correct.

### Step 4 — SM-2 Scheduling
Based on how quickly and correctly the questions were answered, the SM-2 algorithm schedules the next appearance of this concept — sooner if struggling, later if mastered.

### Step 5 — Streak + Progress Report
Weekly Telegram summary: concepts covered, retention rate, streak days, and what's coming next week.

## Example outputs

### Example: Financial Literacy Domain

**Input:** Domain: Financial literacy, delivery at 8am, beginner level.

**Lesson excerpt:**
"Today's concept: Compound interest. Why it matters: Einstein (maybe) called it the eighth wonder of the world — and it's the single most powerful force in personal wealth building. Core concept: Compound interest means you earn interest on your interest. $1,000 at 7%/year for 30 years = $7,612. Same money, no compounding = $3,100. Question 1: If you invest $500/month at 6% annual return for 20 years, roughly how much will you have? A) $115,000 B) $232,000 C) $58,000. Takeaway: Start today, not when you earn more."

**Next steps:**
- Configure your Telegram bot token to enable daily delivery
- Start with one domain to build the habit before adding a second
- Review the weekly progress report to see which concepts are being retained
