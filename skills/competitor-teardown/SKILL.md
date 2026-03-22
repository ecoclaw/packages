---
name: competitor-teardown
description: Structured competitor positioning analysis — messaging, strengths, weaknesses, and whitespace
triggers: ["competitor analysis", "competitive teardown", "competitor research", "competitive positioning", "competitor audit"]
---

# Competitor Teardown

## What this skill does

Delivers a structured competitive positioning analysis that goes beyond surface-level feature comparisons. The teardown profiles a competitor's ideal customer profile, dissects their messaging hierarchy and narrative strategy, maps their strengths and credible weaknesses, and — most importantly — identifies positioning whitespace your brand can credibly own. Output is formatted as a strategic memo useful for sales enablement, product marketing, and campaign planning.

1. **ICP analysis** — identifies who the competitor is actually built for based on messaging signals, not just their stated target market
2. **Messaging deconstruction** — breaks down their value proposition, proof points, and narrative arc
3. **Strength mapping** — honest assessment of what they do well and why it resonates
4. **Weakness identification** — surfaces genuine gaps (not just things your product does better) supported by evidence
5. **Whitespace map** — defines the positioning territory they can't credibly claim, and that you can

## How to invoke

```
/competitor-teardown
```

Claude will ask:
- Which competitor are we analyzing (name, URL, and any specific products or tiers)?
- What is your brand/product and how do you currently position it?
- Who is your shared target audience — and where do you most often compete head-to-head?
- What sources should I draw from (their website, G2 reviews, job postings, social media, pricing page)?
- What specific question is this teardown meant to answer (e.g., "why are we losing deals to them?" or "where should we differentiate?")?

## Workflow steps

### Step 1 — Competitor Profile
Build a snapshot of the competitor: what they are, who they serve, what tier of the market they target, and any notable recent moves (funding, acquisitions, feature launches, rebranding).

### Step 2 — Messaging Deconstruction
Analyze their homepage, product pages, ad copy, and G2/Capterra profile. Identify: primary headline claim, supporting proof points, tone and vocabulary choices, and what they conspicuously avoid saying.

### Step 3 — Strength and Weakness Assessment
Map genuine strengths (backed by evidence: review patterns, win rates, NPS signals) and genuine weaknesses (customer complaints, product gaps, support issues, pricing confusion). Flag anything that requires verification.

### Step 4 — Whitespace Identification and Positioning Recommendations
Identify 2-4 positioning territories the competitor cannot credibly claim. Recommend how your brand should occupy that space and what proof points you need to make the claim credible.

## Example outputs

### Example: Project Management SaaS Competitor Teardown — Asana vs. [Your Brand]

**Input:** Competitor: Asana (asana.com). Our brand: Loopline (AI-powered project management for engineering teams). We lose deals to Asana frequently at the 50-200 employee stage. Audience: heads of product and engineering managers at B2B SaaS companies. Sources: Asana website, G2 reviews, LinkedIn ads, job postings. Core question: Where is Asana vulnerable and what can we own?

