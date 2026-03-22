---
name: board-update
description: Write an Executive Director board meeting report covering financials, programs, operations, and decisions needed
triggers: ["board update", "board report", "executive director report", "board memo", "board meeting", "ED report"]
---

# Board Update

## What this skill does

Produces a structured Executive Director board report that gives board members the information they need to govern effectively — without burying them in operational detail. The report is organized around what the board needs to know, what they need to decide, and what is coming that they should be watching.

1. **Executive summary** — a 3–5 bullet dashboard of the most critical information from this reporting period
2. **Financial highlights** — revenue and expense vs. budget year-to-date, cash position, and any variances requiring board attention
3. **Program updates with metrics** — key program activity, outcomes data, and notable developments for each program area
4. **Operational updates** — staffing, facilities, systems, and any infrastructure changes or challenges
5. **External environment notes** — funding landscape changes, policy developments, peer organization news, or community context the board should be aware of
6. **Decisions and approvals needed** — a clear, itemized list of what the board must vote on or authorize at this meeting

## How to invoke

```
/board-update
```

Claude will ask:
- What is the reporting period? (month, quarter, or fiscal year)
- What are the key financial figures? (revenue, expenses, cash on hand vs. budget)
- What are the program highlights and metrics for this period?
- What operational updates, staffing changes, or infrastructure news should the board know?
- What decisions or approvals does the board need to make at this meeting?

## Workflow steps

### Step 1 — Dashboard Construction
Claude opens with a brief executive summary in bulleted form — the 5 things every board member should know before the meeting begins, regardless of how much of the report they've read.

### Step 2 — Financial Section
Claude builds the financial section from provided figures, calculating variances and flagging anything above or below budget by more than 5–10%. The narrative explains variances, not just reports them.

### Step 3 — Program and Operations Sections
Claude organizes program updates by program area with outcome metrics front and center. Operational updates are kept brief — board-appropriate level, not management-level detail.

### Step 4 — Decisions and Approvals Framing
Claude ends the report with a clearly formatted list of actions required from the board, each with a brief description of what is being asked and why. This section becomes the meeting agenda anchor.

## Example outputs

### Example: Quarterly Board Report for a Youth Services Nonprofit

**Input:** Organization: Hillside Youth Foundation. Period: Q1 FY2026 (October–December 2025). Programs: After-School tutoring (312 students), Summer Launch workforce prep (on hold until June), Family Support Services (88 families active). Financials: Q1 revenue $418,000 vs. budget $380,000 (+10%); expenses $392,000 vs. budget $410,000 (-4%); cash on hand $287,000. Staffing: hired new Family Services Coordinator; Development Director gave notice. Decisions needed: approve FY2026 audit firm selection; ratify new conflict of interest policy.

