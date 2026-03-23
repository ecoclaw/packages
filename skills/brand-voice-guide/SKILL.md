---
name: brand-voice-guide
description: Create a brand voice guide with tone attributes, writing principles, and do/don't examples
license: MIT
triggers: ["brand voice", "voice guide", "brand tone", "tone of voice", "brand personality", "writing style guide"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Brand Voice Guide

## What this skill does

Produces a comprehensive brand voice guide that gives any writer — in-house, freelance, or AI-assisted — enough context to write consistently on-brand. The guide defines 3-5 tone attributes, each with a precise description and side-by-side do/don't examples. It also includes a before/after copy transformation table showing how to rewrite off-brand content, and channel-specific tone notes so teams know how LinkedIn copy differs from an email subject line or an error message. Output is formatted for inclusion in a brand playbook or Notion wiki.

1. **Tone attribute definition** — names and precisely describes each brand personality trait with real-world context
2. **Do/don't examples** — shows the attribute in action with concrete copy comparisons (not vague rules)
3. **Before/after table** — transforms off-brand copy into on-brand copy so writers can pattern-match
4. **Channel-specific notes** — adjusts the voice for each platform (social, email, web, sales, support)
5. **Quick reference card** — a one-page cheat sheet writers can keep open while drafting

## How to invoke

```
/brand-voice-guide
```

Claude will ask:
- What is the brand name and what does the company do (one paragraph)?
- Who is the primary audience and what do they care about?
- How would you describe the brand personality in 3-5 adjectives — and are there any personality traits you want to explicitly avoid?
- What are 1-2 competitor brands whose voice you do NOT want to sound like, and why?
- Are there any existing copy samples (ads, emails, website) that represent the brand at its best?

## Workflow steps

### Step 1 — Brand Context Analysis
Review the brand description, audience, and any existing copy samples. Identify the tension the brand lives in (e.g., "expert but not intimidating," "fun but not frivolous") — this tension is usually where the most useful voice guidance lives.

### Step 2 — Tone Attribute Development
Define 3-5 tone attributes. For each: write a 2-3 sentence description, list what the attribute means in practice, and create one do/don't copy example pair. Attributes should be distinct from each other and specific enough to be actionable.

### Step 3 — Before/After Transformation Table
Take 4-6 examples of common brand copy scenarios (homepage headline, email subject, error message, social post, sales email) and write an off-brand version alongside an on-brand version. Include a one-line note explaining what changed and why.

### Step 4 — Channel Notes and Quick Reference
Write 3-4 sentence tone notes for each primary channel (website, email, social, sales collateral, customer support). Compile a one-page quick reference card with all attributes, key rules, and a "when in doubt" guiding principle.

## Example outputs

### Example: Sustainable Outdoor Gear Company Brand Voice Guide

**Input:** Brand is Ridgeline Gear, a sustainable outdoor gear company making packs, apparel, and accessories from recycled materials. Audience: outdoor enthusiasts aged 25–45 who are environmentally conscious but also serious about performance. They distrust greenwashing and expect gear to work as hard as they do. Avoid sounding like: Patagonia (too preachy/political) or REI (too corporate-friendly/mass market). Best existing copy: "Built for the backcountry. Not the landfill."

**Brand voice guide draft:**
```
RIDGELINE GEAR — BRAND VOICE GUIDE
Version 1.0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
THE RIDGELINE VOICE IN ONE SENTENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We sound like the most experienced person in your hiking group —
the one who's done the miles, knows the gear inside out, and cares
deeply about leaving the trail better than they found it.
Not preachy. Not corporate. Just honest, capable, and outdoors-first.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TONE ATTRIBUTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. EARNED AUTHORITY
   What it means: We know this gear category because we use it. Our
   credibility comes from real-world performance data and our own
   outdoor experience — not certifications or ad copy. We state what
   we know with confidence, and we admit what we don't know.

   In practice:
   - Lead with specific performance details, not superlatives
   - Use "we've found that" not "the best in class"
   - Cite real specs (denier count, pack weight, material source)
   - It's fine to say "this pack isn't right for everyone"

   DO:
   "The 420D ripstop face fabric holds up to granite scrambles. We know
   because we've dragged this pack across the Sierras for three seasons."

   DON'T:
   "Industry-leading durability engineered for the most demanding adventures."

---

2. DIRECT AND UNCLUTTERED
   What it means: We don't pad. Every word earns its place. Our audience
   has read enough gear marketing to spot filler from a mile away. We
   respect their time and their intelligence.

   In practice:
   - Short sentences. Active verbs.
   - No throat-clearing openings ("In today's world…")
   - No passive voice in headlines or leads
   - If you can cut a word without losing meaning, cut it

   DO:
   "1,200 miles. Zero seam failures."

   DON'T:
   "Designed with the modern adventurer in mind, our innovative approach
   to outdoor gear delivers a premium experience that stands the test of time."

---

3. HONEST ABOUT SUSTAINABILITY
   What it means: We don't greenwash. When we make a sustainability
   claim, we back it with specifics. When we fall short of our own
   standards, we say so. Our audience can smell marketing spin, and
   they'll leave if they catch us using it.

   In practice:
   - Always name the material and its source ("87% post-consumer recycled
     nylon from reclaimed fishing nets")
   - Use "progress" language, not "perfect" language ("We're at 67% recycled
     materials across the line — we're working on the rest")
   - Never use "eco-friendly," "green," or "sustainable" as standalone
     claims without backup
   - It's powerful to say what we haven't solved yet

   DO:
   "The shell is 87% recycled nylon. The zipper pulls aren't — yet.
   Here's what we're doing about it: [link]"

   DON'T:
   "100% committed to a greener future for generations to come."

---

4. DRY WIT — NEVER SLAPSTICK
   What it means: We have a sense of humor about the outdoor experience —
   the Type II fun, the gear obsession, the questionable decisions made at
   altitude. But we don't try too hard. Wit lands quietly. If you can hear
   a drum kit after the joke, rewrite it.

   In practice:
   - Humor comes from truth about the outdoor experience, not wordplay
   - One dry observation per piece is enough — don't stack jokes
   - Never use exclamation points for punchlines
   - Self-aware is fine; self-deprecating about the gear is not

   DO:
   "Waterproof. (We know you've heard that before. Here's what we mean by it.)"

   DON'T:
   "Adventure awaits! Pack your sense of humor — you're gonna need it! 🏔️😂"

---

5. OUTDOORS-FIRST, ACTIVISM-INFORMED
   What it means: We believe in protecting the places we recreate in, but
   we're not a political brand. We support trail stewardship, Leave No
   Trace, and conservation funding — and we keep the advocacy specific
   and action-oriented. We don't lecture. We invite.

   In practice:
   - Reference specific places, trails, and conservation organizations
   - CTA-first: "Join us for the cleanup" not "The environment is in crisis"
   - Connect environmental stakes to the personal experience of being outside
   - Don't take political positions on legislation; do support specific
     conservation programs

   DO:
   "5% of every pack sale funds trail maintenance in the Eastern Sierras.
   Because the trail has to be there when you come back."

   DON'T:
   "We believe our planet is in danger and we all have a responsibility
   to fight for change. Together we can make a difference."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BEFORE / AFTER TRANSFORMATION TABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SCENARIO: Homepage headline
  BEFORE (off-brand):
    "Premium Sustainable Outdoor Gear for Every Adventure"
  AFTER (on-brand):
    "Built for the backcountry. Not the landfill."
  WHY: Loses the superlative, gains specificity and tension.

SCENARIO: Product description opening
  BEFORE (off-brand):
    "Introducing our most innovative pack yet, engineered with the
    environment in mind and built to last."
  AFTER (on-brand):
    "Forty liters. 2.1 lbs. 87% recycled nylon. Built to outlast the
    trips you haven't planned yet."
  WHY: Specs first, claims second. Earns authority with numbers.

SCENARIO: Sustainability section
  BEFORE (off-brand):
    "At Ridgeline, we're deeply committed to protecting the planet for
    future generations through sustainable practices."
  AFTER (on-brand):
    "67% of our materials are recycled or regenerative. We're not there
    yet. Here's the roadmap: [link]"
  WHY: Honest about progress, not performative about commitment.

SCENARIO: Social post (product launch)
  BEFORE (off-brand):
    "Exciting news! Our brand new Summit Pack is HERE and we are SO
    excited to share it with you! 🎉🙌 #adventure #sustainablegear"
  AFTER (on-brand):
    "The Summit Pack. 1,200 miles of testing. Three prototypes. One
    broken zipper that sent us back to the drawing board.
    Now it's ready. Link in bio."
  WHY: Process-led story, no exclamation stack, credibility over hype.

SCENARIO: Email subject line
  BEFORE (off-brand):
    "Big news from Ridgeline Gear — you won't want to miss this!"
  AFTER (on-brand):
    "We fixed the zipper. (And a few other things.)"
  WHY: Specificity creates curiosity. Dry wit in the parenthetical.

SCENARIO: Error message (checkout failure)
  BEFORE (off-brand):
    "Oops! Something went wrong. Please try again later."
  AFTER (on-brand):
    "Something went sideways on our end. Try again — or email us at
    gear@ridgelinegear.com and we'll sort it out."
  WHY: Takes ownership, gives a direct path forward. No filler word "Oops."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CHANNEL-SPECIFIC TONE NOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WEBSITE (Product pages, About, Homepage)
  Most polished expression of the brand. Earned authority and directness
  lead. Specs before claims. Sustainability sections always include sourcing
  specifics. Hero copy should be short and punchy — save explanation for
  body copy. Dry wit is welcome in subheads; keep headlines clear.

EMAIL (Newsletters, product launches, lifecycle)
  Slightly more personal than web. Can use "we" more conversationally.
  Subject lines: specific and curiosity-based, never clickbait. Body:
  short paragraphs, single CTA. Humor is welcome in PS lines. Never
  use "just checking in" or "I wanted to reach out."

SOCIAL (Instagram, LinkedIn)
  Instagram: Visual-led. Copy is secondary — 1-2 short sentences max
  in the caption opener before the fold. Captions can be longer for
  trail stories or behind-the-scenes content; keep the opener tight.
  LinkedIn: Longer-form is acceptable; performance data and sustainability
  transparency posts do well. Dry wit lands here. Avoid hashtag stacking.

CUSTOMER SUPPORT
  Warmer than marketing, but still direct. No corporate boilerplate.
  Own mistakes clearly ("We got that wrong — here's how we're fixing it").
  Never say "unfortunately" as a substitute for actually solving the problem.
  End every support interaction with a clear next action.

SALES AND B2B (Wholesale, partnerships)
  More formal than DTC, but same core voice. Lead with outcomes for
  their business, not our brand story. Sustainability credentials matter
  here — buyers want specifics. Use data. Keep email short and scannable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUICK REFERENCE CARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5 TONE ATTRIBUTES AT A GLANCE:
  1. Earned Authority — Specific, credible, honest about limits
  2. Direct and Uncluttered — Short, active, no filler
  3. Honest About Sustainability — Claims backed by specs, never performative
  4. Dry Wit — One quiet observation, never slapstick
  5. Outdoors-First, Activism-Informed — Action-oriented, never preachy

ALWAYS:
  ✓ Use specific numbers and material sources
  ✓ Active voice in headlines
  ✓ Name the trail, the place, the partner org
  ✓ Admit what you haven't solved yet

NEVER:
  ✗ "Eco-friendly," "green," "sustainable" without backing
  ✗ Exclamation points in headlines
  ✗ Passive voice in leads
  ✗ "Innovative," "leading," "best-in-class" without substantiation
  ✗ Emoji stacks

WHEN IN DOUBT:
  Ask: "Would the most experienced person in the hiking group say this —
  or would they roll their eyes at it?" Write accordingly.
```

**Tone attributes only (condensed variant):**
```
RIDGELINE GEAR — TONE SUMMARY

We are:             Earned authority | Direct | Honest | Dry | Outdoors-first
We are not:         Preachy | Corporate | Hype-driven | Slapstick | Vague

The one-sentence test: Would someone who's done the miles say this —
or would they see through it?
```

**Next steps:**
- Share the full guide with all content contributors and freelancers — make it required reading before first assignment
- Add the before/after table to your creative brief template so writers see it before every project
- Schedule a quarterly voice review to update examples as the brand evolves
- Create a "hall of fame / hall of shame" Slack channel or Notion page where the team can flag real examples of on-brand and off-brand copy
- Consider running a 30-minute workshop with the team to align on the dry wit attribute — it's the one most likely to be misapplied
