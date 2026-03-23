---
name: research-brief
description: "Structures a legal research question into a formatted memo outline: issue statement, applicable legal standard, key cases or statutes to research, ..."
license: MIT
triggers:
  - research-brief
  - research brief
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---
# Research Brief
**Package:** @gonzih/skills-legal
**Command:** /research-brief

## What it does
Structures a legal research question into a formatted memo outline: issue statement, applicable legal standard, key cases or statutes to research, and a recommended analysis framework. Designed to accelerate attorney research workflow — not to replace it.

## When to use
- Starting research on an unfamiliar legal question
- Organizing notes from preliminary research into a draft memo structure
- Briefing a colleague or junior associate on a research task

## Example output
**Research Brief — Enforceability of Non-Compete Clauses in California**

**Issue:** Whether a non-compete clause in an employment agreement executed in Texas is enforceable against a California-based remote employee.

**Applicable Standard:** California Business & Professions Code § 16600 broadly voids non-compete agreements. The California Supreme Court has reinforced this in *Edwards v. Arthur Andersen* (2008).

**Key research threads:**
1. Choice-of-law clauses — can parties contract around § 16600?
2. Recent legislative updates: AB 1076 (2024) — notification requirements
3. Federal circuit split on enforcement of foreign non-competes

**Recommended framework:** Analyze choice-of-law validity first; if California law applies, § 16600 likely controls absent narrow exceptions.

*This output is a research framework, not legal advice.*
