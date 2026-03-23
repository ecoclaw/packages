---
name: content-calendar
description: Generate a 4-week social + blog content calendar from a campaign brief
license: MIT
triggers: ["content calendar", "social calendar", "editorial calendar", "monthly calendar", "content plan", "blog schedule"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Content Calendar

## What this skill does

Takes a campaign brief — brand, audience, goals, and themes — and produces a full 4-week content calendar ready for scheduling. Each week is mapped across LinkedIn, X, Instagram, and blog with post copy starters, content types (thought leadership, product, community, engagement), and publication dates. Output is formatted for immediate handoff to a content team or scheduling tool.

1. **Audience mapping** — aligns each content type to the right platform and ICP segment
2. **Theme distribution** — spreads campaign themes evenly across the month to avoid repetition
3. **Copy starters** — provides opening lines or hooks for every post, not just topic labels
4. **Content type tagging** — labels each entry (Educational, Promotional, Engagement, Story, etc.)
5. **Blog integration** — includes blog titles, target keywords, and internal linking suggestions alongside social

## How to invoke

```
/content-calendar
```

Claude will ask:
- What is the brand name and a one-paragraph description of what the company does?
- Who is the primary target audience (role, industry, company size)?
- What is the main campaign goal this month (awareness, lead gen, product launch, retention)?
- What are the 2-4 core themes or topics to cover this month?
- What is the campaign start date?

## Workflow steps

### Step 1 — Brief Intake
Parse the brand description, audience, goal, and themes. Identify the strongest hook angle for each theme and assign platform-appropriate formats (carousel for LinkedIn, thread for X, visual story for Instagram, long-form for blog).

### Step 2 — Theme and Week Mapping
Distribute the 2-4 themes across 4 weeks so each week has a clear focus while reinforcing the overall campaign goal. Assign a weekly "anchor content" piece (typically the blog post or a long-form LinkedIn post) that shorter posts can support.

### Step 3 — Calendar Population
Fill every scheduled slot with a specific post type, copy starter, and any creative direction notes. LinkedIn: 3x/week. X: 5x/week. Instagram: 3x/week. Blog: 1 post per week.

### Step 4 — Review and Output
Present the calendar in a structured week-by-week table. Flag any slots that need custom assets (graphics, video, data) so the team can prioritize production.

## Example outputs

### Example: B2B SaaS Feature Launch — 4-Week Calendar

**Input:** Brand is Loopline, a B2B project management SaaS. Audience: engineering managers and heads of product at 50-500 person tech companies. Goal: awareness + demo signups for new AI-powered sprint planning feature. Themes: AI in engineering workflows, sprint planning pain points, customer proof, team productivity. Start date: April 7.

**Calendar draft:**
```
WEEK 1 — THEME: Sprint Planning Pain Points
Focus: Establish the problem before introducing the solution.

Mon Apr 7
  LinkedIn (Educational): "The average engineering team wastes 4.5 hours per sprint
  in planning meetings. Here's what's eating your time — and it's not the standups."
  [Thread-style post, 5 pain points, CTA: "Does this sound familiar?"]

  X (Question): "Honest question for EMs: how long does your sprint planning actually
  take? (not the scheduled time — the real time) 👇"

Wed Apr 9
  LinkedIn (Stat + Hook): "67% of product managers say sprint scope creep is their
  #1 frustration. We talked to 200 of them. Here's what they told us."
  [Link to blog post]

  Instagram (Carousel): "5 signs your sprint planning process is broken"
  [Slide 1: Hook. Slides 2-6: one sign each. Slide 7: CTA — save this]

Thu Apr 10
  X (Thread): "We audited 50 engineering team sprint retros. The same 3 problems
  kept showing up. A thread 🧵"
  [5-tweet thread, end with soft product mention]

Fri Apr 11
  LinkedIn (Engagement): "What's your sprint planning superpower?
  A) Ruthless prioritization B) Buffer time C) Async pre-work D) None of the above"
  [Poll, 1-week duration]

  X (Meme/Relatable): "Sprint planning be like: [image]"

Blog Apr 9
  Title: "Why Sprint Planning Takes Twice as Long as It Should (And How to Fix It)"
  Target keyword: sprint planning best practices
  Word count: 1,400–1,800
  Internal links: → Product features page, → Customer stories

---

WEEK 2 — THEME: AI in Engineering Workflows
Focus: Educate on AI-assisted planning; build credibility before the pitch.

Mon Apr 14
  LinkedIn (Thought Leadership): "AI won't replace your sprint planning process.
  It will make your current process embarrassing by comparison. Here's why."
  [Opinion piece, 400–600 words, personal byline from CTO]

  X (Hot take): "The problem with 'AI for project management' tools: most of them
  just automate the wrong things. Unpopular opinion incoming 🧵"

Wed Apr 16
  LinkedIn (Educational Carousel): "How AI actually helps engineering teams plan better"
  [Not: magic predictions. Yes: pattern recognition, velocity analysis, risk flagging]

  Instagram (Educational): "What AI sprint planning looks like in practice"
  [Before/after visual: manual process vs. AI-assisted]

Thu Apr 17
  X (Data): "We ran 6 months of sprint data through our AI model.
  Teams using AI-assisted planning hit their velocity targets 34% more often.
  The methodology:"

Fri Apr 18
  LinkedIn (Engagement): "Where are you on the AI adoption curve for engineering tools?
  Still skeptical / Experimenting / All in / What's AI?"
  [Poll]

  X (Community): "Tag an EM who would love this 👇" [repost top-performing Week 1 tweet]

Blog Apr 16
  Title: "AI-Assisted Sprint Planning: What Actually Works (And What's Just Hype)"
  Target keyword: AI sprint planning tools
  Word count: 1,600–2,000
  Internal links: → Feature announcement, → Free trial CTA

---

WEEK 3 — THEME: Customer Proof
Focus: Social proof and concrete outcomes — shift from education to consideration.

Mon Apr 21
  LinkedIn (Case Study Teaser): "Meridian Labs cut sprint planning time by 60% in
  their first month. Their head of engineering walks us through exactly what changed."
  [Link to full case study]

  X (Quote): "'We used to dread sprint planning. Now it's the easiest part of our week.'
  — @[customer handle], Head of Engineering at Meridian Labs"

Wed Apr 23
  LinkedIn (Story): "When [Customer Name]'s team hit 3 consecutive failed sprints,
  their VP of Product almost canceled the entire roadmap. What they tried instead:"
  [Narrative post, 300–400 words, soft product mention at end]

  Instagram (Customer Feature): "Meet the team behind [Customer Name]"
  [Team photo + 3 outcome stats as graphic overlay]

Thu Apr 24
  X (Thread): "How [Customer Name] went from 70% sprint completion to 94% in 8 weeks.
  What they changed — a thread 🧵"

Fri Apr 25
  LinkedIn (Proof + CTA): "3 engineering teams. 3 different problems. 1 pattern.
  [Stat 1] [Stat 2] [Stat 3] — See how they got there: [link to demo]"

  X: "Results don't lie. [stat] → [link]"

Blog Apr 23
  Title: "How Meridian Labs Reduced Sprint Planning Time by 60% Using AI"
  Target keyword: project management software case study
  Word count: 1,200–1,500
  Internal links: → Pricing, → Book a demo

---

WEEK 4 — THEME: Team Productivity + CTA Push
Focus: Bring it home. Connect the feature to the broader goal of high-performing teams.

Mon Apr 28
  LinkedIn (Vision): "The best engineering teams don't work harder. They plan better.
  Here's what separates them from the rest."
  [Thought leadership, no product mention until paragraph 4]

  X (Motivational): "Shipping fast isn't about velocity. It's about planning smart.
  A reminder for EMs going into the week:"

Wed Apr 30
  LinkedIn (Product Feature): "Introducing AI Sprint Planning in Loopline.
  Here's exactly what it does — no marketing fluff."
  [Feature walkthrough post, bullet format, GIF or demo clip]

  Instagram (Product Demo): "See it in action" [Reel: 60-second feature demo]

Thu May 1
  X (Launch): "It's here. AI Sprint Planning is now live in Loopline.
  Early access is open — link in bio."

Fri May 2
  LinkedIn (CTA): "We've been building toward this for 6 months.
  If you've read along — thank you. If you want to try it, we'd love to show you."
  [Personal note from founder, link to book demo]

  X: "Last call for April early access: [link]"
  Instagram (Story sequence): Behind the scenes of the launch week

Blog Apr 30
  Title: "Loopline's AI Sprint Planning Is Here: What's New and How to Get Started"
  Target keyword: Loopline AI sprint planning
  Word count: 800–1,000
  Internal links: → Changelog, → Book a demo, → Pricing
```

**Condensed table variant:**
```
| Date    | Platform  | Type           | Copy Starter                                      |
|---------|-----------|----------------|---------------------------------------------------|
| Apr 7   | LinkedIn  | Educational    | "The average team wastes 4.5 hours per sprint…"   |
| Apr 7   | X         | Question       | "How long does sprint planning actually take?"    |
| Apr 9   | LinkedIn  | Stat + Hook    | "67% of PMs say sprint scope creep is #1…"        |
| Apr 9   | Instagram | Carousel       | "5 signs your sprint planning process is broken"  |
| Apr 9   | Blog      | Long-form      | "Why Sprint Planning Takes Twice as Long…"        |
| Apr 10  | X         | Thread         | "We audited 50 sprint retros. Same 3 problems…"  |
| Apr 11  | LinkedIn  | Poll           | "What's your sprint planning superpower?"         |
| Apr 14  | LinkedIn  | Thought Leader | "AI won't replace sprint planning — it will…"     |
[...continues for all 4 weeks]
```

**Next steps:**
- Review copy starters and assign each post to a writer or approve for direct scheduling
- Identify which posts need custom graphics or video assets and brief your designer
- Load approved posts into your scheduling tool (Buffer, Hootsuite, Later, etc.) by platform
- Flag the blog posts for SEO review before publishing
- Set a mid-month check-in (around April 18) to review engagement data and adjust Week 3-4 as needed
