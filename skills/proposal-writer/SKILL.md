---
name: proposal-writer
description: Write a professional sales proposal — executive summary, solution fit, pricing, timeline, and next steps
license: MIT
triggers: ["sales proposal", "proposal writer", "write proposal", "business proposal", "sales doc", "proposal template"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Proposal Writer

## What this skill does

Produces a professional, client-ready sales proposal that moves a qualified prospect toward a decision. Unlike a generic template, this proposal is tailored to the specific pain points, language, and priorities surfaced during discovery — so the client reads it and feels heard, not sold to. The output covers all essential proposal sections: executive summary, problem statement in the client's own language, proposed solution with scope, pricing table with clear deliverables, implementation timeline, risk mitigation, and a specific call to action. Formatted for PDF export or presentation.

1. **Executive summary** — leads with the client's problem and outcome, not your company's credentials
2. **Problem statement** — reflects the specific pain points and language from discovery, building immediate resonance
3. **Proposed solution and scope** — defines exactly what is included (and what isn't) to prevent scope disputes later
4. **Pricing table** — clear, tiered or itemized pricing with deliverables tied to each line
5. **Implementation timeline and next steps** — a phased plan that makes "yes" feel achievable and low-risk

## How to invoke

```
/proposal-writer
```

Claude will ask:
- Who is the client (company name, contact name and title, industry)?
- What specific pain points and goals did they articulate in discovery (use their words where possible)?
- What is the proposed solution — what will you deliver, over what timeline, and at what price?
- What is the client's decision timeline and who are the stakeholders who will sign off?
- Are there any known risks, objections, or sensitivities to address in the proposal?

## Workflow steps

### Step 1 — Discovery Synthesis
Translate the discovery notes into a crisp problem statement that uses the client's own language and frames the cost of inaction. This section should feel like the proposal was written by someone who truly understood their situation — not a template with their name swapped in.

### Step 2 — Solution Design and Scope Definition
Define the proposed engagement clearly: what is included, what the deliverables are, what success looks like, and what is explicitly out of scope. Specificity here protects both parties and builds trust.

### Step 3 — Pricing and Value Framing
Build the pricing table with deliverables tied to each line item. If offering tiers, make the middle tier the clear recommendation. Frame the investment in terms of the client's stated outcome, not just cost.

### Step 4 — Timeline, Risk, and CTA
Map the engagement to a phased timeline. Address any known risks or objections proactively. Write a specific, confident call to action that tells the client exactly what to do next and by when.

## Example outputs

### Example: 6-Month Strategy Consulting Engagement Proposal

**Input:** Client: Hartwell Financial Group (mid-size regional bank, ~$2B AUM), Contact: David Lim, Chief Operating Officer. Pain points from discovery: Operations team is spending 40+ hours/week on manual reporting; two recent regulatory audits flagged process documentation gaps; 2026 budget planning requires COO to justify headcount growth to the board. Our solution: 6-month operational efficiency engagement — process mapping, reporting automation design, and a compliance documentation framework. Price: $180,000 all-in. Decision timeline: They want to start by Q2; CFO and CEO also need to sign off. Known risk: David is concerned about consultant disruption to his team's day-to-day.

**Proposal draft:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROPOSAL FOR OPERATIONAL EFFICIENCY ENGAGEMENT
Prepared for: Hartwell Financial Group
Prepared by: [Your Firm Name]
Contact: [Your Name] | [email] | [phone]
Date: [Date]
Proposal valid through: [Date + 30 days]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EXECUTIVE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hartwell Financial Group's operations function has reached an inflection
point. Your team is effective — but operating at a level of manual effort
that is no longer sustainable as the organization grows. Forty-plus hours
per week of manual reporting is not an operations problem; it is a
strategic constraint that limits what your team can focus on and what
leadership can see in real time.

At the same time, two consecutive audit findings related to process
documentation have created an accountability gap that, if unaddressed,
carries increasing regulatory and reputational risk as you head into 2026.

This proposal outlines a 6-month engagement designed to solve both
problems at once: reducing the reporting burden on your team through
automation-ready process design, and building the compliance documentation
framework that gives regulators — and your board — confidence in how
Hartwell operates.

The result: an operations function that can support a larger organization
without proportional headcount growth, and a documentation posture that
turns your next audit into a routine exercise rather than a remediation event.

Investment: $180,000 | Timeline: 6 months | Start date: [Proposed Q2 date]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
THE SITUATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Based on our conversations, Hartwell is facing three interconnected challenges:

1. REPORTING OVERHEAD IS CROWDING OUT STRATEGIC WORK
   Your operations team currently spends an estimated 40+ hours per week
   generating reports that leadership needs to make decisions. This is
   time that cannot be spent on process improvement, vendor management,
   or the strategic initiatives that will support Hartwell's growth
   through 2026 and beyond. The problem is not effort — it's architecture.
   Your reporting infrastructure was built for a smaller organization and
   hasn't scaled with it.

2. AUDIT FINDINGS SIGNAL A DOCUMENTATION GAP
   Two recent regulatory audits flagged gaps in process documentation.
   These findings are common in organizations that have grown faster than
   their documentation practices — but they carry compounding risk. Regulators
   who find documentation gaps in one area will look harder in others.
   More practically, undocumented processes create key-person dependencies
   that become critical vulnerabilities when team members transition.

3. BOARD SCRUTINY ON HEADCOUNT REQUIRES OPERATIONAL PROOF
   As you build the case for headcount growth in the 2026 budget cycle,
   you need to demonstrate that existing capacity is optimized — not just
   that the team is busy. A modernized operations function with clear
   throughput metrics makes that case credibly.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROPOSED ENGAGEMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PHASE 1 — DISCOVERY AND PROCESS MAPPING (Months 1–2)
  Objective: Build a complete, documented map of current operations
  processes and identify the highest-impact automation and documentation
  opportunities.

  Deliverables:
  ✓ Current-state process map across all core operations functions
    (reporting, compliance, vendor management, and client operations)
  ✓ Prioritized opportunity matrix: ranked list of automation targets
    by effort vs. impact
  ✓ Documentation gap analysis aligned to regulatory requirements
  ✓ Stakeholder interview synthesis report (Operations team + key
    department heads)
  ✓ Executive readout: findings presentation for COO and leadership team

  What this is NOT: We will not recommend specific software tools in
  Phase 1. We document the process first; technology decisions come second.

PHASE 2 — REPORTING REDESIGN AND AUTOMATION BLUEPRINT (Months 3–4)
  Objective: Redesign the reporting architecture to eliminate manual work
  and produce an automation blueprint your team can implement — with or
  without additional technology investment.

  Deliverables:
  ✓ Redesigned reporting framework: standardized templates, data sources,
    and delivery schedule for all 12 recurring reports
  ✓ Automation blueprint: step-by-step specifications for automating
    top 5 highest-burden reports (tool-agnostic; implementable in
    existing tools or with targeted additions)
  ✓ "Quick wins" package: changes implementable in 30 days or less,
    without technology changes, that reduce reporting burden immediately
  ✓ Estimated time savings model: projected hours saved per week,
    by report and by team member role

PHASE 3 — COMPLIANCE DOCUMENTATION FRAMEWORK (Months 4–5)
  Objective: Build and implement a compliance-ready process documentation
  framework that withstands regulatory scrutiny and reduces key-person risk.

  Deliverables:
  ✓ Documentation standard: template, format, and update protocol for
    all critical operations processes
  ✓ Priority documentation set: fully documented procedures for the
    15 processes most likely to be reviewed in a regulatory audit
  ✓ Ownership and maintenance model: clear accountability for keeping
    documentation current as processes evolve
  ✓ Regulatory readiness checklist: a self-assessment tool your team
    can use before each audit cycle

PHASE 4 — IMPLEMENTATION SUPPORT AND KNOWLEDGE TRANSFER (Month 6)
  Objective: Ensure changes are embedded in the team's day-to-day
  and that Hartwell doesn't need us to maintain them.

  Deliverables:
  ✓ Implementation support: up to 40 hours of implementation assistance
    as your team executes on the automation blueprint
  ✓ Training sessions: 3 x 90-minute working sessions with operations
    team on new processes and documentation standards
  ✓ Final engagement report: documented outcomes, open items, and
    recommended next steps for the 12 months following engagement close
  ✓ 30-day post-engagement check-in: one working session at Day 30
    to address questions and confirm adoption

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INVESTMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

| Phase                                       | Investment  |
|---------------------------------------------|-------------|
| Phase 1 — Discovery and Process Mapping     | $45,000     |
| Phase 2 — Reporting Redesign and Blueprint  | $52,000     |
| Phase 3 — Compliance Documentation          | $48,000     |
| Phase 4 — Implementation Support + Transfer | $35,000     |
| ─────────────────────────────────────────── | ─────────── |
| TOTAL ENGAGEMENT                            | $180,000    |

Payment schedule:
  25% upon contract signature ($45,000)
  25% at Phase 2 kick-off ($45,000)
  25% at Phase 3 kick-off ($45,000)
  25% at final report delivery ($45,000)

OPTIONAL ADD-ONS (available at engagement close):
  Extended implementation support: $8,500/month (minimum 3 months)
  Technology selection advisory: $15,000 flat (8-week sprint)
  Quarterly process review retainer: $6,000/quarter

INVESTMENT CONTEXT:
  Your team currently spends an estimated 40 hours/week on manual
  reporting. At a fully-loaded operations team cost of approximately
  $85/hour, that is $3,400/week, or $176,800/year, of capacity
  dedicated to report production. A conservative 50% reduction in
  that burden — achievable through Phase 2 alone — recovers the
  full engagement investment in under 24 months, with compounding
  benefit each year thereafter.

  The compliance risk reduction is harder to quantify but carries
  its own weight: regulatory remediation costs for a bank of Hartwell's
  size typically run $150,000–$500,000+ per enforcement action, exclusive
  of reputational impact.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IMPLEMENTATION TIMELINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Month 1:   Contract signed; kick-off meeting; stakeholder interviews begin
Month 2:   Process mapping complete; opportunity matrix delivered; Phase 1 readout
Month 3:   Reporting redesign workshops; quick wins implemented
Month 4:   Automation blueprint delivered; Phase 3 documentation work begins
Month 5:   Priority documentation set complete; framework adopted by team
Month 6:   Implementation support; training sessions; final report delivered
Month 7:   30-day post-engagement check-in

ENGAGEMENT TEAM:
  Lead consultant: [Name] — [brief bio, 1 sentence]
  Process and documentation specialist: [Name] — [brief bio, 1 sentence]
  You will have direct access to both team members throughout the engagement.
  We do not staff engagements with junior associates without your knowledge.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ADDRESSING YOUR CONCERNS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"I don't want this to disrupt my team's day-to-day."
  We've heard this — and we've designed the engagement accordingly.
  Stakeholder interviews are structured as 60-minute sessions, scheduled
  around your team's priorities. We do the documentation work; your team
  reviews and approves. We do not require team members to attend working
  sessions they aren't directly involved in. Our job is to reduce burden,
  not create more of it.

"How do we know the recommendations will actually be implemented?"
  Phase 4 is specifically designed for this. We stay engaged through
  implementation — up to 40 hours of implementation support plus three
  working sessions to build adoption. And because we document everything,
  Hartwell owns the playbook whether we're involved or not.

"We've had consultants before who delivered a report and disappeared."
  The final deliverable is not a report — it is an implemented framework
  and a team that knows how to use it. We measure success by your team's
  ability to operate independently at engagement close.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHY [YOUR FIRM]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[2-3 sentences on relevant experience: financial services operations,
regulatory compliance work, or specific client outcomes. Keep it brief
and specific. Avoid superlatives.]

References available upon request from two financial services clients
of similar size who completed similar engagements.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NEXT STEPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To move forward:

1. REVIEW THIS PROPOSAL with your CFO and CEO. We recommend a brief
   internal alignment meeting — we're happy to join by video if it's
   useful to have us there to answer questions.

2. LET US KNOW YOUR QUESTIONS. Reply to this email or call [phone].
   We will respond within one business day.

3. SIGN AND RETURN the attached engagement letter. Once signed, we
   will schedule the kick-off meeting and begin Phase 1 within 10
   business days.

This proposal is valid through [Date + 30 days].

We are proposing a Q2 start. If you want to begin on [specific start
date], we need the signed engagement letter by [date - 2 weeks] to
guarantee that timeline.

We're looking forward to working with Hartwell.

[Your name]
[Title]
[Phone]
[Email]
```

**Executive summary only (condensed variant):**
```
EXECUTIVE SUMMARY — HARTWELL FINANCIAL GROUP PROPOSAL

The problem: 40+ hours/week in manual reporting, two audit findings,
and a board that needs to see operational proof before approving headcount.

The solution: A 6-month engagement that maps your processes, redesigns
your reporting architecture, and builds a compliance documentation
framework that holds up under regulatory scrutiny.

The outcome: An operations function that scales without proportional
headcount growth — and an audit posture that turns the next review
into a routine exercise.

Investment: $180,000 | Start: Q2 [Year] | Timeline: 6 months
```

**Next steps:**
- Review the pricing and scope sections with your delivery lead before sending — confirm all deliverables are achievable within the timeline
- Add 1-2 specific client references or brief case study snippets to the "Why [Your Firm]" section
- Send the proposal as a PDF with a short, personal email — not as an attachment with no context
- Follow up in 3 business days if you haven't heard back; reference a specific section ("I wanted to make sure the implementation timeline in Section 4 made sense given David's concern about team disruption")
- Prepare a version of the executive summary as a leave-behind slide for the CFO/CEO meeting you're not in the room for