**Board report draft:**
```
HILLSIDE YOUTH FOUNDATION
Executive Director's Report — Q1 FY2026
Board of Directors Meeting | January 15, 2026
Prepared by: Carmen Ortega, Executive Director

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EXECUTIVE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Finances: Strong start to FY2026. Q1 revenue exceeded budget by 10%
  ($418K vs. $380K); expenses came in 4% under budget. Cash position
  is healthy at $287K — approximately 2.6 months of operating reserves.

• Programs: After-School tutoring is at full enrollment (312 students);
  89% attendance rate above our 85% target. Family Support Services
  serving 88 active families with a 6-week average intake-to-service time.

• Staffing: We welcomed our new Family Services Coordinator, Rosa
  Delgado, in November. Our Development Director has given notice;
  transition and succession planning are underway.

• Fundraising: Year-end appeal closed at $127,000 — 18% above prior
  year. Three grant proposals submitted in Q1; decisions expected Q2.

• Action required at this meeting: Approval of FY2026 audit firm;
  ratification of updated Conflict of Interest Policy.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1 — FINANCIAL HIGHLIGHTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Q1 FY2026 FINANCIAL SUMMARY (October 1 – December 31, 2025)

                        Actual      Budget      Variance    % Var
──────────────────────────────────────────────────────────────────
REVENUE
  Foundations/Grants   $218,000    $190,000    +$28,000    +14.7%
  Government Contracts $112,000    $115,000     ($3,000)    -2.6%
  Individual Giving    $78,000     $65,000     +$13,000    +20.0%
  Special Events       $10,000     $10,000          —       0.0%
──────────────────────────────────────────────────────────────────
TOTAL REVENUE          $418,000    $380,000    +$38,000    +10.0%

EXPENSES
  Personnel            $278,000    $285,000     ($7,000)    -2.5%
  Program Costs         $72,000     $80,000     ($8,000)   -10.0%
  Occupancy             $24,000     $24,000          —       0.0%
  Admin & Operations    $18,000     $21,000     ($3,000)   -14.3%
──────────────────────────────────────────────────────────────────
TOTAL EXPENSES         $392,000    $410,000    ($18,000)    -4.4%

NET OPERATING SURPLUS  $26,000     ($30,000)   +$56,000

Cash on Hand (12/31):  $287,000 (est. 2.6 months of operating reserves)
Accounts Receivable:   $94,000 (government contract billings, expected
                        by January 31)

NOTES ON VARIANCES:
  • Foundation/Grants revenue is ahead of budget due to the early receipt
    of a $30,000 payment from the Kern Community Foundation that was
    budgeted for Q2. This is a timing difference; it does not represent
    additional revenue above the annual budget.
  • Individual Giving exceeded budget by 20% on the strength of a
    $10,000 year-end gift from a new donor. Development staff are
    scheduling a stewardship meeting for Q2.
  • Personnel expenses are slightly below budget due to the 5-week gap
    between the departure of our former Family Services Coordinator
    and Rosa Delgado's start date. This savings will be partially
    offset in Q2 by onboarding costs.
  • Program expenses are under budget as After-School tutoring curriculum
    materials were partially covered by a supply donation from
    Riverside Unified. Valued at approximately $6,500.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2 — PROGRAM UPDATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AFTER-SCHOOL TUTORING PROGRAM
  Enrollment:     312 students (at capacity; 47 on waitlist)
  Attendance:     89% average daily attendance (target: 85%) ✓
  Academic:       Q1 progress reports: 74% of enrolled students showed
                  grade-level improvement in at least one core subject
  Staffing:       14 tutors active; 2 tutor vacancies posted (hard to
                  fill at current hourly rate — flagging for Q2 discussion)
  Notable:        Partnership with Riverside Unified finalized for second
                  semester. District will provide bus transportation for
                  32 additional students from a new feeder school, expanding
                  reach at no additional cost to Hillside.

FAMILY SUPPORT SERVICES
  Active cases:   88 families (target: 80) ✓
  New intakes:    24 families enrolled in Q1
  Avg. intake-to-service time: 6.2 weeks (target: ≤8 weeks) ✓
  Closures:       11 families successfully completed service plans;
                  7 referred to long-term services partners
  Staffing:       Rosa Delgado (new Family Services Coordinator) fully
                  onboarded as of December 1. Caseloads now balanced
                  across three coordinators at 29–31 families each.
  Notable:        Collaborated with County Housing Authority to connect
                  6 families with emergency rental assistance in Q1 —
                  a new referral pathway that we are formalizing in Q2.

SUMMER LAUNCH WORKFORCE PREP (Planning Phase)
  Program launch: June 2, 2026
  Recruitment:    Applications open February 1; goal of 60 participants
  Funding status: 70% of Summer Launch budget secured; one proposal
                  pending with the Workforce Development Board (decision
                  expected March)
  Planning note:  Staff are exploring an employer partnership with
                  Mercy General Hospital for direct job placement
                  interviews at program completion. More to report in Q2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3 — OPERATIONAL UPDATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STAFFING
  New Hire: Rosa Delgado, Family Services Coordinator, joined November 3.
  Departure: Terrence Boyd, Development Director, gave notice December 19.
  Final date: January 31, 2026.

  Transition plan: Terrence has committed to a full transition of all
  donor records, grant calendars, and major gift relationships. I am
  conducting a recruitment search for his replacement and will engage
  the board's Governance Committee for input on the hiring criteria.
  In the interim, I will manage major donor relationships directly;
  our Program Associate will support grant administration. The board
  will be updated on search status at the March meeting.

FACILITIES
  The HVAC system in our main program wing required emergency repair in
  October ($4,200; covered within the operating budget). A full system
  assessment is scheduled for February. Facilities committee should
  expect a maintenance reserve discussion at the March meeting.

TECHNOLOGY
  Donor database migration to Bloomerang completed December 15. All
  historical records transferred; staff training completed. This
  positions us well for improved donor reporting and segmentation in 2026.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4 — EXTERNAL ENVIRONMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Proposed cuts to Title IV-E and TANF funding at the federal level
  could affect two Family Support Services families currently receiving
  subsidized child welfare services. Staff are monitoring closely;
  no immediate program impact.

• The City of Riverside is releasing a new Youth Services RFP in
  February with an estimated award of $180,000–$220,000. We are
  well-positioned to apply based on our current city contract and
  after-school track record. Development will prepare an LOI by
  February 15.

• Two peer organizations in our service area — Valley Youth Alliance
  and Eastside Community Center — have announced program reductions
  due to funding losses. We are expecting increased referral volume
  to After-School and Family Support in Q2. Waitlist management will
  be a priority.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 5 — DECISIONS AND APPROVALS NEEDED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ACTION ITEM 1: Approval of FY2026 Audit Firm
  The Finance Committee recommends retaining Aldridge & Partners, CPA,
  for the FY2026 independent financial audit at a quoted fee of $8,400.
  This represents a $600 increase over FY2025. Two firms were evaluated;
  the Finance Committee's recommendation memo is attached.
  REQUESTED ACTION: Board vote to approve engagement of Aldridge &
  Partners for the FY2026 audit.

ACTION ITEM 2: Ratification of Updated Conflict of Interest Policy
  Counsel recommended updates to our Conflict of Interest Policy to
  align with current IRS Form 990 best practices and California AB 2558
  requirements. Changes include: annual disclosure form language updates,
  a revised recusal procedure, and addition of a digital signature
  process for board and staff submissions.
  The revised policy is included in your board packet (Tab C).
  REQUESTED ACTION: Board vote to ratify the revised Conflict of Interest
  Policy as presented.

INFORMATION ITEM (no vote required): Development Director Search
  The board will be kept informed of search progress. No board action
  is required at this meeting.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ATTACHMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  A. Q1 FY2026 Financial Statements (Balance Sheet, Income Statement)
  B. Finance Committee Memo — Audit Firm Recommendation
  C. Revised Conflict of Interest Policy (redline and clean versions)
  D. Q1 Program Dashboard (one-page metrics summary)

Questions? Contact Carmen Ortega at c.ortega@hillsideyouth.org
or (951) 555-0140.
```

