---
name: incident-postmortem
description: Write a 5-whys incident postmortem with timeline, root cause analysis, and action items
triggers: ["postmortem", "incident report", "5 whys", "incident review", "outage report", "root cause analysis", "RCA"]
---

# Incident Postmortem Writer

## What this skill does

Incident Postmortem Writer produces a structured, blameless postmortem document from raw incident notes, a Slack thread, a timeline of events, or a verbal description of what went wrong. The output follows the blameless postmortem standard: it identifies systemic root causes rather than assigning individual blame, surfaces contributing factors, and converts lessons learned into concrete, owned action items with due dates. The document is suitable for sharing with the engineering team, leadership, and — where appropriate — customers.

1. **Incident summary** — A concise description of what happened, who was affected, and for how long — written for both technical and non-technical readers
2. **Timeline of events** — A chronological log with timestamps showing detection, escalation, mitigation, and resolution — formatted for easy review
3. **5-Whys root cause analysis** — An iterative "why" chain that traces the immediate trigger back to the systemic root cause
4. **Contributing factors** — Secondary conditions (process gaps, tooling deficiencies, on-call load) that made the incident more likely or more severe
5. **Action items** — Concrete follow-up tasks with owners, due dates, and success criteria — categorized by prevent, detect, and respond

## How to invoke

```
/incident-postmortem
```

Claude will ask:
- What service or system was affected, and what was the user-facing impact?
- What were the start, detection, and resolution times?
- What do you know about the sequence of events and what caused them?
- Were there any contributing factors — recent deploys, config changes, on-call gaps?
- What action items or fixes have already been identified?

## Workflow steps

### Step 1 — Incident summary and impact assessment
Claude writes a crisp incident summary covering: what failed, the user-facing impact, severity level, and affected scope (number of users, services, or regions).

### Step 2 — Timeline construction
Claude organizes raw event notes into a clean chronological timeline with timestamps, actor (who took the action or made the observation), and event description.

### Step 3 — 5-Whys root cause analysis
Claude walks through the 5-Whys chain starting from the immediate failure trigger and drilling down to the systemic root cause, documenting the reasoning at each step.

### Step 4 — Action items and follow-up
Claude generates a structured action item table categorized as: Prevent (stop this from happening), Detect (catch it faster), and Respond (mitigate it faster). Each item has a proposed owner and due date.

## Example outputs

### Example: Database failover incident causing 45 minutes of downtime

**Input:** Last Tuesday around 2am PT our primary Postgres database went down and the automatic failover to the read replica failed. Users got 500 errors for about 45 minutes until an on-call engineer manually promoted the replica. Turned out the replica was behind by about 8 hours of replication lag and nobody had noticed because our replication lag alert had been muted after a previous false positive. There was also a config change to connection pool settings deployed the day before that may have contributed.

