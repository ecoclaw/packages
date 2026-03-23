---
name: patient-recall-letter
description: Write a dental recall or reactivation letter to bring lapsed patients back in for hygiene visits
license: MIT
triggers: ["recall letter", "patient recall", "reactivation letter", "hygiene recall", "patient outreach", "lapsed patient"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Patient Recall Letter

## What this skill does

Produces personalized dental recall and reactivation letters that bring patients back into the practice for hygiene visits and overdue care — without sounding like a bill collector. Three distinct variants handle every gap scenario, from a routine 6-month reminder to a warm reconnect with someone who hasn't been in for two or more years.

1. **Due-for-hygiene recall** — friendly reminder for patients approaching their 6-month interval
2. **Lapsed patient reactivation (6–18 months)** — warm, non-judgmental outreach for patients who missed their last appointment
3. **Long-lapsed reactivation (18+ months)** — reconnection letter that acknowledges the gap, removes friction, and creates urgency without shame
4. **Customizable merge fields** — patient name, last visit date, provider name, and practice contact info
5. **Three delivery formats** — print letter, email version, and short SMS/text script

## How to invoke

```
/patient-recall-letter
```

Claude will ask:
- Which variant is needed: due-for-recall, lapsed (6–18 months), or long-lapsed (18+ months)?
- What is the patient's last visit date or approximate time since last visit?
- What is the practice name, provider name (if personalizing), and preferred contact method?
- Any specific services or promotions to mention (e.g., new patient special, whitening, updated X-ray protocol)?
- Should the tone be warm/casual or professional/formal?

## Workflow steps

### Step 1 — Variant and Tone Selection
Claude selects the appropriate letter variant based on lapse duration and practice tone preference.

### Step 2 — Letter Draft
A full letter is generated with a warm opening, the specific reason for outreach, a brief value statement, and a clear call to action (phone, online scheduling link, or reply).

### Step 3 — Email Subject Line and Preview Text
Claude provides 2–3 subject line options optimized for open rates, plus preview text for each.

### Step 4 — SMS Script
A brief (160-character) text message version for practices using text-based recall systems.

## Example outputs

### Example: 12-Month Lapsed Patient Reactivation Letter

**Input:** Patient last visited 12 months ago. Practice name: Riverside Family Dentistry. Provider: Dr. Nguyen. Scheduling: online or by phone. Casual, warm tone.

**Letter draft:**
```
[Practice Letterhead / Logo]

March 21, 2026

Dear [Patient First Name],

We've been thinking about you — and wanted to reach out because it's been
about a year since your last visit with us at Riverside Family Dentistry.

Life gets busy, and we completely understand. But we also know that regular
cleanings do more than keep your smile bright — they're one of the most
effective ways to catch small problems before they become bigger (and more
expensive) ones.

Dr. Nguyen and the whole team are here whenever you're ready. Getting back
on track is easier than you might think — your first appointment back is
just a hygiene visit and exam, and most patients are in and out in about
an hour.

A few things to know:
  • We've expanded our scheduling hours — including select Saturday mornings
  • Online booking is available 24/7 at [website]
  • We accept [insurance plans] and offer flexible payment options

We'd love to see you back. Call us at [phone number] or book online at
[scheduling link] — whatever's easiest for you.

Warmly,

[Provider Name or Practice Name]
Riverside Family Dentistry
[Address] | [Phone] | [Website]

P.S. If you have any questions about your coverage or what to expect at
your visit, just give us a call. We're happy to help.
```

**Email version:**
```
Subject line options:
  1. "[First Name], it's been a while — we'd love to see you"
  2. "Your smile misses us (we're pretty sure)"
  3. "Time for a checkup, [First Name]?"

Preview text: "It's been about a year — getting back on track takes just one
easy appointment."

---

Hi [First Name],

It's been about a year since your last visit at Riverside Family Dentistry,
and we wanted to reach out.

We know schedules fill up fast. But regular cleanings are one of the best
investments you can make in your long-term health — and Dr. Nguyen and the
team are ready to get you back on track with a simple, no-stress hygiene visit.

Book online anytime at [scheduling link], or call us at [phone]. We have
evening and Saturday hours available.

We'd love to see that smile again.

— The Team at Riverside Family Dentistry
```

**SMS script (160 chars):**
```
Hi [Name], it's Riverside Family Dentistry! It's been a year since your
last visit. Ready to get back on track? Book at [link] or call [phone].
```

**Long-lapsed variant (18+ months) — opening paragraphs:**
```
Dear [Patient First Name],

We realize it's been a little while since we've seen you — and we're not
here to make you feel bad about it. Life has a way of pushing dental visits
down the list, and we get it.

What we do want you to know is that the door is always open, and getting
back to regular care is one of the best things you can do for your health.
A lot can change in a couple of years, and a fresh exam lets us catch
anything that needs attention early — before it becomes urgent.

We've updated our systems, added some new technology, and we're as committed
as ever to making your visit comfortable and efficient. If it's been a while
and you're nervous about what we might find, that's exactly why coming in
sooner is better than later.

No judgment. Just good care.
```

**Next steps:**
- Merge patient first name, last visit date, and provider name before sending
- Confirm insurance plans listed are current before mailing or emailing
- Track open rates and call conversions per variant to optimize over time
- Follow up unresponsive contacts after 3 weeks with the SMS version
