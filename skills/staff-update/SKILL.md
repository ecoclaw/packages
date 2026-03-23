---
name: staff-update
description: Write a staff memo or pre-shift brief — specials, 86'd items, service focus, and event notes
license: MIT
triggers: ["staff update", "pre-shift brief", "staff memo", "shift notes", "team update", "pre-shift meeting"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Staff Update

## What this skill does

Produces a structured, scannable pre-shift brief or staff memo that gives your team everything they need before service begins — specials, 86'd items, reservation highlights, service focus, and any operational updates — in a consistent format they can read and internalize in under two minutes.

1. **Today's specials** — dish name, key ingredients, flavor profile, and suggested upsell pairing
2. **86'd and limited items** — what's out, what's running low, and substitution options
3. **Reservation and large party notes** — timing, size, occasion, special requests, pre-orders
4. **Service focus or training reminder** — one clear behavioral coaching point for the shift
5. **Operational updates** — staffing changes, equipment issues, POS notes, management coverage

## How to invoke

```
/staff-update
```

Claude will ask:
- What specials are running today, and what are the key details for each (ingredients, prep, price, pairing)?
- What items are 86'd or running low, and are there substitutions available?
- Are there any notable reservations, large parties, or events tonight?
- What is the service focus for this shift (upselling, pacing, a specific training point)?
- Any operational notes — new staff, equipment issues, manager on duty, health inspection, etc.?

## Workflow steps

### Step 1 — Content Intake
Claude collects specials, 86 list, reservation notes, and any operational updates from the manager or chef.

### Step 2 — Pre-Shift Brief Draft
A structured brief is generated in a consistent format — headers, bullet points, and bold callouts so it's fast to read aloud or post on the board.

### Step 3 — Upsell and Pairing Prompts
Each special includes a suggested pairing (cocktail, wine, dessert) to give servers a natural upsell conversation starter.

### Step 4 — Format Options
Delivered in two formats: a print/whiteboard version (clean, sectioned) and a short messaging version (for Slack, GroupMe, or text blast to the team).

## Example outputs

### Example: Friday Dinner Pre-Shift Brief with Weekend Specials and a Large Party

**Input:** Specials: (1) Pan-seared halibut with corn succotash, basil oil, $38; pairs well with the Sancerre. (2) Heirloom tomato flatbread with burrata, prosciutto, balsamic, $18 — runs as appetizer or shareable. (3) Peach and bourbon bread pudding, $11, dessert special, pairs with the house espresso martini. 86: duck confit (all night), black truffle fries (after 7 PM — limited supply). Running low on the Whispering Angel rosé. Large party: Table 24, party of 14, 7:30 PM, birthday for a guest named Lauren — cake arriving from outside at 8:15 PM, store in walk-in. Service focus: descriptive selling — servers should describe specials, not just list them. Manager on duty: Jessica. New server: Devon, first solo shift.

**Pre-shift brief draft:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRE-SHIFT BRIEF — Friday, March 21
Service: Dinner | MOD: Jessica
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TONIGHT'S SPECIALS

1. PAN-SEARED HALIBUT  $38
   Pan-seared Pacific halibut over a warm corn and heirloom bean succotash,
   finished with basil oil and lemon. Light, summery, great for the table
   that's asking for something seasonal.
   → Pair with: Sancerre (Henri Bourgeois, glass $16 / bottle $64)
   → Note: Limited — 86 when gone, do not oversell early in the evening.

2. HEIRLOOM TOMATO FLATBREAD  $18
   Thin-crust flatbread with whipped burrata, dry-aged prosciutto di Parma,
   heirloom tomatoes, and aged balsamic. Runs as an appetizer or shareable.
   Great upsell for two-tops as a starter before pasta.
   → Pair with: House Negroni or the Pinot Grigio by the glass

3. PEACH + BOURBON BREAD PUDDING  $11  [DESSERT SPECIAL]
   Warm brioche bread pudding with roasted Georgia peaches, bourbon caramel,
   and vanilla bean ice cream. This is a closer — mention it early so
   guests save room.
   → Pair with: Espresso martini ($16) — this combo sells itself

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
86 LIST & LIMITATIONS

  ✖ DUCK CONFIT — 86 all night, do not quote or upsell
  ✖ BLACK TRUFFLE FRIES — limited, available until approx. 7 PM; 86
    after that, do not promise after 6:45
  ⚠ WHISPERING ANGEL ROSÉ — running low, approximately 4 bottles left;
    suggest the Miraval or La Marca Prosecco as alternatives

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESERVATION HIGHLIGHTS

TABLE 24 — Party of 14 | 7:30 PM arrival
  • Birthday celebration for LAUREN
  • Outside cake arriving at approximately 8:15 PM — store in the walk-in
    immediately when it arrives, label "Table 24 / Lauren"
  • Confirm with Jessica before bringing out the cake
  • Heads up: large party, stagger water, bread, and apps — don't let
    the table sit empty between courses
  • Section captain: [Assign before service]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SERVICE FOCUS TONIGHT: DESCRIPTIVE SELLING

Don't just list specials — paint a picture. Instead of "we have a halibut
special," try: "Tonight we're doing a beautiful pan-seared halibut over a
warm corn succotash — it's light, a little sweet, and the basil oil on
top is really nice."

Guests buy what they can picture. One sentence of description beats a
menu readout every time.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OPERATIONAL NOTES

  • DEVON is running their first solo section tonight — Sections 2 and 3.
    Please support without hovering. Jessica is available for questions.
  • POS is running the updated menu as of today — the flatbread is now
    entered under SPECIALS, not APPS. Don't ring it under the wrong tab.
  • End of night: side work checklist updated, see printed sheet at host
    stand. All staff sign off before leaving.

Let's have a great Friday. Questions — see Jessica.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Slack / text message version:**
```
📋 FRIDAY DINNER BRIEF | MOD: Jessica

SPECIALS:
• Halibut $38 — corn succotash, basil oil → pair w/ Sancerre
• Tomato flatbread $18 — burrata, prosciutto, balsamic → sharer/starter
• Peach bourbon bread pudding $11 → pair w/ espresso martini

86: Duck confit (all night). Black truffle fries after ~7 PM.
LOW: Whispering Angel — sub Miraval or Prosecco.

BIG PARTY: Table 24, 14-top, 7:30 PM. Birthday: LAUREN.
Outside cake arriving ~8:15 — walk-in, label it, tell Jessica.

FOCUS: Describe specials, don't just list them.
Devon's first solo shift — Sections 2+3. Show some love.

See you on the floor. 🍽️
```

**Next steps:**
- Read through with the full team at least 10 minutes before doors open
- Post the print version on the expo line or server station for reference during service
- Send the Slack/text version to any staff who aren't in the building yet
- Update the 86 list live throughout the night — text the group when something runs out
