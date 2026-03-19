# Starter Package — $1,500/mo

AI-powered SEO and social media for environmental law firms. Consistent, professional content without the agency overhead.

---

## What's Included

### Skills
- `/seo-blog-post` — 4 SEO-optimized blog posts per month
- `/social-media-week` — Full month of LinkedIn, X, and Instagram posts
- `/practice-area-page` — Up to 2 new or refreshed practice area pages per month

### Deliverables (Monthly)
- 4 blog posts (1,200–1,800 words each, with meta tags)
- 20 LinkedIn posts
- 20 X posts
- 12 Instagram captions
- Up to 2 practice area page drafts
- Monthly performance summary

### Support
- Async support via Telegram or email
- Monthly 30-minute review call (optional)
- Content calendar shared in Notion or Google Sheets

---

## Setup Instructions

### Step 1: Onboarding
1. Complete the [Brand Voice Questionnaire](../templates/brand-voice-questionnaire.md)
2. Provide website access (for page publishing) or CMS login
3. Share social media login credentials or Buffer/Hootsuite access
4. Confirm target practice areas and client types

### Step 2: Install Skills
```bash
git clone https://github.com/ecoclaw/packages
cd packages
mkdir -p ~/.claude/skills
cp -r skills/seo-blog-post ~/.claude/skills/
cp -r skills/social-media-week ~/.claude/skills/
cp -r skills/practice-area-page ~/.claude/skills/
```

### Step 3: Configure CLAUDE.md
Add firm-specific details to `CLAUDE.md`:
- Firm name and website
- Target geographies
- Primary practice areas
- Key differentiators
- Any compliance restrictions

### Step 4: First Month Kickoff
Run these skills to generate Month 1 content:
```
/seo-blog-post      ← Run 4 times for 4 blog posts
/social-media-week  ← Run for each blog topic
/practice-area-page ← For your top 2 practice areas
```

---

## What We Need From You

- **Monthly input**: 15-30 minutes to brief the AI on topics, news, and any firm updates
- **Review**: 1-2 hours to review and approve content before publishing
- **Publishing**: You publish (or grant us access to publish)
- **Metrics**: Share Google Analytics and Search Console access for reporting

---

## Upgrade to Growth

Add paid ads, email marketing, and lead generation. [See Growth Package →](../growth/PACKAGE.md)
