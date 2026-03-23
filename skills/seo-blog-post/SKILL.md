---
name: seo-blog-post
description: Generate a full SEO-optimized blog post for an environmental law firm, including keyword research guidance, outline, full draft, and meta tags.
license: MIT
triggers: ["seo blog post", "write blog post", "blog post", "write article", "content marketing"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# SEO Blog Post

## What this skill does

Produces a complete, publish-ready SEO blog post for an environmental law firm. Walks through:

1. **Keyword targeting** — primary keyword, secondary keywords, search intent
2. **Outline** — H2/H3 structure optimized for featured snippets and reader flow
3. **Full draft** — 1,200–2,000 words, natural keyword integration, internal links
4. **Meta tags** — title tag (≤60 chars), meta description (≤160 chars), Open Graph fields
5. **Post-publish checklist** — schema markup, image alt text, canonical URL, internal linking

## How to invoke

```
/seo-blog-post
```

Claude will ask:
- What topic or keyword should we target?
- Who is the target audience? (e.g., real estate developers, municipalities, businesses)
- Any recent news, cases, or regulatory changes to reference?
- Which practice area should this support?
- Desired word count? (default: 1,500 words)
- Any competitors' posts we should outperform?

## Workflow steps

### Step 1 — Keyword Brief
Claude produces a keyword brief:
- Primary keyword with estimated intent (informational / transactional / navigational)
- 5-8 secondary/LSI keywords to weave in
- Suggested title variations (3 options)
- Competitor gap analysis note if competing URL is provided

### Step 2 — Outline
Structured H2/H3 outline with:
- Intro hook angle
- Each section's purpose and target sub-keyword
- FAQ section for People Also Ask coverage
- CTA placement

### Step 3 — Full Draft
Complete article with:
- Attention-grabbing intro (problem-first framing)
- Well-organized body sections with clear headers
- Regulatory specifics (CEQA, NEPA, Clean Water Act, CERCLA as relevant)
- Practical takeaways in each section
- 1-2 calls to action (consult the firm, download a guide, etc.)
- Compliance disclaimer at the bottom

### Step 4 — Meta Tags
```
Title Tag: [Primary Keyword] | ecoclaw Environmental Law
Meta Description: [150-160 char summary with keyword + CTA]
OG Title: [Social-optimized title]
OG Description: [Engaging 2-sentence summary]
```

## Example outputs

### Example: CEQA Exemptions Post

**Input:** Topic: CEQA exemptions for infill development; Audience: Real estate developers; Word count: 1,500

**Keyword Brief:**
- Primary: "CEQA exemptions infill development"
- Secondary: "CEQA categorical exemption", "infill exemption California", "Class 32 exemption CEQA", "environmental review California", "CEQA compliance developer"
- Intent: Informational (developer researching their options)

**Outline:**
```
H1: CEQA Exemptions for Infill Development: What California Developers Need to Know

H2: What Is CEQA and Why Does It Apply to Your Project?
H2: The Class 32 Infill Exemption Explained
  H3: Eligibility Requirements
  H3: Common Pitfalls That Void the Exemption
H2: Other CEQA Exemptions Relevant to Urban Development
  H3: Categorical Exemptions vs. Statutory Exemptions
  H3: The Urban Decay Exception
H2: How to Apply for a CEQA Exemption: Step-by-Step
H2: When CEQA Review Is Unavoidable — and How to Streamline It
H2: Frequently Asked Questions
  H3: How long does CEQA review take?
  H3: Can I challenge a CEQA denial?
  H3: What happens if I proceed without CEQA compliance?
H2: Work With an Environmental Attorney Before You Break Ground
```

**Meta Tags:**
```
Title Tag: CEQA Exemptions for Infill Development | ecoclaw
Meta Description: California's Class 32 infill exemption can fast-track your project — if you qualify. Learn the requirements, pitfalls, and how ecoclaw can help. (158 chars)
```

**Next steps:**
- Review draft for any project-specific details to add
- Add 2-3 relevant internal links to practice area pages
- Upload to CMS with recommended schema markup (Article + LegalService)
- Schedule social promotion using `/social-media-week`
