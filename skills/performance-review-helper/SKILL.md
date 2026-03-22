---
name: performance-review-helper
description: Structure performance review narratives with goal assessment, STAR-format behavior examples, ratings rationale, and 90-day development plans.
triggers: ["performance review", "perf review", "review writing", "employee review", "annual review", "review helper"]
---

# Performance Review Helper

## What this skill does

Turns notes and observations into structured, fair, and defensible performance reviews:

1. **Goal assessment** — maps results to stated goals with performance evidence
2. **Competency narrative** — STAR-format behavior examples for each competency
3. **Rating rationale** — justification for each rating that would withstand HR scrutiny
4. **Strengths and development areas** — balanced, specific, and actionable
5. **90-day development plan** — concrete actions, resources, and check-in milestones

## How to invoke

```
/performance-review-helper
```

Claude will ask:
- Employee role, level, and review period?
- What were the employee's stated goals for this period?
- Key achievements and outcomes (with context and impact)?
- Any areas where performance fell short or development is needed?
- Overall performance rating? (if you have a forced distribution or rating scale)
- Your company's rating scale? (e.g., 1–5, Exceeds/Meets/Below, etc.)

## Workflow steps

### Step 1 — Goal Assessment
For each stated goal, Claude structures:
- What was the goal
- What was achieved (with quantified impact where possible)
- Assessment: Exceeded / Met / Partially Met / Not Met

### Step 2 — Competency Narratives
For each core competency, a STAR-format paragraph:
- **Situation:** Context for the work
- **Task:** What the employee was responsible for
- **Action:** What they specifically did (not what the team did)
- **Result:** Measurable or observable outcome

### Step 3 — Balanced Assessment
- **Top 2–3 strengths:** Specific behaviors and their impact
- **1–2 development areas:** Framed as growth opportunities, not deficiencies

### Step 4 — 90-Day Development Plan
```
Development Goal: [Specific skill or behavior to build]
Actions:
  □ [Action 1] — by [date]
  □ [Action 2] — by [date]
Resources: [Course, mentor, stretch project, etc.]
Success looks like: [Observable behavior or outcome]
Check-in: [Date for manager 1:1 review]
```

## Example outputs

### Example: Mid-Level Software Engineer, Annual Review

**Goal Assessment:**
```
Goal 1: Ship payments v2 by Q3 — MET
  Delivered on time; auth module exceeded 99.95% uptime SLA in first 60 days.

Goal 2: Improve test coverage to 85% on core services — EXCEEDED
  Reached 91% coverage; authored the team's shared testing playbook adopted org-wide.

Goal 3: Lead one cross-team initiative — PARTIALLY MET
  Led API versioning working group but initiative is still in progress at review time.
  Strong facilitation noted by peers; execution timeline slipped due to competing priorities.
```

**Competency Narrative — Technical Excellence:**
> During Q3, the team faced an unexpected scaling bottleneck in the payment processing service two weeks before the v2 launch deadline. [Employee] independently diagnosed the N+1 query pattern causing 3x latency spikes under load, proposed and implemented a caching layer, and reduced p99 latency from 420ms to 87ms without requiring a delay to the launch. This work demonstrated a strong ability to identify root causes under pressure and deliver production-quality solutions independently.

**Development Area:**
> Cross-functional communication is an area for continued growth. [Employee]'s technical judgment is strong, but written updates in async channels sometimes lack the context stakeholders outside engineering need. Developing a habit of including the "so what" in technical updates will accelerate influence at the senior level.

**90-Day Development Plan:**
```
Development Goal: Improve async communication for non-technical audiences

Actions:
  □ Draft and share a "Technical Update Template" with manager for feedback — by [date+2wk]
  □ Practice leading the weekly eng-to-PM sync for one quarter — starting [date]
  □ Complete Lara Hogan's "Demystifying Public Speaking" (free online) — by [date+6wk]

Success looks like: PMs and stakeholders confirm updates are clearer and actionable
  without needing follow-up questions.
Check-in: [Date] 1:1 with manager
```

**Next steps:**
- Share draft with employee at least 48 hours before the review conversation
- Document specific examples from your notes before writing to keep it grounded
- Ensure rating language aligns with your company's calibration criteria
- File completed review in HRIS within the review window deadline