**Postmortem draft:**
```
# Incident Postmortem
## Database Failover Failure — 45 Minutes of Full Outage

**Incident ID:** INC-2026-0317
**Severity:** SEV-1
**Date:** 2026-03-17
**Duration:** 45 minutes (02:03 – 02:48 PT)
**Authored by:** [On-call Engineer]
**Review date:** 2026-03-21
**Status:** Draft — pending team review

---

## Incident Summary

At 02:03 PT on March 17, 2026, the primary PostgreSQL database (prod-db-primary)
became unavailable due to an out-of-memory (OOM) event on the host. AWS RDS
attempted automatic failover to the designated read replica (prod-db-replica-1)
but the failover did not complete successfully. Users experienced HTTP 500 errors
across all application endpoints for 45 minutes until an on-call engineer
manually promoted the replica to primary at 02:48 PT.

**User-facing impact:** All authenticated requests returned 500 errors. Users
could not log in, load dashboards, or save data. An estimated 1,200 active
sessions were disrupted. API partners experienced integration failures. No data
was lost.

**Severity:** SEV-1 (complete service unavailability, >1,000 users affected)
**Services affected:** API gateway, web app, all downstream services dependent
on prod-db-primary
**Affected regions:** us-west-2 (primary region)

---

## Timeline

| Time (PT)  | Actor               | Event |
|------------|---------------------|-------|
| 2026-03-16 18:45 | DevOps       | Connection pool config change deployed to production (max_connections increased from 100 to 300) |
| 2026-03-17 02:03 | AWS RDS      | prod-db-primary OOM event; instance becomes unavailable |
| 02:03      | AWS RDS             | Automatic failover initiated to prod-db-replica-1 |
| 02:04      | AWS RDS             | Failover fails; replica promotion aborted (replica lag: 7h 52m) |
| 02:05      | PagerDuty           | SEV-1 alert fired: "prod-db-primary health check failing" |
| 02:07      | On-call (J. Park)   | Paged; acknowledges alert, begins investigation |
| 02:09      | J. Park             | Confirms 500 errors across all endpoints; escalates to Database Lead |
| 02:12      | Database Lead (R. Osei) | Joins incident bridge; identifies failover did not complete |
| 02:18      | R. Osei             | Discovers replica is 7h 52m behind; cannot auto-promote safely |
| 02:22      | R. Osei             | Decision made to manually promote replica despite lag, after confirming no in-flight writes |
| 02:31      | R. Osei             | Manual promotion of prod-db-replica-1 to primary initiated |
| 02:41      | R. Osei             | Promotion complete; application servers begin reconnecting |
| 02:48      | J. Park             | All health checks green; 500 error rate returns to 0%; incident resolved |
| 02:48      | J. Park             | Incident resolved; customer communication sent |
| 03:10      | J. Park             | Postmortem draft initiated |

---

## Root Cause Analysis — 5 Whys

**Immediate trigger:** The primary database became unavailable due to an OOM event.

**Why 1: Why did the OOM event occur?**
The database host ran out of memory because the number of active database
connections spiked beyond what the host could sustain. The previous night's
connection pool config change had increased `max_connections` from 100 to 300,
and a combination of overnight batch jobs and residual connections from the
previous day's traffic exhausted available memory.

**Why 2: Why did the automatic failover fail?**
AWS RDS automated failover requires the replica to be within an acceptable
replication lag threshold to be promoted safely. The replica had 7 hours and
52 minutes of lag — far beyond the acceptable threshold — and RDS aborted the
promotion automatically to prevent data loss.

**Why 3: Why was the replica 7 hours and 52 minutes behind?**
Replication lag had been increasing since approximately 18:00 PT the previous
day, coinciding with the connection pool config change. The increased connection
count created higher write throughput on the primary, and the replica's I/O
capacity was insufficient to keep up with the replication stream under the
increased load.

**Why 4: Why was the replication lag not detected before the incident?**
The replication lag CloudWatch alarm had been muted at 15:30 PT on March 16
by a team member responding to a false positive alert earlier that day. The
alarm was not re-enabled after the false positive was resolved. No secondary
monitoring or scheduled check existed to detect prolonged alarm muting.

**Why 5: Why was there no safeguard against muting critical alarms
indefinitely?**
The team's alerting policy does not prohibit indefinite alarm muting. There
is no process requiring muted alarms to be reviewed or automatically re-enabled
after a set period. There is also no alert for "critical alarm has been muted
for > 4 hours."

**Root Cause:**
The systemic root cause is the absence of a policy and tooling safeguard
preventing critical database monitoring alarms from being silenced without
an expiry or review. This allowed a replication lag condition to go undetected
for nearly 8 hours, rendering the automatic failover mechanism non-functional
when it was needed.

**Contributing Factors:**
1. The connection pool config change (max_connections: 100 → 300) was deployed
   to production without a corresponding increase in replica I/O capacity or
   a load test simulating the new connection ceiling.
2. The change was deployed at 18:45 PT on a Monday with no on-call watch
   period following deployment.
3. Automatic failover had not been tested end-to-end in the production
   environment since the replica was provisioned (8 months ago).
4. Runbooks for manual database promotion existed but were out of date —
   the manual promotion took 9 minutes longer than expected because R. Osei
   had to look up steps in a stale document.

---

## Impact Assessment

| Dimension        | Detail |
|------------------|--------|
| Duration         | 45 minutes (02:03 – 02:48 PT) |
| Users affected   | ~1,200 active sessions; all authenticated users |
| Revenue impact   | Estimated $4,200 (based on MRR/uptime model) |
| API partners affected | 3 (received automated incident notification) |
| Data loss        | None |
| SLA breach       | Yes — monthly uptime fell to 99.86% vs. 99.9% SLA |

---

## What Went Well

- PagerDuty alert fired within 2 minutes of the primary going down
- On-call engineer acknowledged within 2 minutes and escalated quickly
- Database lead correctly identified the replica lag issue within 6 minutes of
  joining the bridge
- The decision to manually promote despite the lag was correct and well-reasoned
- No data was lost despite the unusual failure mode
- Customer communication was sent within 45 minutes of incident start

---

## Action Items

### Prevent

| # | Action | Owner | Due Date | Success Criterion |
|---|--------|-------|----------|-------------------|
| P-01 | Implement alarm mute expiry policy: all SEV-1 monitoring alarms auto-re-enable after 4 hours; add alert for alarms muted > 4 hours | DevOps | 2026-03-28 | Policy enforced in CloudWatch; tested with a mute-expiry simulation |
| P-02 | Add connection pool changes to the "requires load test" change category in the deployment runbook | Engineering Lead | 2026-03-28 | Runbook updated; change reviewed in pre-deployment checklist |
| P-03 | Provision replica with I/O capacity proportional to new max_connections ceiling; re-evaluate replica instance type | DBA | 2026-04-04 | Replica I/O sufficient to sustain replication at 300 connections; lag <60s under synthetic load |
| P-04 | Require a post-deploy watch period of 2 hours for all database config changes, with on-call monitoring key metrics | Process | 2026-03-28 | Added to deployment checklist and runbook |

### Detect

| # | Action | Owner | Due Date | Success Criterion |
|---|--------|-------|----------|-------------------|
| D-01 | Add CloudWatch alarm: replica lag > 30 minutes triggers PagerDuty P2 alert | DevOps | 2026-03-25 | Alarm live in CloudWatch; tested with a simulated lag event |
| D-02 | Add CloudWatch alarm: replica lag > 2 hours triggers PagerDuty P1 alert | DevOps | 2026-03-25 | Alarm live and verified |
| D-03 | Add weekly automated report of all currently muted alarms to the engineering Slack channel | DevOps | 2026-04-04 | Report running every Monday at 09:00 PT |

### Respond

| # | Action | Owner | Due Date | Success Criterion |
|---|--------|-------|----------|-------------------|
| R-01 | Update manual database promotion runbook to match current RDS configuration and tooling | DBA | 2026-03-28 | Runbook tested by a second engineer unfamiliar with the process; promotion completed in < 10 minutes |
| R-02 | Schedule quarterly failover drill: simulate primary OOM event in staging and exercise the full failover runbook | Engineering Lead | 2026-06-21 | First drill completed; time-to-recovery under 15 minutes |
| R-03 | Document threshold for "acceptable replica lag for manual promotion" in the incident runbook | DBA | 2026-03-28 | Threshold documented; linked from PagerDuty alert description |

---

## Follow-up

- **Postmortem review meeting:** 2026-03-24, 14:00 PT — all action item owners
- **Customer SLA credit:** Finance to issue SLA credits per contract terms
- **Next status check on action items:** 2026-04-07

---

*This document is a blameless postmortem. The goal is to identify systemic
improvements, not to assign individual responsibility. All findings are shared
in the spirit of learning and making our systems more resilient.*
```

**Short executive briefing variant:**
```
## INC-2026-0317 — Executive Summary

On March 17 at 2:03am PT, our primary database went down due to a memory
exhaustion event. Automatic failover failed because the backup replica was
nearly 8 hours behind on replication — a condition that went undetected because
a critical monitoring alarm had been muted the evening before and never
re-enabled.

Duration: 45 minutes | Users affected: ~1,200 | Data loss: none

Root cause: No safeguard preventing critical alarms from being silenced
indefinitely. The immediate trigger was a connection pool configuration change
that increased database load faster than the replica could keep up.

9 action items are in progress. Key near-term fixes: alarm mute expiry policy
(by March 28), replica lag alerting (by March 25), and updated failover runbook
(by March 28). Quarterly failover drills begin Q2.
```

**Next steps:**
- Schedule the postmortem review meeting with all action item owners within 5 business days
- Assign each action item in Jira or your issue tracker with the due date and owner
- Send the executive summary to leadership and the customer-facing incident update to affected customers
