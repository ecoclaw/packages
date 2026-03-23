---
name: client-followup
description: Draft personalized follow-up messages for buyers and sellers at every touchpoint — post-showing, post-offer, under contract, and closing.
license: MIT
triggers: ["client followup", "follow up", "follow-up email", "client message", "post showing", "thank you email"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Client Followup

## What this skill does

Generates personalized, relationship-building follow-up messages for every stage of the transaction:

1. **Post-showing** — same-day follow-up to gauge interest and surface objections
2. **Post-offer** — acknowledgment and next-steps message after submitting an offer
3. **Under-contract check-in** — milestone updates that keep clients calm and informed
4. **Closing thank-you** — warm, referral-priming close message
5. **Long-term nurture** — anniversary, market update, and re-engagement sequences

## How to invoke

```
/client-followup
```

Claude will ask:
- What stage? (post-showing, post-offer, under contract, closing, nurture)
- Client name and a few details about them?
- What property was shown or is under contract?
- Any specific feedback, concerns, or context to address?
- Preferred tone? (warm/personal, professional, brief/text-style)
- Email or text format?

## Workflow steps

### Step 1 — Touchpoint Selection
Claude identifies the right message type and structures the follow-up to match the emotional moment the client is in.

### Step 2 — Personalization Layer
Weaves in specific property details, client context, and any feedback signals to make the message feel 1:1, not templated.

### Step 3 — Message Draft
Full message with:
- Subject line (for email) or opening hook (for text)
- Body: acknowledgment → value add → clear next step
- Signature block placeholder

### Step 4 — Variants
3 tone variants (warm, neutral, brief) so you can pick what fits the client.

## Example outputs

### Example: Post-Showing Follow-Up

**Input:** Buyer couple (Mia and James), showed 3-bed in Germantown, they seemed excited but mentioned the backyard was small, looking for their "forever home"

**Email draft:**
```
Subject: Great seeing you today, Mia and James — a quick thought on Germantown

Hi Mia and James,

It was great touring 412 Garfield with you this afternoon. I could tell the
kitchen and primary suite landed well — both are genuinely hard to find at
this price point in Germantown.

The backyard is something worth thinking through honestly. For a forever home,
outdoor space matters. A few things to consider: the lot backs to green space
(no rear neighbor), and the side yard allows for a pergola or expanded deck
if that's ever a priority.

That said, you know what "forever" means for your family better than I do.

I'd love to hear your honest reaction: does this one stay in the running, or
should we keep looking? Either answer is the right one — I want to find your
place, not just A place.

Looking forward to hearing from you.

[Your name]
[Phone]
```

**Text variant:**
```
Hey Mia and James — loved touring Germantown with you today! That kitchen is
special. The backyard is smaller, I know — wanted to mention the green space
behind it. Worth staying in the running or should we keep looking? No wrong answer!
```

**Next steps:**
- Send within 2 hours of the showing while it's fresh
- Log client feedback in your CRM
- If interest is high, follow with `/offer-analyzer` when offers are ready
