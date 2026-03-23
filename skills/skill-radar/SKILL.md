---
name: skill-radar
description: Analyzes your role and current skills against 2026 market trends, identifies gaps, and builds a personalized 90-day learning plan with weekly actions and free resources.
license: MIT
triggers: ["skill radar", "skill gap", "career growth", "90 day plan", "skills analysis", "upskill", "career development", "learning plan"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Skill Radar

## What this skill does

1. **Role-based skill mapping** — covers 8 role categories (software engineering, product management, marketing, finance, healthcare, design, law, leadership); maps your current skills against the competency model for your role
2. **2026 market trend analysis** — gaps are scored against what's actually being demanded in job postings, performance reviews, and industry reports for your role in 2026
3. **Gap scoring** — each skill gap is scored by urgency (how fast demand is growing) and impact (how much it affects career trajectory); high-urgency + high-impact gaps are prioritized
4. **90-day learning plan** — a week-by-week plan with specific micro-actions, each taking 30-60 minutes per week — realistic for busy professionals
5. **Free resource curation** — every skill gap is matched to free or low-cost resources: freeCodeCamp, MIT OpenCourseWare, YouTube channels, podcasts, books, and practice projects

## How to invoke

```
/skill-radar
```

Claude will ask:
- What is your current role and seniority level?
- What are your top 5-7 current skills or areas of expertise?
- What's your career goal for the next 12 months? (promotion, pivot, or staying sharp)
- How many hours per week can you dedicate to learning?
- Any specific skills you've been told you need to develop?

## Workflow steps

### Step 1 — Skill Inventory
Claude maps the user's self-reported skills against the competency model for their role, identifying current strengths and coverage gaps.

### Step 2 — Market Gap Analysis
Current skills are compared to 2026 market demand signals for the role. Each gap is scored: urgency (1-5) and career impact (1-5).

### Step 3 — Priority Matrix
Gaps are plotted on a 2x2: high urgency + high impact (do now), high urgency + low impact (delegate/skim), low urgency + high impact (schedule), low urgency + low impact (ignore).

### Step 4 — 90-Day Plan
Week-by-week plan built for the top 3-4 priority gaps: specific learning action each week, milestone to hit by end of each month, progress check-in format.

### Step 5 — Resource Curation
For each gap in the 90-day plan, Claude surfaces 2-3 free or low-cost resources: course link, estimated time investment, and what you'll be able to do after completing it.

## Example outputs

### Example: Software Engineer Aiming for Senior

**Input:** Role: Software Engineer (mid-level), Skills: Python, REST APIs, SQL, Git. Goal: Promotion to senior in 12 months. Time: 3 hours/week.

**Gap analysis:**
"High urgency + high impact: System design (demand +34% YoY), technical mentorship skills. High urgency + low impact: Kubernetes basics. Low urgency + high impact: Data structures mastery."

**90-day plan excerpt:**
"Week 1-2: System design fundamentals — read 'Designing Data-Intensive Applications' Ch. 1-3 (free via library). Week 3-4: Design a real system from scratch — post it for peer review. Month 1 milestone: Can explain CAP theorem and design a URL shortener end-to-end."

**Next steps:**
- Save the 90-day plan to Notion or a doc so you can track weekly progress
- Share your skill radar output with your manager as part of your development conversation
- Pair with `/micro-learn` to get daily micro-lessons on your top priority gap
