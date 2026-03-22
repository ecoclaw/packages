---
name: prd-writer
description: Write a full Product Requirements Document with problem statement, goals, user stories, and success metrics
triggers: ["PRD", "product requirements", "product spec", "requirements document", "product document", "feature spec"]
---

# PRD Writer

## What this skill does

PRD Writer produces a complete, structured Product Requirements Document ready for engineering handoff and stakeholder review. It translates a rough feature idea or problem statement into a disciplined document covering problem framing, goal alignment, user stories, functional and non-functional requirements, and measurable success criteria. The output follows a format recognized across product orgs and can be adapted for Confluence, Notion, or Google Docs.

1. **Problem Statement** — A crisp articulation of the user or business problem being solved, grounded in evidence
2. **Goals and Non-Goals** — Explicit scope boundaries so engineering and design know what is and is not in play
3. **User Personas and Stories** — Named, realistic personas with user stories in standard As a / I want / So that format
4. **Functional and Non-Functional Requirements** — Numbered requirement lists covering behavior, performance, security, and accessibility
5. **Success Metrics** — Quantified KPIs tied to business and user outcomes, with measurement method and baseline

## How to invoke

```
/prd-writer
```

Claude will ask:
- What is the feature or product area you are documenting?
- Who are the primary users or personas affected?
- What problem are you solving, and what evidence do you have for it?
- What does success look like — what metrics will you track?
- Are there known constraints, dependencies, or out-of-scope items?

## Workflow steps

### Step 1 — Problem framing
Claude synthesizes the inputs into a crisp problem statement and opportunity summary, establishing the "why" before any requirements are written.

### Step 2 — Goals and non-goals
Claude drafts a bulleted goals list (measurable, time-bound where possible) and an explicit non-goals list to prevent scope creep and set reviewer expectations.

### Step 3 — Personas and user stories
Claude identifies 2-3 user personas from the inputs and writes user stories in As a / I want / So that format, covering the primary happy path plus at least one edge case per persona.

### Step 4 — Requirements and success metrics
Claude produces numbered functional requirements (what the system must do) and non-functional requirements (performance, security, accessibility, scalability), then closes with a success metrics table tied to the stated goals.

## Example outputs

### Example: User notification preferences feature

**Input:** We need users to be able to control which email and push notifications they receive. Right now everyone gets everything and unsubscribe rates are rising. The PM wants something shipped in Q3.