**Competitor teardown draft:**
```
COMPETITIVE TEARDOWN
Competitor: Asana (asana.com)
Analyzed by: [Name]
Date: [Date]
Purpose: Identify positioning whitespace and sharpen win/loss strategy
         for deals at the 50–200 employee stage

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. COMPETITOR SNAPSHOT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Company: Asana, Inc. (ASAN)
Founded: 2008 | IPO: 2020
Revenue: ~$725M ARR (FY2025 est.)
Positioning tier: Mid-market to enterprise
Primary market: Cross-functional teams at 50–5,000 person companies
Notable recent moves:
  - Asana AI (2024): AI-generated task summaries, smart status updates
  - Asana Intelligence: Goal-to-work alignment feature targeting executives
  - Aggressive upmarket push: New "Enterprise+" tier, executive dashboards
  - Increased focus on IT, legal, and marketing teams — moving away from eng

Funding/stability signal: Public company with strong brand recognition.
No acquisition risk in near term. Moving upmarket means SMB/mid-market
attentiveness is declining — a meaningful opening.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. MESSAGING DECONSTRUCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PRIMARY HEADLINE (as of analysis date):
  "Work without limits"

SUPPORTING CLAIMS (homepage, in order of prominence):
  1. "AI-powered work management" — leading with AI as table stakes
  2. "Connect your work to company goals" — executive-level alignment pitch
  3. "Teams run on Asana" — social proof / ubiquity claim
  4. "150,000+ paying customers" — scale-based trust signal
  5. "Works with 300+ integrations" — ecosystem breadth claim

WHAT THEIR MESSAGING IMPLIES ABOUT THEIR ICP:
  The homepage targets a decision-maker at a 500+ person company who
  needs to report to a VP or C-suite on team output. The language is
  broad and cross-functional — "marketing," "operations," "IT" appear
  prominently. Engineering is not mentioned on the homepage. This is a
  meaningful signal: Asana has deliberately deprioritized technical teams
  in favor of a larger, easier-to-scale market.

VOCABULARY THEY USE:
  Goals, visibility, alignment, clarity, AI, portfolio, workflow,
  automation, reporting, accountability

VOCABULARY THEY AVOID:
  Sprint, velocity, deployment, incident, backlog, PR, CI/CD, engineering
  (almost entirely absent from primary messaging)

TONE ANALYSIS:
  Corporate-professional with aspirational undertones. Heavy use of
  abstract nouns ("clarity," "alignment," "limits"). Designed to appeal
  to HR, marketing, and operations leaders. Engineering and product
  managers are not the primary addressee.

AD COPY PATTERNS (LinkedIn, observed):
  - "Stop losing work in email" — pain-based, universal
  - "Your AI-powered work manager is here" — technology positioning
  - Feature-forward creative: screenshots of dashboards and timelines
  - Target audiences observed: Marketing managers, Project managers,
    Operations roles — rarely technical titles

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. STRENGTH ASSESSMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

GENUINE STRENGTHS (backed by evidence):

Brand recognition and buying committee trust
  Asana is a known quantity. In procurement conversations, it rarely
  needs to prove it will survive as a company. "No one gets fired for
  buying Asana" is a real dynamic in 200+ person companies.
  Evidence: Consistently in G2 Leaders quadrant; Gartner recognition;
  referenced positively by CFOs and IT in review threads.

Breadth of use cases
  A company can run marketing, legal, HR, and product on Asana. That
  breadth makes it attractive to IT buyers consolidating tools.
  Evidence: G2 reviews frequently mention "we use it across 4 departments."

Integrations ecosystem
  300+ integrations means Asana slots into most existing tech stacks
  without friction. This is a real competitive advantage in deals where
  IT controls procurement.

Onboarding and self-serve adoption
  Asana's free tier and self-serve motion means teams adopt it bottom-up.
  By the time you're in a competitive deal, Asana may already have
  departmental footholds.

AI features shipping pace
  Asana has been shipping AI features rapidly. Their AI summaries and
  goal-alignment features are genuinely useful for executive stakeholders.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. WEAKNESS ASSESSMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

GENUINE WEAKNESSES (supported by G2, Reddit, Capterra, support threads):

Not built for engineering teams — and teams feel it
  G2 reviews from engineers and EMs consistently cite missing sprint
  management, poor GitHub/GitLab integration depth, and inability to
  reflect engineering workflows without heavy customization.
  Quote pattern: "Great for marketing, painful for engineering."
  "We had to build 3 custom fields just to simulate a sprint backlog."
  Evidence: 47 of 200 sampled G2 reviews mention engineering-specific
  friction; "customization required" appears in 60%+ of 3-star reviews.

Pricing complexity at growth stage
  Asana's pricing tiers are confusing. The jump from Premium to Business
  ($13.49 → $30.49/user/month) is steep and the feature delta is opaque.
  G2 reviews cite pricing as a pain point in 35%+ of 1-2 star reviews.
  Loss pattern in our own pipeline: Asana is often the incumbent that
  teams try to leave because "we outgrew it and the price jumped."

AI features add cost, not value, for technical teams
  Asana Intelligence is bundled into Enterprise+ tiers. For engineering
  teams, AI summaries of tasks add little value — what they want is
  intelligent sprint forecasting, velocity tracking, and automated
  risk flagging. Asana's AI is built for executive reporting, not
  engineering planning.

Implementation and admin overhead at scale
  Many reviews note that Asana requires a dedicated "Asana admin" or
  Operations role to maintain at 50+ users. Rules, automations, and
  portfolios require ongoing management.
  Quote: "You need someone who lives in Asana to keep it working for everyone."

Upmarket focus leaving mid-market underserved
  Job postings signal strategy. Asana's recent engineering hires are
  enterprise-focused. Their support tier response times have declined
  per G2 review patterns over the past 12 months. Mid-market customers
  (50–200 employees) are experiencing slower support and fewer product
  updates relevant to their scale.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. POSITIONING WHITESPACE MAP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHITESPACE TERRITORY 1: Engineering-native project management
  What Asana can't claim: Deep, out-of-the-box sprint management,
  GitHub/GitLab integration, velocity tracking, and engineering-specific
  workflows. Their messaging explicitly avoids engineering language.
  What we can claim: Built for how engineering teams actually work.
  Loopline speaks sprint, backlog, velocity, and deployment — Asana doesn't.
  Proof points needed: Native GitHub integration, sprint templates, velocity
  reporting, customer quote from EM who switched from Asana.
  Message: "Asana is for everyone. Loopline is for engineering teams."

WHITESPACE TERRITORY 2: AI that helps engineering, not just executives
  What Asana can't claim: AI that improves sprint outcomes, not just
  summarizes them for leadership decks.
  What we can claim: AI that flags sprint risk before it happens, not after.
  Proof points needed: Sprint success rate improvement data; A/B evidence
  of AI-assisted vs. manual planning outcomes.
  Message: "Asana's AI writes the status update. Loopline's AI prevents
  the problem the status update would have reported."

WHITESPACE TERRITORY 3: Honest pricing for growing teams
  What Asana can't claim: Transparent, predictable pricing without a
  steep per-seat cliff at the growth stage.
  What we can claim: Pricing that scales cleanly — no surprise jumps,
  no feature gating that penalizes growth.
  Proof points needed: Side-by-side pricing calculator; customer quote
  on cost predictability.

WHITESPACE TERRITORY 4: The tool that respects engineers' time
  What Asana can't claim: Engineers love using it.
  What we can claim: Loopline reduces meeting time, not adds to it.
  This is an emotional positioning play — engineers resent PM tools
  that create overhead instead of reducing it.
  Proof points needed: Time-saved metric; "hours of planning meetings
  saved per sprint" customer data.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. SALES BATTLE CARD SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHEN YOU WIN AGAINST ASANA:
  - Prospect is an EM or Head of Product (not a marketing/ops buyer)
  - Team is engineering-heavy with active sprints
  - They've tried Asana and found it "too generic"
  - Pricing is a concern at 50+ seats

WHEN YOU LOSE TO ASANA:
  - IT/procurement controls the decision (brand recognition wins)
  - Multi-department rollout (Asana's breadth advantage)
  - Company already has Asana embedded in other teams

TALK TRACK FOR ASANA DISPLACEMENT:
  "Asana is an excellent tool for cross-functional teams. If you need
  marketing, HR, and engineering on the same platform, it makes sense.
  But our customers come to us when engineering needs something that
  actually speaks their language — sprints, velocity, deployment tracking,
  not just tasks and timelines. What does your sprint planning process
  look like today?"

KEY LANDMINES TO AVOID:
  - Don't attack Asana broadly — they are a good product for their ICP
  - Don't compete on integrations count — Asana wins that game
  - Don't lead with AI unless you can show engineering-specific value

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. INTELLIGENCE GAPS TO FILL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[ ] Win/loss data: Pull last 20 Asana losses from CRM — what did the
    decision-maker's title say? Was it EM or a cross-functional buyer?
[ ] Pricing verification: Confirm current Asana pricing tiers (they
    change frequently)
[ ] G2 review analysis: Sample 50 most recent Asana reviews from
    engineering/product reviewers specifically
[ ] Job posting audit: Monitor Asana's job board monthly for engineering
    vs. enterprise GTM hires — signals where product investment is going
[ ] Customer ask: Survey 5 customers who switched from Asana on what
    finally made them leave
```

