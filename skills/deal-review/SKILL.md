---
name: deal-review
description: MEDDIC-style deal review memo — metrics, economic buyer, decision criteria, process, identify pain, champion
license: MIT
triggers: ["deal review", "MEDDIC", "deal analysis", "pipeline review", "opportunity review", "sales review"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Deal Review

## What this skill does

Produces a structured deal review memo using the MEDDIC framework — the gold standard for enterprise deal qualification. For each of the six MEDDIC dimensions (Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion), the memo documents what is known, what is unknown, scores the dimension on a 1-5 scale, and prescribes specific next actions to advance the deal. The output gives sales managers and reps a shared language for pipeline reviews and a clear action plan for every at-risk deal.

1. **MEDDIC scoring** — rates each dimension 1-5 with a brief rationale, giving the deal a composite health score
2. **Known vs. unknown mapping** — explicitly surfaces what the rep doesn't know, which is often more valuable than what they do
3. **Gap analysis** — identifies the 1-2 MEDDIC dimensions most likely to cause the deal to stall or die
4. **Next action prescription** — specific, time-bound actions to close each gap, assigned to a person
5. **Deal risk summary** — a one-paragraph candid assessment of whether this deal is real, and when it will close

## How to invoke

```
/deal-review
```

Claude will ask:
- What is the deal — company name, deal size, product or service being sold, and expected close date?
- Walk me through each MEDDIC dimension: what do you know about Metrics, Economic Buyer, Decision Criteria, Decision Process, Pain, and Champion?
- What has happened in the deal so far (key meetings, proposals sent, stakeholders engaged, obstacles encountered)?
- What is the biggest thing you're worried about with this deal right now?
- What stage is this deal in your CRM, and what does the next stage require?

## Workflow steps

### Step 1 — Deal Context Summary
Build a one-paragraph deal snapshot: who the prospect is, what you're selling, the deal size, and where it stands today. This gives the full review a shared baseline.

### Step 2 — MEDDIC Dimension Analysis
For each of the six MEDDIC dimensions, document: what is confirmed (with evidence), what is assumed, what is unknown, and a 1-5 score. Flag any dimension scoring below 3 as a deal risk.

### Step 3 — Gap and Risk Identification
Identify the 1-2 dimensions most likely to kill the deal if left unaddressed. Explain why each is a risk in the specific context of this deal — not generically.

### Step 4 — Action Plan
Write specific, time-bound next actions for each gap, assigned to the rep, manager, or a named stakeholder. Include suggested language for outreach where helpful.

## Example outputs

### Example: $250K ARR Enterprise Deal Review

**Input:** Deal: Thornfield Logistics, $250K ARR for Leapwise HR analytics platform (enterprise tier). Contact: Marcus Webb, VP of HR. We've had 3 meetings including a demo. We sent a proposal 2 weeks ago. No response since. Close date in CRM: end of quarter (45 days out). I'm worried we haven't met the CFO and Marcus keeps saying "we're still evaluating." Biggest unknown: who else is in the decision.

**Deal review memo draft:**
```
DEAL REVIEW MEMO
Account: Thornfield Logistics
Deal Size: $250,000 ARR
Product: Leapwise Enterprise
CRM Stage: Proposal Sent
Expected Close: [End of Quarter — approx. 45 days]
Reviewed by: [Rep Name]
Review date: [Date]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DEAL SNAPSHOT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Thornfield Logistics is a mid-sized logistics and freight management
company (~1,800 employees) that came inbound after our Q3 LinkedIn
campaign on workforce analytics for operations-heavy industries.
We've run three meetings with Marcus Webb (VP of HR) including a full
product demo. A $250K ARR proposal was sent 14 days ago. No response
since. Marcus is responsive but non-committal — his "still evaluating"
language suggests either genuine multi-vendor comparison, internal
alignment issues, or a decision process that extends well beyond him.
The CFO has not been introduced. End-of-quarter close is optimistic
given the current engagement pattern.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MEDDIC SCORECARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

M — METRICS                                                    SCORE: 3/5
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

What we know (confirmed):
  - Marcus mentioned "we lose about 18% of our hourly workforce annually"
    and called it a "significant recruiting cost" in Meeting 1
  - Thornfield runs 24/7 operations; shift-level workforce planning
    is critical to uptime
  - HR team currently pulls workforce reports manually in Excel

What we're assuming:
  - 18% attrition on ~1,800 employees = ~324 departures/year
  - Estimated replacement cost at $8–12K per hourly employee = $2.6–3.9M/year
  - A 20% reduction in attrition = $520K–780K annual savings

What we don't know:
  - Has Marcus quantified this internally? Does he have a number that
    leadership has agreed represents the cost of attrition?
  - Is there a formal ROI requirement for this purchase (many $250K+
    enterprise deals require documented business case)
  - What does leadership define as "success" for this platform — is it
    tied to a specific attrition reduction target or a reporting efficiency goal?

Score rationale: We have the raw numbers but we haven't closed the loop
on whether Marcus has translated them into a business case his leadership
team has accepted. This is a meaningful gap for a $250K deal.

NEXT ACTION (Metrics):
  Before the next call, build a one-page ROI model using the 18%
  attrition figure. In the next conversation, ask: "We put together
  a quick model based on the numbers you shared — can I walk you
  through it? I want to make sure it reflects how you're thinking
  about the business case internally." Goal: confirm or correct our
  assumptions and surface whether a formal ROI document is required.

---

E — ECONOMIC BUYER                                             SCORE: 1/5
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

What we know (confirmed):
  - Marcus Webb is VP of HR — he is the champion and likely budget
    requestor, but almost certainly not the economic buyer at $250K
  - Marcus has not mentioned the CFO, CEO, or a budget committee

What we're assuming:
  - At a ~1,800 person logistics company, a $250K software purchase
    likely requires CFO approval at minimum, possibly CEO or an IT
    steering committee
  - Marcus may not have full visibility into the approval process himself

What we don't know:
  - Who owns the budget for HR technology at Thornfield?
  - Has Marcus had any internal conversations about this purchase with
    finance or leadership?
  - Is there a formal approval process — budget committee, IT review,
    legal review?
  - Does the CFO know this evaluation is happening?

Score rationale: We have not identified or accessed the economic buyer.
This is the single highest-risk gap in this deal. A $250K proposal
sent to someone who cannot approve it is a proposal that will die in
someone's inbox. This must be addressed before the close date is credible.

NEXT ACTION (Economic Buyer):
  In the next call with Marcus, ask directly:
  "Marcus, for a purchase at this level, who else typically needs to
  be involved in the decision at Thornfield? I want to make sure I'm
  giving you the right materials for every conversation that needs to
  happen internally."

  If he names the CFO: ask for an introduction. If he hesitates, offer
  a CFO-specific one-pager ("a lot of CFOs have a standard set of
  questions about HR tech — I can put together something specifically
  for their lens so you don't have to translate everything yourself").

  OWNER: Rep | DEADLINE: Next call with Marcus (schedule within 5 days)

---

D — DECISION CRITERIA                                         SCORE: 2/5
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

What we know (confirmed):
  - Marcus said "Workday integration is non-negotiable" in Meeting 2
  - He mentioned "ease of use" as important — his team is not technical
  - He asked about our mobile interface (shift workers use phones)

What we're assuming:
  - Price will be a criterion — but we don't know if they have a budget
    ceiling below $250K
  - IT will have security and data governance requirements (standard for
    logistics companies handling employee PII)
  - Security/SOC2 compliance will likely be required

What we don't know:
  - Is there a formal RFP or evaluation scorecard?
  - Are we competing against specific other vendors — and if so, which ones?
  - What does IT's sign-off process look like?
  - Is there a criterion we're not meeting that's creating the silence
    since the proposal?

Score rationale: We know the functional requirements but not the formal
decision criteria. "Still evaluating" may mean we're in a multi-vendor
bake-off with criteria we haven't mapped our proposal to.

NEXT ACTION (Decision Criteria):
  "Marcus, you mentioned you're still evaluating — can you help me
  understand what the evaluation looks like? Is there a scorecard or
  specific criteria the team is working through? I want to make sure
  our proposal addresses everything that matters to you."

  If they're in a competitive evaluation: ask what the timeline and
  format looks like. Request the opportunity to address any gaps before
  a decision is made.

  Also: Loop in a solutions engineer to proactively send the Workday
  integration technical spec + SOC2 certification — don't wait to be asked.

---

D — DECISION PROCESS                                          SCORE: 2/5
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

What we know (confirmed):
  - Marcus is the primary point of contact and day-to-day evaluator
  - Proposal has been with him for 14 days with no response

What we're assuming:
  - There is an internal evaluation process happening that Marcus is
    navigating — possibly involving IT, Legal, and Finance
  - The silence may indicate internal friction, not disinterest

What we don't know:
  - What steps need to happen between "proposal received" and "contract signed"?
  - Who needs to approve? In what order?
  - Is there a procurement or legal review process?
  - What does Thornfield's standard vendor onboarding process look like?
  - Is there a contract template they use, or will they mark up ours?

Score rationale: We don't know the buying process. This is a structural
risk: we're selling, but we don't know what we're selling into. The 45-day
close target is not credible without this information.

NEXT ACTION (Decision Process):
  "Marcus — I want to make sure I'm being as helpful as possible in your
  evaluation. Can you walk me through what the next steps look like
  internally from here? I want to make sure nothing falls through the
  cracks on your side."

  Goal: Get a verbal process map. Even a rough one. "IT needs to review,
  then it goes to finance, then our CPO signs off" is enough to build a
  realistic close plan.

---

I — IDENTIFY PAIN                                             SCORE: 4/5
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

What we know (confirmed):
  - 18% annual attrition explicitly called out as "significant cost"
  - Manual Excel reporting consuming significant team time
  - HR team cannot currently predict attrition risk — they find out
    when someone gives notice
  - Marcus specifically mentioned a Q4 incident where losing 3 shift
    supervisors simultaneously disrupted two major client accounts

What we're assuming:
  - The Q4 incident created visible pain at the leadership level —
    this may be the triggering event for this evaluation

What we don't know:
  - Is there a formal deadline or triggering event creating urgency?
  - Has leadership set a goal around attrition reduction that HR is
    accountable for?
  - Is Marcus solving for a specific event (upcoming audit, board review,
    new CHRO coming in) or is this a longer-horizon initiative?

Score rationale: Pain is the strongest dimension of this deal. Marcus
has been specific and emotional about it. The Q4 incident is a compelling
anchor. This dimension is well-positioned.

NEXT ACTION (Pain):
  Anchor the ROI model to the Q4 incident specifically. In the next
  conversation: "When you mentioned the Q4 situation with the three
  supervisors — what would it have meant for Thornfield if you'd had
  a 60-day warning that those three were flight risks?"

---

C — CHAMPION                                                  SCORE: 2/5
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

What we know (confirmed):
  - Marcus is engaged, knowledgeable about the product, and has made
    time for three meetings
  - He seems personally invested in solving the attrition problem

What we're assuming:
  - Marcus is advocating for this purchase internally
  - He has some influence in the decision

What we don't know:
  - Has Marcus actively sponsored this internally — or is he an evaluator
    who passes findings up?
  - Does Marcus have credibility with the CFO and CPO who will likely sign?
  - Has Marcus tested internal appetite for this purchase?
  - What happens to Marcus personally if this deal happens — or doesn't?

Score rationale: Marcus looks like a champion but may be an evaluator.
A true champion sells on your behalf when you're not in the room. We
don't know if Marcus does that. The 14-day silence after the proposal
is the tell — a strong champion would have come back with questions,
pushed for a CFO meeting, or set a next step. The silence suggests
he may be waiting for direction rather than driving it.

NEXT ACTION (Champion):
  Test his sponsorship directly. On the next call:
  "Marcus, I want to make sure I'm setting you up to have the right
  conversations internally. Who else at Thornfield do you think I should
  make sure has what they need from me?"

  Also: offer to be his internal advocate. "I can put together a one-page
  summary you can share with your leadership team — framed for their
  questions, not the technical details. Would that help?"

  If Marcus doesn't want to facilitate access to the economic buyer after
  you've asked twice, this deal is likely stalled. Escalate to your manager.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MEDDIC SCORECARD SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

| Dimension        | Score | Risk Level |
|------------------|-------|------------|
| Metrics          | 3/5   | Medium     |
| Economic Buyer   | 1/5   | CRITICAL   |
| Decision Criteria| 2/5   | High       |
| Decision Process | 2/5   | High       |
| Identify Pain    | 4/5   | Low        |
| Champion         | 2/5   | High       |
| ─────────────────|───────|────────────|
| COMPOSITE SCORE  | 14/30 | AT RISK    |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DEAL RISK ASSESSMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This deal has real pain and a credible problem to solve. But it is
not a Q[X] close at its current state. The Economic Buyer has not been
identified or accessed, the Decision Process is a black box, and the
Champion's sponsorship is unproven. A $250K deal with a 14-day
proposal silence and no visibility into who else is in the decision is
a deal at significant risk of going dark or losing to a competitor we
didn't know was in the evaluation.

The deal is real. The close date is not.

Recommended action: Treat the next conversation with Marcus as the
most important of the deal. The goal is not to push for a close — it
is to map the buying process and get introduced to the economic buyer.
If Marcus won't facilitate that introduction after a direct ask, this
deal should be moved to "At Risk" in the CRM and a manager should
assess whether to escalate or redirect rep time.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRIORITY ACTION PLAN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ACTION 1 — Re-engage Marcus (URGENT)
  Owner: Rep
  Deadline: This week
  Task: Send a short, direct email breaking the silence.
  Suggested copy:
    "Marcus — wanted to follow up on the proposal. I have a few questions
    I'd like to walk through with you, and I want to make sure you have
    everything you need internally. Do you have 20 minutes this week?
    I can work around your schedule."

ACTION 2 — Map the decision process
  Owner: Rep
  Deadline: Next call with Marcus
  Task: Ask directly who needs to be involved and what the process looks
  like from proposal to signature. Get a rough timeline.

ACTION 3 — Identify and access the economic buyer
  Owner: Rep + Manager
  Deadline: Within 2 weeks
  Task: Ask Marcus for an introduction to the CFO or whoever owns the
  budget decision. Offer to bring the VP of Sales or a senior relationship
  if it helps facilitate. Do not leave this call without a plan.

ACTION 4 — Build and send the ROI model
  Owner: Rep
  Deadline: Before the next Marcus call
  Task: Build a one-page ROI model anchored to Thornfield's 18% attrition
  figure and the Q4 supervisor incident. Make it CFO-ready.

ACTION 5 — Send SOC2 and Workday integration specs proactively
  Owner: Solutions Engineer
  Deadline: This week
  Task: Don't wait for IT to ask. Send the technical package now.
  If they're in an evaluation, this differentiates us and reduces friction.
```

**Pipeline review one-liner variant:**
```
THORNFIELD DEAL SUMMARY — PIPELINE REVIEW

$250K ARR | Stage: Proposal Sent | Close: EoQ (at risk)
MEDDIC Score: 14/30 | Status: AT RISK

Critical gaps: No economic buyer access (1/5), decision process unknown (2/5),
champion unproven (2/5). Pain is real (4/5). Deal is real; close date is not.

Priority: Re-engage Marcus this week. Get economic buyer intro or mark at-risk.
Owner: [Rep Name] | Manager notified: Yes/No
```

**Next steps:**
- Schedule the Marcus re-engagement email today — 14 days of silence is long enough
- Bring this memo to the next pipeline review with your manager and agree on a "trigger to walk away" criterion (e.g., if no economic buyer access after two direct asks)
- Build the ROI model before the next call using the attrition numbers Marcus gave you — it's the most concrete conversation-opener you have
- Update the CRM opportunity record with the MEDDIC scores so your manager has visibility without having to ask
- Set a deal review checkpoint in 10 days to assess whether the gaps are closing or widening
