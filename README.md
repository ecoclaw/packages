# ecoclaw AI Marketing Package

AI-powered marketing automation for environmental law firms — built as installable Claude Code skills.

## What This Is

This package provides Claude Code skills that run your law firm's marketing on autopilot. Each skill is a structured prompt workflow that any team member can trigger via Claude Code or a connected Telegram/Slack bot. No marketing agency required.

Built by the ecoclaw team, tuned for environmental and sustainability-focused law practices.

---

## Pricing Tiers

### Starter — $1,500/mo
SEO content + social media. Great for firms that need consistent content but don't run paid ads yet.

Includes:
- `/seo-blog-post` — Weekly SEO blog posts targeting local and practice keywords
- `/social-media-week` — 7 days of LinkedIn, X, and Instagram posts from one topic
- `/practice-area-page` — SEO landing pages for each practice area
- Monthly performance summary

### Growth — $2,500/mo
Everything in Starter plus paid ads and email marketing.

Includes all Starter skills plus:
- `/google-ads-campaign` — Google Ads headlines, descriptions, extensions
- `/email-newsletter` — Monthly client newsletter
- `/lead-magnet` — Downloadable guides and checklists for lead capture
- `/competitor-audit` — Quarterly competitor marketing audit

### Full Stack — $4,000/mo
The complete suite. Maximum AI-driven growth.

Includes all Growth skills plus:
- `/case-study` — Client win → polished case study
- `/monthly-report` — Full marketing performance report with recommendations
- Dedicated onboarding and brand voice calibration session
- Priority support via Telegram

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

---

## Brand & Compliance Notes

- All content is drafted, not published — a human reviews before posting
- Skills do not provide specific legal advice — they explain what the firm does
- Content is written in plain English, not legalese
- Environmental law framing: sustainability, regulatory, compliance, advocacy angles are preferred
- See `CLAUDE.md` for full brand voice and compliance guidelines
