---
name: audit-finding-summary
description: Write a management letter summarizing audit findings categorized by severity with recommended corrective actions
license: MIT
triggers: ["audit findings", "management letter", "audit summary", "audit report", "internal controls", "audit results"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Audit Finding Summary

## What this skill does

Produces a management letter — also called a letter to those charged with governance — that communicates audit findings in a structured, professional format. Findings are categorized by severity, explained in plain language, and paired with specific corrective action recommendations and a management response template so the organization can respond efficiently.

1. **Executive summary** — overview of the audit scope, period, and findings count by severity
2. **Findings table** — at-a-glance grid organized by severity: Material Weakness, Significant Deficiency, Observation
3. **Detailed finding narratives** — each finding described with condition, criteria, cause, effect, and recommendation
4. **Management response template** — pre-formatted section for management to document their corrective action plan
5. **Auditor closing** — professional close referencing applicable standards (AU-C, GAAS, Yellow Book, Uniform Guidance)

## How to invoke

```
/audit-finding-summary
```

Claude will ask:
- What type of audit — financial statement, compliance, internal, Yellow Book/Single Audit?
- What is the audited entity (nonprofit, government, private company, healthcare)?
- What findings have been identified and what is their severity classification?
- What audit period and fiscal year end applies?
- Who are the recipients (board, audit committee, management, grantor agency)?

## Workflow steps

### Step 1 — Findings Classification
Claude categorizes each finding using AICPA AU-C 265 definitions: Material Weakness (reasonable possibility of material misstatement not prevented/detected), Significant Deficiency (less severe but important enough to merit attention), or Observation (best-practice recommendation not rising to a reportable condition).

### Step 2 — Findings Table Assembly
Claude produces a concise findings table suitable for an executive summary or board presentation, listing each finding by number, short title, severity, and responsible area.

### Step 3 — Detailed Narrative Drafting
For each finding, Claude writes a structured narrative using the standard condition-criteria-cause-effect-recommendation (CCCER) format used in government and nonprofit auditing. Each recommendation is specific, actionable, and tied to the root cause.

### Step 4 — Management Response Template
Claude provides a pre-formatted management response section for each finding so management can document their planned corrective action, responsible party, and target implementation date — supporting efficient audit committee follow-up.

## Example outputs

### Example: Management Letter for a Nonprofit Audit with Three Findings

**Input:** Nonprofit organization, fiscal year ended June 30, 2025. Single Audit (Uniform Guidance). Three findings: (1) bank reconciliations not completed timely — Significant Deficiency; (2) grant expenditure documentation missing for two federal awards — Material Weakness; (3) board minutes not documenting approval of executive compensation — Observation. Board of directors is the recipient.

**Management letter draft:**
```
INDEPENDENT AUDITOR'S COMMUNICATION TO THOSE CHARGED WITH GOVERNANCE
Management Letter — Internal Control and Compliance Matters

To the Board of Directors
Riverside Community Services, Inc.
Date: March 21, 2026
Audit Period: Year Ended June 30, 2025

---

SECTION 1: PURPOSE AND SCOPE

We have audited the financial statements of Riverside Community
Services, Inc. (the Organization) for the year ended June 30, 2025,
and performed procedures required under Title 2 U.S. Code of Federal
Regulations Part 200 (Uniform Guidance) in connection with your
federal award programs.

In accordance with AU-C Section 265 and Government Auditing Standards
(Yellow Book, 2018 Revision), we are required to communicate to those
charged with governance significant deficiencies and material weaknesses
in internal control identified during our audit. This letter also
includes observations — matters that are not reportable conditions but
that we believe warrant management's attention.

This communication does not modify our auditor's report.

---

SECTION 2: FINDINGS SUMMARY

  #     Finding                              Severity              Area
  ----  -----------------------------------  --------------------  -------------------------
  2025-001  Grant Expenditure Documentation  Material Weakness     Federal Grant Compliance
  2025-002  Bank Reconciliation Timeliness   Significant Def.      Financial Reporting
  2025-003  Executive Compensation Approval  Observation           Governance / Board Minutes

---

SECTION 3: DETAILED FINDINGS

-----------------------------------------------------------------------
FINDING 2025-001 — Grant Expenditure Documentation
Severity: Material Weakness
Federal Program: Community Development Block Grant (CDBG),
                 CFDA No. 14.218 / Award No. B-23-MC-XX-XXXX
                 HOME Investment Partnerships, CFDA No. 14.239
-----------------------------------------------------------------------

Condition:
During our testing of 60 expenditure transactions across two federal
award programs, we identified 14 transactions (23%) lacking required
supporting documentation. Specifically:
  - 9 transactions lacked vendor invoices or were supported only by
    internal check requests
  - 5 salary allocations lacked signed timesheets or equivalent
    personnel activity documentation as required under 2 CFR 200.430

Criteria:
2 CFR 200.302 requires recipient organizations to maintain records
that adequately identify the source and application of federal funds.
2 CFR 200.430(i) requires documentary support for labor charges to
federal awards in the form of records reflecting total activity for
each employee. OMB Compliance Supplement guidance reinforces these
requirements for CDBG and HOME programs.

Cause:
The Organization's grants management function is performed by one
staff member who also handles accounts payable. During a period of
staff transition (November 2024 – February 2025), a backup procedure
for collecting and filing documentation was not in place.

Effect:
Fourteen transactions totaling $41,800 lack adequate documentation.
These expenditures may be questioned by the grantor agency and
subject to disallowance. This condition represents a material weakness
because the internal control deficiency creates a reasonable possibility
that a material misstatement of the federal award expenditures would
not be prevented or detected on a timely basis.

Recommendation:
1. Implement a pre-payment checklist requiring all invoices and
   supporting documents to be attached before a check is released
   or a payment is posted.
2. Establish a monthly grant files review by the Finance Director
   to confirm completeness of documentation for the top 20 expenditures
   by dollar amount.
3. Create written backup procedures for the grants management function
   so a designated alternate can maintain documentation collection
   during staff absences or transitions.
4. Consult with your program officer at HUD regarding the 14 unsupported
   transactions to determine whether remediation or voluntary disclosure
   is appropriate.

-----------------------------------------------------------------------
FINDING 2025-002 — Bank Reconciliation Timeliness
Severity: Significant Deficiency
Area: Financial Reporting / Internal Controls over Cash
-----------------------------------------------------------------------

Condition:
Bank reconciliations for the Organization's three operating accounts
were not completed until an average of 52 days after month end during
the fiscal year. In two months (October 2024 and March 2025),
reconciliations were not completed until after the subsequent month
had closed, meaning two months were reconciled simultaneously.

Criteria:
Best practice under the AICPA's internal control guidance and the
Organization's own financial policies (Section 4.3) require bank
reconciliations to be completed within 15 business days of month end
and reviewed by a supervisor not involved in the reconciliation.

Cause:
The bookkeeper responsible for reconciliations was also responsible
for processing payroll and accounts payable. During high-volume
periods, reconciliations were deferred. No monitoring mechanism
alerted management to the delays.

Effect:
Delayed reconciliations increase the risk that errors, unauthorized
transactions, or misappropriation could go undetected for extended
periods. While we did not identify any unrecorded items or
misstatements as a result, the delayed completion reduces the
effectiveness of this key control.

Recommendation:
1. Require the Finance Director to confirm in writing by the 20th of
   each month that the prior month's reconciliations are complete
   and reviewed.
2. Establish a dashboard or checklist in your accounting system
   (QuickBooks, Sage Intacct, or equivalent) tracking reconciliation
   completion dates.
3. Evaluate whether additional bookkeeping capacity (part-time support
   or outsourced reconciliation service) is warranted given current
   transaction volume.

-----------------------------------------------------------------------
FINDING 2025-003 — Executive Compensation Board Approval
Severity: Observation
Area: Governance / Board Minutes
-----------------------------------------------------------------------

Condition:
The Board of Directors did not document its approval of the Executive
Director's 2025 compensation package in meeting minutes. The compensation
change (a 4.2% merit increase effective January 1, 2025) was discussed
at the October 2024 meeting but the minutes record only that
compensation was "discussed" without documenting the approved amount.

Criteria:
IRS Form 990, Part VI, Section B requires tax-exempt organizations to
document the process used to determine executive compensation and to
apply the rebuttable presumption procedures under IRC §4958 if they
wish to establish a presumption of reasonableness. This requires
contemporaneous documentation of the board's approval, the comparability
data considered, and the specific amount approved.

Cause:
The board secretary was unfamiliar with the IRC §4958 documentation
requirements and recorded the outcome using the same language used
for routine discussion items.

Effect:
Without proper documentation, the Organization cannot rely on the
rebuttable presumption of reasonableness, increasing exposure to
intermediate sanctions under IRC §4958 in the event of an IRS
examination.

Recommendation:
1. Amend the October 2024 minutes (with board authorization) to reflect
   the specific compensation amount approved, comparability data
   reviewed, and the names of board members who approved the increase.
2. Prepare a board compensation committee charter or policy that
   documents the annual compensation review process, including the
   sources of comparability data to be used (GuideStar, salary surveys,
   etc.).
3. Include an executive compensation agenda item on the annual board
   calendar each fall and use a pre-drafted resolution template to
   ensure complete documentation going forward.

---

SECTION 4: MANAGEMENT RESPONSE

Please complete and return the management response below within
30 days of this letter. Responses will be included in the final
audit report delivered to the Board.

  Finding 2025-001 — Grant Expenditure Documentation
  Planned corrective action:
  _________________________________________________________________
  Responsible party: _______________________________________________
  Target implementation date: _____________________________________

  Finding 2025-002 — Bank Reconciliation Timeliness
  Planned corrective action:
  _________________________________________________________________
  Responsible party: _______________________________________________
  Target implementation date: _____________________________________

  Finding 2025-003 — Executive Compensation Approval
  Planned corrective action:
  _________________________________________________________________
  Responsible party: _______________________________________________
  Target implementation date: _____________________________________

---

We appreciate the cooperation and assistance provided by management
and staff during this engagement. We are pleased to discuss any of
these matters further at your convenience.

[AUDIT FIRM NAME]
Certified Public Accountants

---
DISCLAIMER: This document is for informational purposes only and
does not constitute accounting or legal advice. Audit findings,
classifications, and recommendations are fact-specific. Consult
a qualified CPA or auditor for guidance specific to your organization's
circumstances and applicable professional standards.
```

**Next steps:**
- Deliver the management letter with the draft financial statements — not as a standalone document
- Present findings to the audit committee before the full board meeting to allow time for questions
- Set a 90-day follow-up to verify management has implemented corrective actions for the Material Weakness
- Retain the signed management response as part of the permanent audit file
