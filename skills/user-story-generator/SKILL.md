---
name: user-story-generator
description: Break epics into user stories with Gherkin acceptance criteria
triggers: ["user stories", "user story", "acceptance criteria", "Gherkin", "BDD", "story generator", "epics to stories"]
---

# User Story Generator

## What this skill does

User Story Generator takes a high-level epic or feature description and decomposes it into well-formed, independently deliverable user stories — each with a clear As a / I want / So that statement and full Gherkin Given/When/Then acceptance criteria. The output is sized for sprint planning and designed to be pasted directly into Jira, Linear, or any agile project management tool. Stories include edge cases, error states, and persona-specific variants that teams commonly overlook during refinement.

1. **Epic decomposition** — Breaks a broad capability into discrete, estimable stories following the INVEST principle (Independent, Negotiable, Valuable, Estimable, Small, Testable)
2. **As a / I want / So that format** — Every story clearly names the persona, desired action, and business or user value
3. **Gherkin acceptance criteria** — Each story includes multiple Given/When/Then scenarios covering happy path, alternative flows, and error states
4. **Edge case coverage** — Surfaces boundary conditions and error scenarios that are easy to miss in verbal refinement sessions
5. **Story sizing hints** — Optional T-shirt size estimates and dependency flags based on complexity signals in the input

## How to invoke

```
/user-story-generator
```

Claude will ask:
- What is the epic or feature you want broken into stories?
- Who are the primary user personas for this epic?
- What does the system currently do (or not do) in this area?
- Are there any known constraints — technical, compliance, or UX — to incorporate?
- How granular should stories be: sprint-sized (1-3 days), or milestone-sized (1-2 weeks)?

## Workflow steps

### Step 1 — Epic analysis
Claude identifies the core capabilities implied by the epic and groups them into logical story clusters (e.g., create, read, update, delete, notifications, permissions).

### Step 2 — Story drafting
Claude writes each story in As a / I want / So that format, one per discrete capability, ensuring each delivers standalone value and can be tested in isolation.

### Step 3 — Acceptance criteria generation
For each story, Claude writes Gherkin scenarios covering: the primary happy path, at least one alternative flow, and at least one error or edge case.

### Step 4 — Review and packaging
Claude presents stories numbered and grouped by theme, with optional T-shirt sizing, dependency notes, and a suggested sprint ordering based on dependencies.

## Example outputs

### Example: User authentication epic broken into stories

**Input:** Epic — User Authentication. Users need to be able to create an account, log in with email/password or Google SSO, reset their password, and log out. We also need 2FA support for enterprise users. Tech constraint: we're using Auth0 as the identity provider.

