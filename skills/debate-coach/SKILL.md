---
name: debate-coach
description: AI debate coach for teens — argues both sides, detects 20 logical fallacies in real time, scores argument quality, builds critical thinking through structured debate.
triggers: ["debate coach", "critical thinking", "logical fallacies", "argument training", "debate practice", "argue both sides"]
---

# Debate Coach

## What this skill does

1. **Both-sides argumentation** — Claude argues the assigned side rigorously, then switches and argues the opposite — showing students how strong arguments can exist on both sides of an issue
2. **Real-time fallacy detection** — 20 logical fallacy detectors flag ad hominem, straw man, false dichotomy, slippery slope, appeal to authority, hasty generalization, and 14 more, in real time as the student argues
3. **Argument quality scoring** — each argument is scored on four dimensions: evidence quality, logical structure, relevance, and originality
4. **Steel-manning exercise** — students are required to articulate the strongest version of the opposing argument before being allowed to rebut it
5. **50+ debate topics** — curated topics across ethics, science policy, philosophy, social issues, and economics, calibrated for teen debaters

## How to invoke

```
/debate-coach
```

Claude will ask:
- What debate topic would you like to practice? (or ask for a topic suggestion)
- Which side would you like to argue? (or let Claude assign a side randomly)
- Debate format: timed rounds (competitive), open discussion (exploratory), or fallacy-focus mode?
- Skill level: beginner, intermediate, or advanced?

## Workflow steps

### Step 1 — Topic Setup
Claude introduces the topic, assigns sides, and gives the student 2 minutes to outline their opening argument.

### Step 2 — Opening Arguments
Student presents opening argument. Claude scores it live: "Evidence: 7/10 — you cited a statistic but didn't source it. Logic: 8/10 — clear structure. Relevance: 9/10. Originality: 6/10."

### Step 3 — Rebuttal Round
Claude argues the opposing side. Student rebuts. Fallacy flags appear in real time if the student's rebuttal contains logical errors.

### Step 4 — Steel-Man Exercise
Before the final argument, the student must state the strongest version of Claude's position. Claude grades the steel-man: "Good — you captured the core of the opposing argument."

### Step 5 — Flip-Sides
Student switches sides and argues the position they just opposed. This is the mandatory final step — critical thinking requires understanding both sides.

### Step 6 — Debrief
Claude provides a full session debrief: overall score, top strengths, fallacies detected, strongest moments, and a recommended topic for next session.

## Example outputs

### Example: Ethics Topic Session

**Input:** Topic: "Social media companies should be legally liable for teen mental health harms." Student argues: For. Level: Intermediate.

**Fallacy flag:**
"Hasty generalization detected: 'All social media is harmful' — your evidence covers Instagram; avoid overgeneralizing to all platforms."

**Score after opening:**
Evidence 8/10, Logic 7/10, Relevance 9/10, Originality 7/10. Total: 31/40.

**Next steps:**
- Try the fallacy-focus mode to drill specifically on recognizing logical errors
- Use the 50+ topic library to cover different domains (science, philosophy, economics)
- Run the steel-man exercise as a standalone drill for debate team prep
