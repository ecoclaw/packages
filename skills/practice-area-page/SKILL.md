---
name: practice-area-page
description: Write an SEO-optimized landing page for a specific environmental law practice area.
license: MIT
triggers: ["practice area page", "landing page", "service page", "website page", "practice page"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Practice Area Page

## What this skill does

Generates a complete, SEO-optimized practice area page for the law firm website. Unlike blog posts, these pages are evergreen conversion assets — they rank for high-intent keywords and convert visitors into consultation requests.

Produces:
1. **SEO metadata** — title tag, meta description, H1
2. **Page structure** — full copy organized by section
3. **Schema markup** — LegalService + FAQPage JSON-LD
4. **Internal linking suggestions** — what to link to and from
5. **CRO notes** — conversion rate optimization recommendations for the page

## How to invoke

```
/practice-area-page
```

Claude will ask:
- What practice area? (e.g., CEQA compliance, environmental permitting, contaminated site cleanup, water rights, environmental litigation)
- Target geography? (affects local SEO angle)
- Who is the primary client type for this page?
- What 3 problems does this service solve for clients?
- Any awards, results, or differentiators to highlight?

## Page structure

```
[HERO SECTION]
H1: [Primary Keyword + Value Prop]
Subhead: [Who we help + what we do for them]
CTA: Schedule a Free Consultation

[OVERVIEW SECTION]
H2: [What is X / Understanding X]
2-3 paragraphs establishing the landscape, why it matters

[HOW WE HELP SECTION]
H2: How ecoclaw Helps [Client Type] with [Practice Area]
Bulleted list of specific services / what the firm actually does
Sub-sections if multiple service lines

[THE PROCESS SECTION]
H2: Our Approach
Numbered steps showing what working with the firm looks like

[WHO WE SERVE SECTION]
H2: Who This Is For
List of client types who need this service

[WHY ecoclaw SECTION]
H2: Why Choose ecoclaw?
3-5 differentiators (specifics, not platitudes)

[FAQ SECTION]
H2: Frequently Asked Questions
5-8 Q&As targeting People Also Ask and long-tail keywords

[CTA SECTION]
H2: Ready to Protect Your Project / Business / Community?
Strong CTA with urgency + form or phone number

[DISCLAIMER]
```

## Example outputs

### Example: CEQA Compliance Practice Area Page

**SEO Metadata:**
```
Title Tag: CEQA Compliance Attorneys | ecoclaw Environmental Law
Meta Description: California's environmental review process doesn't have to stall your project. ecoclaw's CEQA attorneys guide developers, cities, and businesses through every phase. (160 chars)
H1: CEQA Compliance Attorneys for California Developers & Municipalities
```

**Overview Section:**
```
The California Environmental Quality Act (CEQA) is one of the most powerful — and complex — environmental laws in the United States. Nearly every discretionary project in California requires some level of CEQA review before approval, from a small commercial renovation to a major infrastructure project.

Navigating CEQA without experienced legal counsel can mean months of unnecessary delays, costly environmental impact reports, and vulnerability to third-party lawsuits that can halt projects for years.

ecoclaw's environmental attorneys help clients identify the fastest legitimate path through CEQA — whether that's documenting an exemption, streamlining the review process, or defending an approved project against legal challenge.
```

**FAQ Section (excerpt):**
```
Q: How long does CEQA review take?
A: It depends on the project type. Projects that qualify for a categorical exemption can be approved in weeks. A full Environmental Impact Report (EIR) typically takes 12–24 months. An attorney can help identify whether your project qualifies for a faster track.

Q: Can a CEQA determination be challenged?
A: Yes. Any person can file a legal challenge to a CEQA determination within 30–180 days of the lead agency's decision, depending on the project type. Challenges are common for larger projects. ecoclaw defends against CEQA litigation and can help bulletproof your environmental review before challenges arise.
```

**Next steps:**
- Add page to website CMS under /practice-areas/ceqa-compliance/
- Upload JSON-LD schema to page `<head>`
- Link from homepage, blog posts, and related practice area pages
- Submit URL for indexing in Google Search Console
- Set up consultation form with auto-response email