**Executive one-page dashboard variant:**
```
HILLSIDE YOUTH FOUNDATION — Q1 FY2026 BOARD DASHBOARD
As of December 31, 2025 | ED: Carmen Ortega

FINANCES AT A GLANCE
  Revenue:     $418K actual vs. $380K budget (+10%)
  Expenses:    $392K actual vs. $410K budget (-4%)
  Net:         +$26K surplus vs. ($30K) budgeted deficit
  Cash:        $287K (~2.6 months reserves) ✓

PROGRAMS AT A GLANCE
  After-School:  312 students enrolled (at capacity) | 89% attendance ✓
  Family Support: 88 active families | 6.2 wk avg intake time ✓
  Summer Launch:  Planning phase; 70% of budget secured

STAFFING
  New: Rosa Delgado, Family Services Coordinator (Nov)
  Departing: Terrence Boyd, Development Director (Jan 31)

DECISIONS NEEDED TODAY
  ✓ Approve FY2026 audit firm (Aldridge & Partners, $8,400)
  ✓ Ratify updated Conflict of Interest Policy
```

**Next steps:**
- Circulate the full report to board members at least 5 days before the meeting via your board portal
- Prepare 2-minute verbal summaries of each section for the meeting — do not read the report aloud
- Attach all referenced documents (audit memo, revised policy) in the board packet
- Log all board votes in the official minutes; retain for annual audit and governance records
