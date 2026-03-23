---
name: campaign-brief
description: Write a full marketing campaign brief — objectives, audience, messaging, channels, KPIs, and timeline
license: MIT
triggers: ["campaign brief", "marketing brief", "campaign plan", "marketing campaign", "campaign strategy"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Campaign Brief

## What this skill does

Produces a structured, professional marketing campaign brief that aligns stakeholders before execution begins. The brief covers everything a campaign team needs to move from strategy to tactics: clear objectives tied to business goals, target audience personas with behavioral context, a core messaging hierarchy, channel strategy with rationale, budget guidance, KPIs with targets, and a phased timeline. Output is formatted for presentation to marketing leadership, agency partners, or cross-functional teams.

1. **Objective setting** — translates business goals into measurable campaign objectives using SMART criteria
2. **Audience personas** — defines primary and secondary audiences with psychographic and behavioral context, not just demographics
3. **Messaging hierarchy** — establishes a primary value proposition and 3-5 supporting proof points
4. **Channel strategy** — recommends channels with rationale based on audience behavior and campaign goal
5. **KPIs and timeline** — sets specific metrics with targets and maps execution to a phased calendar

## How to invoke

```
/campaign-brief
```

Claude will ask:
- What is the product, service, or initiative being promoted?
- What is the primary business goal this campaign must support (revenue, pipeline, brand awareness, retention)?
- Who is the target audience — role, industry, company size, and any behavioral or psychographic context you have?
- What is the campaign timeframe and approximate budget range?
- Are there any creative constraints, mandatory channels, or brand guidelines to factor in?

## Workflow steps

### Step 1 — Goal and Context Intake
Clarify the business goal and translate it into a campaign objective with measurable outcomes. Identify what success looks like at the campaign level (not just the tactic level) and what constraints exist (timeline, budget, brand, legal).

### Step 2 — Audience Definition
Build 1-2 audience personas based on the input. Each persona includes role, goals, pain points, objections, preferred channels, and a "day in the life" insight that informs creative tone.

### Step 3 — Messaging Architecture
Develop a headline value proposition, a supporting narrative, and 3-5 proof points (data, features, outcomes) that validate the claim. Flag any proof points that need sourcing or legal review.

### Step 4 — Channel and Budget Allocation
Recommend a channel mix (paid, owned, earned) with rationale. Suggest approximate budget splits based on campaign goal and audience. Identify the highest-leverage investment for each phase.

## Example outputs

### Example: Product Launch Campaign Brief — Fintech App

**Input:** Launching Vaultly, a cash flow forecasting app for small business owners. Goal: 2,000 free trial signups in 60 days. Audience: founders and CFOs at 1-50 person businesses, especially service businesses (agencies, consultants, contractors). Budget: $40K. Timeline: 8 weeks. Channels: no cold outbound — paid digital, content, and partner only.

**Campaign brief draft:**
```
CAMPAIGN BRIEF
Campaign: Vaultly Free Trial Launch
Version: 1.0 — For Internal Review
Date: [Date]
Owner: [Marketing Lead Name]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. CAMPAIGN OBJECTIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Business goal: Grow the Vaultly free trial user base to prove product-market fit
and generate a qualified pipeline for the paid conversion campaign (Q3).

Campaign objective:
  Generate 2,000 free trial signups within 60 days of launch (by [date + 60]).

Supporting objectives:
  - Achieve a cost per acquisition (CPA) of ≤$20 per trial signup
  - Reach a trial-to-paid conversion rate of ≥15% within 30 days of signup
  - Build an email list of 5,000+ small business owners for nurture

Campaign hypothesis:
  Small business owners are managing cash flow in spreadsheets or not at all.
  A frictionless free trial with immediate "aha moment" (first forecast in <5 min)
  will convert at above-benchmark rates if we reach them at the right moment
  (tax season, end of quarter, growth inflection).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. TARGET AUDIENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PRIMARY PERSONA — "The Bootstrapped Founder"
  Role: Founder/CEO, solo operator, or owner-operator
  Company: 1–15 employees, service business (agency, consulting, contracting)
  Revenue: $250K–$2M ARR
  Goals: Predictable revenue, avoid cash crunches, spend less time on finances
  Pain points:
    - Never knows exactly how much runway she has
    - Payroll surprises her quarterly even though revenue looks healthy
    - QuickBooks tells her what happened — not what's coming
    - Her accountant is reactive, not proactive
  Objections:
    - "Another subscription I won't use"
    - "My numbers are too messy to put in a tool right now"
    - "I don't have time to learn new software"
  Channel behavior: LinkedIn (passive scroller), Instagram (evenings),
    email newsletters (Finimize, Morning Brew), podcasts (How I Built This,
    My First Million), Google search when problem is acute
  Insight: She's not looking for "cash flow software." She's looking to stop
    the anxiety of not knowing. Lead with emotion, validate with data.

SECONDARY PERSONA — "The First-Time CFO"
  Role: Head of Finance or COO at a growing startup (just hired into the role)
  Company: 20–50 employees, $1M–$5M ARR, investor-backed
  Goals: Build credibility fast, implement financial infrastructure, report confidently
  Pain points:
    - Inherited a mess of spreadsheets with no documentation
    - Board wants 13-week cash flow forecasts — she's building them manually
    - No institutional knowledge of how the business actually runs
  Objections:
    - "We need something that integrates with NetSuite" (check integration requirements)
    - "The founders will never approve another SaaS tool"
  Channel behavior: LinkedIn (active), Slack communities (CFO Connect, Pavilion),
    G2 and Capterra reviews, peer recommendations

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. CORE MESSAGING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Primary value proposition:
  "Vaultly shows you exactly where your cash will be in 30, 60, and 90 days —
  so you can make decisions before the problem hits."

Headline options (for A/B testing):
  A) "Stop guessing. Start forecasting."
  B) "See your cash flow 90 days out — in under 5 minutes."
  C) "The financial clarity your accountant can't give you."

Supporting proof points:
  1. Connects to QuickBooks, Xero, or your bank in 2 minutes
  2. First forecast ready in under 5 minutes — no setup required
  3. Flags cash shortfalls 30–90 days before they happen
  4. Built for service businesses — not manufacturing, not SaaS
  5. [Customer quote]: "I finally stopped losing sleep over payroll."
     — [Customer name], Founder, [Agency name]

Tone: Direct, reassuring, practical. Speak like a financially savvy friend,
not a bank. Avoid jargon (EBITDA, liquidity ratio). Use plain words: cash,
payroll, runway, forecast.

Mandatory disclaimer (all paid ads): "Vaultly forecasts are based on your
connected account data. Actual cash flow may vary. Not financial advice."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. CHANNEL STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PAID SEARCH — $14,000 (35%)
  Rationale: Captures high-intent searches at the moment of acute pain.
  Campaigns:
    - Brand: Vaultly [protect brand terms]
    - Competitor: [QuickBooks cash flow], [Float alternative], [Pulse app]
    - Pain-based: [small business cash flow forecast], [how to forecast cash flow]
  CPA target: ≤$20/signup | Expected volume: 600–800 signups

PAID SOCIAL (LinkedIn + Meta) — $12,000 (30%)
  Rationale: Reach Bootstrapped Founders where they scroll; retarget
  website visitors with proof-based creative.
  LinkedIn: Target by company size (1–50), job title (Owner, Founder, CEO, CFO),
    industry (professional services, marketing agencies, consulting)
  Meta: Lookalike audience from email list; interest targeting (small business,
    entrepreneurship, QuickBooks); retargeting pixel audiences
  Creative formats: LinkedIn single-image (stat-led) + video demo (60s);
    Meta carousel (pain → solution → proof) + video story
  CPA target: ≤$25/signup | Expected volume: 400–500 signups

CONTENT + SEO — $6,000 (15%)
  Rationale: Long-term organic acquisition; drives credibility for paid traffic.
  Assets: 4 blog posts targeting pain-based keywords; 1 "Cash Flow Forecast
  Template" lead magnet (free download, email gate)
  Target keywords: cash flow forecast template small business, how to forecast
    cash flow, QuickBooks cash flow forecasting
  Expected volume: 200–400 signups over 60–90 days (lag)

PARTNER + REFERRAL — $5,000 (12.5%)
  Rationale: Warm referrals convert at 3–5x the rate of cold paid.
  Partners: Bookkeepers and accountants serving SMBs (co-marketing deal:
    they email their list, we offer 3 months free for their clients);
    business podcasts (sponsored read + promo code)
  Expected volume: 200–300 signups

OWNED — EMAIL + LIFECYCLE — $3,000 (7.5%)
  Rationale: Nurture existing list; maximize trial-to-paid conversion.
  Campaigns: Launch announcement → 5-email onboarding sequence →
    "First forecast" milestone email → upgrade CTA at Day 14 and Day 30

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. KPIS AND SUCCESS METRICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

| Metric                      | Target       | Measurement method        |
|-----------------------------|--------------|---------------------------|
| Free trial signups          | 2,000        | Product analytics (Mixpanel)|
| Cost per trial signup       | ≤$20         | Ad platform + attribution |
| Trial-to-paid conversion    | ≥15%         | Stripe + product data     |
| Email list growth           | +5,000       | Mailchimp/HubSpot         |
| Landing page CVR            | ≥8%          | Google Analytics          |
| Paid search ROAS            | ≥3.5x        | Google Ads                |
| LinkedIn CTR                | ≥0.6%        | LinkedIn Campaign Manager |
| Meta CPM                    | ≤$12         | Meta Ads Manager          |

Reporting cadence: Weekly performance report (Mondays); mid-campaign optimization
review at Day 30; final campaign debrief within 2 weeks of close.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. CAMPAIGN TIMELINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PHASE 1 — PRE-LAUNCH (Weeks -2 to 0)
  - Finalize landing page copy and design
  - Set up tracking pixels, UTM parameters, and attribution
  - Brief ad creative team; get 3+ ad variants per channel
  - Warm up email list with teaser content
  - Confirm partner co-marketing agreements
  - QA all integrations (QuickBooks, Xero, bank connections)

PHASE 2 — LAUNCH (Weeks 1–2)
  - Go live on all paid channels simultaneously
  - Publish launch blog post and lead magnet
  - Send launch email to existing list
  - Begin partner outreach sends

PHASE 3 — OPTIMIZE (Weeks 3–6)
  - Weekly creative rotation: pause underperformers, scale winners
  - A/B test landing page headline variants
  - Optimize search bids and negative keywords
  - Monitor trial activation rates; flag onboarding friction to product team

PHASE 4 — CLOSE + CONVERT (Weeks 7–8)
  - Shift budget toward highest-converting channels
  - Push trial-to-paid conversion email sequence
  - Collect early customer testimonials for next campaign
  - Begin debrief data collection

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. APPROVALS REQUIRED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[ ] Marketing lead sign-off on brief
[ ] Legal review of "not financial advice" disclaimer language
[ ] Finance approval of $40K budget allocation
[ ] Product team confirmation of integration readiness before launch
[ ] Partner agreements executed before Phase 2
```

**One-page summary variant:**
```
VAULTLY LAUNCH CAMPAIGN — ONE-PAGE SUMMARY

GOAL: 2,000 free trial signups in 60 days | Budget: $40K | CPA target: ≤$20

WHO WE'RE REACHING:
  Primary: Bootstrapped founders (1–15 person service businesses)
  Secondary: First-time CFOs at 20–50 person startups

WHAT WE'RE SAYING:
  "See exactly where your cash will be in 30, 60, and 90 days —
  before the problem hits."

HOW WE'RE REACHING THEM:
  Paid Search (35%) → Paid Social / LinkedIn + Meta (30%) →
  Content / SEO (15%) → Partners (12.5%) → Email (7.5%)

HOW WE KNOW IT WORKED:
  Signups vs. target | CPA | Trial-to-paid CVR | Landing page CVR

TIMELINE: 8 weeks | Launch date: [TBD] | Owner: [Name]
```

**Next steps:**
- Circulate brief to stakeholders for comments — set a 48-hour feedback window
- Schedule creative kick-off once brief is approved (bring copywriter, designer, and paid media lead)
- Confirm legal review of messaging, especially the "not financial advice" disclaimer
- Book partner conversations for Week -2 of pre-launch phase
- Create a shared tracking dashboard before launch so all KPIs are visible in real time
