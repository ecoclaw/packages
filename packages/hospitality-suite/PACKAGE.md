# Hospitality Suite — $199/mo

Menus to catering proposals — 4 skills for hospitality pros.

---

## What's Included

### Skills
- `/menu-writer` — craft compelling menu descriptions with sensory language, ingredient callouts, dietary indicators, and seasonal positioning
- `/catering-proposal` — generate a professional catering proposal with event overview, menu options, service staffing, pricing tiers, and terms
- `/review-response` — draft professional, on-brand responses to guest reviews — positive, neutral, and negative — that protect reputation and drive return visits
- `/staff-update` — produce clear internal staff communications for shift briefings, policy updates, event rundowns, and operational changes

### Deliverables (Per Use)
- Menu copy ready for print, digital display, or online ordering — formatted for section structure and dietary labels
- Catering proposal document with event summary, menu selections, service package, itemized pricing, and booking terms
- Review response set tailored to review sentiment, guest concern type, and brand voice
- Staff update memo formatted for pre-shift briefing, back-of-house posting, or team messaging app

### Support
- Async support via email
- Skill update notifications via GitHub releases

---

## Setup Instructions

### Step 1: Install via npx
```bash
npx @gonzih/skills-restaurant
```

### Step 2: Install Skills into Claude
```bash
cp -r node_modules/@gonzih/skills-restaurant/skills/menu-writer ~/.claude/skills/
cp -r node_modules/@gonzih/skills-restaurant/skills/catering-proposal ~/.claude/skills/
cp -r node_modules/@gonzih/skills-restaurant/skills/review-response ~/.claude/skills/
cp -r node_modules/@gonzih/skills-restaurant/skills/staff-update ~/.claude/skills/
```

### Step 3: Add to MCP Config (optional)
Add to `~/.claude/mcp_config.json`:
```json
{
  "mcpServers": {
    "skills-restaurant": {
      "command": "npx",
      "args": ["@gonzih/skills-restaurant"]
    }
  }
}
```

### Step 4: First Run
```
/menu-writer         ← Provide dish names, key ingredients, and cuisine style
/catering-proposal   ← Describe the event type, guest count, and service needs
/review-response     ← Paste the guest review and specify response tone
/staff-update        ← Describe the update topic and target staff group
```

---

## Who It's For

Restaurant owners, food service operators, hotel food and beverage teams, and catering companies who need professional written content without a dedicated marketing or communications staff member.

---

## Upgrade Path

Pair with the [Agency Suite](../agency-suite/PACKAGE.md) if you're running a larger hospitality brand and need a full content calendar, campaign briefs, and a sales proposal workflow for group bookings and events.

---

## GitHub
[https://github.com/Gonzih/skills-restaurant](https://github.com/Gonzih/skills-restaurant)
