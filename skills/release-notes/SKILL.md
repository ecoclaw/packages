---
name: release-notes
description: Write customer-facing release notes from a raw changelog or ticket list
license: MIT
triggers: ["release notes", "changelog", "what's new", "release announcement", "product release", "version notes"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Release Notes Writer

## What this skill does

Release Notes Writer transforms a raw changelog — whether that is a list of Jira ticket IDs, developer commit messages, or informal bullet points — into polished, customer-facing release notes that communicate value in plain language. The output is organized by category (New Features, Improvements, Bug Fixes), written for a non-technical audience where appropriate, and ready to publish to a changelog page, in-app notification, or email announcement. Developer jargon, internal ticket references, and implementation details are translated into user-facing benefits.

1. **Jargon translation** — Converts dev-speak ("refactored the auth middleware") into customer-facing value ("Login is now faster and more reliable")
2. **Category organization** — Sorts items into New Features, Improvements, and Bug Fixes so readers can scan for what matters to them
3. **Audience calibration** — Adjusts technical depth based on whether the audience is developers (API changelog) or end users (product changelog)
4. **Headline writing** — Writes a punchy top-level summary paragraph that gives customers the "so what" before they read the details
5. **Multi-format output** — Produces a full changelog page version, a short email announcement version, and a one-liner "what's new" banner for in-app use

## How to invoke

```
/release-notes
```

Claude will ask:
- What is the version number and release date?
- What is the raw changelog — ticket list, commit log, or bullet points?
- Who is the primary audience: technical (developers, admins) or non-technical (end users)?
- Is there a theme or headline improvement you want to lead with?
- Should any items be omitted (internal changes, security patches you are not disclosing)?

## Workflow steps

### Step 1 — Changelog parsing
Claude reads the raw input and categorizes each item as: New Feature, Improvement, Bug Fix, Deprecation, or Internal (to be omitted). Items lacking enough context are flagged for clarification.

### Step 2 — Translation and copywriting
Claude rewrites each item in plain language, leading with the user benefit rather than the implementation detail. Where applicable, Claude links related items into a single cohesive note.

### Step 3 — Headline and summary drafting
Claude writes a release headline and a 2-3 sentence opening paragraph that communicates the most important improvements at a glance.

### Step 4 — Multi-format packaging
Claude delivers: (1) a full changelog page entry, (2) a short email announcement, and (3) an in-app "what's new" banner or tooltip copy.

## Example outputs

### Example: v2.4.0 release notes from a messy changelog

**Input:**
```
v2.4.0 changelog dump:
- PROJ-1841: migrate report scheduler to new queue system (was broken on high load)
- PROJ-1902: add CSV export to all table views
- PROJ-1788: fix bug where dashboard widgets would lose their position after refresh
- PROJ-1910: support for custom date ranges in all chart types (users kept asking)
- PROJ-1755: performance pass on the query engine - indexes added on report_runs table
- PROJ-1923: fix null pointer exception when user has no org set
- PROJ-1867: add webhook support for report completion events
- PROJ-1891: deprecate v1 of the /reports API - it still works but we want people off it
- PROJ-1944: fix "Export to PDF" button not working in Firefox 124
- PROJ-1856: add dark mode (beta)
- PROJ-1899: admin can now bulk-deactivate users from the team management page
- PROJ-1928: fix timezone offset bug in scheduled reports sent to EU users
```

**Release notes page draft:**
```
# What's New in v2.4.0
**Released:** March 21, 2026

This release brings the most-requested chart feature of the year, a major
reliability fix to our report scheduling system, and a dark mode beta that
many of you have been waiting for. There are also two bug fixes that will
be especially noticeable for teams in EU time zones and Firefox users.

---

## New Features

### Custom Date Ranges for All Charts
You can now define custom date ranges on every chart type — not just the
preset "last 7 days" or "last 30 days" options. Set any start and end date
to analyze exactly the period that matters to your business.

### CSV Export for All Table Views
Every table in the platform now has a one-click CSV export. Select your
filters, click Export, and download a clean CSV — no workarounds needed.

### Webhook Support for Report Completion
Developers and integrators can now subscribe to webhook events when a
scheduled or on-demand report finishes generating. Use this to trigger
downstream workflows in Zapier, Make, or your own systems.
[See webhook documentation →]

### Dark Mode (Beta)
Dark mode is here in beta. Enable it under Settings → Appearance. We are
actively collecting feedback before making it the default — let us know
what you think.

### Bulk User Deactivation for Admins
Team admins can now select and deactivate multiple users at once from the
Team Management page. No more deactivating accounts one by one when
offboarding a group of contractors or former employees.

---

## Improvements

### More Reliable Scheduled Reports
We rebuilt the report scheduling system on a new queue architecture. Reports
that previously failed or queued indefinitely during high-traffic periods
will now process reliably. If you experienced missed or delayed scheduled
reports, this fix addresses the root cause.

### Faster Report Loading
We added database indexes to key parts of the report engine. Most reports
will load noticeably faster, particularly for accounts with large report
history.

---

## Bug Fixes

- **Dashboard layout preserved on refresh.** Widgets no longer snap back to
  their default positions after you refresh a dashboard. Your custom layouts
  are now saved correctly.

- **Scheduled reports now use the correct time zone for EU users.** Reports
  scheduled by users in EU time zones were being sent up to 2 hours off from
  the configured delivery time. This is fixed.

- **PDF export works again in Firefox.** The "Export to PDF" button was
  silently failing in Firefox 124. This is resolved and has been verified
  across all supported browsers.

- **Login no longer fails for users without an organization.** A rare error
  affecting users in a pending organization state during login has been fixed.

---

## Deprecation Notice

### Reports API v1 End-of-Life
The v1 `/reports` API endpoint is now deprecated and will be removed in
v3.0.0 (planned for Q4 2026). v1 continues to work today, but we encourage
all API users to migrate to v2. [See the migration guide →]

---

## Questions or feedback?
Reach us at support@example.com or via the in-app chat.
```

**Email announcement variant:**
```
Subject: v2.4.0 is live — custom date ranges, CSV export, dark mode beta

Hi [First Name],

We shipped v2.4.0 today and there is a lot in it.

The headline: you can now use custom date ranges on every chart in the
platform. Set any start and end date — not just presets. This was the
most-requested feature on our roadmap, and it is live now.

Also in this release:
- CSV export on all table views
- Webhooks for report completion events
- Dark mode (beta) — enable it in Settings → Appearance
- Bulk user deactivation for team admins
- A rebuilt report scheduler (more reliable under load)
- EU timezone fix for scheduled reports
- Firefox PDF export fix

Full release notes: [link]

As always, reply to this email or use in-app chat if you have questions.

— The [Product] Team
```

**In-app "what's new" banner variant:**
```
What's new in v2.4.0:
Custom date ranges on all charts, CSV export everywhere, and dark mode beta.
Plus: more reliable scheduled reports and 4 bug fixes.
[See full release notes]
```

**Next steps:**
- Publish the full changelog to your public changelog page (e.g., changelog.io, Notion, or your docs site)
- Send the email announcement to active users via your email platform
- Deploy the in-app banner or tooltip for users logging in for the first time after the release
