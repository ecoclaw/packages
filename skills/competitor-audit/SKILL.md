---
name: competitor-audit
description: Research and analyze competitor law firm marketing to identify gaps, opportunities, and winning strategies.
license: MIT
triggers: ["competitor audit", "competitor analysis", "competitive research", "competitor review", "market analysis"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Competitor Audit

## What this skill does

Analyzes the marketing presence of 3-5 competitor law firms to identify:
- Where they rank vs. where we should rank
- What content they've produced that works
- What ads they're running
- What social strategies they use
- Gaps in their coverage that we can own
- Weaknesses to exploit

Produces:
1. **Competitor profiles** — one summary per competitor
2. **SEO gap analysis** — keywords they rank for that we don't
3. **Content audit** — what topics they've covered well vs. poorly
4. **Ad intelligence** — what ad angles they're using
5. **Strategic recommendations** — top 5 things to do based on findings

## How to invoke

```
/competitor-audit
```

Claude will ask:
- List 3-5 competitor firms to analyze (URLs preferred)
- What geography? (where are we competing)
- What practice areas are we focused on?
- What tools do you have access to? (Ahrefs, SEMrush, SpyFu, Google Ads Transparency Center — or none, Claude will use public data)

## Research process

For each competitor, Claude analyzes:

**Website & SEO:**
- Domain authority indicators (backlink profile quality)
- Practice area pages — are they comprehensive or thin?
- Blog activity — frequency, topics, quality
- Technical SEO signals (page speed, mobile, schema)
- Local SEO (Google Business Profile, reviews, citations)

**Content:**
- What topics they own
- Content quality vs. keyword stuffing
- Missing topics (your opportunity)
- Freshness — are they publishing regularly?

**Ads (via Google Transparency Center / SpyFu):**
- Are they running Google Ads?
- What keywords do they appear to target?
- What ad copy angles do they use?
- Estimated spend level

**Social:**
- Platform presence and activity level
- Engagement rates
- Content formats that work for them
- What they're not doing

## Example outputs

### Example: Competitor Profile — [Firm Name]

```
FIRM: [Name]
WEBSITE: [URL]
GEOGRAPHY: Los Angeles, CA

SEO PROFILE:
- Estimated monthly organic traffic: 2,400 visits/mo
- Strongest ranking pages: "CEQA attorney LA" (Position 3), "environmental lawyer California" (Position 7)
- Blog activity: ~2 posts/month, mostly regulatory summaries
- Schema markup: Present on homepage only
- Google Business Profile: 4.8 stars, 47 reviews, posts monthly

CONTENT GAPS (our opportunity):
- No content on PFAS liability
- No developer-focused CEQA guides
- No case studies published
- Blog posts are thin (< 800 words) — we can outperform with depth

ADS INTELLIGENCE:
- Running Google Ads (confirmed via Transparency Center)
- Appears to target: "environmental attorney," "CEQA lawyer," "environmental compliance"
- Ad angle: "Free consultation" + credentials
- Missing: No ad copy focused on developer/municipality pain points

SOCIAL MEDIA:
- LinkedIn: 340 followers, posts 1x/week, low engagement (~5 likes/post)
- No Instagram presence
- X: Inactive (last post 6 months ago)
- Opportunity: Consistent, value-first social content would easily outperform them

OVERALL SCORE: 6/10
THREAT LEVEL: Medium
```

### Strategic Recommendations:

```
1. OWN "PFAS liability California" — no competitor has substantial content; rank for this before the space gets crowded
2. OUTFLANK on developer content — write detailed CEQA guides for developers (competitors have thin, generic content)
3. WIN LOCAL SEO — increase Google Business Profile reviews to overtake [Competitor] in map pack
4. RUN ADS they're not running — target municipality decision-makers (city managers, planning directors); no competitor is doing this
5. DOMINATE INSTAGRAM — environmental law + visual content is an untapped niche; competitors have zero meaningful presence
```

**Next steps:**
- Share findings with firm leadership
- Prioritize top 3 opportunities by effort vs. impact
- Create content calendar targeting gap keywords
- Set up keyword rank tracking for target terms
- Re-run audit in 90 days to measure progress
