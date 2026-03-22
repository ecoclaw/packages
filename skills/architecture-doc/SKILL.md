---
name: architecture-doc
description: Write an architecture design document with system overview, component diagram (ASCII), data flow, and decision log
triggers: ["architecture doc", "architecture document", "system design", "design doc", "technical architecture", "ADR"]
---

# Architecture Doc Writer

## What this skill does

Architecture Doc Writer produces a full, structured architecture design document for a new system, service, or major technical initiative. It covers the full range of what a strong arch doc requires: system context, component breakdown, an ASCII architecture diagram, data flow walkthrough, technology decisions with rationale and trade-offs, and an open questions log. The output is suitable for engineering team review, tech lead sign-off, and long-term institutional knowledge.

1. **System context and scope** — Defines what the system does, what it does not do, and how it fits within the broader technical ecosystem
2. **Component breakdown** — Documents each logical component: its responsibility, interface, and deployment model
3. **ASCII architecture diagram** — A text-based diagram that renders in any tool — Confluence, GitHub, Notion, or a terminal — without requiring external diagramming software
4. **Data flow walkthrough** — Traces the critical paths through the system, showing how data moves from ingestion to storage to consumption
5. **Architecture Decision Records (ADRs)** — Documents key technology choices with the context, options considered, decision made, and trade-offs accepted

## How to invoke

```
/architecture-doc
```

Claude will ask:
- What is the system or service you are documenting?
- What problem does it solve, and what are its primary functional requirements?
- What existing systems does it interact with or replace?
- What technology stack or constraints apply (language, cloud provider, existing infra)?
- Who will review this document — engineers only, or also non-technical stakeholders?

## Workflow steps

### Step 1 — Context and scope definition
Claude establishes the system boundary: what is in scope, what external systems it depends on, and what explicit non-goals the architecture respects.

### Step 2 — Component and interface design
Claude identifies the major logical components, describes each one's responsibility, and documents the interfaces between them (API contracts, message schemas, or shared storage).

### Step 3 — Diagram and data flow
Claude produces an ASCII architecture diagram and narrates the primary data flow paths through the system, including both the happy path and key failure modes.

### Step 4 — Decision log and open questions
Claude writes ADR entries for each significant technology choice, then closes with a log of open architectural questions that need resolution before implementation begins.

## Example outputs

### Example: Architecture doc for a real-time event processing service

**Input:** We need a real-time event processing service that receives user activity events from our web and mobile clients, enriches them with user profile data, applies business rules to classify them (e.g., "churn risk," "upsell signal"), and then routes them to downstream consumers: our data warehouse, a CRM webhook, and an in-app notification service. We're on AWS. We need to handle 10,000 events/sec at peak. We already have Kafka in-house.

