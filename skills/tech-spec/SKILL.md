---
name: tech-spec
description: Write a technical specification with problem context, proposed solution, API design, rollout plan, and risks
license: MIT
triggers: ["tech spec", "technical specification", "technical design", "engineering spec", "design doc", "implementation plan"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Tech Spec Writer

## What this skill does

Tech Spec Writer produces a complete technical specification for a new feature, system change, or engineering initiative — structured for engineering team review and implementation handoff. The spec bridges the gap between a product requirement and an implementation plan: it documents the problem context, evaluates solution options, defines the proposed design (including API contracts and data models), lays out a phased rollout plan, and catalogs risks with mitigations. The output reduces ambiguity before a line of code is written.

1. **Problem context and motivation** — Frames why this change is needed now, what the current state looks like, and what would happen if we did nothing
2. **Solution options and decision** — Documents at least two approaches considered, with trade-offs evaluated, before stating the chosen direction
3. **API and data model design** — Concrete endpoint definitions, request/response schemas, and data model changes — the artifacts engineers need to start implementation
4. **Rollout and migration plan** — A phased delivery plan with feature flags, backward compatibility notes, and data migration steps where applicable
5. **Risks and mitigations** — An honest risk register covering technical, operational, and product risks with proposed mitigations for each

## How to invoke

```
/tech-spec
```

Claude will ask:
- What are you building or changing, and what problem does it solve?
- What does the current implementation look like, if there is one?
- What constraints apply — language, framework, existing API contracts, performance requirements?
- Are there known alternative approaches you want evaluated?
- What is the rollout strategy — big bang, phased, feature flagged?

## Workflow steps

### Step 1 — Problem framing and context
Claude writes the problem statement, current state description, and motivation — establishing why this spec exists and what it is meant to solve.

### Step 2 — Solution options and recommendation
Claude documents 2-3 solution approaches (including "do nothing"), evaluates each against the constraints and requirements, and makes a clear recommendation with rationale.

### Step 3 — Technical design
Claude produces the core technical design: API endpoint definitions with request/response schemas, data model changes (new tables, columns, or schema migrations), and component interaction diagrams where useful.

### Step 4 — Rollout plan and risk register
Claude writes a phased rollout plan covering feature flagging, backward compatibility, and data migration, then closes with a risk register documenting each risk's probability, impact, and mitigation.

## Example outputs

### Example: Tech spec for migrating from REST to GraphQL for the Reporting service

**Input:** Our Reporting service currently exposes 14 REST endpoints that are heavily over-fetching — the frontend loads 6-8 endpoints per page view and gets huge payloads it mostly ignores. We want to migrate to GraphQL so the client can request exactly what it needs. We're on Node.js with Express. The mobile team also needs this. We need to keep the REST API working during the transition because some enterprise customers are using it directly.

**Tech spec draft:**
```
# Technical Specification
## GraphQL Migration — Reporting Service

**Author:** [Author]
**Status:** Draft
**Date:** 2026-03-21
**Reviewers:** [Backend Lead], [Frontend Lead], [Mobile Lead], [API Partner Team]
**Target milestone:** Q2 2026 — Phase 1

---

## 1. Problem Statement

### Current State
The Reporting service exposes 14 REST endpoints. Front-end page views that
display a report dashboard make 6-8 sequential or parallel REST calls,
receiving payloads that are 60-80% unused fields (measured via payload
analysis, March 2026). Mobile clients repeat the same pattern but are more
sensitive to payload size on cellular connections.

### Impact
- Dashboard load time: P95 = 4.2 seconds (target: < 2 seconds)
- Average payload per page view: 340KB (target: < 80KB)
- Adding a new field visible only on mobile requires a new REST endpoint or a
  breaking change to an existing one
- 3 enterprise customers use the REST API directly, creating a deprecation
  coordination burden for every API change

### What Happens If We Do Nothing
Dashboard performance will worsen as we add more report types. Mobile will
continue to ship workarounds (caching stale data, field filtering on the
client). The REST API surface area will continue to grow with each feature.
The cost of change increases with each new endpoint.

---

## 2. Goals and Non-Goals

**Goals:**
- Replace internal (web + mobile) REST calls to the Reporting service with a
  GraphQL API that allows clients to request exactly the fields they need
- Reduce average payload per page view from 340KB to under 80KB
- Improve dashboard P95 load time from 4.2s to under 2s
- Maintain backward compatibility with the existing REST API during the
  transition period (minimum 6 months)

**Non-Goals:**
- Migrating other services to GraphQL (Reporting service is a pilot)
- Real-time subscriptions (GraphQL subscriptions are a future consideration)
- Deprecating the REST API before all enterprise customers have migrated
- Replacing the authentication system

---

## 3. Solution Options

### Option A: Full GraphQL replacement (recommended)
Introduce a GraphQL gateway in front of the Reporting service. The gateway
exposes a schema-first GraphQL API. Existing REST endpoints are maintained but
no longer the primary interface for internal clients.

**Pros:**
- Clients query exactly the fields they need — eliminates over-fetching
- Single round-trip for complex dashboard queries via query batching
- Schema introspection simplifies client-side development
- Natural fit for mobile (queries can be tailored per device)

**Cons:**
- Learning curve for engineers unfamiliar with GraphQL
- Caching is more complex (REST HTTP caching does not apply)
- Error handling is non-standard (HTTP 200 with errors in response body)

### Option B: REST with sparse fieldsets (JSON:API style)
Extend the existing REST API to support `?fields=` query parameter filtering
on all endpoints.

**Pros:**
- No new technology; lower learning curve
- HTTP caching still works

**Cons:**
- Does not solve the N+1 request problem (still 6-8 requests per page view)
- Adds complexity to every endpoint and requires client-side coordination
- Does not benefit mobile as much (still large number of round trips)

### Option C: BFF (Backend for Frontend) per client
Build a dedicated REST aggregation layer per client (web BFF, mobile BFF).

**Pros:**
- No client changes needed; each BFF is optimized per client
- Keeps REST semantics

**Cons:**
- Significant maintenance burden — 2+ BFFs to maintain and evolve
- Logic duplication across BFFs
- Does not scale as client types grow (tablet, embedded, partner portal)

**Decision: Option A — Full GraphQL**
GraphQL is the only option that structurally solves both the over-fetching and
N+1 problems while providing a single, evolvable API surface for all clients.
The caching complexity is manageable with persisted queries and a CDN layer.

---

## 4. Technical Design

### 4.1 Architecture Overview

```
Web / Mobile Clients
        │
        │ GraphQL over HTTPS
        ▼
┌─────────────────────────────┐
│   GraphQL Gateway           │
│   (Apollo Server, Node.js)  │
│   - Schema definition       │
│   - DataLoader (batching)   │
│   - Auth middleware (JWT)   │
└───────────┬─────────────────┘
            │ Internal gRPC / REST
            ▼
┌─────────────────────────────┐
│   Reporting Service         │
│   (existing, Node/Express)  │
│   - REST endpoints retained │
│   - New resolver adapters   │
└─────────────────────────────┘
            │
            ▼
┌─────────────────────────────┐
│   PostgreSQL (existing)     │
│   + Redis query cache       │
└─────────────────────────────┘
```

---

### 4.2 GraphQL Schema (Core Types)

```graphql
type Query {
  report(id: ID!): Report
  reports(filter: ReportFilter, pagination: PaginationInput): ReportConnection
  dashboard(id: ID!): Dashboard
  reportMetrics(reportId: ID!, dateRange: DateRangeInput!): ReportMetrics
}

type Report {
  id: ID!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  owner: User!
  status: ReportStatus!
  type: ReportType!
  config: ReportConfig!
  lastRunAt: DateTime
  lastRunDuration: Int  # milliseconds
}

type Dashboard {
  id: ID!
  name: String!
  widgets: [DashboardWidget!]!
  owner: User!
  sharedWith: [User!]!
  createdAt: DateTime!
}

type DashboardWidget {
  id: ID!
  report: Report!
  position: WidgetPosition!
  size: WidgetSize!
  title: String
}

type ReportMetrics {
  reportId: ID!
  dateRange: DateRange!
  rows: Int!
  series: [MetricSeries!]!
}

type MetricSeries {
  label: String!
  values: [MetricDataPoint!]!
}

type MetricDataPoint {
  date: Date!
  value: Float!
}

input ReportFilter {
  status: ReportStatus
  type: ReportType
  ownerId: ID
  createdAfter: DateTime
}

input DateRangeInput {
  start: Date!
  end: Date!
}

input PaginationInput {
  first: Int
  after: String  # cursor
}

enum ReportStatus { DRAFT PUBLISHED ARCHIVED }
enum ReportType { TABLE CHART PIVOT FUNNEL }
```

---

### 4.3 Example Queries

**Dashboard page load (replaces 6 REST calls with 1 GraphQL query):**
```graphql
query DashboardView($dashboardId: ID!, $dateRange: DateRangeInput!) {
  dashboard(id: $dashboardId) {
    id
    name
    widgets {
      id
      title
      position { x y }
      size { width height }
      report {
        id
        name
        status
        reportMetrics(dateRange: $dateRange) {
          rows
          series {
            label
            values { date value }
          }
        }
      }
    }
  }
}
```

**Mobile-optimized report list (minimal fields):**
```graphql
query MobileReportList {
  reports(pagination: { first: 20 }) {
    edges {
      node {
        id
        name
        status
        lastRunAt
      }
    }
    pageInfo { hasNextPage endCursor }
  }
}
```

---

### 4.4 Data Model Changes

No changes to the existing PostgreSQL schema are required for Phase 1. The
GraphQL gateway resolves data from the existing Reporting service REST endpoints
and composes responses at the gateway layer.

**New: Redis query cache**
- Cache key: `graphql:{operationName}:{variablesHash}:{userId}`
- TTL: 60 seconds for dashboard queries, 300 seconds for report list queries
- Cache invalidation: on report update or dashboard widget change events
  (consumed from existing event bus)

**New: Apollo persisted queries store**
- Stored in Redis
- Allows clients to send a query hash instead of the full query string,
  reducing payload size for repeated operations

---

### 4.5 Authentication

Existing JWT validation middleware is ported to the GraphQL gateway. No changes
to token structure or auth flow. The gateway forwards the validated user context
to resolvers for field-level authorization checks (e.g., `sharedWith` on a
Dashboard is only returned if the requesting user is the owner or is in the list).

---

## 5. Rollout Plan

### Phase 1 — Gateway in parallel (Q2 2026, Weeks 1-6)
- Deploy the GraphQL gateway behind a feature flag: `ff_graphql_reporting`
- Internal web frontend begins using GraphQL for one dashboard page (pilot)
- REST API remains fully operational and is the default for all other clients
- Measure: payload size, request count, and latency comparison

### Phase 2 — Web migration (Q2 2026, Weeks 7-12)
- Roll out `ff_graphql_reporting` to 100% of web frontend with gradual ramp
  (5% → 25% → 100% over 2 weeks)
- REST API remains live for enterprise customers and mobile
- Measure: P95 load time, error rate, cache hit rate

### Phase 3 — Mobile migration (Q3 2026)
- Mobile team adopts GraphQL API after Phase 2 is stable
- Dedicated mobile-optimized queries designed with mobile lead

### Phase 4 — REST deprecation (Q4 2026)
- Notify enterprise API customers 90 days in advance
- REST endpoints enter maintenance mode (bug fixes only, no new fields)
- REST endpoints sunset after all enterprise customers have migrated or signed
  migration support agreements

**Backward compatibility guarantee:**
- REST API will remain fully operational for a minimum of 6 months after
  GraphQL Phase 2 goes to 100%
- No breaking changes to REST API during the deprecation window
- Enterprise customers will receive a migration guide and sandbox access

---

## 6. Risks and Mitigations

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| GraphQL N+1 queries degrade performance | High | High | Implement DataLoader for all list resolvers before Phase 1 goes live; load test with production-scale data |
| Apollo Server becomes a single point of failure | Medium | Critical | Deploy gateway in ECS with 3+ replicas behind a load balancer; circuit breaker to fall back to REST if gateway is unhealthy |
| Enterprise customers break on REST changes | Low | High | No breaking changes to REST during deprecation window; add integration tests that run against REST endpoints on every deploy |
| Cache invalidation bugs serve stale data | Medium | Medium | Cache TTLs are short (60-300s); add cache bypass header for debugging; event-driven invalidation with fallback TTL |
| Mobile team schedule slips, Phase 3 delayed | Medium | Low | Phase 3 is not on the critical path; mobile can run REST and GraphQL in parallel during transition |
| GraphQL schema changes break clients | Low | High | Schema linting in CI (graphql-inspector); deprecation warnings before field removal; breaking changes require a minor version bump and 90-day notice |

---

## 7. Open Questions

1. Should we expose the GraphQL endpoint publicly (for third-party developers)
   or keep it internal-only for now?
2. What is the plan for rate limiting GraphQL queries — do we rate limit by
   query cost (complexity) or by request count?
3. Does the enterprise API team want to be included in Phase 1 to test
   compatibility, or do they prefer to wait until Phase 2 is stable?
4. Should we adopt a gateway framework (Apollo Federation) now to support
   future multi-service GraphQL, or keep it simple for the Reporting service
   pilot?

---

## 8. Testing Strategy

- **Unit tests:** Resolver unit tests with mocked data sources; 100% coverage
  on all resolvers
- **Integration tests:** GraphQL operations run against a test database with
  fixture data; included in CI
- **Load testing:** k6 scripts simulating 500 concurrent dashboard loads;
  baseline vs. GraphQL latency and payload comparison
- **Contract tests:** REST API contract tests (Pact) run on every deploy to
  catch unintended breaking changes during the parallel-run period
- **Canary monitoring:** Datadog dashboards tracking P95 latency, error rate,
  and cache hit rate per phase rollout
```

**Decision summary variant:**
```
## GraphQL Migration — Decision Summary

Problem: 6-8 REST calls per page view, 340KB average payload, 4.2s P95 load time.
Solution: GraphQL gateway (Apollo Server) in front of existing Reporting service.

Key decision: GraphQL over REST+fieldsets or per-client BFFs because it solves
both over-fetching AND N+1 requests in a single, maintainable surface.

Rollout: 4 phases over 2 quarters. REST API stays live for 6+ months minimum.
Enterprise customers get 90 days notice before REST deprecation.

Biggest risk: Apollo gateway becoming a SPOF — mitigated with multi-replica
ECS deployment and circuit breaker fallback to REST.
```

**Next steps:**
- Circulate spec for engineering review; resolve the 4 open questions before implementation begins
- Create Phase 1 implementation tickets in the sprint tracker
- Set up the feature flag `ff_graphql_reporting` in the feature flag service before development starts
