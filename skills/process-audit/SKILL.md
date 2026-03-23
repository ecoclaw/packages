---
name: process-audit
description: Audit a business process to identify bottlenecks, automation opportunities, and effort/impact improvements
license: MIT
triggers: ["process audit", "process review", "workflow audit", "efficiency review", "operations audit", "bottleneck analysis"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Process Audit

## What this skill does

Analyzes a described business process and produces a structured audit report that identifies where time is wasted, where errors are introduced, and where automation or redesign would deliver the highest return. The output gives operations and leadership teams a prioritized action list, not just a list of problems.

1. **Process map summary** — a narrative or table representation of the current-state process with actors, steps, systems, and handoffs
2. **Bottleneck identification** — the steps where work stalls, errors occur, or wait time accumulates, with root cause hypotheses
3. **Automation opportunity analysis** — specific steps that are candidates for automation, with tool suggestions and feasibility ratings
4. **Effort/impact improvement matrix** — a prioritized grid of improvements by implementation effort vs. expected impact
5. **Quick wins vs. strategic initiatives** — separates changes that can happen in days from those requiring investment and planning

## How to invoke

```
/process-audit
```

Claude will ask:
- Describe the process, step by step, as it currently works. Who does what, using what systems?
- What is the typical volume and frequency? (e.g., 200 invoices/month, weekly cycle)
- Where do you already know there are problems, delays, or frustrations?
- What tools and systems are currently in use?
- What outcomes are you optimizing for? (speed, accuracy, cost, compliance, employee satisfaction)

## Workflow steps

### Step 1 — Process Mapping
Claude reconstructs the process as described into a structured current-state map showing: sequence of steps, responsible role for each step, systems used, typical time per step, and handoff points between teams or systems.

### Step 2 — Bottleneck and Waste Analysis
Claude applies lean process principles to identify: wait time between steps, rework loops caused by errors, manual re-entry of data across systems, approval chains that create unnecessary delay, and steps with high variability or exception rates.

### Step 3 — Automation Opportunity Scan
Claude evaluates each step against automation criteria: Is it rule-based? Is it high-volume? Is it repetitive? Is data already in a system? Viable automation candidates are flagged with suggested tools (RPA, workflow automation, API integration, AI-assist).

### Step 4 — Prioritized Recommendation Matrix
Claude produces an effort/impact matrix with all identified improvements categorized into four quadrants: Quick Wins (low effort, high impact), Strategic Projects (high effort, high impact), Fill-Ins (low effort, low impact), and Avoid (high effort, low impact).

## Example outputs

### Example: Monthly Invoicing and Collections Process Audit

**Input:** 200 invoices/month. Process: Sales closes deal → Account Manager creates invoice manually in QuickBooks → emails PDF to client → waits for payment → AR Specialist checks bank weekly → chases overdue accounts by phone and email. Average DSO is 48 days vs. industry benchmark of 30. Known problems: invoices sent late, wrong amounts, and clients say they never received them.

**Process audit report:**
```
PROCESS AUDIT REPORT
Process:    Monthly Invoicing and Collections
Department: Finance / Accounts Receivable
Audited by: [Operations Lead]
Date:       March 21, 2026
Volume:     ~200 invoices/month | ~$1.8M monthly billings

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1 — CURRENT STATE PROCESS MAP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Step  Actor               Action                          System    Est. Time
────────────────────────────────────────────────────────────────────────────
1     Sales Rep           Marks deal "Closed Won"         Salesforce  < 1 min
2     — HANDOFF WAIT —   (No trigger to AM; AM finds      —         1–5 days
                          out at end-of-month meeting)
3     Account Manager     Pulls contract terms from email  Email/Drive  15 min
4     Account Manager     Manually keys invoice in QB      QuickBooks   20 min
5     Account Manager     Emails PDF invoice to client     Email        5 min
6     — WAIT —           Client receives and processes    —          14–30 days
7     AR Specialist       Reviews bank statement weekly    Bank portal  2 hrs/wk
8     AR Specialist       Cross-references to QB           QuickBooks   1 hr/wk
9     AR Specialist       Identifies overdue invoices      Manual list  30 min/wk
10    AR Specialist       Calls/emails overdue clients     Phone/Email  3–8 hrs/wk
11    Client pays         Payment received                 ACH/Check    varies
12    AR Specialist       Records payment in QB            QuickBooks   5 min/inv

TOTAL ESTIMATED CYCLE TIME: 18–55 days (median ~32 days; target: ≤30)
CURRENT DSO: 48 days (benchmark: 30 days)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2 — BOTTLENECK AND WASTE ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BOTTLENECK 1 — HANDOFF GAP (Steps 1→2→3) ⚠ HIGH SEVERITY
  Problem: No automated trigger exists when a deal closes in Salesforce.
  Account Managers learn of new invoices to generate via end-of-month
  meetings or ad hoc communication, creating a 1–5 day lag before
  invoicing even begins.
  Root cause: Salesforce and QuickBooks are not integrated.
  Impact: Every day of lag is a day added to DSO. At $1.8M/month, each
  additional day of DSO represents ~$60,000 in delayed cash flow.

BOTTLENECK 2 — MANUAL INVOICE CREATION (Step 4) ⚠ HIGH SEVERITY
  Problem: Account Managers manually re-key contract terms, client
  details, and line items from email/Drive into QuickBooks. This step
  produces the majority of invoicing errors (wrong amounts, wrong
  addresses, missing line items).
  Root cause: No integration between CRM deal data and invoicing system.
  Impact: ~15% error rate in invoice review; errors require correction
  and re-send, adding 3–7 days to payment cycle per affected invoice.

BOTTLENECK 3 — WEEKLY AR RECONCILIATION (Steps 7–9) ⚠ MEDIUM SEVERITY
  Problem: AR Specialist manually compares bank statements to QB records
  once per week. Overdue accounts are identified 3–7 days after they
  become overdue, delaying collections outreach.
  Root cause: No automated payment matching or overdue alerting.
  Impact: ~3 hours/week in manual reconciliation; delayed outreach
  reduces collection rate on 30+ day accounts by an estimated 12%.

WASTE IDENTIFIED:
  Type          Location     Estimated Loss/Month
  ────────────────────────────────────────────────
  Wait time     Steps 1–3    $60K–$300K delayed cash
  Rework        Step 4–5     ~30 invoice corrections × 45 min = 22.5 hrs
  Manual effort Steps 7–10   ~24 hrs AR staff time
  Error costs   Step 4       Est. $4,500 in re-billing delays

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3 — AUTOMATION OPPORTUNITIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Opportunity              Tool Options           Effort  Impact  Feasibility
─────────────────────────────────────────────────────────────────────────
Salesforce → QB sync     Breadwinner, DBSync,   Medium  High    ★★★★☆
  (auto-create invoice     native SF billing
  on Closed Won)

Automated invoice email  QB built-in auto-send  Low     High    ★★★★★
  with ACH payment link    + Stripe/QB Payments

Automated overdue        QB automation rules,   Low     Medium  ★★★★★
  reminders (day 15/30/45)  HubSpot sequences

Bank reconciliation      QuickBooks auto-match  Low     Medium  ★★★★★
  automation               (already a QB feature;
                           currently not enabled)

Invoice accuracy         Salesforce CPQ or      High    High    ★★★☆☆
  (auto-populate from       native QB-SF integration
  CRM contract data)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4 — EFFORT / IMPACT IMPROVEMENT MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                    LOW EFFORT              HIGH EFFORT
                 ┌──────────────────────┬───────────────────────┐
    HIGH IMPACT  │ ★ QUICK WINS         │ STRATEGIC PROJECTS    │
                 │ • Enable QB auto-     │ • Salesforce ↔ QB     │
                 │   send + payment link │   native integration  │
                 │ • Enable QB bank      │ • Salesforce CPQ for  │
                 │   auto-match          │   contract-to-invoice │
                 │ • Set up overdue      │   automation          │
                 │   email sequences    │                       │
                 ├──────────────────────┼───────────────────────┤
    LOW IMPACT   │ FILL-INS             │ AVOID                 │
                 │ • Invoice template   │ • Full ERP replacement│
                 │   standardization    │   (premature at vol.) │
                 │ • Collections        │                       │
                 │   call script update │                       │
                 └──────────────────────┴───────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 5 — PRIORITIZED RECOMMENDATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

QUICK WINS (implement within 2 weeks, no new tools required):
  1. Enable QuickBooks automated invoice sending — built-in feature,
     currently disabled. Add ACH/card payment link to every invoice.
     Expected DSO reduction: 4–6 days.
  2. Enable QB bank feed auto-reconciliation. Eliminates 2+ hrs/week
     of manual reconciliation.
  3. Set up automated overdue reminders at days 15, 30, and 45 using
     QB automation or a free HubSpot sequence.

STRATEGIC INITIATIVES (plan for Q3, budget $8K–$15K):
  1. Implement Salesforce ↔ QuickBooks integration (Breadwinner or
     DBSync). Auto-create draft invoice in QB when deal closes in SF.
     Eliminates handoff gap and manual re-keying — the two largest
     sources of DSO drag and billing errors.
  2. Enable online payment portal so clients can pay via ACH without
     calling AR. Estimated to reduce payment cycle by 5–8 days.

PROJECTED DSO IMPROVEMENT:
  Quick wins alone:          48 → ~40 days
  + Strategic initiatives:   40 → ~30 days (at benchmark)
  Cash flow impact at $1.8M/month: $1.08M faster cash recovery
```

**Executive summary variant:**
```
PROCESS AUDIT — INVOICING & COLLECTIONS | EXECUTIVE SUMMARY

Current DSO: 48 days | Target: 30 days | Gap: 18 days
Est. cash tied up in gap: ~$1.08M

Top 3 problems:
1. No trigger from Salesforce to QuickBooks when deal closes → 1–5 day
   invoicing lag before the clock even starts
2. Manual invoice entry causes 15% error rate → re-bills add 3–7 days
3. Collections outreach delayed by weekly (not daily) AR review

Quick wins available now (no budget, 1–2 weeks):
• Enable QB automated invoice send + payment link
• Turn on QB bank auto-match
• Set overdue email sequences at 15/30/45 days

Strategic fix (Q3, ~$12K): Integrate Salesforce + QuickBooks
Expected outcome: DSO at benchmark (30 days) within 6 months
```

**Next steps:**
- Share the audit report with Finance, Sales, and Operations leads for input before finalizing
- Assign an owner to each Quick Win recommendation with a 2-week completion target
- Get IT and Finance alignment on the Salesforce-QB integration project before adding to Q3 roadmap
- Re-measure DSO 60 and 120 days after Quick Wins are implemented to validate impact
