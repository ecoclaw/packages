---
name: engagement-letter
description: Draft a client engagement letter with scope of services, fees, responsibilities, and terms
triggers: ["engagement letter", "client engagement", "scope of services", "CPA engagement", "accounting agreement", "service agreement"]
---

# Engagement Letter

## What this skill does

Produces a professional engagement letter that establishes the scope, responsibilities, and terms of a CPA or accounting firm's engagement with a client. The letter protects both parties by documenting exactly what services will and will not be provided, what the client must supply, how fees are structured, and the terms governing the relationship — reducing scope creep and liability exposure.

1. **Scope of services** — explicit list of what is included, with equally explicit out-of-scope carve-outs
2. **Client responsibilities** — what the client must provide and by when
3. **CPA responsibilities** — professional standards the firm will follow
4. **Fee structure and billing terms** — flat fee, hourly, retainer, or value-based, with payment terms
5. **Confidentiality, limitation of liability, and dispute resolution** — key protective provisions

## How to invoke

```
/engagement-letter
```

Claude will ask:
- What services are being engaged (tax prep, bookkeeping, audit, advisory, payroll, other)?
- Who is the client — individual, business entity, or organization? What entity type?
- What is the fee structure — flat fee, hourly, monthly retainer, or other?
- What is the engagement period (one-time, calendar year, ongoing)?
- Are there any specific terms — jurisdiction, arbitration clause, limitation of liability cap?

## Workflow steps

### Step 1 — Scope Definition
Claude drafts a precise scope section that names each service deliverable. For each service, Claude notes what it does not include (e.g., "tax preparation does not include audit representation"). This prevents scope creep and sets clear client expectations.

### Step 2 — Responsibility Allocation
Claude separates client responsibilities (providing records, responding to information requests, reviewing drafts) from firm responsibilities (professional standards, confidentiality, timely communication). Both are stated affirmatively, not just as risk disclaimers.

### Step 3 — Fee and Billing Terms
Claude drafts the compensation section based on the agreed fee structure. Flat-fee letters include a description of what triggers an additional fee. Hourly letters include the billing rate, invoicing frequency, and late payment terms.

### Step 4 — Protective Provisions and Signature Block
Claude includes confidentiality language, a limitation of liability clause (capped at fees paid), a dispute resolution clause (mediation or arbitration), and a governing law provision. The signature block captures both parties and a date.

## Example outputs

### Example: Engagement Letter for Annual Tax Preparation and Bookkeeping Services

**Input:** Small business client, LLC taxed as S corporation, calendar year 2025. Services: monthly bookkeeping (QuickBooks reconciliation), annual Form 1120-S, annual Form 1040 with all schedules, payroll tax return review (Forms 941 and 940). Flat monthly fee of $850/month for bookkeeping; $3,200 flat fee for tax returns. Governing law: California. 12-month engagement term.

