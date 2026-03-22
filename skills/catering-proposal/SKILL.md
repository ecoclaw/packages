---
name: catering-proposal
description: Write a 3-tier catering proposal with menu options, pricing, staffing, and terms
triggers: ["catering proposal", "catering quote", "event catering", "catering menu", "catering bid", "catering package"]
---

# Catering Proposal

## What this skill does

Produces a professional, complete catering proposal with three package tiers, per-person pricing, staffing details, service style, and standard terms — ready to send to corporate clients, event planners, or private hosts. The three-tier structure gives clients a natural upsell path while making the decision feel organized and easy.

1. **Three package tiers** — Essential (self-serve/drop-off), Standard (staffed buffet), and Premium (plated or action stations)
2. **Menu options per tier** — 2–3 menu selections or builds per package, themed around the client's event type
3. **Staffing and service details** — server count, setup/breakdown times, equipment included vs. rented
4. **Pricing breakdown** — per-person and total pricing for each tier, plus line items for add-ons
5. **Deposit, cancellation, and customization terms** — standard contract language ready to adapt

## How to invoke

```
/catering-proposal
```

Claude will ask:
- What type of event is this (corporate lunch, wedding, cocktail reception, holiday party, etc.)?
- How many guests and what is the estimated date and time?
- What cuisine style or dietary considerations should guide the menu?
- What is the client's approximate budget range or price sensitivity?
- What is your restaurant or catering company name, and what service styles do you offer?

## Workflow steps

### Step 1 — Event and Guest Profile
Claude captures the event type, guest count, date, dietary needs, and service expectations to anchor the proposal.

### Step 2 — Three-Tier Package Build
Each tier is built with a distinct value proposition: Essential (accessible, efficient), Standard (polished, staffed), Premium (full-service, impressive).

### Step 3 — Pricing and Line Items
Per-person pricing is populated for each tier. Optional add-ons (bar service, floral, AV, dietary alternatives) are listed separately.

### Step 4 — Terms and Next Steps
Standard deposit, payment schedule, cancellation, and minimum guest count terms are included with a clear call to action.

## Example outputs

### Example: Corporate Lunch Catering Proposal for 80 Guests

**Input:** Corporate lunch for 80 guests, Tuesday–Friday daytime slot, downtown office. Client wants something that feels elevated but runs efficiently (under 45-minute service window). Mix of dietary needs including vegetarian and gluten-free. Budget: flexible but wants to see options. Catering company: Harvest Table Catering Co.

**Proposal draft:**
```
HARVEST TABLE CATERING CO.
Catering Proposal — Corporate Lunch Service
Prepared for: [Client Name / Company]
Event Date: [Date] | Guest Count: 80 | Location: [Venue/Address]
Proposal Date: March 21, 2026 | Valid Through: April 21, 2026

---

Thank you for considering Harvest Table for your upcoming event. We've put
together three packages below to match different service levels and budgets.
All packages include setup, service ware, and breakdown unless noted.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PACKAGE 1 — ESSENTIAL
Drop-off Buffet | Self-Serve
$28 per person | $2,240 total (80 guests)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Best for: Efficient team lunches, working sessions, and budget-conscious
events where the focus is great food without added formality.

Menu (choose one):

  OPTION A — Mediterranean Spread
  Herb-roasted chicken thighs | Falafel (V, GF)
  Tabbouleh | Roasted vegetable couscous | Hummus + warm pita
  Greek salad | Tzatziki | Lemon tahini dressing
  Fresh fruit platter

  OPTION B — American Farmhouse
  BBQ pulled chicken sliders | Portobello mushroom sliders (V)
  Creamy coleslaw | Roasted potato salad (GF)
  Seasonal green salad | Cornbread
  Brownie bites

Includes:
  ✔ Chafing dishes and serving utensils
  ✔ Compostable plates, napkins, cutlery
  ✔ Setup 45 minutes before event; pickup within 2 hours of service end
  ✗ Staffing not included (client manages service)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PACKAGE 2 — STANDARD
Staffed Buffet | Recommended
$42 per person | $3,360 total (80 guests)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Best for: Professional corporate events where appearance and service flow
matter. Our team handles everything so your guests focus on each other.

Menu (choose one):

  OPTION A — Modern American
  Sliced roasted beef tenderloin (GF) | Lemon herb salmon (GF)
  Truffle mac and cheese | Roasted seasonal vegetables (V, GF)
  Arugula + shaved parmesan salad | Artisan dinner rolls
  Assorted petite desserts

  OPTION B — California Fresh
  Grilled citrus chicken (GF) | Stuffed portobello (V, GF)
  Farro grain bowl with roasted squash + pepitas (V)
  Shaved brussels sprouts salad | Sourdough + cultured butter
  Lemon bars + chocolate mousse cups

Includes:
  ✔ 2 event staff (3 hours service + 1 hour setup/breakdown)
  ✔ Linen napkins and upgraded compostable serviceware
  ✔ Dietary labeling cards for all dishes
  ✔ Chafing dishes, serving equipment
  ✔ Coordination call 1 week prior to event

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PACKAGE 3 — PREMIUM
Plated Lunch or Action Stations | Full Service
$65 per person | $5,200 total (80 guests)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Best for: Leadership events, client entertainment, and occasions where the
meal is part of the impression you're making.

SERVICE STYLE — choose one:
  A. Three-Course Plated Lunch (pre-selected or 2-choice)
  B. Live Action Stations (carving station + 2 satellite stations)

Sample Plated Menu:
  First Course: Heirloom tomato bisque (V, GF) or
                Burrata with stone fruit + basil oil (V)
  Entrée: Pan-roasted airline chicken with herb jus + fingerlings (GF) or
          Wild mushroom risotto (V, GF)
  Dessert: Flourless chocolate torte (GF) or Seasonal panna cotta (GF)

Includes:
  ✔ Executive chef on-site
  ✔ 4 event staff (full service duration)
  ✔ China, glassware, linen tablecloths and napkins
  ✔ Floral centerpiece coordination (optional, quoted separately)
  ✔ Dedicated event coordinator
  ✔ Custom printed menu cards

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ADD-ONS (all packages)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Coffee + tea station (full service)        $6/person
  Sparkling water + still water station      $3/person
  Beer and wine service (2 hrs)             $18/person
  Dietary alternative meals (custom)        $12/meal
  Additional service staff                  $45/hr per staff member
  Late pickup / extended rental             $75/hr

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TERMS AND CONDITIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Deposit: 30% of total due upon signing to confirm the date.
Final Payment: Balance due 5 business days before the event.
Minimum Guest Count: 30 guests for Packages 1 and 2; 50 guests for Package 3.
Cancellation: Full refund if cancelled 21+ days prior. 50% refund if
  cancelled 8–20 days prior. No refund within 7 days of the event.
Dietary Accommodations: Final guest count and dietary requests due 5 business
  days before the event. We accommodate gluten-free, vegetarian, vegan, and
  common allergies with advance notice.
Customization: Menus can be modified to reflect client preferences, seasonal
  availability, or specific dietary requirements at no additional charge for
  standard substitutions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We'd love to create a memorable experience for your team. To move forward
or ask questions, please contact:

[Your Name] | [Title]
Harvest Table Catering Co.
[Phone] | [Email] | [Website]
```

**Next steps:**
- Confirm guest count, date, and venue access times before sending final version
- Add your actual menu pricing based on current food cost margins
- Have your bookkeeper or business manager review cancellation and deposit terms before using
- Send as a PDF with your logo, brand colors, and a cover page for a polished presentation
