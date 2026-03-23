---
name: objection-handler
description: For each sales objection: reframe, provide evidence, and guide to close
license: MIT
triggers: ["objection handler", "sales objections", "handle objections", "overcome objections", "objection response"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Objection Handler

## What this skill does

Takes a list of real sales objections and produces a structured response for each one — not a script to memorize, but a framework to internalize. Each response follows a four-part structure: acknowledge the objection genuinely, reframe it toward a more productive conversation, offer evidence that validates the reframe, and bridge to the close or next step. Outputs are formatted as a sales playbook section, a training reference, or a quick-access objection card for reps in the field.

1. **Acknowledge** — validates the prospect's concern without caving to it; avoids the common mistake of jumping straight to rebuttal
2. **Reframe** — shifts the conversation from the surface objection to the underlying concern, where the real conversation lives
3. **Evidence** — provides a specific proof point (stat, customer quote, case study reference, or logical argument) that supports the reframe
4. **Bridge** — guides the conversation back toward momentum: a question, a next step, or a soft close
5. **Red flags** — flags when an objection is actually a disqualifier, so reps don't waste time on deals that won't close

## How to invoke

```
/objection-handler
```

Claude will ask:
- What are the specific objections you want to address (list them exactly as prospects say them)?
- What is your product or service and what problem does it solve?
- What are your strongest proof points — customer outcomes, data, case studies, or competitive advantages?
- Who is the typical buyer (title, industry, company size) so responses can be tailored to their context?
- Is this for live call use, email follow-up, or a training document?

## Workflow steps

### Step 1 — Objection Classification
Categorize each objection: Is it a real concern (needs to be addressed), a smoke screen (masking a different concern), a negotiation tactic (price objections often are), or a genuine disqualifier (deal should be walked away from)? This classification changes the response strategy.

### Step 2 — Response Development
For each objection, write the full four-part response (Acknowledge → Reframe → Evidence → Bridge). Language is conversational — designed to be said out loud, not read from a script.

### Step 3 — Variant Handling
For the most common objections, write a second-tier response for when the first response doesn't land, and flag the disqualifying version of the same objection (when it signals the deal is not real).

### Step 4 — Quick Reference Formatting
Compile responses into a scannable format — either a detailed playbook section or a compressed battle card version for reps to use in real time.

## Example outputs

### Example: "Too Expensive" and "Happy with Current Vendor" Objections

**Input:** Product: Leapwise (HR analytics platform). Buyer: VP of People or CHRO at 200-1,000 person companies. Objections: "This is too expensive" and "We're happy with our current vendor." Proof points: Customers reduce manual reporting by 60% on average; Meridian Health saved $340K/year in analyst time; 94% renewal rate; integrates with Workday, BambooHR, and ADP natively.

**Objection handler draft:**
```
LEAPWISE SALES PLAYBOOK — OBJECTION RESPONSES

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OBJECTION 1: "This is too expensive."
(Variants: "It's out of our budget." / "We can't justify the cost right now."
 / "Your competitor is half the price.")
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CLASSIFICATION: Negotiation tactic + legitimate concern (mixed)
  Rarely means: "We have no budget and will never have any."
  Usually means: "I'm not convinced the value justifies this number yet."
  Occasionally means: "This is out of my authority to approve — I need
    cover to bring it upstairs." (multi-thread opportunity)
  Red flag version: "Our HR budget is frozen through next fiscal year
    and there is no discretionary spend." → Qualify timeline; may be
    a real timing objection, not a price objection.

RESPONSE:

ACKNOWLEDGE:
  "That's a fair pushback — and I'd rather address it directly than
  talk around it. What are you comparing it against — a specific
  alternative, or is it more about the absolute number?"

  [Listen. The answer tells you what you're actually dealing with.]

REFRAME:
  "Let me share how our customers typically think about this. The
  question isn't really whether $[X] is expensive — it's whether the
  cost of not having it is higher. And for most People teams we work
  with, it is."

EVIDENCE:
  Choose the most relevant for this prospect:

  Option A — Time savings (use when team is stretched):
    "Meridian Health's People team was spending 22 hours a week pulling
    workforce reports manually before Leapwise. After 90 days, that was
    down to 4 hours. At their fully-loaded HR analyst cost, that's
    $340,000 in recovered capacity per year. Our contract is a fraction
    of that."

  Option B — Risk framing (use when compliance or audit is a concern):
    "The HR teams that come to us aren't buying a reporting tool — they're
    buying the ability to see attrition risk, engagement drops, and
    compliance exposure before they become problems. The cost of one
    unplanned departure at the VP level is typically 2–3x their annual
    salary in recruiting and productivity loss. Our customers tell us
    that catching one retention risk early more than pays for the platform."

  Option C — Benchmark comparison (use when comparing to a competitor):
    "If you're looking at [Competitor], I'd encourage you to get a
    realistic picture of what implementation, customization, and support
    actually cost — not just the license fee. We can put together a
    total cost of ownership comparison if that would help the business
    case."

BRIDGE:
  "Would it help if we built out the ROI math specific to Hartwell's
  situation? I can put together a one-page model that shows what your
  break-even looks like — that's usually the most useful thing to bring
  to a budget conversation."

  [Alternative if they're close to deciding:]
  "Is price the last remaining concern, or are there other things we
  haven't addressed yet?"

WHEN THE FIRST RESPONSE DOESN'T LAND:
  "I hear you. Let me ask it differently: if price weren't a factor,
  is this the solution you'd want? If yes, let's figure out how to
  make the numbers work. If there's something else holding you back,
  I'd rather know that now."

DISQUALIFYING SIGNAL:
  If they say: "We went through a budget process last quarter and HR
  tech was explicitly cut. It's not coming back until next fiscal year."
  → Don't push. Offer to stay in touch: "That makes sense. When does
  your next budget cycle open up? I'd like to make sure we're in the
  conversation when it does." Set a CRM reminder and move on.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OBJECTION 2: "We're happy with our current vendor."
(Variants: "We already have a solution for this." / "We just renewed
 our contract with [Vendor]." / "Our team really likes what we're using.")
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CLASSIFICATION: Smoke screen + status quo bias (mixed)
  Rarely means: "Our current solution is truly excellent and we have
    no unmet needs." (If that were true, they wouldn't be on a call.)
  Usually means: "Change is costly and uncertain — convince me the
    pain is worth the switch."
  Occasionally means: "I championed this vendor to my organization —
    switching means admitting I made a bad call." (ego/political concern)
  Red flag version: "We're locked in a 3-year contract with no out clause
    and we're only 6 months in." → Confirm; may be a genuine timing issue.
    Explore whether the pain is bad enough to absorb early termination costs.

RESPONSE:

ACKNOWLEDGE:
  "That's good to hear — honestly. The worst thing I could do is try
  to pull you away from something that's genuinely working. Can I ask
  what you mean by 'happy'? What is your current solution doing well?"

  [Listen carefully. They'll tell you what they value. They'll also
   tell you — through what they don't say — where the gaps are.]

REFRAME:
  "The reason I ask is that most of the teams we work with were also
  'happy' with what they had — until they saw what they were missing.
  Not because their old solution was bad, but because the bar for what
  People analytics can do has moved significantly in the past two years.
  What does your current workflow look like for [specific use case they
  mentioned in discovery]?"

EVIDENCE:
  Option A — The "gap reveal" (most effective when you've done discovery):
    "You mentioned earlier that your team spends [X] hours a week on
    manual reporting. Is your current vendor solving that — or is that
    still a manual process on top of what they provide?"

    [This works because it reflects their own words back at them. It
    doesn't attack the incumbent — it reveals an unmet need.]

  Option B — Social proof from switchers:
    "About 40% of our customers came to us from a competing platform
    that they were also 'happy' with. The most common thing they tell
    us after switching: 'I didn't know what I was missing until I saw
    what was possible.' I'm not asking you to switch today — I'm asking
    you to spend 20 minutes seeing what's possible. What's the harm
    in knowing?"

  Option C — Contract timing acknowledgment:
    "When does your current contract renew? Even if you're locked in for
    now, the smartest buying decisions happen 6 months before renewal —
    not 6 weeks. If you'd be open to it, let's keep the conversation going
    so you're in the best position when that window opens."

BRIDGE:
  "I'm not here to replace something that's working. What I'd find
  useful to understand is: is there anything your People team wishes
  your current solution could do that it doesn't? Even a small thing?"

  [This question almost always surfaces a real gap. Take the answer
  and make it the center of your next conversation.]

WHEN THE FIRST RESPONSE DOESN'T LAND:
  "Totally fair. I won't push. Can I send you one thing before we get
  off the call? We have a 5-minute product walkthrough that one of your
  peers — a VP of People at a similar-sized company — said changed how
  they thought about what was possible. If it doesn't show you anything
  new, at least you'll have confirmed you're in the right place."

DISQUALIFYING SIGNAL:
  If they say: "We literally just signed a 2-year renewal last month
  and there's no chance we're revisiting this." → Accept gracefully.
  "That makes sense — and it sounds like the timing just isn't right.
  I'd love to stay in touch so we're a natural conversation when you're
  evaluating again. Who should I make sure is in the loop on your team?"
  → Multi-thread for future pipeline.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OBJECTION 3: "We need to think about it."
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CLASSIFICATION: Delay tactic + information gap (almost always)
  Rarely means: "We are genuinely deliberating and will give you
    a thoughtful answer in 2 weeks."
  Usually means: "Something isn't resolved for me yet and I'm not
    comfortable saying what it is." OR "I don't have the authority
    to decide and I'm not ready to say that."

ACKNOWLEDGE:
  "Of course — this isn't a small decision. What specifically do you
  want to think through? I ask because I might be able to give you
  information that makes the thinking faster."

REFRAME:
  "A lot of times when someone says they need to think about it, there's
  a specific concern underneath it. I'd rather surface that now than
  have you go quiet and have to guess."

EVIDENCE: (N/A — this objection requires a question, not a proof point)

BRIDGE:
  "Is it the pricing? The implementation timeline? Whether you have
  internal buy-in? Or something we haven't talked about yet?"

  [Name the most likely candidates based on your discovery. The one
  they react to is the real objection. Start there.]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUICK REFERENCE — OBJECTION CARDS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"TOO EXPENSIVE"
  Don't say: "Our pricing is actually very competitive."
  Do say: "What are you comparing it to?" → ROI conversation.
  Key proof: Meridian Health $340K recovered capacity | 60% time savings

"HAPPY WITH CURRENT VENDOR"
  Don't say: "Our product is better than [Vendor]."
  Do say: "What does 'happy' mean to you — what are they doing well?"
  Key move: Reveal gap by echoing their own discovery answers back.

"NEED TO THINK ABOUT IT"
  Don't say: "Of course, take all the time you need."
  Do say: "What specifically do you need to think through?"
  Key move: Name the most likely real objection. Watch their reaction.

"WE DON'T HAVE BUDGET"
  Don't say: "We can do a payment plan."
  Do say: "When does your next budget cycle open? Let's plan for that."
  Key move: Qualify the timeline — is it a real freeze or a soft no?

"SEND ME MORE INFORMATION"
  Don't say: "I'll send over our deck!"
  Do say: "What specifically would be most useful? I want to make sure
    I send you the right thing, not everything."
  Key move: Keep the conversation going. A case study tailored to their
    industry is better than the standard deck.
```

**Email objection response variant (for async follow-up):**
```
SUBJECT: Re: Following up on our conversation

Hi [Name],

Totally understand — these decisions deserve careful thought.

To make that easier, I want to make sure you have the right information
to evaluate this. The question I'd encourage you to sit with: beyond
the price, is there anything about what Leapwise does that you're
uncertain about?

If it's a "we love it but the number is a stretch" situation, I'd like
to build out the ROI model specific to your team's situation — it usually
helps the internal conversation. If there's something else, I'd rather
surface it now.

Either way — worth a 15-minute call? I can work around your schedule.

[Your name]
```

**Next steps:**
- Run the "too expensive" and "happy with current vendor" responses through a team role-play before deploying them in live calls — the acknowledge step in particular feels counterintuitive to reps who are trained to rebut immediately
- Add the quick reference cards to your CRM (Salesforce, HubSpot) as a note template or sales playbook section so reps can pull them up mid-call
- Record 2-3 call snippets where these objections come up and debrief with your team on what landed and what didn't — real calls are the best calibration data
- Flag any objections where disqualifying signals appear in your pipeline and review those deals in the next team pipeline review
- Refresh this playbook every quarter — objections evolve as your market, pricing, and competitive landscape change
