---
name: parental-control
description: MCP proxy providing real-time AI content guardrails, spiral detection, and parent notifications via Telegram/iMessage/WhatsApp for children's AI sessions.
triggers: ["parental control", "child safety", "kid safety", "family ai", "parent alerts", "monitor child ai"]
---

# Parental Control

## What this skill does

1. **Content classification** — screens every AI response across 7 categories: self-harm, explicit content, violence, age-restricted material, spiral patterns, echo-chamber reinforcement, and emotional manipulation
2. **Hold-for-approval flow** — flagged responses are held and routed to the parent before the child sees them; 30-minute approval timeout with fallback to safe decline message
3. **Immediate crisis alerts** — self-harm or crisis signals trigger an instant parent notification via Telegram, iMessage, or WhatsApp — no approval delay
4. **Conversation coaching** — after each flagged incident, parents receive a templated guide for how to talk to their child about what happened
5. **Session transparency** — parents receive a daily session summary of topics discussed, flags triggered, and AI responses reviewed

## How to invoke

```
/parental-control
```

Claude will ask:
- Which child profile is this session for? (name and age)
- Which notification channel should alerts go to? (Telegram / iMessage / WhatsApp)
- Are there any topics to block unconditionally for this child?
- What's the parent's approval response time target? (default: 30 minutes)

## Workflow steps

### Step 1 — Profile Setup
Claude configures the child profile (name, age, tier-matched content rules) and confirms notification channel is live.

### Step 2 — Session Monitoring
Every AI response is classified against the 7-category rubric before delivery. Clean responses pass through instantly. Flagged responses enter the hold queue.

### Step 3 — Parent Notification
Parent receives the flagged content, the classification reason, and approve/decline options. Approvals release the content; declines send the child a warm redirect message.

### Step 4 — Crisis Escalation
Crisis-tier flags (self-harm, immediate danger) bypass the approval queue and trigger an instant push alert with the child's exact message and recommended action steps.

### Step 5 — Session Digest
At session end (or daily at 8pm), parent receives a summary: topics covered, flags raised, approvals/declines, and any coaching guidance for follow-up conversations.

## Example outputs

### Example: Flagged Content Scenario

**Input:** Child (age 12) asks about a topic that triggers the emotional manipulation classifier during homework help.

**Output:**
- Response held; parent receives Telegram message: "⚠️ Content held for review — emotional manipulation flag. [View message] [Approve] [Decline]"
- If no response in 30 min: child receives "Let me think about that differently — want to explore another angle?"
- Parent coaching note: "Your child may be exploring themes of persuasion or social pressure. A good conversation starter: 'Have you ever felt like someone was trying to change how you felt about something?'"

**Next steps:**
- Confirm Telegram bot token or iMessage/WhatsApp credentials are configured
- Run `/safe-personas` to set age-appropriate session persona alongside this guardrail
- Test with a sample flagged phrase before going live

MCP config context: `npx @gonzih/parental-control`
