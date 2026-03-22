# Real Estate Skills Suite — @gonzih/skills-realestate

AI-powered productivity tools for real estate agents — from listing copy to offer analysis.

---

## What's Included

### Skills
- `/listing-writer` — generate compelling MLS-ready property listings with SEO-optimized descriptions and social snippets
- `/market-report` — produce neighborhood and city-level market reports with price trends, absorption rates, and buyer/seller positioning
- `/client-followup` — draft personalized post-showing, post-offer, and closing follow-up messages for buyers and sellers
- `/offer-analyzer` — summarize and compare offers side-by-side with net proceeds calculations and risk flags

### Deliverables (Per Use)
- Publish-ready listing descriptions (MLS long form + short form + social)
- Market report PDF-ready content with data interpretation and client-facing narrative
- Personalized follow-up email and text sequences for each client touchpoint
- Offer comparison table with net proceeds worksheet and recommended response

### Support
- Async support via email
- Skill update notifications via GitHub releases

---

## Setup Instructions

### Step 1: Install via npm
```bash
npm install -g @gonzih/skills-realestate
```

### Step 2: Install Skills into Claude
```bash
cp -r node_modules/@gonzih/skills-realestate/skills/listing-writer ~/.claude/skills/
cp -r node_modules/@gonzih/skills-realestate/skills/market-report ~/.claude/skills/
cp -r node_modules/@gonzih/skills-realestate/skills/client-followup ~/.claude/skills/
cp -r node_modules/@gonzih/skills-realestate/skills/offer-analyzer ~/.claude/skills/
```

### Step 3: Add to MCP Config (optional — for offer-analyzer data integration)
Add to `~/.claude/mcp_config.json`:
```json
{
  "mcpServers": {
    "skills-realestate": {
      "command": "npx",
      "args": ["@gonzih/skills-realestate"],
      "env": {
        "MLS_REGION": "your-mls-region",
        "AGENT_NAME": "Your Name",
        "BROKERAGE": "Your Brokerage"
      }
    }
  }
}
```

### Step 4: First Run
```
/listing-writer    ← Paste property details, get MLS-ready copy
/market-report     ← Specify zip code or neighborhood
/client-followup   ← Select touchpoint type and client context
/offer-analyzer    ← Paste offer terms for instant comparison
```

---

## GitHub
[https://github.com/Gonzih/skills-realestate](https://github.com/Gonzih/skills-realestate)