**Engagement letter draft:**
```
[FIRM LETTERHEAD]

March 21, 2026

Maria T. Sandoval
Owner, Sandoval Creative Studio LLC
2201 Mission Street, Suite 4B
San Francisco, CA 94110

Re: Engagement Letter — Tax and Bookkeeping Services, 2025–2026

Dear Maria,

We are pleased to confirm our engagement to provide the accounting
and tax services described in this letter. This letter constitutes
our agreement. Please review it carefully, sign and return the
enclosed copy, and retain the original for your records.

---

SECTION 1: SCOPE OF SERVICES

1.1  Monthly Bookkeeping Services
     We will provide the following bookkeeping services each month:
     - Reconcile all bank and credit card accounts in QuickBooks Online
     - Categorize income and expense transactions per your chart of accounts
     - Prepare and deliver a monthly Profit & Loss Statement and Balance Sheet
     - Answer up to 2 hours of bookkeeping-related questions per month

     This service does not include: accounts payable processing, invoicing,
     payroll processing, sales tax return preparation, or CFO-level financial
     analysis unless separately engaged.

1.2  Annual Federal and State Tax Returns
     We will prepare and file the following returns for tax year 2025:
     - Form 1120-S, U.S. Income Tax Return for an S Corporation (federal)
     - California Form 100S, S Corporation Franchise or Income Tax Return
     - Form 1040 with all required schedules for you as the individual
       owner, including Schedule E (S corporation income) and Schedule SE
     - Annual summary review call upon return completion

     This service does not include: audit representation, amended returns
     (billed separately at $195/hour), tax research memos, or returns for
     any other entity or individual unless separately agreed in writing.

1.3  Payroll Tax Return Review
     We will review — but not prepare — your Forms 941 (quarterly) and
     Form 940 (annual) as prepared by your payroll provider. We will
     flag discrepancies and advise on corrections. Preparation of these
     returns by our firm is not included in this engagement.

---

SECTION 2: CLIENT RESPONSIBILITIES

You agree to:
- Provide complete and accurate financial records, statements, and
  source documents within 15 calendar days of our written request
- Grant us read access to QuickBooks Online for the duration of the
  engagement
- Review all draft returns within 10 business days of delivery and
  provide written approval before filing
- Notify us promptly of any IRS or FTB correspondence, audit notices,
  or changes in your business structure
- Maintain adequate documentation to support all tax positions taken
  on your returns

We are entitled to rely on the information you provide. We will not
independently verify the accuracy or completeness of records supplied
by you or third parties.

---

SECTION 3: PROFESSIONAL STANDARDS

We will perform all services in accordance with:
- Statements on Standards for Tax Services (SSTS) issued by the AICPA
- Statements on Standards for Accounting and Review Services (SSARS)
  where applicable
- The AICPA Code of Professional Conduct
- Treasury Circular 230

We are not required to, and will not, audit, review, or verify the
accuracy of underlying records unless specifically engaged to do so.

---

SECTION 4: FEES AND BILLING

4.1  Monthly Bookkeeping
     Flat monthly fee: $850.00, invoiced on the 1st of each month and
     due within 15 days. Services for the first partial month will be
     prorated.

4.2  Annual Tax Preparation
     Flat fee: $3,200.00, invoiced in two installments:
       - 50% ($1,600) upon signing this engagement letter
       - 50% ($1,600) upon delivery of draft returns

4.3  Additional Services
     Work outside the scope defined above will be billed at $195.00
     per hour. We will notify you before undertaking out-of-scope work
     and obtain your written authorization for amounts exceeding $500.

4.4  Late Payments
     Invoices not paid within 30 days accrue interest at 1.5% per month.
     We reserve the right to suspend services if your account is more
     than 45 days past due.

---

SECTION 5: TERM AND TERMINATION

This engagement covers the period January 1, 2025 through December 31,
2026 (bookkeeping services) and the 2025 tax year (tax preparation).
Either party may terminate this engagement with 30 days' written
notice. You remain responsible for fees earned through the termination
date. Upon termination, we will deliver all client-provided documents
and work product to which you are entitled.

---

SECTION 6: CONFIDENTIALITY

We will maintain the confidentiality of all non-public information
you provide in connection with this engagement, consistent with our
professional obligations and applicable law. We may disclose information
as required by law, professional standards, or with your written consent.

---

SECTION 7: LIMITATION OF LIABILITY

Our liability to you arising from this engagement, regardless of
the form of action, shall not exceed the total fees paid to us
during the 12 months preceding the claim. We shall not be liable
for indirect, incidental, or consequential damages.

---

SECTION 8: DISPUTE RESOLUTION AND GOVERNING LAW

Any dispute arising out of this engagement shall first be submitted
to mediation through JAMS before either party initiates arbitration
or litigation. This agreement shall be governed by the laws of the
State of California.

---

Please sign below to indicate your agreement with these terms.

Agreed and accepted:

[FIRM NAME]                       CLIENT

By: ______________________        By: ______________________
    [CPA Name], CPA                   Maria T. Sandoval

Date: ____________________        Date: ____________________

---
DISCLAIMER: This engagement letter template is for informational
purposes only and does not constitute legal advice. Engagement
letters should be reviewed by qualified legal counsel before use,
as professional liability, state bar rules, and jurisdiction-specific
requirements vary.
```

**Next steps:**
- Have your professional liability insurer or attorney review the limitation of liability cap before using
- Confirm AICPA and state CPA society engagement letter standards have been checked for the current year
- Send via DocuSign or similar e-signature platform and retain the executed copy in your practice management system
- Set a calendar reminder 60 days before the engagement term ends to issue a renewal letter
