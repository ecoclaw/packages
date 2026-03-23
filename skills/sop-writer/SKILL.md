---
name: sop-writer
description: Write a Standard Operating Procedure document with steps, roles, triggers, and quality checkpoints
license: MIT
triggers: ["SOP", "standard operating procedure", "process document", "operations manual", "procedure guide", "process doc"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# SOP Writer

## What this skill does

Produces a complete, audit-ready Standard Operating Procedure document that any team member can follow without additional guidance. The SOP covers the full lifecycle of a process — from the triggering condition through completion — with decision points, role assignments, and quality checkpoints built in at every stage.

1. **Purpose and scope** — defines what the SOP covers, what it excludes, and why it exists
2. **Roles and responsibilities** — names every role involved (owner, performer, reviewer, approver) with a RACI summary
3. **Step-by-step procedure** — numbered steps with decision branches, time estimates, and system references
4. **Quality checkpoints** — verification gates that prevent downstream errors before they compound
5. **Exceptions and escalation** — how to handle edge cases, who to contact, and when to escalate

## How to invoke

```
/sop-writer
```

Claude will ask:
- What process is this SOP for, and what department owns it?
- What triggers the process? (time-based, event-based, request-based)
- Who are the roles involved? (job titles or team names)
- What systems, tools, or forms does this process use?
- Are there known exceptions, edge cases, or compliance requirements to address?

## Workflow steps

### Step 1 — Process Scoping
Claude establishes the process name, purpose, and scope boundaries — what the SOP covers and explicitly what it does not. This prevents scope creep and reader confusion.

### Step 2 — Role Mapping
Claude identifies every role that touches the process and generates a RACI matrix (Responsible, Accountable, Consulted, Informed) so accountability is unambiguous.

### Step 3 — Procedure Drafting
Claude writes each step in imperative voice ("Complete the form," "Notify the vendor"), assigns a role, estimates time, and inserts decision branches where the path diverges based on conditions.

### Step 4 — Quality and Compliance Layer
Claude adds checkpoint callouts at critical junctures, flags regulatory or policy touchpoints, and appends an exceptions/escalation matrix and a revision history table.

## Example outputs

### Example: Vendor Onboarding SOP

**Input:** New vendor onboarding process for a mid-size logistics company. Triggered when a purchase order is issued to a new supplier. Roles: Procurement Specialist, Legal, Finance, IT, Procurement Manager. Systems: NetSuite, DocuSign, Supplier Portal.

**SOP draft:**
```
STANDARD OPERATING PROCEDURE
SOP ID:     PROC-2026-017
Title:      New Vendor Onboarding
Department: Procurement
Owner:      Procurement Manager
Version:    1.0
Effective:  2026-03-21
Review Due: 2027-03-21

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. PURPOSE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This SOP establishes a consistent, compliant process for onboarding new
vendors before their first invoice is processed. It ensures all vendors are
screened, contracted, and configured in NetSuite before goods or services
are received.

2. SCOPE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Applies to: All new vendors receiving a purchase order of $500 or more.
Excludes:   Emergency sole-source purchases (see SOP PROC-2026-022) and
            intercompany transactions.

3. ROLES AND RESPONSIBILITIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Role                    Responsibility
─────────────────────────────────────
Procurement Specialist  Initiates onboarding, collects vendor documents
Legal                   Reviews and approves vendor contract terms
Finance                 Verifies W-9, banking details, and payment terms
IT                      Grants Supplier Portal access
Procurement Manager     Final approval and NetSuite activation

RACI Matrix:
Task                        Proc. Spec.  Legal  Finance  IT    Mgr
─────────────────────────────────────────────────────────────────
Initiate onboarding request     R          I       I      I      A
Collect W-9 and insurance       R          C       I      —      A
Contract review and sign        C          R       I      —      A
Banking verification            I          —       R      —      A
Supplier Portal setup           I          —       —      R      A
NetSuite activation             C          —       C      —      R

R=Responsible  A=Accountable  C=Consulted  I=Informed

4. TRIGGER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This process is triggered when a Purchase Requisition is approved for a
vendor who does not yet have an active record in NetSuite.

5. PROCEDURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Step 1 — Initiate Onboarding Request (Procurement Specialist | ~15 min)
  1.1  Open the Vendor Onboarding Request form in the Supplier Portal.
  1.2  Enter vendor name, contact, category, and estimated annual spend.
  1.3  Submit form. System generates a Vendor ID and sends the vendor an
       invitation link to complete their profile.
  ▶ CHECKPOINT: Confirm vendor receives the portal invitation within 1 hour.
    If not received, contact IT before proceeding.

Step 2 — Vendor Completes Profile (Vendor | ~1–2 business days)
  2.1  Vendor uploads: W-9 or W-8BEN, Certificate of Insurance, banking
       details (ACH form), and signed Vendor Code of Conduct.
  2.2  Supplier Portal flags submission as complete and notifies Procurement
       Specialist via automated email.

  ► DECISION POINT: Is the vendor a foreign entity?
    YES → Route to Finance for W-8BEN review before Step 3. Add 3 business
          days to timeline.
    NO  → Continue to Step 3.

Step 3 — Document Review (Legal + Finance | ~2 business days)
  3.1  Legal reviews Certificate of Insurance for required coverage limits
       (General Liability $1M per occurrence; Workers' Comp as required by
       state law).
  3.2  Finance verifies W-9 information against vendor-submitted banking
       details and checks vendor against OFAC sanctions list.
  3.3  If standard terms apply: Legal approves in portal.
       If vendor requests custom terms: Legal negotiates and routes for
       Procurement Manager countersignature via DocuSign.
  ▶ CHECKPOINT: All documents must be marked "Approved" in portal before
    proceeding. Do not activate vendor in NetSuite with any pending flags.

Step 4 — NetSuite Vendor Record Creation (Procurement Specialist | ~20 min)
  4.1  Create new vendor record in NetSuite using approved portal data.
  4.2  Set payment terms, currency, and default expense category.
  4.3  Attach approved W-9 and insurance certificate to the vendor record.
  4.4  Set vendor status to "Pending Approval."

Step 5 — Final Approval and Activation (Procurement Manager | ~10 min)
  5.1  Review NetSuite record for completeness.
  5.2  Change vendor status to "Active."
  5.3  Notify Procurement Specialist and requesting department via email.
  ▶ CHECKPOINT: First PO against vendor cannot be issued until status shows
    "Active" in NetSuite.

6. QUALITY CHECKPOINTS SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Gate  Location    What to Verify                        Owner
────────────────────────────────────────────────────────────────
QC-1  After 1.3   Portal invitation delivered            IT
QC-2  After 3.3   All documents "Approved" in portal     Legal/Finance
QC-3  After 5.2   NetSuite status = Active               Procurement Mgr

7. EXCEPTIONS AND ESCALATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Exception                          Action                      Escalate To
─────────────────────────────────────────────────────────────────────────
Vendor fails OFAC check            Halt onboarding immediately  Legal + CFO
Insurance below required limits    Request updated certificate   Legal
Vendor refuses standard terms      Negotiate or decline          Proc. Mgr
Onboarding exceeds 10 business days  Escalate to expedite       Proc. Mgr

8. REVISION HISTORY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Version  Date        Author               Change Summary
────────────────────────────────────────────────────────────────
1.0      2026-03-21  J. Rivera, Proc. Mgr  Initial release
```

**Condensed one-pager variant:**
```
QUICK REFERENCE — New Vendor Onboarding (SOP PROC-2026-017)

TRIGGER: PO issued to vendor with no active NetSuite record

STEPS AT A GLANCE:
1. Procurement Specialist submits onboarding request in Supplier Portal
2. Vendor completes profile (W-9, COI, banking, Code of Conduct)
3. Legal reviews insurance; Finance verifies W-9 + OFAC check
4. Procurement Specialist creates NetSuite record
5. Procurement Manager approves and activates vendor

TARGET TIMELINE: 5–7 business days (10 max)

QUESTIONS? Contact: procurement@company.com
```

**Next steps:**
- Have the Procurement Manager and Legal review for accuracy before publishing
- Upload to your internal wiki or SharePoint under Procurement > SOPs
- Schedule the first annual review for 2027-03-21 in your document management system
- Train affected staff using the Quick Reference card and log training completion
