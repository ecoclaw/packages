---
name: exam-prep-mcp
description: AI exam preparation for high school and college students. FSRS spaced repetition, AP/SAT/college question generation, readiness scoring, mock exam simulation.
license: MIT
triggers: ["exam prep", "study for exam", "test prep", "ap exam", "sat prep", "college exam", "practice test"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Exam Prep MCP

## What this skill does

1. **Multi-exam support** — AP Biology, Chemistry, Physics, History, English, Calculus, Statistics, Computer Science, Economics; SAT/ACT; college-level courses in most major disciplines
2. **FSRS-5 spaced repetition** — Free Spaced Repetition Scheduler (FSRS-5) algorithm schedules review of weak concepts at optimal intervals for long-term retention
3. **Question generation** — generates exam-style questions (multiple choice, free response, essay prompts) matched to the target exam's format and difficulty distribution
4. **Readiness scoring** — running score (0-100) tracks mastery across all studied topics; shows what's ready, what needs review, and what's not been touched
5. **Mock exam mode** — timed full-length mock exams with the real exam's format; detailed performance breakdown by topic after completion

## How to invoke

```
/exam-prep-mcp
```

Claude will ask:
- Which exam are you preparing for? (AP subject, SAT, ACT, or course name)
- When is your exam date?
- How many study sessions per week can you commit to?
- Do you want to start with a diagnostic or jump into a specific topic?

## Workflow steps

### Step 1 — Diagnostic
A short diagnostic (15-20 questions across all topics) establishes the baseline readiness score and identifies the weakest areas for priority study.

### Step 2 — Study Plan
Based on the exam date and session frequency, Claude builds a personalized study plan: topics by week, daily session goals, and mock exam dates.

### Step 3 — Daily Practice
Each session presents FSRS-scheduled review questions first, then new material. Explanations for wrong answers include the underlying concept, not just the right answer.

### Step 4 — Readiness Tracking
After each session, the readiness score updates. A topic breakdown shows green (ready), yellow (review needed), and red (not covered).

### Step 5 — Mock Exam
In the week before the exam, a full timed mock is run. The post-exam breakdown identifies patterns in wrong answers and prioritizes final review topics.

## Example outputs

### Example: AP Biology Prep

**Input:** AP Biology, exam in 6 weeks, 4 sessions/week.

**Diagnostic result:**
"Readiness: 52/100. Strong: Cell biology (78%), Genetics (71%). Needs work: Evolution (41%), Ecology (38%). Not covered: Animal behavior, Biotechnology."

**Study plan excerpt:**
"Week 1: Evolution + Ecology deep dive (3 sessions). Week 1 mock: Ecology only. Session 4: FSRS review of all prior topics."

**Next steps:**
- Set the exam date to activate the countdown and study plan
- Run the diagnostic first — it saves significant time by skipping already-mastered material
- Schedule a full mock exam 7 days before the real exam date

MCP config context: `npx @gonzih/exam-prep-mcp`
