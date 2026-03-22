---
name: review-response
description: Write a restaurant online review response — positive acknowledgment, neutral engagement, or negative recovery
triggers: ["review response", "online review", "Google review", "Yelp response", "review reply", "negative review response"]
---

# Review Response

## What this skill does

Produces on-brand, human-sounding responses to any online restaurant review — turning every public comment into a demonstration of your hospitality and professionalism. Three response types handle every situation: celebration, engagement, and recovery.

1. **Positive response** — warm, specific, brand-reinforcing acknowledgment that invites the guest back
2. **Neutral / mixed response** — thanks for the feedback, acknowledges what landed and what didn't, invites return
3. **Recovery response** — genuine apology, clear accountability, offline resolution offer — protects your reputation without being defensive
4. **Tone matching** — responses mirror the restaurant's personality (elevated, casual, neighborhood, fast-casual)
5. **Specificity from the review** — Claude picks up details from the review text to make responses feel personal, not templated

## How to invoke

```
/review-response
```

Claude will ask:
- Paste the full review text — star rating and written content?
- What is your restaurant name and general tone/personality?
- Is there any context about the situation described that the reviewer may not have mentioned?
- Do you want to invite the guest to contact you directly (provide email or phone)?
- Any specific team member, dish, or event mentioned that you want to acknowledge?

## Workflow steps

### Step 1 — Review Analysis
Claude reads the review for sentiment, specific complaints or compliments, and anything that warrants direct acknowledgment. The star rating informs the response type.

### Step 2 — Response Draft
A response is drafted in the restaurant's voice — specific to the review, appropriately warm or apologetic, and ending with a clear invitation.

### Step 3 — Tone Check
Claude flags if the response is too long (ideal: 75–150 words for most platforms), too formal, or too apologetic relative to the situation.

### Step 4 — Platform Note
Brief guidance on where this response works best (Google, Yelp, TripAdvisor, OpenTable) and any platform-specific considerations.

## Example outputs

### Example: Response to a 3-Star Review — Slow Service, Great Food

**Input:**
Review text (3 stars, Google): "Food was honestly amazing — the mushroom pasta and the lamb chops were two of the best dishes I've had in this city. But the service was really slow. We waited 40 minutes for our entrées with almost no check-ins from our server. The place wasn't even that packed. Would try again because the food is that good, but hoping for a better experience."
Restaurant: Sola Bistro, upscale casual neighborhood Italian. Contact for offline resolution: hello@solabistro.com

**Mixed/recovery response draft:**
```
Thank you so much for taking the time to share this, and we're genuinely
glad the mushroom pasta and lamb chops hit the mark — those are two dishes
our kitchen pours a lot of love into.

That said, a 40-minute wait without a proper check-in is not the experience
we want to deliver, and we're sorry it fell short. That kind of lapse in
communication between the kitchen and the floor is something we take
seriously, and we'll be looking into what happened that evening.

We'd love the chance to do better by you. If you're open to it, please reach
out to us directly at hello@solabistro.com — we'd like to make it right.

We hope to see you back soon.

— The Team at Sola Bistro
```

**Positive response variant (5-star review reference):**
```
Review text (5 stars): "Perfect from start to finish. Sat at the bar,
had the burrata, the short rib, and the tiramisu. Our bartender Marco was
incredible — attentive, funny, knowledgeable about the wine list. This is
our new special-occasion spot."

Response:
This made our whole week — thank you. Marco really is one of a kind, and
we'll make sure he sees this. The burrata, short rib, and tiramisu is a
lineup we'd personally endorse, so it sounds like you ordered exactly right.

We're so glad to be your special-occasion spot. We can't wait to celebrate
more occasions with you — see you soon.

— The Team at Sola Bistro
```

**Negative recovery variant (1-star, food quality complaint):**
```
Review text (1 star): "Went for my anniversary dinner. The steak was
overcooked — asked for medium rare and got well done. When we told the
server, they just said they'd 'let the kitchen know' and nothing happened.
Ruined the night. Very disappointing."

Response:
We're so sorry — a wrong temperature on a steak is frustrating enough,
but to have it go unaddressed on your anniversary dinner is genuinely
unacceptable. That is not how we handle mistakes, and we want to understand
exactly what happened.

We'd really appreciate the chance to speak with you directly. Please email
us at hello@solabistro.com and ask for [Manager Name] — we want to make
this right.

Thank you for giving us the chance to respond, and again, we're truly sorry
this was your experience.

— [Manager Name], Sola Bistro
```

**Short-form response (for high-volume days, positive reviews):**
```
Thank you! So glad you loved the lamb chops — they're a team favorite
too. Hope to see you back soon. — Sola Bistro
```

**Next steps:**
- Respond to all reviews within 24–48 hours for best visibility and perception
- Never argue with a negative review publicly — take it offline every time
- For 1- and 2-star reviews, have a manager review the draft before posting
- Track recurring complaints across reviews to identify operational patterns
- Log responses in a review management tool (e.g., Birdeye, Podium, or Google Business Profile directly)
