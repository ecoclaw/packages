---
name: lead-magnet
description: Create a downloadable lead magnet (guide, checklist, or toolkit) for an environmental law firm to capture qualified leads.
triggers: ["lead magnet", "downloadable guide", "checklist", "free guide", "lead capture", "ebook", "toolkit"]
---

# Lead Magnet

## What this skill does

Creates a complete lead magnet — a valuable downloadable resource that prospects exchange their email address to receive. Effective lead magnets for law firms:

- Attract the exact type of client the firm wants
- Demonstrate expertise without giving away billable advice
- Move prospects from "just browsing" to "in our pipeline"

Produces:
1. **Lead magnet concept** — format, title, target audience, hook
2. **Full content** — ready to format and design (10-20 pages equivalent)
3. **Landing page copy** — headline, bullets, form, CTA
4. **Thank-you page copy** — what appears after download
5. **Email follow-up sequence** — 3-email drip after download

## How to invoke

```
/lead-magnet
```

Claude will ask:
- What client problem should this solve?
- What format fits best? (checklist, guide, toolkit, template, quiz)
- What practice area should this support?
- What's the next step after download? (book consult, read a page, join a webinar)

## Lead magnet formats

| Format | Best for | Length |
|--------|----------|--------|
| Checklist | Pre-permit, pre-development, compliance audit | 1-2 pages |
| Step-by-step guide | Complex processes (CEQA, cleanup) | 8-15 pages |
| Toolkit | Bundle of templates + checklists | Multi-page |
| FAQ document | High-volume question areas | 5-10 pages |
| Cost estimator | Budget planning | 1 page + worksheet |

## Example outputs

### Example: "The California Developer's CEQA Checklist"

**Concept:**
- Format: Checklist + brief explanatory notes
- Target: Real estate developers in California, pre-entitlement stage
- Hook: Help them figure out if their project qualifies for a CEQA exemption before hiring anyone
- CTA after download: Schedule a free CEQA screening call

**Landing Page Headline:**
```
Does Your Project Qualify for a CEQA Exemption?
Find Out in 10 Minutes with Our Free Developer Checklist
```

**Landing Page Bullets:**
```
✓ The 5 questions every developer must answer before starting CEQA review
✓ A step-by-step screening guide for Class 32 (infill) exemptions
✓ Common exemption killers — and how to avoid them
✓ What to expect if your project needs a full EIR
✓ How to protect your entitlement from third-party legal challenges
```

**Checklist Content (excerpt):**
```
SECTION 1: INITIAL PROJECT SCREENING
□ Is the project subject to a public agency's discretionary approval?
  → If no: CEQA likely does not apply. Confirm with counsel.
  → If yes: Continue to Section 2.

□ Does the project fall under a statutory exemption?
  → Check: ministerial projects, emergency projects, feasibility studies
  → If yes: Document the exemption basis. Proceed to permitting.

□ Is the project categorically exempt?
  → Review the 33 categorical exemption classes in 14 CCR § 15300 et seq.
  → Common applicable classes: Class 1 (existing facilities), Class 3 (new construction), Class 32 (infill)

SECTION 2: CLASS 32 INFILL EXEMPTION SCREENING
□ Is the project site 5 acres or less?
□ Is the site surrounded by urban uses?
□ Is the site not habitat for protected species?
□ Does the project not trigger any exceptions to exemptions?
  → No significant effects on traffic, noise, air quality, or water quality
  → No unusual circumstances
  → Not on a hazardous waste site
  → Not within a scenic highway corridor
```

**Email Drip — Email 1 (Immediate):**
```
Subject: Your CEQA Checklist + One More Thing

Hi [First Name],

Your California Developer's CEQA Checklist is attached.

One thing most developers miss: even if you qualify for an exemption, how you document it matters enormously. A poorly documented exemption is an easy target for third-party challenges.

Reply to this email if you have questions about your specific project — we answer every reply.

— The ecoclaw Team
```

**Next steps:**
- Design the checklist in Canva or Adobe (use brand colors)
- Set up gated download in Mailchimp / ConvertKit / HubSpot
- Connect form to CRM and tag as "CEQA Developer Lead"
- Configure drip sequence to send over 7 days
- Promote with `/social-media-week` skill