**Battle card only (condensed variant):**
```
ASANA BATTLE CARD — QUICK REFERENCE

THEIR PITCH: Cross-functional work management for the whole company
OUR COUNTER: Purpose-built for engineering teams — not everyone

WIN WHEN: EM/Head of Product leads the decision; team does active sprints
LOSE WHEN: IT controls procurement; multi-department rollout

TOP 3 DIFFERENTIATORS:
  1. Native sprint management (Asana requires custom fields)
  2. AI for sprint planning, not executive summaries
  3. Predictable pricing — no cliff at 50+ seats

HANDLE "WE ALREADY USE ASANA":
  "How does your engineering team use it today? A lot of our customers
  had Asana for other teams but found it didn't map to how engineers
  actually work. What would you want to change about your current setup?"
```

**Next steps:**
- Validate the G2 evidence claims by pulling a fresh sample of engineering-role reviews from Asana's G2 profile
- Share the battle card section with your sales team in Slack and set a 15-minute sync to walk through the talk track
- Identify 3 customers who switched from Asana and schedule reference call requests to build verified proof points
- Set a calendar reminder to refresh this teardown in 90 days — competitive positioning shifts quickly when companies are actively investing in AI features
- Tag any open CRM opportunities where Asana is a named competitor and add the battle card to their opportunity notes
