---
name: okr-builder
description: Structure quarterly OKRs with measurable key results, owner assignments, confidence scoring, and alignment to company-level objectives.
triggers: ["okr builder", "write okrs", "build okrs", "quarterly goals", "objectives key results", "okr planning"]
---

# OKR Builder

## What this skill does

Transforms strategic priorities into well-structured, measurable OKRs:

1. **Objective framing** — inspiring, directional objective statements that motivate the team
2. **Key results** — 2–4 measurable outcomes per objective (not tasks or activities)
3. **Confidence scoring** — initial 0–10 confidence score per key result
4. **Owner assignments** — primary owner and contributing teams per key result
5. **Alignment check** — maps team OKRs to company-level objectives

## How to invoke

```
/okr-builder
```

Claude will ask:
- What team or level are these OKRs for? (company, department, team, individual)
- What quarter and year?
- What are the 2–4 biggest strategic priorities for this period?
- Any company-level OKRs or themes these should align to?
- What metrics does this team own or significantly influence?
- Any constraints or known risks for the quarter?

## Workflow steps

### Step 1 — Objective Drafting
Claude writes 2–4 objective statements that are:
- Qualitative and inspiring (not numeric — metrics belong in key results)
- Ambitious but achievable in one quarter
- Clear to anyone in the company without context

### Step 2 — Key Result Development
For each objective, 2–4 key results that are:
- Measurable: a specific number, percentage, or binary outcome
- Outcomes, not outputs: "increase NPS from 32 to 45" not "run NPS survey"
- Time-bound: achievable within the quarter

### Step 3 — Confidence and Owner Table
```
KR | Description | Owner | Confidence (0–10) | Baseline | Target
---|-------------|-------|-------------------|----------|-------
   |             |       |                   |          |
```

### Step 4 — Alignment Mapping
Shows how each objective maps to a company-level OKR or strategic theme, flagging any team objective that doesn't connect to company priorities.

## Example outputs

### Example: Q2 2026 OKRs — Product Team

**Objective 1: Make our product the fastest path to value in the category**

| Key Result | Owner | Confidence | Baseline | Target |
|------------|-------|------------|----------|--------|
| Reduce time-to-first-value from 14 days to 7 days | PM Lead | 7/10 | 14 days | 7 days |
| Increase trial-to-paid conversion from 18% to 26% | Growth PM | 6/10 | 18% | 26% |
| Achieve NPS of 45+ among accounts activated in Q2 | PM + CS | 8/10 | 32 | 45 |

**Objective 2: Ship a platform foundation that 10x's our build velocity**

| Key Result | Owner | Confidence | Baseline | Target |
|------------|-------|------------|----------|--------|
| Reduce mean time to ship a new integration from 6 wks to 2 wks | Eng Lead | 5/10 | 6 wks | 2 wks |
| Zero P0 incidents caused by platform layer in Q2 | Platform Lead | 8/10 | 2/qtr | 0 |
| Component library coverage reaches 80% of new UI surface area | Design Lead | 7/10 | 40% | 80% |

**Alignment:**
```
Objective 1 → Company OKR: "Become the #1 trial-to-paid conversion in segment"
Objective 2 → Company OKR: "Achieve engineering excellence and build velocity at scale"
```

**Confidence interpretation guide:**
```
0–3: We don't know how to get there yet
4–6: We have a plan but meaningful uncertainty remains
7–8: High confidence with normal execution risk
9–10: This is already done or nearly certain — consider raising the target
```

**Next steps:**
- Share draft with team for input before the quarter starts
- Schedule a mid-quarter OKR check-in at week 6
- Flag any KRs below 5/10 for risk discussion and early mitigation planning
- Use `/decision-log` to document key strategic decisions made during OKR planning