**Architecture doc draft:**
```
# Architecture Design Document
## Real-Time Event Processing Service (REPS)

**Author:** [Author]
**Status:** Draft — for review
**Date:** 2026-03-21
**Reviewers:** [Engineering Lead], [Data Platform Lead], [Security]

---

## 1. Context and Goals

### Problem Statement
User activity events from web and mobile clients are currently batch-processed
overnight. This 24-hour latency prevents the CRM team from acting on churn
signals in time to intervene, and prevents in-app notifications from being
relevant to recent user behavior.

### Goals
- Ingest user activity events at up to 10,000 events/second at peak load
- Enrich each event with current user profile data in under 500ms end-to-end
- Apply configurable classification rules (churn risk, upsell signal, etc.)
- Route classified events to: data warehouse (Snowflake), CRM (Salesforce
  webhook), and in-app notification service
- Achieve end-to-end P99 latency under 2 seconds from event emission to
  downstream delivery

### Non-Goals
- This service does not replace the existing batch pipeline (which will run
  in parallel for historical backfill)
- This service does not store raw events permanently (Kafka retention handles
  short-term; Snowflake handles long-term)
- This service does not execute notifications directly — it routes signals to
  the notification service, which owns delivery

---

## 2. System Context

External systems that interact with REPS:

| System | Direction | Protocol | Description |
|---|---|---|---|
| Web client | → REPS | HTTPS/REST | Emits user activity events |
| Mobile client | → REPS | HTTPS/REST | Emits user activity events |
| User Profile Service | REPS → | gRPC | Profile enrichment lookup |
| Apache Kafka | REPS ↔ | Kafka protocol | Event bus (existing infra) |
| Snowflake | ← REPS | Snowflake Kafka Connector | Long-term event storage |
| Salesforce | ← REPS | HTTPS Webhook | CRM signal routing |
| Notification Service | ← REPS | Kafka topic | In-app notification triggers |

---

## 3. Architecture Overview

### ASCII Diagram

```
                    ┌─────────────┐    ┌─────────────┐
                    │  Web Client │    │Mobile Client│
                    └──────┬──────┘    └──────┬──────┘
                           │ HTTPS             │ HTTPS
                           └─────────┬─────────┘
                                     ▼
                           ┌─────────────────┐
                           │  API Gateway    │
                           │  (AWS API GW)   │
                           └────────┬────────┘
                                    │ POST /events
                                    ▼
                           ┌─────────────────┐
                           │  Event Ingestion │
                           │  Service (ECS)  │◄──── Auth (JWT validation)
                           └────────┬────────┘
                                    │ Produce
                                    ▼
                    ┌───────────────────────────────┐
                    │        Apache Kafka            │
                    │   Topic: raw-events            │
                    └───────────┬───────────────────┘
                                │ Consume
                                ▼
                    ┌───────────────────────────┐
                    │   Enrichment Processor     │
                    │   (ECS, 4 replicas)        │──► User Profile Service (gRPC)
                    └───────────┬───────────────┘     (Redis cache, 60s TTL)
                                │ Produce
                                ▼
                    ┌───────────────────────────────┐
                    │        Apache Kafka            │
                    │   Topic: enriched-events       │
                    └───────────┬───────────────────┘
                                │ Consume
                                ▼
                    ┌───────────────────────────┐
                    │   Classification Engine    │
                    │   (ECS, rule engine)       │
                    └───────────┬───────────────┘
                                │ Produce
                      ┌─────────┴──────────┐
                      ▼                    ▼
           Topic: classified-events   Topic: notification-signals
                      │                    │
          ┌───────────┤                    ▼
          │           │        ┌───────────────────────┐
          │           │        │  Notification Service  │
          │           │        │  (existing, separate)  │
          │           │        └───────────────────────┘
          ▼           ▼
   ┌────────────┐  ┌──────────────────┐
   │ Snowflake  │  │ Salesforce       │
   │ Connector  │  │ Webhook Router   │
   │ (managed)  │  │ (ECS, async)     │
   └────────────┘  └──────────────────┘
