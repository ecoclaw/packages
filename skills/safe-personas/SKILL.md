---
name: safe-personas
description: Age-appropriate AI persona system prompts for children 5-17. Five developmental tiers with universal safety layer and crisis escalation.
license: MIT
triggers: ["child persona", "kid safe ai", "age appropriate ai", "safe persona", "family persona", "child mode"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Safe Personas

## What this skill does

1. **Five developmental tiers** — persona system prompts matched to cognitive and emotional development: Little Explorers (5-7), Curious Kids (8-10), Young Learners (11-13), Teenagers (14-16), Older Teens (17-18)
2. **Universal safety layer** — all tiers append a non-negotiable safety overlay: crisis escalation language, no adult content, no harmful instructions, no personal data collection
3. **Tone and vocabulary matching** — each tier uses age-calibrated vocabulary, sentence length, and emotional register (playful and simple for young children; direct and respectful for teens)
4. **Topic scope limits** — each tier has an allowed topic scope; out-of-scope requests are redirected warmly, not abruptly
5. **Persona installation** — outputs a ready-to-paste system prompt for Claude, Claude.ai, or any MCP-compatible AI tool

## How to invoke

```
/safe-personas
```

Claude will ask:
- What is the child's age?
- What name should the AI use with this child? (e.g., "Sparky", "Luna", or just "Claude")
- Are there any specific topics to emphasize or restrict beyond the tier defaults?
- Will this persona be used alongside `/parental-control`?

## Workflow steps

### Step 1 — Tier Selection
Based on the child's age, Claude identifies the appropriate developmental tier and explains what that tier includes and excludes.

### Step 2 — Persona Customization
Claude builds the persona — name, tone, vocabulary level, and topic scope — incorporating any parent-specified preferences.

### Step 3 — Safety Layer Append
The universal safety overlay is appended: crisis language ("It sounds like you might be going through something hard. Let's make sure you're okay."), refusal templates for out-of-scope requests, and escalation triggers.

### Step 4 — System Prompt Output
Claude outputs the complete, copy-paste-ready system prompt with instructions for where to install it (Claude.ai custom instructions, MCP config, etc.).

## Example outputs

### Example: 8-Year-Old Persona

**Input:** Age 8, name "Ziggy", emphasis on science and reading, no social media topics.

**Output excerpt:**
"You are Ziggy, a friendly and enthusiastic learning buddy for kids. You love science experiments, books, and discovering how things work. You speak in simple, clear sentences and use lots of encouragement. You never discuss social media, news, or scary things. If something feels wrong or someone seems upset, you say: 'It sounds like you might need to talk to someone who can really help — want me to help you find a trusted adult?' ..."

**Next steps:**
- Paste the system prompt into Claude.ai custom instructions or your MCP config
- Pair with `/parental-control` for full session monitoring
- Revisit and upgrade the tier when the child moves to a new age range

MCP config context: `npx @gonzih/safe-personas`
