---
name: case-study
description: Transform a client win or matter outcome into a polished case study for the law firm website and marketing materials.
license: MIT
triggers: ["case study", "client story", "matter outcome", "client win", "success story"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Case Study

## What this skill does

Turns a client outcome into a compelling case study that:
- Demonstrates the firm's expertise in a specific area
- Builds trust with prospective clients facing similar challenges
- Provides SEO-rich content for the website
- Can be repurposed for social media, pitch decks, and proposals

Produces:
1. **Case study draft** — 500-800 words in Problem/Approach/Outcome format
2. **Pull quotes** — 2-3 highlighted quotes (if client testimonial is provided)
3. **Key stats callouts** — visual-ready data points
4. **Meta tags** — for website publishing
5. **Social media snippets** — 3 posts promoting the case study

## How to invoke

```
/case-study
```

Claude will ask:
- What was the client situation / problem? (no confidential details required — describe the type of client and situation)
- What did the firm do? (services provided, strategies used, agencies navigated)
- What was the outcome? (permits obtained, case dismissed, settlement reached, liability avoided, timeline, dollar amount if shareable)
- Can we name the client, or is this anonymized?
- Do you have a client quote to include?
- What practice area does this support?

**Important:** Case studies are written to describe what the firm does, not to guarantee similar outcomes for future clients. All case studies include: *"Results may vary. Past results do not guarantee similar outcomes."*

## Case study structure

```
[HEADLINE]
[Subhead — client type + outcome summary]

THE SITUATION
[2-3 paragraphs: who the client was (generalized if anonymous), what challenge they faced, what was at stake, why it was complex]

OUR APPROACH
[2-3 paragraphs: what ecoclaw did — specific steps, agencies involved, strategies used, legal arguments made]

THE OUTCOME
[1-2 paragraphs: what happened — permits granted, case resolved, liability reduced, timeline compressed]

BY THE NUMBERS
[3-4 data callouts: e.g., "18 months saved vs. estimated EIR timeline", "$2.3M in avoided remediation costs", "0 violations in 3-year audit period"]

[CLIENT QUOTE if available]

[CTA: "Facing a similar challenge? Contact ecoclaw."]

[Disclaimer]
```

## Example outputs

### Example: CEQA Challenge Defense

**Input:** Municipal client. A third party challenged their approved mixed-use development under CEQA. Firm successfully defended the EIR. Project proceeded. Challenge dismissed. Saved ~24 months of delay.

**Headline:**
```
Municipal Developer Saves 24-Month Project Delay After Successful CEQA Challenge Defense
```

**THE SITUATION:**
```
A California municipality had spent two years shepherding a mixed-use affordable housing and commercial development through the CEQA process. Their Environmental Impact Report had been approved and the project was ready to break ground — until a third-party environmental group filed a writ of mandate challenging the adequacy of the EIR.

The lawsuit put everything at risk. A successful challenge could have sent the project back to square one, requiring a supplemental EIR and adding 18-24 months of delay, with significant carrying costs and potential loss of financing commitments.
```

**BY THE NUMBERS:**
```
📅 24 months of project delay avoided
⚖️ Challenge dismissed in full at summary judgment
🏗️ Project proceeded on original construction timeline
💰 Estimated $1.8M in financing and carrying costs preserved
```

**Next steps:**
- Get client approval before publishing (required)
- Check California Bar Rule 7.1 compliance for client testimonials
- Publish under /case-studies/ with appropriate schema markup
- Add to relevant practice area pages as proof point
- Generate social posts with `/social-media-week`