```

---

## 4. Component Descriptions

### 4.1 Event Ingestion Service
**Responsibility:** Accept incoming events from web and mobile clients, validate
schema, authenticate the request (JWT), and produce to the `raw-events` Kafka
topic.

**Key interfaces:**
- `POST /v1/events` — accepts a JSON event payload; returns 202 Accepted
- Produces to Kafka topic `raw-events` with event_id, source, timestamp,
  user_id, and raw payload

**Deployment:** ECS Fargate, auto-scaling 2-12 replicas based on CPU/request
count. Behind AWS API Gateway for throttling and DDoS protection.

**Error handling:** If Kafka is unavailable, ingestion service returns 503 and
client should retry with exponential backoff. Dead-letter queue for
schema-invalid events.

---

### 4.2 Enrichment Processor
**Responsibility:** Consume from `raw-events`, fetch user profile data from
the User Profile Service, attach profile attributes to the event, and produce
the enriched event to `enriched-events`.

**Key interfaces:**
- Kafka consumer group: `enrichment-processor`
- gRPC call to User Profile Service: `GetUserProfile(user_id)`
- Redis cache layer: 60-second TTL on profile lookups to reduce gRPC load

**Deployment:** ECS Fargate, 4 fixed replicas (scaled to handle 10K events/sec
with <200ms processing time per event based on load testing).

**Error handling:** If User Profile Service is unavailable, emit event with
`profile_enrichment: failed` flag and route to `enriched-events` anyway so
downstream systems can decide. Alert on >5% enrichment failure rate.

---

### 4.3 Classification Engine
**Responsibility:** Consume enriched events and apply configurable business
rules to assign classification labels (e.g., `churn_risk`, `upsell_signal`,
`power_user`, `inactive`). Produce labeled events to `classified-events` and
route notification-worthy signals to `notification-signals`.

**Key interfaces:**
- Rule configuration loaded from DynamoDB at startup; refreshed every 5 minutes
- Kafka consumer group: `classification-engine`
- Produces to: `classified-events`, `notification-signals`

**Deployment:** ECS Fargate, 2-8 replicas (CPU-based autoscaling).

**Rule engine:** Rules are defined as JSON conditions evaluated against event
attributes. Non-engineers can author rules via an internal admin UI (separate
initiative).

---

### 4.4 Salesforce Webhook Router
**Responsibility:** Consume from `classified-events` filtered to CRM-relevant
labels, transform to Salesforce event schema, and POST to Salesforce REST API.

**Key interfaces:**
- Kafka consumer group: `sfdc-router`
- Salesforce REST API: `/sobjects/CustomEvent__c`

**Deployment:** ECS Fargate, 1-2 replicas. Rate-limited to Salesforce API
limits (15,000 calls/day on current plan).

**Error handling:** Retry with exponential backoff on 429/5xx. Failed deliveries
go to a DLQ with alerting. Log all deliveries to CloudWatch.

---

## 5. Data Flow — Primary Path

1. Mobile client emits a `session_end` event with `user_id`, `duration_seconds`,
   and `feature_flags_used`.
2. API Gateway authenticates the JWT and routes to the Ingestion Service.
3. Ingestion Service validates the schema, assigns an `event_id`, and produces
   to `raw-events`.
4. Enrichment Processor consumes the event, fetches the user's plan tier,
   account age, and last_active from Redis (or User Profile Service on cache
   miss), and produces to `enriched-events`.
5. Classification Engine evaluates the enriched event: `duration_seconds < 60`
   AND `account_age_days > 30` AND `plan = "pro"` → label: `churn_risk`.
6. The classified event is produced to both `classified-events` (→ Snowflake)
   and `notification-signals` (→ Notification Service).
7. The Notification Service triggers an in-app "We noticed you had a short
   session — need help?" message.
8. The Salesforce Webhook Router sends a CRM activity record so the CSM sees
   the churn signal in their queue.

---

## 6. Architecture Decision Records

### ADR-001: Apache Kafka as the event bus
**Context:** We need a durable, high-throughput message bus for 10K events/sec.
**Options considered:** AWS Kinesis, AWS SQS/SNS, Apache Kafka (existing)
**Decision:** Kafka (existing infra)
**Rationale:** Kafka is already deployed and operationally understood by the
team. Kinesis would require new operational knowledge and has a 1MB message
limit. SQS lacks log compaction and replay semantics we need for enrichment
retries.
**Trade-offs accepted:** We accept Kafka's operational overhead and the need
to manage consumer group offsets manually.

### ADR-002: Redis cache for profile enrichment
**Context:** The User Profile Service cannot handle 10K gRPC calls/sec without
significant scaling investment.
**Options considered:** No cache (direct gRPC), Redis (managed ElastiCache),
DynamoDB DAX
**Decision:** Redis via AWS ElastiCache
**Rationale:** Profile data changes infrequently (minutes to hours). A 60-second
TTL provides acceptable freshness while reducing User Profile Service load by
an estimated 85% based on our cache hit rate projections.
**Trade-offs accepted:** Classification decisions in the first 60 seconds after
a profile change may use stale data.

### ADR-003: ECS Fargate over Lambda for processing
**Context:** Each processing stage needs persistent Kafka consumer group
membership.
**Options considered:** AWS Lambda with Kafka trigger, ECS Fargate long-running
tasks
**Decision:** ECS Fargate
**Rationale:** Lambda's stateless execution model causes frequent Kafka consumer
group rebalances at 10K events/sec, adding unacceptable latency. Fargate
long-running containers maintain stable consumer group membership.
**Trade-offs accepted:** Higher base cost than Lambda; requires managing ECS
task definitions and health checks.

---

## 7. Open Questions

1. What is the Kafka retention period for `raw-events`? 7 days is our default
   but this drives storage costs significantly at 10K events/sec.
2. How do we handle backpressure if Snowflake ingestion falls behind? Should
   we pause the connector or allow the Kafka topic to grow?
3. What is the SLA for notification delivery after classification? The
   Notification Service owns this but we need to agree on an E2E SLA.
4. Does the Classification Engine need to support multi-label events (one event
   can be both `churn_risk` and `upsell_signal`)?
5. What is the plan for replaying historical events through the new pipeline
   for backfill of the `classified-events` Snowflake table?
```

**One-page executive summary variant:**
```
## REPS — Architecture Summary (Non-Technical)

The Real-Time Event Processing Service replaces our overnight batch process with
a streaming pipeline that processes user behavior signals within 2 seconds.

Events from web and mobile → Kafka → enriched with user data → classified by
business rules → delivered to Snowflake (analytics), Salesforce (CRM), and our
notification system.

Key technology choices: Apache Kafka (existing, reused), Redis cache (reduces
User Profile Service load by 85%), AWS ECS Fargate (stable, scalable).

Built to handle 10,000 events/second at peak. Primary use case: detecting
churn risk signals and surfacing them to CSMs and in-app messages in real time
rather than the next morning.
```

**Next steps:**
- Circulate for engineering review; collect feedback on ADRs and open questions
- Schedule an architecture review meeting to resolve the 5 open questions
- Begin infrastructure provisioning for Kafka topics and ECS task definitions once ADRs are signed off
