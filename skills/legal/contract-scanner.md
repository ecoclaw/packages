---
name: contract-scanner
description: "Reviews contract text and surfaces key terms, risk clauses, unusual provisions, and missing standard protections"
license: MIT
triggers:
  - contract-scanner
  - contract scanner
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---
# Contract Scanner
**Package:** @gonzih/skills-legal
**Command:** /contract-scanner

## What it does
Reviews contract text and surfaces key terms, risk clauses, unusual provisions, and missing standard protections. Produces a structured summary with flagged items categorized by risk level (high / medium / low) and plain-language explanations of what each clause means in practice.

## When to use
- Initial review of a new vendor, client, or employment agreement
- Due diligence on an acquisition or partnership document
- Preparing talking points for a negotiation

## Example output
**Contract Summary — Software Services Agreement**

**Parties:** Acme Corp (Client) / Veritas Tech LLC (Vendor)
**Term:** 24 months, auto-renewing

**Flagged Items:**

🔴 **High — Uncapped liability:** Section 12.3 imposes no cap on vendor's liability for data breaches. Standard SaaS agreements typically cap at 12 months of fees paid.

🟡 **Medium — Unilateral price change:** Section 8.1 allows vendor to increase fees with 30-day notice, no consent required.

🟢 **Low — Governing law:** Delaware — standard for tech agreements, no unusual risk.

*This output is for informational review purposes only and does not constitute legal advice.*
