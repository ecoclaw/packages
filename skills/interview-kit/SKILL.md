---
name: interview-kit
description: Build role-specific interview guides with behavioral, situational, and technical questions mapped to competencies and a scoring rubric.
license: MIT
triggers: ["interview kit", "interview guide", "interview questions", "interview scorecard", "hiring kit"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Interview Kit

## What this skill does

Produces a complete, structured interview guide for any role and interview stage:

1. **Competency map** — identifies 4–6 core competencies to assess for the role
2. **Question bank** — behavioral, situational, and role-specific questions per competency
3. **Scoring rubric** — 1–4 scale with behavioral anchors for each competency
4. **Interviewer guide** — how to probe deeper, what to listen for, red flags
5. **Debrief template** — structured format for post-interview calibration

## How to invoke

```
/interview-kit
```

Claude will ask:
- Role and level?
- Interview stage? (phone screen, hiring manager, panel, technical, final/exec)
- How long is the interview? (30, 45, or 60 minutes)
- Top 3–5 things the hire must be great at?
- Any known team dynamics or specific concerns to probe?

## Workflow steps

### Step 1 — Competency Selection
Claude identifies the 4–6 most critical competencies for the role and stage, balancing technical skills, collaboration behaviors, and role-specific judgment.

### Step 2 — Question Bank
For each competency, 2–3 questions:
- **Behavioral:** "Tell me about a time when..."
- **Situational:** "How would you approach..."
- **Probing follow-ups:** "What would you do differently?" / "What was the hardest part?"

### Step 3 — Scoring Rubric
```
Competency: [Name]
1 — Below bar: [What a weak response looks like]
2 — Meets some: [Partial evidence, gaps in reasoning or ownership]
3 — Meets bar: [Clear evidence, structured thinking, owns outcomes]
4 — Exceptional: [Sophisticated, proactive, demonstrates outsized impact]
```

### Step 4 — Debrief Template
Structured post-interview summary for each interviewer to complete before the debrief call.

## Example outputs

### Example: Hiring Manager Interview, Senior Product Manager

**Competencies:** Strategic thinking, Customer empathy, Data-driven decision making, Cross-functional leadership

**Question Bank:**

*Strategic thinking*
> "Tell me about a time you had to make a significant roadmap tradeoff. What did you cut, and how did you decide?"
> Probe: "Who disagreed with that call? How did you handle it?"

*Customer empathy*
> "Walk me through how you built your understanding of your customers in your last role. What surprised you most?"
> Probe: "How did that change what you shipped?"

*Data-driven decision making*
> "Describe a time when the data pointed one direction but your instincts said another. What did you do?"
> Probe: "What did you learn from the outcome?"

*Cross-functional leadership*
> "Tell me about a time when you needed engineering or design to prioritize something they didn't want to. How did you get alignment?"
> Probe: "What would you do differently?"

**Scoring Rubric (Strategic Thinking):**
```
1 — Below bar: Struggles to articulate the tradeoff; describes features not strategy
2 — Meets some: Can name what was cut but unclear on framework or stakeholder management
3 — Meets bar: Clear reasoning, considers opportunity cost, communicates decision well
4 — Exceptional: Proactively surfaced the tradeoff before being forced, influenced the org
```

**Debrief Template:**
```
Interviewer: _______________  |  Date: _______________  |  Role: _______________
Overall hire recommendation: Strong Yes / Yes / No / Strong No

Competency ratings:
• Strategic thinking: ___ / 4 — Notes: _______________
• Customer empathy: ___ / 4 — Notes: _______________
• Data-driven decisions: ___ / 4 — Notes: _______________
• Cross-functional leadership: ___ / 4 — Notes: _______________

Strongest signal: _______________
Biggest concern: _______________
```

**Next steps:**
- Distribute question assignments to each interviewer before the interview day
- Hold a 15-minute pre-brief to align on the bar
- Collect scorecards before the group debrief to avoid anchoring bias
- Use `/offer-letter-generator` once a hire decision is made
