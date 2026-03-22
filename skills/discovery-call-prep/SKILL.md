---
name: discovery-call-prep
description: Generate a prospect discovery call prep sheet — company research, pain hypothesis, open questions, and call flow
triggers: ["discovery call", "call prep", "sales call", "discovery prep", "prospect research", "call planning"]
---

# Discovery Call Prep

## What this skill does

Produces a structured discovery call prep document that gives a salesperson everything they need to walk into a first call with confidence. Rather than generic questions, the output is tailored to the prospect's specific company context — their industry, size, recent news, likely tech stack, and the pain hypothesis most relevant to the rep's solution. Includes company snapshot, stakeholder notes, pain hypotheses ranked by likelihood, open-ended discovery questions tied to each hypothesis, and a suggested call flow with time allocation.

1. **Company snapshot** — key facts, recent news, and signals from the prospect's digital footprint
2. **Stakeholder notes** — what we know (or can infer) about the person on the call, their goals, and their likely agenda
3. **Pain hypotheses** — 3-4 specific pain hypotheses ranked by likelihood, with rationale for each
4. **Discovery questions** — open-ended, non-leading questions mapped to each hypothesis
5. **Call flow** — minute-by-minute structure that balances rapport, discovery, and next-step setup

## How to invoke

```
/discovery-call-prep
```

Claude will ask:
- What is the prospect's company name, URL, and the name/title of the contact you're meeting?
- What does your product or service do and what problem does it solve?
- What do you already know about this prospect (how they came in, any prior conversations, anything from LinkedIn or their website)?
- What is the call format — video, phone, how long, and who else will be on the call?
- What outcome do you want from this call (qualify, advance to demo, multi-thread, etc.)?

## Workflow steps

### Step 1 — Company Research Synthesis
Pull together what's knowable from the provided URL, company description, and any context the rep shares. Identify company size, industry, business model, likely tech stack signals, recent news (funding, product launches, leadership changes), and any public pain signals (job postings for relevant roles, G2 reviews, press coverage).

### Step 2 — Stakeholder Profile
Based on the contact's title and any LinkedIn context, build a profile of their likely role responsibilities, success metrics, decision-making authority, and typical objections or concerns for someone in their position.

### Step 3 — Pain Hypothesis Development
Generate 3-4 pain hypotheses specific to this company and this contact. Each hypothesis should be grounded in signals from the research — not generic. Rank by likelihood and explain the rationale.

### Step 4 — Question Design and Call Flow
Write 2-3 open-ended discovery questions for each pain hypothesis. Design a call flow that opens with rapport, moves into situation questions, reaches pain hypotheses naturally, and ends with a clear next step. Include time allocation for a standard 30 or 45-minute call.

## Example outputs

### Example: Discovery Call Prep — Mid-Market HR Software Prospect

**Input:** Prospect: Centerline Group (centerlinegroup.com), a 320-person professional services firm (management consulting). Contact: Priya Mehta, VP of People. Our product: Leapwise, an HR analytics platform that helps People teams report on workforce trends, attrition risk, and DEI metrics. Priya came in via a webinar we ran on attrition forecasting. No prior conversations. Video call, 30 minutes, just Priya. Goal: qualify and advance to a demo with her + CHRO.

