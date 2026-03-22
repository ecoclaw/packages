# ecoclaw AI Marketing Package

AI-powered marketing automation for environmental law firms — built as installable Claude Code skills.

## What This Is

This package provides Claude Code skills that run your law firm's marketing on autopilot. Each skill is a structured prompt workflow that any team member can trigger via Claude Code or a connected Telegram/Slack bot. No marketing agency required.

Built by the ecoclaw team, tuned for environmental and sustainability-focused law practices.

---

## Pricing Tiers

### Marketing Packages (ecoclaw)

#### Starter — $1,500/mo
SEO content + social media. Great for firms that need consistent content but don't run paid ads yet.

Includes:
- `/seo-blog-post` — Weekly SEO blog posts targeting local and practice keywords
- `/social-media-week` — 7 days of LinkedIn, X, and Instagram posts from one topic
- `/practice-area-page` — SEO landing pages for each practice area
- Monthly performance summary

#### Growth — $2,500/mo
Everything in Starter plus paid ads and email marketing.

Includes all Starter skills plus:
- `/google-ads-campaign` — Google Ads headlines, descriptions, extensions
- `/email-newsletter` — Monthly client newsletter
- `/lead-magnet` — Downloadable guides and checklists for lead capture
- `/competitor-audit` — Quarterly competitor marketing audit

#### Full Stack — $4,000/mo
The complete suite. Maximum AI-driven growth.

Includes all Growth skills plus:
- `/case-study` — Client win → polished case study
- `/monthly-report` — Full marketing performance report with recommendations
- Dedicated onboarding and brand voice calibration session
- Priority support via Telegram

### AI Safety & Education Packages

#### Family AI Safety — $299/mo
Complete AI safety infrastructure for families with children using AI.

Includes:
- `/parental-control` — Real-time content guardrails, approval flows, parent notifications
- `/safe-personas` — Age-appropriate personas for each child (5–17)
- `/ai-mood-journal` — Daily mood check-ins and weekly emotional digest
- `/homework-scaffold` — Anti-cheating Socratic tutor
- `/attachment-guard` — Unhealthy AI dependency detection and therapeutic reframing
- `/screen-time-mcp` — Usage limits, quiet hours, gamified streaks

#### Student Learning — $149/mo
AI-powered academic excellence from middle school through university.

Includes:
- `/story-teacher` — Educational storytelling for kids 5–12 across 6 subject worlds
- `/exam-prep-mcp` — AP/SAT/ACT/college exam prep with FSRS-5 spaced repetition
- `/debate-coach` — Critical thinking and logical reasoning for teens
- `/research-rabbit` — Real academic paper search across 5 databases, no hallucinated citations

#### Professional Growth — $99/mo
Stay ahead of the skills gap. 5 minutes a day builds compounding expertise.

Includes:
- `/micro-learn` — Daily 5-minute lessons in 25+ professional domains via Telegram
- `/skill-radar` — Skill gap analysis vs. 2026 market trends + 90-day learning plan

#### Complete Education Suite — $349/mo
Everything from bedtime stories to career advancement. Saves $99/mo vs. buying Student Learning and Professional Growth separately.

Includes all 8 education skills plus `/safe-personas` and `/homework-scaffold` — every learner in the household, every age.

---

## How to Install Skills

### Option A: Claude Code (Direct)

1. Clone this repo:
   ```bash
   git clone https://github.com/ecoclaw/packages
   cd packages
   ```

2. Copy the skills you want into your project's `.claude/skills/` directory:
   ```bash
   mkdir -p ~/.claude/skills
   cp -r skills/seo-blog-post ~/.claude/skills/
   cp -r skills/social-media-week ~/.claude/skills/
   # etc.
   ```

3. Optionally add the system prompt to your CLAUDE.md:
   ```bash
   cat prompts/seo-content-writer.md >> CLAUDE.md
   ```

