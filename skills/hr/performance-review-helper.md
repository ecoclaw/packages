---
name: performance-review-helper
description: "Helps managers write clear, fair, and actionable performance reviews"
license: MIT
triggers:
  - performance-review-helper
  - performance review helper
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---
# Performance Review Helper
**Package:** @gonzih/skills-hr
**Command:** /performance-review-helper

## What it does
Helps managers write clear, fair, and actionable performance reviews. Takes a set of notes, observations, and ratings and produces a structured review with a summary paragraph, ratings with narrative justification, specific accomplishments, development areas, and goals for the next period. Reduces recency bias by prompting for full-year input.

## When to use
- Annual or mid-year review cycle
- Preparing for a performance improvement conversation
- Coaching a new manager through their first review cycle

## Example output
**Performance Review — Q1-Q4 2025**
**Employee:** [Name] | **Role:** Software Engineer II | **Reviewer:** [Manager Name]

**Summary:**
[Name] had a strong year marked by meaningful technical growth and consistent reliability on the team. She took ownership of the payments infrastructure migration — a high-stakes, multi-quarter project — and delivered it on time with no production incidents. Her communication and documentation improved noticeably in H2, which had a direct positive impact on the team's ability to onboard a new engineer.

**Ratings:**
- Technical execution: Exceeds expectations — payments migration, API refactor
- Communication: Meets expectations — strong improvement trajectory
- Collaboration: Meets expectations — dependable partner, proactive in code review

**Development areas:**
[Name] expressed interest in technical leadership. To grow in that direction, she should take on a project scoping assignment in Q1 and lead at least one architectural discussion with the team.

**Goals for 2026:**
1. Lead scoping for one major feature (Q1)
2. Complete internal tech lead program (H1)
3. Mentor one junior engineer through their first production deployment
