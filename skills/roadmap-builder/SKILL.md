---
name: roadmap-builder
description: Build a Now/Next/Later quarterly roadmap with themes, initiatives, and rationale
license: MIT
triggers: ["roadmap", "product roadmap", "quarterly roadmap", "now next later", "roadmap builder", "product planning"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Roadmap Builder

## What this skill does

Roadmap Builder produces a structured Now/Next/Later product roadmap organized around strategic themes, with initiative-level descriptions, rationale, dependencies, and success criteria for each item. The output is suitable for sharing with executives, engineering teams, and customers — with variants available at different levels of detail. Rather than a list of features, it presents a strategic narrative: why these things, in this order, toward these outcomes.

1. **Theme organization** — Groups initiatives under 3-5 strategic themes that map to company or product-line goals, making the roadmap scannable and story-driven
2. **Now/Next/Later structure** — Places initiatives in time horizons rather than fixed dates, reducing the "promise" pressure of calendar-based roadmaps while still communicating priority
3. **Initiative rationale** — Each item includes a one-sentence "why now" explanation tied to user evidence, business impact, or dependency logic
4. **Dependencies and risks** — Surfaces cross-team dependencies and blockers so stakeholders can anticipate coordination needs
5. **Success criteria** — Each initiative includes a definition of done or measurable outcome so teams know when they are finished

## How to invoke

```
/roadmap-builder
```

Claude will ask:
- What is the product or product area this roadmap covers?
- What are the top 2-3 strategic goals or company priorities for this period?
- What initiatives or features are you considering for the roadmap?
- What time frame does "Now" represent — the current quarter, sprint, or something else?
- Who is the primary audience: internal team, executives, or customers?

## Workflow steps

### Step 1 — Goal and theme alignment
Claude extracts strategic goals from the inputs and proposes 3-5 roadmap themes that organize work around outcomes rather than features (e.g., "Reduce time to value" rather than "Onboarding improvements").

### Step 2 — Initiative placement
Claude places each initiative into Now/Next/Later based on signals in the input: stated priorities, dependencies, and effort level. Placement rationale is documented for each item.

### Step 3 — Detail population
For each initiative, Claude writes: a one-line description, a "why" rationale, key dependencies, and a success criterion or definition of done.

### Step 4 — Formatting and audience tuning
Claude presents the roadmap in a table format for internal use, and offers a condensed narrative version for executive or customer-facing contexts.

## Example outputs

### Example: Q2 roadmap for a B2B analytics platform

**Input:** We're a B2B analytics SaaS. This quarter we need to focus on: reducing churn (big accounts are complaining about slow dashboards), growing enterprise deals (we're missing SSO and audit logs), and improving self-serve activation (trial-to-paid conversion is 8%, we want 15%). We also have a major infra migration to Snowflake that needs to be done before we can build any new data connectors.

