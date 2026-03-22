# EcoFiClaw MCP — @ecoclaw/mcp

Core MCP server for all EcoFiClaw customers. Manages skill discovery, execution, customization, and contribution from within Claude.

---

## What's Included

### MCP Tools
- `list_skills` — browse all installed and available skills with descriptions, triggers, and package source
- `run_skill` — invoke any skill by name directly through the MCP layer with structured input/output
- `tune_skill` — customize a skill's behavior: adjust tone, add firm-specific context, or override default prompts
- `fork_skill` — create a private copy of any skill to modify without affecting the original
- `contribute` — submit skill improvements or new skill proposals back to the ecoclaw registry
- `update_skills` — pull latest versions of all installed skills from npm and apply updates

### Deliverables (Ongoing)
- Unified skill discovery and management interface inside Claude
- Version tracking for all installed skills
- Skill audit log: which skills were run, when, and with what inputs (stored locally)
- Contribution pipeline to community skill registry

### Support
- Included for all EcoFiClaw customers
- Auto-installed during onboarding
- Telegram support channel for MCP issues

---

## Setup Instructions

### Step 1: Install via npm
```bash
npm install -g @ecoclaw/mcp
```

### Step 2: Add to MCP Config
Add to `~/.claude/mcp_config.json`:
```json
{
  "mcpServers": {
    "ecoclaw-mcp": {
      "command": "npx",
      "args": ["@ecoclaw/mcp"],
      "env": {
        "ECOCLAW_API_KEY": "your-api-key",
        "SKILLS_DIR": "~/.claude/skills",
        "REGISTRY_URL": "https://registry.ecoficlaw.com",
        "AUDIT_LOG": "true"
      }
    }
  }
}
```

### Step 3: Verify Connection
Restart Claude and confirm the MCP tools are available:
```
list_skills   ← Should return all installed skills
```

### Step 4: Explore and Customize
```
list_skills                    ← Browse what's installed
tune_skill listing-writer      ← Add your brokerage voice
fork_skill seo-blog-post       ← Create a custom variant
update_skills                  ← Pull latest versions
```

---

## Tool Reference

| Tool | Description |
|------|-------------|
| `list_skills` | Returns name, description, triggers, version, and package for all skills |
| `run_skill` | Executes a skill with structured input; returns structured output |
| `tune_skill` | Patches a skill's system prompt with org-specific context |
| `fork_skill` | Copies a skill to `~/.claude/skills/custom/` for private modification |
| `contribute` | Opens a PR template to the ecoclaw registry |
| `update_skills` | Runs `npm update` for all `@gonzih/*` and `@ecoclaw/*` skill packages |

---

## GitHub
[https://github.com/ecoclaw/ecoclaw-mcp](https://github.com/ecoclaw/ecoclaw-mcp)