**User story set draft:**
```
## Epic: User Authentication
**Stories generated:** 7
**Personas:** New User, Returning User, Enterprise Admin

---

### US-001 — Account Registration with Email
**As a** new user,
**I want** to create an account using my email address and a password,
**So that** I can access the platform and save my work.

**Acceptance Criteria:**

Scenario: Successful account creation
  Given I am on the registration page
  When I enter a valid email address and a password that meets complexity rules
  And I click "Create account"
  Then my account is created in Auth0
  And I receive a verification email within 2 minutes
  And I am redirected to the onboarding flow

Scenario: Duplicate email address
  Given I am on the registration page
  When I enter an email address already associated with an existing account
  And I click "Create account"
  Then I see the message "An account with this email already exists"
  And I am shown a link to the login page and the password reset flow
  And no new account is created

Scenario: Weak password rejected
  Given I am on the registration page
  When I enter a password shorter than 8 characters or without a number
  Then I see an inline validation error before I can submit
  And the "Create account" button remains disabled

**Sizing:** S | **Dependencies:** Email service (SMTP), Auth0 tenant config

---

### US-002 — Email and Password Login
**As a** returning user,
**I want** to log in with my email and password,
**So that** I can access my account and resume where I left off.

**Acceptance Criteria:**

Scenario: Successful login
  Given I have a verified account
  When I enter my correct email and password on the login page
  And I click "Log in"
  Then I am authenticated via Auth0
  And I am redirected to my dashboard
  And my session token is set with a 30-day expiry

Scenario: Incorrect password
  Given I have a verified account
  When I enter my email with an incorrect password
  And I click "Log in"
  Then I see "Incorrect email or password"
  And I am not redirected
  And the failed attempt is logged in Auth0

Scenario: Account locked after repeated failures
  Given I have entered an incorrect password 5 times in succession
  When I attempt a sixth login
  Then my account is temporarily locked for 15 minutes
  And I receive an email with instructions to unlock my account or reset my password

**Sizing:** S | **Dependencies:** US-001 (account must exist)

---

### US-003 — Google SSO Login and Registration
**As a** new or returning user,
**I want** to sign in with my Google account,
**So that** I can access the platform without creating a separate password.

**Acceptance Criteria:**

Scenario: New user registers via Google SSO
  Given I am on the login or registration page
  When I click "Continue with Google"
  And I authorize the app in the Google consent screen
  Then an account is created using my Google email as the identifier
  And I am redirected to the onboarding flow

Scenario: Returning user logs in via Google SSO
  Given I previously registered with my Google account
  When I click "Continue with Google" and complete the Google auth flow
  Then I am logged in and redirected to my dashboard
  And no duplicate account is created

Scenario: Google auth cancelled
  Given I am on the login page
  When I click "Continue with Google" but cancel the Google consent screen
  Then I am returned to the login page with no error message shown

**Sizing:** M | **Dependencies:** Auth0 Google connection, Google OAuth app config

---

### US-004 — Password Reset
**As a** returning user who has forgotten my password,
**I want** to reset my password via email,
**So that** I can regain access to my account without contacting support.

**Acceptance Criteria:**

Scenario: Successful password reset request
  Given I am on the login page
  When I click "Forgot password?" and enter my registered email
  And I click "Send reset link"
  Then I receive a password reset email within 2 minutes
  And the link expires after 1 hour

Scenario: Reset link used successfully
  Given I have a valid, unexpired reset link
  When I click the link and enter a new password that meets complexity rules
  And I click "Save new password"
  Then my password is updated in Auth0
  And I am redirected to the login page with a success message
  And all existing sessions are invalidated

Scenario: Unregistered email entered
  Given I enter an email not associated with any account
  When I click "Send reset link"
  Then I see the message "If this email is registered, you'll receive a link shortly"
  And no email is sent (to prevent account enumeration)

**Sizing:** S | **Dependencies:** Email service, Auth0 password reset flow

---

### US-005 — Logout
**As a** logged-in user,
**I want** to log out of the platform,
**So that** my account is not accessible to others on a shared device.

**Acceptance Criteria:**

Scenario: Successful logout
  Given I am logged in
  When I click "Log out" from the account menu
  Then my session token is invalidated in Auth0
  And I am redirected to the login page
  And the back button does not return me to an authenticated state

Scenario: Session expiry auto-logout
  Given my session token has expired (30 days)
  When I attempt to access any authenticated route
  Then I am redirected to the login page
  And I see "Your session has expired. Please log in again."

**Sizing:** XS | **Dependencies:** US-002, US-003

---

### US-006 — Two-Factor Authentication (Enterprise)
**As an** enterprise user,
**I want** to enable two-factor authentication on my account,
**So that** my organization's data is protected even if my password is compromised.

**Acceptance Criteria:**

Scenario: User enables TOTP 2FA
  Given I am on the security settings page
  When I click "Enable two-factor authentication"
  Then I am shown a QR code to scan with an authenticator app
  And I must enter a valid 6-digit code to confirm setup
  And 2FA is marked as enabled on my account

Scenario: Login with 2FA enabled
  Given I have 2FA enabled and I enter correct email and password
  When the system verifies my credentials
  Then I am prompted for my 6-digit authenticator code before being granted access

Scenario: Invalid 2FA code entered
  Given I am on the 2FA verification step
  When I enter an incorrect 6-digit code
  Then I see "Invalid code. Please try again."
  And I am allowed 3 attempts before being locked out temporarily

Scenario: Enterprise admin enforces 2FA for all users
  Given I am an enterprise admin in account settings
  When I enable "Require 2FA for all members"
  Then all team members without 2FA are prompted to enroll on next login

**Sizing:** L | **Dependencies:** Auth0 MFA, enterprise plan entitlement check

---

### US-007 — Account Email Verification
**As a** newly registered user,
**I want** to verify my email address,
**So that** the platform can confirm my identity and send me important notifications.

**Acceptance Criteria:**

Scenario: Verification email delivered and link clicked
  Given I have registered with a new email address
  When I click the verification link in the email
  Then my account status changes from "unverified" to "verified"
  And I am redirected to my dashboard with a "Email verified" confirmation

Scenario: Verification link expired
  Given my verification link is more than 24 hours old
  When I click the link
  Then I see "This link has expired"
  And I am shown a button to request a new verification email

Scenario: User attempts restricted action before verifying
  Given my account is unverified
  When I attempt to invite a team member or export data
  Then I see a banner: "Please verify your email to use this feature"
  And I am shown a "Resend verification email" button

**Sizing:** S | **Dependencies:** US-001, Email service
```

**Condensed Jira import format variant:**
```
US-001 | Account Registration with Email | As a new user, I want to create an account with email/password so that I can access the platform. | S
US-002 | Email and Password Login | As a returning user, I want to log in with my credentials so that I can access my account. | S
US-003 | Google SSO Login and Registration | As a user, I want to sign in with Google so I don't need a separate password. | M
US-004 | Password Reset | As a user who forgot my password, I want to reset it via email so I can regain access. | S
US-005 | Logout | As a logged-in user, I want to log out so my account is secure on shared devices. | XS
US-006 | Two-Factor Authentication (Enterprise) | As an enterprise user, I want 2FA so my account is protected beyond password alone. | L
US-007 | Account Email Verification | As a new user, I want to verify my email so the platform can confirm my identity. | S
```

**Next steps:**
- Import stories into your sprint planning tool (Jira, Linear, or Shortcut)
- Walk through each story with the engineering lead during backlog refinement
- Assign stories to sprints based on dependency ordering: US-001 → US-002/003/007 → US-004/005 → US-006