4. Invoke any skill in Claude Code:
   ```
   /seo-blog-post
   /social-media-week
   ```

### Option B: Telegram Bot (cc-tg)

If you're using a Claude Code Telegram bot:

1. Install the skills to the bot's working directory.
2. Each skill can be triggered by sending the trigger phrase (e.g. `write blog post` or `/seo-blog-post`) in Telegram.
3. The bot will walk you through the inputs interactively.

### Option C: Managed Service

Let us run it for you. We handle setup, scheduling, posting, and reporting.
Contact: [hello@ecoficlaw.com](mailto:hello@ecoficlaw.com)

---

## Skills Reference

### Marketing Skills (ecoclaw)

| Skill | Tier | Invoke | Description |
|-------|------|--------|-------------|
| SEO Blog Post | All | `/seo-blog-post` | Full SEO blog post with meta tags |
| Social Media Week | All | `/social-media-week` | 7 days of posts across 3 platforms |
| Practice Area Page | All | `/practice-area-page` | SEO landing page for a practice area |
| Google Ads Campaign | Growth+ | `/google-ads-campaign` | Complete Google Ads campaign copy |
| Email Newsletter | Growth+ | `/email-newsletter` | Monthly client newsletter |
| Lead Magnet | Growth+ | `/lead-magnet` | Downloadable guide for lead capture |
| Competitor Audit | Growth+ | `/competitor-audit` | Competitor marketing analysis |
| Case Study | Full Stack | `/case-study` | Client win → case study |
| Monthly Report | Full Stack | `/monthly-report` | Monthly marketing performance report |

### AI Safety for Kids

| Skill | Package | Invoke | Description |
|-------|---------|--------|-------------|
| Parental Control | Family AI Safety | `/parental-control` | Real-time content guardrails, 7-category classification, hold-for-approval, parent alerts |
| Safe Personas | Family AI Safety / Complete Education | `/safe-personas` | Age-appropriate AI personas for children 5–17, five developmental tiers |
| AI Mood Journal | Family AI Safety | `/ai-mood-journal` | Daily emotional check-ins, spiral detection, weekly parent digest |
| Homework Scaffold | Family AI Safety / Complete Education | `/homework-scaffold` | Socratic anti-cheating tutor; refuses to do homework, guides to answers |
| Attachment Guard | Family AI Safety | `/attachment-guard` | Detects AI dependency and parasocial bonding; therapeutic reframing + parent alerts |
| Screen Time MCP | Family AI Safety | `/screen-time-mcp` | Daily caps, quiet hours, cool-down periods, gamified streaks, parent reports |

### AI Education

| Skill | Package | Invoke | Description |
|-------|---------|--------|-------------|
| Story Teacher | Student Learning / Complete Education | `/story-teacher` | Educational choose-your-own-adventure for kids 5–12; 6 subject worlds |
| Exam Prep MCP | Student Learning / Complete Education | `/exam-prep-mcp` | AP/SAT/ACT/college exam prep with FSRS-5 spaced repetition and readiness scoring |
| Debate Coach | Student Learning / Complete Education | `/debate-coach` | AI debate coach for teens; argues both sides, detects 20 logical fallacies |
| Research Rabbit | Student Learning / Complete Education | `/research-rabbit` | Multi-database academic search; literature maps, gap analysis, real citations only |
| Micro Learn | Professional Growth / Complete Education | `/micro-learn` | Daily 5-minute professional lessons across 25+ domains via Telegram |
| Skill Radar | Professional Growth / Complete Education | `/skill-radar` | Skill gap analysis vs. 2026 market trends, personalized 90-day learning plan |

---

## Brand & Compliance Notes

- All content is drafted, not published — a human reviews before posting
- Skills do not provide specific legal advice — they explain what the firm does
- Content is written in plain English, not legalese
- Environmental law framing: sustainability, regulatory, compliance, advocacy angles are preferred
- See `CLAUDE.md` for full brand voice and compliance guidelines
