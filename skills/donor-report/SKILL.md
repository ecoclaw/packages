---
name: donor-report
description: Write a personalized donor impact report showing how their gift was used and the outcomes it enabled
triggers: ["donor report", "impact report", "donor update", "stewardship letter", "donor communication", "gift report"]
---

# Donor Report

## What this skill does

Produces a personalized donor impact report that makes the donor feel the weight and meaning of their gift through specific outcomes, stories, and data — not generic thank-you language. Strong stewardship communication is the highest-leverage activity in donor retention, and this skill produces the kind of report that donors share with colleagues and reference when they decide to give again.

1. **Personal salutation and connection opener** — references the donor's specific gift, history, or stated motivation to signal this is not a form letter
2. **Gift use breakdown** — explains specifically how the donor's dollars were allocated and what they purchased or enabled
3. **Outcome data tied to their gift level** — connects their contribution to measurable program results proportional to their gift
4. **Impact story** — a human narrative that puts a face on the data and creates emotional resonance
5. **Forward-looking engagement opportunity** — an invitation to deepen involvement (event, volunteer role, renewed gift) that feels like an opportunity, not a solicitation

## How to invoke

```
/donor-report
```

Claude will ask:
- Who is this donor? (name, gift amount, date of gift, any personal history with the organization)
- What program or fund did their gift support?
- What are the key outcomes or metrics for that program this year?
- Do you have a specific beneficiary story or quote to include?
- What is the next engagement opportunity you want to invite them into?

## Workflow steps

### Step 1 — Personalization Layer
Claude opens with the donor's name, gift amount, and a specific acknowledgment of their investment — never "dear friend" or generic language. If a donor history is provided, it is woven in to honor the relationship.

### Step 2 — Impact Framing
Claude translates the donor's gift into concrete program activity. For large gifts, this means direct attribution ("Your $5,000 gift funded…"). For smaller gifts in pooled funds, Claude uses proportional framing ("Donors at your level collectively funded…").

### Step 3 — Data and Story Integration
Claude combines program metrics (numbers, percentages, reach) with a human story that gives the data emotional meaning. The story follows a brief challenge → intervention → outcome arc.

### Step 4 — Stewardship Close and Engagement Ask
Claude closes with warmth, an acknowledgment of partnership, and a clear but low-pressure next step — an event invitation, a volunteer opportunity, or a simple renewal ask framed as continuing the work they've already started.

## Example outputs

### Example: Annual Impact Report for a $5,000 Donor to a Food Bank

**Input:** Donor: Patricia and Tom Hernandez. Gift: $5,000 in November 2025 to the general food security fund. 4th consecutive year of giving at this level. Program outcomes: 47,000 individuals served, 1.2M meals distributed, new mobile pantry served 3 rural zip codes. Story: Maria, a grandmother raising two grandchildren, used the mobile pantry for the first time after her car broke down. Next engagement: spring luncheon on April 10.

**Donor impact report draft:**
```
March 21, 2026

Patricia and Tom Hernandez
[Address]

Dear Patricia and Tom,

Four years ago, you made a decision to invest in the food security of
our community. This letter is our annual accounting of what that
decision — and your continued commitment — has made possible.

YOUR GIFT IN ACTION

Your $5,000 gift to the Valley Food Bank's General Food Security Fund
in November 2025 joined a community of donors who together sustained
one of our most ambitious program years on record. Here is what your
investment helped accomplish:

  47,000 individuals received food assistance through Valley Food Bank
  programs in 2025 — a 14% increase over the prior year, driven largely
  by rising housing costs in our service area.

  1.2 million meals were distributed through our network of 34 partner
  pantries, senior nutrition sites, and school BackPack programs.

  A gift at your level — $5,000 — directly supports the equivalent of
  more than 15,000 meals. That is nearly three full months of groceries
  for a family of four.

  Three rural zip codes in the eastern valley received food access for
  the first time through our new Mobile Pantry, which launched in
  September thanks to multi-year donors like you. In communities where
  the nearest grocery store is 18 miles away, the pantry arrives at
  a community center parking lot twice a month. In its first four
  months, the Mobile Pantry served 1,200 individuals who had no prior
  access to our services.

MEET MARIA

Maria Castellano is 67 years old and raises her two grandchildren,
ages 8 and 11, in a small house in Earlimart. She worked in the fields
for 30 years. Last fall, her car broke down the same week her electric
bill doubled. She had $40 left until the first of the month.

A neighbor told her the Mobile Pantry was coming. She walked there with
her grandchildren, not knowing what to expect.

"I didn't want to go," Maria told our Mobile Pantry coordinator. "I
thought it would be embarrassing. But everyone was kind. The kids got
fruit, and I got eggs and rice and beans. That night we had a real
dinner."

Maria has been back every month since. She recently signed up to help
at the next distribution as a Spanish-speaking volunteer. "It helped
my family," she said. "I want to help someone else."

Maria's story is one of 1,200 that would not exist without the Mobile
Pantry. The Mobile Pantry would not exist without donors who think
long-term — donors like you.

A REFLECTION ON YOUR FOUR YEARS

Since your first gift in 2022, you and Tom have invested $18,500 in
food security in this community. That cumulative investment has
contributed to programs that have grown from serving 31,000 to 47,000
individuals annually — a 52% increase over the period of your
partnership. We do not take that growth for granted, and we do not
take your continued commitment for granted.

YOU'RE INVITED: SPRING PARTNERSHIP LUNCHEON

On April 10, 2026 at 12:00 PM, we will host our annual Spring
Partnership Luncheon for donors who have invested at your level or
above. This is not a fundraising event — it is a chance for us to
share what's next, introduce you to the staff and volunteers whose
work you make possible, and hear from you about what matters most
to you in this work.

We would love to see you there. An invitation with details is enclosed.
If you have questions or would like to RSVP directly, please contact
our Director of Donor Relations, James Whitfield, at
j.whitfield@valleyfoodbank.org or (661) 555-0192.

With deep gratitude and respect for your partnership,

Elena Fuentes
Executive Director
Valley Food Bank

P.S. — If you would like a tour of our Mobile Pantry in action before
the Luncheon, James can arrange a visit on any of our distribution days.
Many donors tell us it is the most meaningful two hours they've spent
with us. We hope you'll consider it.
```

**Abbreviated version (for email delivery):**
```
Subject: Your 2025 impact at Valley Food Bank — thank you, Patricia and Tom

Dear Patricia and Tom,

Your $5,000 gift last November helped distribute 1.2 million meals
to 47,000 people across our region — including 1,200 individuals in
rural communities who had never been able to access our programs before.

A gift at your level supports the equivalent of more than 15,000 meals.
That is 3 months of groceries for a family of four.

We're grateful to be in our fourth year of partnership with you. This
spring, we'd love to have you join us at our Partnership Luncheon on
April 10 — a chance to meet the people your generosity has reached.

[Read the full 2025 impact report →]  |  [RSVP for the Luncheon →]

With gratitude,
Elena Fuentes, Executive Director
Valley Food Bank | (661) 555-0180
```

**Next steps:**
- Personalize the salutation and any relationship details before sending
- Verify all program statistics with your development and program teams
- Obtain written consent from Maria (or use a composite/anonymized story) before including by name
- Send printed version via USPS for donors at this level; follow up with email version 3 days later
- Log the communication in your CRM and set a follow-up task to confirm RSVP by March 31
