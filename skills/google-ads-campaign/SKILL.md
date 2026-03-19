---
name: google-ads-campaign
description: Write a complete Google Ads search campaign for an environmental law firm, including responsive search ad copy, extensions, and negative keyword list.
triggers: ["google ads", "ppc", "paid ads", "ad campaign", "search ads", "adwords"]
---

# Google Ads Campaign

## What this skill does

Produces a ready-to-upload Google Ads campaign for a specific practice area or service. Includes:

1. **Campaign strategy** — bidding approach, match types, budget allocation
2. **Ad groups** — organized by intent cluster (3-5 ad groups)
3. **Responsive Search Ads** — 15 headlines + 4 descriptions per ad group
4. **Ad extensions** — sitelinks, callouts, structured snippets, call extension
5. **Negative keyword list** — 50+ negatives to prevent wasted spend
6. **Landing page recommendation** — what the destination page should contain

## How to invoke

```
/google-ads-campaign
```

Claude will ask:
- What service or practice area are we advertising? (e.g., CEQA compliance, environmental permits, contamination defense)
- Target geography? (e.g., California statewide, Los Angeles County, specific cities)
- Monthly budget? (helps with bidding strategy recommendation)
- Who is the target client? (developer, business owner, municipality, individual)
- What is the conversion action? (phone call, form fill, consultation booking)
- Any keywords you already know perform well?

## Output structure

### Campaign: [Practice Area] — [Geography]
**Goal:** Lead generation (phone + form)
**Bidding:** Target CPA or Maximize Conversions (recommend after 30 conversion data points)
**Budget:** $X/day

### Ad Group 1: [Intent Cluster]
**Keywords (Phrase + Exact):**
- "[keyword 1]"
- [keyword 1]
- "[keyword 2]"
...

**Responsive Search Ad:**
Headlines (15):
1. ...
2. ...
[through 15]

Descriptions (4):
1. ...
[through 4]

### Extensions
**Sitelinks:**
- [Label] | [Description] | [URL path]

**Callouts:**
- [short value props]

**Structured Snippets:**
- Header: Services
- Values: [list]

**Call Extension:** (833) XXX-XXXX | Schedule: Business hours

### Negative Keywords (50+)
[full list]

## Example outputs

### Example: CEQA Permitting — Los Angeles

**Ad Group 1: CEQA Help / Attorney**

Headlines:
```
1. CEQA Attorney in Los Angeles
2. Environmental Law Firm | CA
3. CEQA Compliance Help
4. Navigate CEQA with Confidence
5. Environmental Permits & CEQA
6. CEQA Review Attorneys
7. Free Consultation | CEQA Law
8. California Environmental Law
9. CEQA Exemption Help
10. Environmental Compliance CA
11. CEQA Filing Assistance
12. EIR Review & Defense
13. Trusted CEQA Attorneys
14. Project Approval Support
15. Call ecoclaw Today
```

Descriptions:
```
1. California's environmental review process is complex. Our attorneys guide developers, municipalities, and businesses through CEQA from start to finish.
2. From initial screening to EIR defense, ecoclaw handles every phase of CEQA compliance. Schedule a free consultation with our environmental team.
3. Avoid costly project delays. ecoclaw's CEQA attorneys identify exemptions, streamline review, and defend against legal challenges. Call today.
4. Serving developers, cities, and businesses across California. Experienced CEQA counsel with deep state and local agency relationships.
```

**Negative Keywords:**
```
free ceqa template
ceqa definition
what is ceqa
ceqa history
ceqa wikipedia
diy environmental review
ceqa exam
ceqa certification
ceqa jobs
ceqa course
environmental science degree
ceqa training online
ceqa internship
[+ 40 more in full output]
```

**Next steps:**
- Import into Google Ads Editor using the structured format above
- Set up conversion tracking (call tracking number + form confirmation page)
- Create or optimize landing page using `/practice-area-page` skill
- Set up automated rules: pause keywords below Quality Score 4 after 200 impressions
- Review search term report after 7 days and add new negatives
