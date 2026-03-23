---
name: code-review-summary
description: Summarize code review feedback into categorized, prioritized findings with actionable recommendations
license: MIT
triggers: ["code review", "PR review", "pull request review", "code feedback", "review summary"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Code Review Summary

## What this skill does

Code Review Summary takes raw code review comments — whether from a PR diff, a list of reviewer notes, inline comments exported from GitHub or GitLab, or a verbal description of concerns — and produces a structured, prioritized review document. Findings are organized into four tiers: Critical (must fix before merge), Major (should fix in this PR or immediately after), Minor (worth fixing, but non-blocking), and Nitpicks (style or preference, optional). Each finding includes the file and line reference, a clear explanation of the problem, and a concrete suggested fix.

1. **Categorized findings** — Issues sorted by severity so the author knows exactly what must be addressed versus what is optional, reducing review friction
2. **Explanation and context** — Each finding explains not just what is wrong but why it matters — security risk, correctness bug, performance impact, or maintainability concern
3. **Suggested fixes** — Where possible, includes a corrected code snippet or a specific alternative approach, not just a complaint
4. **Positive observations** — Notes what was done well, reinforcing good practices and making the review feel constructive rather than adversarial
5. **Merge readiness assessment** — A clear bottom-line: ready to merge, ready after specific changes, or needs significant rework

## How to invoke

```
/code-review-summary
```

Claude will ask:
- What is the PR doing — what is the feature, fix, or change?
- What are the raw review comments or findings to organize?
- What language and framework is the code in?
- Are there any known constraints — performance SLAs, security requirements, style guide?
- Is there a specific reviewer whose perspective should be centered (e.g., security, performance)?

## Workflow steps

### Step 1 — Finding categorization
Claude reads all review comments and categorizes each as Critical, Major, Minor, or Nitpick based on the potential impact: correctness bugs and security issues are Critical; design and maintainability issues are Major; style and clarity issues are Minor or Nitpick.

### Step 2 — Explanation enrichment
For each finding, Claude adds context explaining why the issue matters — not just what the reviewer flagged. This helps authors understand and internalize the feedback rather than just mechanically fixing it.

### Step 3 — Suggested fix generation
Claude writes a concrete suggested fix for each finding: a corrected code snippet, a recommended pattern, or a link to the relevant documentation or standard.

### Step 4 — Summary and merge readiness
Claude writes an overall summary of the review, calls out what was done well, and gives a clear merge readiness verdict with the specific blockers listed.

## Example outputs

### Example: Code review summary for a new authentication middleware PR

**Input:**
```
PR: Add JWT authentication middleware for API routes
Language: TypeScript / Node.js / Express

Raw review comments:
1. The JWT secret is being read from process.env.JWT_SECRET but there's no check if it's undefined - if the env var isn't set the server will still start and tokens will be signed with "undefined"
2. You're using jwt.verify() without catching the TokenExpiredError specifically - all JWT errors are caught the same way and return 401, but we should distinguish expired vs invalid so clients can handle refresh differently
3. The middleware is being applied to ALL routes including the /health endpoint - health checks shouldn't require auth
4. Good use of the express-async-errors package to avoid try/catch boilerplate
5. The token extraction regex could just use req.headers.authorization?.split(' ')[1] instead of the regex - simpler and easier to read
6. There's no rate limiting on failed auth attempts - someone could brute force token guessing
7. The middleware function is 87 lines long - the token extraction, validation, and user lookup should probably be separate functions
8. Missing unit tests for the expired token and malformed token cases
9. Variable name "t" for the decoded token is too short - use "decodedToken" or "payload"
10. The user lookup after token validation hits the database on every request - should we cache this?
```

**Code review summary draft:**
```
# Code Review Summary
## PR: Add JWT Authentication Middleware
**Language:** TypeScript / Node.js / Express
**Reviewer summary compiled:** 2026-03-21
**Overall verdict:** Needs changes before merge — 2 critical issues must be resolved

---

## Merge Readiness

NOT READY TO MERGE

**Blockers (must fix):**
- JWT_SECRET undefined check (C-01) — server will silently sign tokens with
  "undefined" if env var is missing
- Missing rate limiting on auth failures (C-02) — brute-force vulnerability

All other findings are non-blocking but M-01 and M-03 are strongly recommended
for this PR.

---

## What Was Done Well

- Smart use of `express-async-errors` to eliminate repetitive try/catch
  boilerplate across middleware — this is the right pattern for Express async
  middleware and makes the error handling clean.
- The overall structure of the middleware (extract → verify → lookup → attach)
  follows a logical, readable sequence.
- Auth is being applied at the router level rather than per-route, which is the
  correct approach for a default-secure posture.

---

## Critical — Must Fix Before Merge

### C-01: JWT secret falls back to "undefined" if env var is not set
**File:** `src/middleware/auth.ts` **Line:** 12
**Severity:** Critical — Security / Correctness

**Problem:** `process.env.JWT_SECRET` is read at runtime without a guard. If
`JWT_SECRET` is not set in the environment (e.g., in a new deployment or CI),
`jwt.sign()` and `jwt.verify()` will use the string `"undefined"` as the
secret. The server starts without error, and all tokens signed in this broken
state will appear valid to other instances also running with the same
misconfiguration. This is a silent, severe security failure.

**Current code:**
```typescript
const secret = process.env.JWT_SECRET;
```

**Suggested fix:**
```typescript
const secret = process.env.JWT_SECRET;
if (!secret) {
  throw new Error(
    'JWT_SECRET environment variable is not set. ' +
    'Server cannot start without a signing secret.'
  );
}
```
Place this check at module initialization time (outside the middleware
function) so the server fails fast on startup rather than silently
misbehaving. Add `JWT_SECRET` to your `.env.example` and deployment
runbook.

---

### C-02: No rate limiting on authentication failures
**File:** `src/middleware/auth.ts` **Line:** N/A (missing feature)
**Severity:** Critical — Security

**Problem:** Failed authentication attempts (invalid tokens, wrong credentials)
are not rate-limited. An attacker can make unlimited authentication requests
without consequence, enabling brute-force attacks against token guessing or
any credential-based endpoints that use this middleware.

**Suggested fix:**
Use `express-rate-limit` scoped to the `/api/` prefix with a strict limit
on 401 responses:

```typescript
import rateLimit from 'express-rate-limit';

export const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // max 20 failed requests per window per IP
  skipSuccessfulRequests: true, // only count failed auth
  message: { error: 'Too many failed requests, please try again later.' },
});
```

Apply before the auth middleware on protected routes. Consider using
`rate-limit-redis` if you need distributed rate limiting across multiple
instances.

---

## Major — Should Fix in This PR

### M-01: TokenExpiredError not distinguished from other JWT errors
**File:** `src/middleware/auth.ts` **Line:** 34
**Severity:** Major — Client UX / API contract

**Problem:** All JWT verification errors are caught uniformly and return a
generic 401. Clients cannot distinguish between an expired token (which they
should handle by refreshing) and an invalid/tampered token (which requires
re-authentication). This forces clients to re-authenticate on every token
expiry instead of silently refreshing, degrading the user experience.

**Current code:**
```typescript
} catch (err) {
  return res.status(401).json({ error: 'Unauthorized' });
}
```

**Suggested fix:**
```typescript
} catch (err) {
  if (err instanceof jwt.TokenExpiredError) {
    return res.status(401).json({
      error: 'TOKEN_EXPIRED',
      message: 'Your session has expired. Please refresh your token.',
    });
  }
  return res.status(401).json({
    error: 'INVALID_TOKEN',
    message: 'Authentication token is invalid.',
  });
}
```
Clients can then check `error === 'TOKEN_EXPIRED'` and trigger a token
refresh flow rather than a full logout.

---

### M-02: Auth middleware applied to /health endpoint
**File:** `src/routes/index.ts` **Line:** 8
**Severity:** Major — Operational reliability

**Problem:** The `authMiddleware` is applied globally before all routes,
including `/health`. Health checks are used by load balancers, Kubernetes
liveness probes, and uptime monitors — none of which send auth tokens. This
means your service will appear unhealthy to infrastructure monitoring even
when the application itself is functioning correctly, potentially triggering
false-positive restarts or traffic disruption.

**Suggested fix:**
```typescript
// Apply auth middleware only to protected routes
router.use('/api', authMiddleware);
router.get('/health', healthCheckHandler); // no auth middleware
```
Alternatively, add a path exclusion list to the middleware itself, though
route-level application is cleaner.

---

### M-03: Missing unit tests for error cases
**File:** `src/middleware/auth.test.ts` (missing or incomplete)
**Severity:** Major — Test coverage

**Problem:** The expired token and malformed token code paths are not covered
by unit tests. These are the most security-sensitive branches of the
middleware and the most likely to regress if the JWT library is upgraded or
the error handling is refactored.

**Suggested fix:** Add the following test cases to the middleware test suite:

```typescript
describe('authMiddleware error cases', () => {
  it('returns 401 with TOKEN_EXPIRED when token is expired', async () => {
    const expiredToken = jwt.sign({ userId: '123' }, secret, { expiresIn: -1 });
    const res = await request(app)
      .get('/api/protected')
      .set('Authorization', `Bearer ${expiredToken}`);
    expect(res.status).toBe(401);
    expect(res.body.error).toBe('TOKEN_EXPIRED');
  });

  it('returns 401 with INVALID_TOKEN for a malformed token', async () => {
    const res = await request(app)
      .get('/api/protected')
      .set('Authorization', 'Bearer not-a-real-token');
    expect(res.status).toBe(401);
    expect(res.body.error).toBe('INVALID_TOKEN');
  });

  it('returns 401 when Authorization header is missing', async () => {
    const res = await request(app).get('/api/protected');
    expect(res.status).toBe(401);
  });
});
```

---

## Minor — Non-Blocking, Worth Fixing

### m-01: Middleware function is too long (87 lines)
**File:** `src/middleware/auth.ts`
**Severity:** Minor — Maintainability

The middleware function mixes token extraction, validation, and user lookup
in a single 87-line function. Extract these into named helpers:
`extractBearerToken(req)`, `verifyToken(token, secret)`, and
`lookupUser(userId)`. This makes each piece independently testable and the
main middleware function easy to read at a glance.

---

### m-02: Consider caching the user lookup
**File:** `src/middleware/auth.ts` **Line:** 52
**Severity:** Minor — Performance (worth discussing)

The middleware performs a database lookup on every authenticated request to
fetch the user record after validating the JWT. Depending on request volume,
this can become a meaningful database load. Consider a short-lived cache
(Redis, 60-second TTL keyed on `userId`) for the user record. Note: caching
means revoked accounts could still be recognized as valid for up to 60
seconds — decide if that trade-off is acceptable for your threat model.

---

## Nitpicks — Optional Style

### n-01: Variable name "t" is too short
**File:** `src/middleware/auth.ts` **Line:** 41

```typescript
// Current
const t = jwt.verify(token, secret);