**Discovery call prep sheet:**
```
DISCOVERY CALL PREP SHEET
Prospect: Centerline Group
Contact: Priya Mehta, VP of People
Date/Time: [Date] [Time]
Format: 30-minute Zoom | Solo (Priya only)
Rep: [Your name]
Desired outcome: Qualify pain + advance to demo with CHRO

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. COMPANY SNAPSHOT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Industry: Management consulting / professional services
Size: ~320 employees (LinkedIn signal; website says "300+")
Revenue: Estimated $40–80M (private; inferred from size + industry)
Business model: Project-based consulting with likely utilization-driven
  revenue model (hours billed per consultant = core business metric)
Locations: Chicago HQ, offices in NYC and Austin (LinkedIn)
Growth signals: 3 open roles in People team on LinkedIn right now,
  including a "People Analytics Manager" — strong signal they're
  building out this function. Suggests current state may be manual
  or under-resourced.
Recent news: No major press. LinkedIn shows they promoted 2 Managing
  Directors in January — possible succession planning signal.
Tech stack signals: Greenhouse (ATS) visible on job postings. Workday
  HR on one employee LinkedIn profile. No visible people analytics tool.
  Google Workspace. Slack likely (referenced in a job posting).

KEY INSIGHT: A consulting firm of this size is deeply utilization-sensitive.
Attrition of even 2-3 senior consultants can crater a client engagement.
Priya's attendance at our attrition forecasting webinar is a direct signal —
she's either already dealing with attrition issues or is trying to get
ahead of them. The People Analytics Manager hire is a strong secondary
signal that she's being asked to build more sophisticated people reporting.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. STAKEHOLDER PROFILE — PRIYA MEHTA, VP OF PEOPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Role responsibilities (typical for this title at this size):
  - Owns HR strategy, talent acquisition, and retention programs
  - Likely reports to COO or CEO (not CHRO — may be the top HR leader)
  - Manages a team of 4–8 HR professionals
  - Responsible for attrition, engagement, DEI reporting to leadership

What she's likely measured on:
  - Attrition rate (especially senior consultant churn)
  - Time-to-fill for key roles
  - Engagement scores
  - DEI representation metrics
  - Manager effectiveness

What she probably worries about:
  - Losing high performers to competitors (consulting talent market is tight)
  - Leadership asking for data she doesn't have yet
  - Being asked to do more with a lean team
  - Spending too much time pulling reports vs. doing strategic work

What she likely wants from this call:
  - To understand if Leapwise is worth her time to explore further
  - To know if it actually integrates with Workday (she's heard this before
    from other vendors and it never works as advertised)
  - To assess whether she can build a business case without fighting IT

Her likely objections:
  - "We're already using Workday for this" (but Workday analytics ≠ predictive)
  - "We don't have the bandwidth to implement another tool right now"
  - "I'd need to get the CHRO involved before moving forward"
    (use this as an invitation, not a blocker)

LinkedIn signals: Connected with 3 HR analytics-focused LinkedIn accounts
  in the past 6 months. Shared an article on "people analytics maturity models."
  This suggests genuine personal interest in building the function, not just
  procurement compliance.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. PAIN HYPOTHESES (ranked by likelihood)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HYPOTHESIS 1 — ATTRITION RISK IS HIGH AND HARD TO SEE COMING [HIGH]
  Rationale: She attended our attrition forecasting webinar. Consulting
  firms have naturally high turnover (industry avg: 15–20%/year). At 320
  people, losing 5–6 senior consultants unexpectedly can disrupt $3–5M+
  in client revenue. Her current tools (Workday) give her historical
  data, not predictive risk scores. The People Analytics Manager hire
  suggests she's being asked to build a capability she doesn't have yet.

  IMPLICATION IF TRUE: She's either already had an attrition surprise
  that she had to explain to leadership, or she's trying to build
  credibility before one happens.

HYPOTHESIS 2 — LEADERSHIP ASKS FOR PEOPLE DATA SHE CAN'T EASILY PRODUCE [HIGH]
  Rationale: The "People Analytics Manager" job posting includes "partner
  with leadership to build workforce dashboards" in the description — which
  means Priya doesn't currently have those dashboards. Consulting firms are
  data-driven; her CEO and COO are used to operating metrics on the business
  side and increasingly expect the same from HR.

  IMPLICATION IF TRUE: She's spending significant time pulling manual
  reports instead of analyzing them. She may be perceived as a cost center
  rather than a strategic partner.

HYPOTHESIS 3 — DEI REPORTING IS REACTIVE, NOT PROACTIVE [MEDIUM]
  Rationale: Consulting firms face increasing pressure from clients on DEI
  representation at the engagement level ("we want a diverse team on our project").
  If Centerline can't report confidently on representation at the project
  level, they risk losing client business. Priya likely doesn't have this
  visibility currently.

HYPOTHESIS 4 — WORKDAY IS NOT DELIVERING ON ANALYTICS [MEDIUM]
  Rationale: Workday is a core HRIS but its analytics module is widely
  criticized as rigid and difficult to use without heavy IT support.
  If Centerline implemented Workday for core HR functions, they may have
  assumed analytics would come with it — and have since been disappointed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. DISCOVERY QUESTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

NOTE: These are meant to be conversational, not interrogative. Pick 6–8
based on where the conversation goes. Never ask more than one at a time.

FOR HYPOTHESIS 1 (Attrition risk):
  - "You came to our webinar on attrition forecasting — what's top of mind
    for you there? Are you trying to get ahead of something, or already
    dealing with it?"
  - "When someone leaves Centerline unexpectedly, how do you typically
    find out it was coming — and how far in advance?"
  - "In a consulting firm, losing a senior person mid-engagement can be
    really disruptive. How does leadership currently think about that risk?"

FOR HYPOTHESIS 2 (Leadership data demands):
  - "When your CEO or COO asks for workforce data — attrition, headcount,
    or utilization by department — what does that process look like today?"
  - "How much of your week would you say goes to pulling reports versus
    actually acting on the insights?"
  - "You're hiring a People Analytics Manager right now — what's the
    capability you're trying to build that you don't have today?"

FOR HYPOTHESIS 3 (DEI visibility):
  - "Do you have visibility into DEI representation at the project or
    engagement level, not just company-wide? I'm curious how that's
    tracked today."
  - "Are clients asking Centerline about representation on their teams?
    How are you responding to those requests?"

FOR HYPOTHESIS 4 (Workday analytics gaps):
  - "How are you using Workday for people analytics today — and what's
    it not giving you that you wish it would?"
  - "When you first implemented Workday, what did you expect from the
    analytics side — and how has that matched up to reality?"

SITUATION QUESTIONS (open early in the call):
  - "Help me understand how the People team is structured today — how big
    is your team and what are you each focused on?"
  - "When you think about the People function at Centerline, what are
    the 1–2 things leadership is watching most closely right now?"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. CALL FLOW — 30-MINUTE STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[0:00–3:00] OPEN — Rapport and agenda
  - Brief genuine connection (reference her webinar attendance, something
    from her LinkedIn if it fits naturally)
  - Set the agenda: "I'd love to spend most of our time understanding
    what's going on at Centerline before I tell you anything about Leapwise.
    Sound good?"
  - Confirm time and who's on the call

[3:00–8:00] SITUATION — Company and team context
  - "Help me understand how the People function is set up at Centerline today."
  - "What's your team focused on right now — what are the big priorities
    for People in [year]?"
  Goal: Build a map of her world. Listen for signals that confirm or
  disconfirm your hypotheses. Take notes on exact language she uses.

[8:00–20:00] DISCOVERY — Pain and implication
  - Start with Hypothesis 1 (attrition) since that was her webinar entry point
  - Follow the pain wherever it leads — don't force the script
  - Listen for: budget signals, timeline signals, other stakeholders, IT
    involvement, current tools, and what's driven urgency
  - If she confirms pain: ask implication questions
    ("What happens if you don't have better visibility into attrition
    risk going into next year?")

[20:00–25:00] MUTUAL FIT CHECK
  - Share 1–2 sentences on what Leapwise does, framed in her language:
    "Based on what you've described, the teams we work with most like
    Centerline are typically dealing with [echo her words]. Leapwise
    helps by [specific capability]. Does that map to what you're
    trying to solve?"
  - Don't pitch — test resonance

[25:00–30:00] NEXT STEP
  - If qualified: "It sounds like there's enough here to go deeper.
    I'd love to show you how [specific capability she mentioned] works
    in practice. Would it make sense to get your CHRO on that call —
    or would you want to see it first?"
  - If not qualified: Thank her for her time, offer a relevant resource,
    keep the door open

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. MUST-ANSWER QUESTIONS FOR QUALIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

By the end of the call, you need to know:
  [ ] Is there a real, specific pain — not just theoretical interest?
  [ ] Is there a timeline or trigger event creating urgency?
  [ ] Is Priya the economic buyer, or does the CHRO (or COO) own budget?
  [ ] Is there a budget — is this in the current fiscal plan?
  [ ] What does the decision process look like — who else is involved?
  [ ] Is IT involved in tool approvals? Does Workday create integration
      requirements we need to address?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. LANDMINES TO AVOID
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  - Don't lead with the product demo — she wants to be heard first
  - Don't mention Workday negatively by name — she may be emotionally
    invested in the implementation she owns
  - Don't oversell the Workday integration before you've confirmed the
    technical specs — "seamless integration" claims that fall apart in
    IT review kill deals
  - Don't skip the CHRO question — if she's not the economic buyer,
    every subsequent step is at risk without multi-threading
```

**Quick reference card variant:**
```
PRIYA MEHTA — CENTERLINE GROUP — QUICK CARD

TOP HYPOTHESIS: Attrition is high, hard to predict, and disruptive
  (webinar signal + consulting industry dynamics)

ENTRY QUESTION: "What's top of mind for you on attrition — are you
  trying to get ahead of something, or already dealing with it?"

WATCH FOR: CHRO as economic buyer | IT involvement | Workday loyalty

NEXT STEP TARGET: Demo with Priya + CHRO in the same room

RED FLAGS: No urgency | No budget line | IT controls all tool decisions
```

**Next steps:**
- Review the call flow and mark the 3 questions you'll definitely ask and the 2 you'll hold in reserve
- Check Centerline's LinkedIn page the morning of the call for any news you missed (leadership announcements, new job postings)
- Set up a 5-minute CRM update block immediately after the call to log pain language in Priya's exact words
- If the call goes well, draft the multi-threading email to the CHRO before the end of the day — strike while Priya is warm
- Brief your SE on the Workday integration question so they're ready for the demo