**Roadmap draft:**
```
# Product Roadmap — Q2 2026
**Horizon:** Now = Q2 2026 | Next = Q3 2026 | Later = Q4 2026+
**Last updated:** 2026-03-21
**Audience:** Internal — Engineering, Design, Leadership

---

## Strategic Themes

1. Performance and Retention — Fix what's breaking for existing customers
2. Enterprise Readiness — Unlock and accelerate large account expansion
3. Self-Serve Growth — Improve trial activation and reduce friction to paid
4. Platform Foundation — Infrastructure investments that unlock future velocity

---

## NOW — Q2 2026

### Theme: Performance and Retention

| Initiative | Description | Why Now | Dependencies | Success Criterion |
|---|---|---|---|---|
| Dashboard query optimization | Reduce P95 dashboard load time from 12s to under 3s via query caching and async rendering | 3 enterprise accounts have flagged slow dashboards in QBRs; churn risk flagged by CS | Data team (query analysis), Eng (caching layer) | P95 load time < 3s for dashboards with >10 widgets; 0 churn incidents attributed to performance |
| Scheduled report reliability | Fix intermittent failures in scheduled email reports (current failure rate: 11%) | Top support ticket category Q1; affects 60% of paid accounts | Email delivery service audit | Scheduled report failure rate < 1%; support tickets on this topic drop > 75% |

### Theme: Enterprise Readiness

| Initiative | Description | Why Now | Dependencies | Success Criterion |
|---|---|---|---|---|
| SAML/SSO integration | Support SAML 2.0 SSO via Okta, Azure AD, and Google Workspace | 4 enterprise prospects have SSO as a deal blocker; ACV average $48K | Auth provider (Okta integration), legal (DPA review) | SSO live in prod; at least 2 enterprise deals closed citing SSO unblocked |
| Audit log API | Expose a read-only audit log API with 12-month retention and filtering by user, action, and timestamp | Required by 2 financial services prospects for compliance review | Logging infra, API gateway rate limiting | Audit log API documented and available; 1 enterprise customer actively using in pilot |

### Theme: Self-Serve Growth

| Initiative | Description | Why Now | Dependencies | Success Criterion |
|---|---|---|---|---|
| In-app onboarding checklist | Add a contextual onboarding checklist for new trial accounts covering: connect data source, build first chart, share dashboard | Trial-to-paid conversion at 8% vs 15% target; activation data shows 60% of trials never build a chart | Growth eng, Design | Trial accounts completing all 3 checklist steps: target 40%; trial-to-paid conversion: target 12% by end of Q2 |
| Stripe self-serve upgrade flow | Allow trial users to upgrade to paid plans without contacting sales | 22% of trial users visit the pricing page but don't convert; no self-serve path exists | Billing (Stripe integration), Legal (ToS update) | Self-serve upgrades active; at least 15% of new paid conversions via self-serve by end of Q2 |

### Theme: Platform Foundation

| Initiative | Description | Why Now | Dependencies | Success Criterion |
|---|---|---|---|---|
| Snowflake migration (Phase 1) | Migrate internal data warehouse from Redshift to Snowflake for core metrics tables | Blocking all new connector work; Redshift contract renewal in July | Data Eng (migration plan), QA (data validation) | Core metrics tables migrated with < 0.1% data discrepancy; Redshift dependency removed from critical path |

---

## NEXT — Q3 2026

### Theme: Enterprise Readiness

| Initiative | Description | Why Now | Dependencies | Success Criterion |
|---|---|---|---|---|
| Role-based access control (RBAC) | Granular permissions: Viewer, Editor, Admin, and custom roles per workspace | Multiple enterprise accounts requesting this; currently all-or-nothing permissions | Q2 SSO (user identity model needed first) | RBAC in GA; enterprise accounts self-serving role assignments without CS involvement |
| SOC 2 Type II readiness | Gap assessment, policy documentation, and tooling for SOC 2 Type II audit | Required for federal/financial sector expansion; audit takes 6-12 months | Legal, SecEng, Q2 Audit log | Audit initiated with a Big 4 firm; all critical controls documented and in monitoring |

### Theme: Self-Serve Growth

| Initiative | Description | Why Now | Dependencies | Success Criterion |
|---|---|---|---|---|
| Usage-based plan tiers | Introduce usage-based pricing tiers (rows processed, API calls) alongside seat-based plans | Land-and-expand motion requires lower entry price for small teams | Billing (Stripe metered billing), Q2 self-serve upgrade | 20% of new signups on usage-based tier; ARPU expands 15% at 6-month cohort |
| In-app chat support (trial users) | Add Intercom chat for trial users in first 14 days | CS data: trials that get a human response within 1 hour convert at 3x rate | Intercom integration, CS team capacity plan | 70% of trial chat messages answered within 1 hour during business hours |

### Theme: Platform Foundation

| Initiative | Description | Why Now | Dependencies | Success Criterion |
|---|---|---|---|---|
| Snowflake migration (Phase 2) | Migrate remaining tables and deprecated Redshift connectors; decommission Redshift | Q2 Phase 1 must be complete | Q2 Phase 1, Data Eng | Redshift fully decommissioned; new connector framework unblocked |
| New connector framework | Self-serve connector SDK for third-party data sources | Snowflake migration must be complete; partner ecosystem demand | Q3 Phase 2 | SDK in beta with 2 external partners building connectors |

---

## LATER — Q4 2026+

### Theme: Platform Foundation
- Native connector marketplace (partner-built connectors, revenue share)
- Real-time data streaming support (sub-minute refresh rates)
- Multi-region data residency (EU and APAC)

### Theme: Enterprise Readiness
- Advanced anomaly detection and alerting engine
- Governance dashboard for data lineage and column-level security

### Theme: Self-Serve Growth
- AI-assisted chart builder ("ask a question, get a visualization")
- Embedded analytics for customers to white-label dashboards

---

## Risks and Dependencies Summary

| Risk | Impact | Mitigation |
|---|---|---|
| Snowflake migration delays | Blocks all Q3 connector work | Parallel-track migration; dedicated data eng squad |
| SSO implementation complexity | May slip into Q3 if Okta integration is harder than scoped | Spike in Week 1 of Q2 to validate complexity |
| SOC 2 audit timeline | 6-12 month audit means starting Q3 to finish by mid-2027 | Initiate gap assessment in Q2 pre-work |
| CS capacity for in-app chat | Response SLA may not be met with current team size | Hire 1 CS rep by Q3 start; set chat hours explicitly |
```

**Executive summary variant:**
```
## Q2 2026 Roadmap — Executive Summary

This quarter we are focused on three outcomes:

1. Stabilize performance for at-risk enterprise accounts (dashboard speed, report reliability)
2. Unlock $200K+ in pipeline blocked on SSO and audit logs
3. Move trial-to-paid conversion from 8% toward our 15% annual target

Foundation: We will also complete Phase 1 of our Snowflake migration, which is
required before any new data connector work can begin in Q3.

Q3 builds on this with RBAC, SOC 2 readiness, and usage-based pricing.
Q4 opens the connector marketplace and real-time streaming.
```

**Next steps:**
- Review initiative sizing with engineering leads and adjust Now/Next as needed
- Identify owners for each initiative before the quarter begins
- Schedule a roadmap review with the executive team and get sign-off on themes