**PRD draft:**
```
# PRD: User Notification Preferences Center

**Author:** [PM Name]
**Status:** Draft
**Last updated:** 2026-03-21
**Target release:** Q3 2026

---

## Problem Statement

Users receive all platform notifications by default with no ability to opt out of
specific categories. This has resulted in a 22% unsubscribe rate from our
transactional email list over the past two quarters, and a 34% push notification
disable rate on mobile (Source: Amplitude, Q1 2026). Users who disable all
notifications are 3x more likely to churn within 60 days. We need granular
notification controls to preserve engagement without overwhelming users.

---

## Goals

- Reduce overall email unsubscribe rate from 22% to under 10% within 90 days
  of launch
- Reduce push notification disable rate from 34% to under 18% within 90 days
  of launch
- Ship a self-serve notification preferences UI accessible within 2 clicks from
  account settings
- Support at least 6 distinct notification categories at launch

## Non-Goals

- Real-time in-app notification center (separate initiative, H2 2026)
- SMS notification preferences (not yet a supported channel)
- Digest/frequency controls (batching — next iteration)
- Admin-controlled notification policies for enterprise accounts (future)

---

## User Personas

**Persona 1 — Maya, the Power User**
Maya uses the platform daily for project management. She wants product update
notifications but finds billing and marketing emails disruptive during her
workday.

**Persona 2 — Daniel, the Occasional User**
Daniel logs in 1-2x per month. He wants to receive only critical alerts
(account security, billing) and nothing promotional.

**Persona 3 — Priya, the Team Admin**
Priya manages a 40-person team account. She wants to ensure her team members
receive all activity notifications but does not manage individual preferences
on their behalf.

---

## User Stories

**Maya (Power User)**
- As a power user, I want to enable only product update notifications so that
  I stay informed about features without inbox clutter.
- As a power user, I want my preferences to persist across devices so that I
  don't have to reconfigure them after logging in on mobile.

**Daniel (Occasional User)**
- As an occasional user, I want to disable all non-critical notifications in
  one click so that I do not have to toggle each category individually.
- As an occasional user, I want to receive a confirmation email when I update
  my preferences so that I know the changes took effect.

**Priya (Team Admin)**
- As a team admin, I want to view (but not override) my team members'
  notification settings so that I can identify if critical alerts are being
  missed.

---

## Functional Requirements

FR-01  Users must be able to view all notification categories on a single
       preferences page.
FR-02  Users must be able to toggle each category on or off independently for
       email and push channels separately.
FR-03  The system must provide a "Pause all notifications" option with a
       configurable resume date (1 day, 1 week, 1 month).
FR-04  Preference changes must take effect within 5 minutes of saving.
FR-05  The system must send a confirmation email when preferences are saved
       (this notification cannot be disabled).
FR-06  Users must be able to export a summary of their preferences in PDF
       format for record-keeping.
FR-07  The preferences page must be reachable from the account settings menu
       in no more than 2 clicks.
FR-08  The system must retain a 12-month history of preference changes for
       audit purposes.

## Non-Functional Requirements

NFR-01  The preferences page must load in under 1.5 seconds at P95 on a 4G
        mobile connection.
NFR-02  Preference updates must be processed idempotently — duplicate saves
        must not trigger duplicate confirmation emails.
NFR-03  The UI must meet WCAG 2.1 AA accessibility standards.
NFR-04  Preference data must be stored encrypted at rest (AES-256).
NFR-05  The preferences API must support 500 concurrent write requests per
        second without degradation.
NFR-06  The feature must support all browsers listed in the current browser
        support matrix (IE excluded).

---

## Success Metrics

| Metric                        | Baseline  | Target    | Measurement          | Timeline |
|-------------------------------|-----------|-----------|----------------------|----------|
| Email unsubscribe rate        | 22%       | < 10%     | SendGrid dashboard   | 90 days  |
| Push disable rate             | 34%       | < 18%     | Amplitude            | 90 days  |
| Preferences page adoption     | N/A       | 40% of MAU| Product analytics    | 60 days  |
| Support tickets re: notif.    | 180/month | < 60/month| Zendesk              | 60 days  |
| 60-day retention (notif. off) | 33%       | > 50%     | Amplitude cohort     | 120 days |

---

## Open Questions

1. Should preference changes apply retroactively to emails already queued in
   the send pipeline?
2. Do we need a re-engagement prompt if a user disables all notifications for
   more than 30 days?
3. How do we handle notification preferences for users who sign up via SSO
   and have not set a password?

---

## Out of Scope

- Notification content editing or personalization
- A/B testing framework for notification copy
- Preference inheritance for sub-accounts or child workspaces
```

**Condensed executive summary variant:**
```
## Notification Preferences — One-Pager Summary

Problem: 22% email unsubscribe rate and 34% push disable rate are driving churn.
Solution: Self-serve notification preferences center with per-category toggles.
Target: Q3 2026 | Owner: [PM Name]

Goals: Reduce unsubscribe rate to <10%, push disable to <18% within 90 days.
Non-goals: SMS, digest controls, admin overrides.

Key requirements: Category-level toggles, pause-all option, <5 min propagation,
WCAG 2.1 AA compliant, loads <1.5s P95 mobile.

Success: Tracked via SendGrid, Amplitude, and Zendesk at 60 and 90 days.
```

**Next steps:**
- Share draft with engineering lead and design for feasibility review
- Schedule a PRD walkthrough with stakeholders before moving to detailed design
- Add any open questions as Jira tickets tagged for pre-sprint clarification
