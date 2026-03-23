---
name: job-description-writer
description: Generate inclusive, legally compliant job descriptions with structured requirements, responsibilities, and DEI-optimized language.
license: MIT
triggers: ["job description", "job posting", "write jd", "job listing", "open role", "hiring description"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Job Description Writer

## What this skill does

Produces complete, bias-reduced job descriptions ready for ATS posting and career site:

1. **Internal JD** — full version with comp range, team context, and manager notes
2. **External posting** — candidate-facing version optimized for apply rate and DEI
3. **EEOC compliance note** — flags any language that may create legal exposure
4. **Inclusive language audit** — removes coded language that discourages underrepresented candidates
5. **Boolean search string** — recruiter search string for sourcing

## How to invoke

```
/job-description-writer
```

Claude will ask:
- Job title and level? (e.g., Senior Product Manager, L5)
- Team and reporting structure?
- Must-have vs. nice-to-have requirements?
- Key responsibilities (top 5–7)?
- Compensation range (optional but recommended for apply rate)?
- Remote/hybrid/in-office and location?
- Any specific company culture points to highlight?

## Workflow steps

### Step 1 — Requirements Audit
Claude separates must-haves from nice-to-haves and flags any requirements that may unnecessarily narrow the candidate pool (e.g., years-of-experience thresholds, degree requirements where skills would suffice).

### Step 2 — Inclusive Language Pass
Reviews for:
- Gendered language ("rockstar," "ninja," "aggressive")
- Unnecessary physical requirements
- Culture-fit language that signals exclusion
- Replaces with neutral, skills-focused alternatives

### Step 3 — External JD Draft
Structured sections:
- **About the role** — what the person will own and why it matters
- **What you'll do** — 5–7 responsibilities in active, outcome-focused language
- **What you'll bring** — required and preferred qualifications, clearly labeled
- **Compensation & benefits** — salary range, equity, and key perks
- **About us** — 2–3 sentence company description
- **Equal opportunity statement** — EEOC-compliant boilerplate

### Step 4 — Boolean Search String
```
("job title" OR "related title") AND ("must-have skill 1" OR "skill variant") AND "location or remote"
```

## Example outputs

### Example: Senior Product Manager, B2B SaaS

**External Posting:**
```
Senior Product Manager — Growth

We're looking for a Senior Product Manager to own our self-serve growth funnel —
from trial activation through expansion revenue. You'll work at the intersection of
data, design, and engineering to build the product experience that turns sign-ups
into customers.

What you'll do:
• Define and execute the roadmap for our trial-to-paid conversion experience
• Run structured discovery with customers, sales, and CS to identify friction points
• Partner with engineering and design to ship iteratively and measure impact
• Own key metrics: trial conversion rate, time-to-value, and expansion MRR
• Communicate roadmap priorities and tradeoffs to senior leadership

What you'll bring:
Required:
• 5+ years of product management experience, with at least 2 in a B2B SaaS environment
• Track record of owning a growth or activation metric from baseline to material improvement
• Comfort with SQL or willingness to learn; you should be able to pull your own data

Preferred:
• Experience with PLG (product-led growth) motions
• Familiarity with experimentation platforms (LaunchDarkly, Amplitude, Statsig)

Compensation: $155,000–$185,000 base + equity + benefits
Location: Remote (US)

[Company is an equal opportunity employer. We welcome applicants regardless of race,
color, religion, sex, national origin, disability, veteran status, or any other
characteristic protected by law.]
```

**EEOC Note:** No flags. JD uses skills-based language and avoids years-of-experience minimum below 5 years.

**Boolean String:**
```
("product manager" OR "PM" OR "product lead") AND ("B2B SaaS" OR "SaaS" OR "PLG") AND ("growth" OR "activation" OR "conversion")
```

**Next steps:**
- Add ATS apply link before posting
- Post to LinkedIn, Greenhouse/Lever career page, and relevant Slack communities
- Set a 2-week applicant review checkpoint
- Share internal version with hiring manager for alignment on bar before interviews start