// Suggested
const decodedToken = jwt.verify(token, secret) as JwtPayload;
```
Also add the type cast — `jwt.verify` returns `string | JwtPayload` and the
type narrowing avoids a runtime error if the payload is a string.

---

### n-02: Token extraction can use optional chaining instead of regex
**File:** `src/middleware/auth.ts` **Line:** 18
**Severity:** Nitpick — Readability

```typescript
// Current (regex)
const token = req.headers.authorization?.match(/^Bearer (.+)$/)?.[1];

// Suggested (simpler)
const token = req.headers.authorization?.split(' ')[1];
```
Both work. The split version is more immediately readable to someone
unfamiliar with the regex pattern.

---

## Summary Table

| ID   | Severity | Description                                      | Blocking? |
|------|----------|--------------------------------------------------|-----------|
| C-01 | Critical | JWT_SECRET undefined allows silent misconfiguration | Yes |
| C-02 | Critical | No rate limiting on auth failures (brute force risk) | Yes |
| M-01 | Major    | TokenExpiredError not distinguished from invalid token | No |
| M-02 | Major    | Auth middleware applied to /health endpoint      | No |
| M-03 | Major    | Missing unit tests for error code paths          | No |
| m-01 | Minor    | 87-line function should be decomposed            | No |
| m-02 | Minor    | User DB lookup on every request — consider caching | No |
| n-01 | Nitpick  | Variable name "t" too short                      | No |
| n-02 | Nitpick  | Regex for token extraction could be split()      | No |
```

**Quick-fix checklist variant:**
```
## Auth Middleware PR — Quick Fix Checklist

Before requesting re-review, address the following:

REQUIRED:
[ ] C-01: Add guard: throw if JWT_SECRET is undefined at startup
[ ] C-02: Add rate limiting middleware for auth failure responses

STRONGLY RECOMMENDED (this PR):
[ ] M-01: Distinguish TokenExpiredError from other JWT errors in catch block
[ ] M-02: Exclude /health from authMiddleware
[ ] M-03: Add unit tests for expired token and malformed token cases

OPTIONAL (can be follow-up tickets):
[ ] m-01: Decompose 87-line middleware into named helpers
[ ] m-02: Consider Redis cache for user lookup
[ ] n-01: Rename "t" to "decodedToken" and add type cast
[ ] n-02: Replace regex with .split(' ')[1] for token extraction
```

**Next steps:**
- Address the two critical findings (C-01, C-02) and request a focused re-review of those specific changes
- Open follow-up tickets for m-01 and m-02 if not addressed in this PR
- Add the missing test cases (M-03) before the PR is marked ready to merge
