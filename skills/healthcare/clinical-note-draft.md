---
name: clinical-note-draft
description: "Generates a structured clinical note draft in SOAP or DAP format from provider-supplied bullet points or dictation"
license: MIT
triggers:
  - clinical-note-draft
  - clinical note draft
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---
# Clinical Note Draft
**Package:** @gonzih/skills-healthcare
**Command:** /clinical-note-draft

## What it does
Generates a structured clinical note draft in SOAP or DAP format from provider-supplied bullet points or dictation. Produces complete, documentation-ready text while preserving clinical accuracy. Designed to reduce documentation time — provider reviews and signs before any note enters a medical record.

## When to use
- End-of-day note catch-up from brief visit notes
- Structuring complex multi-problem visit documentation
- Templating recurring visit types (annual physicals, chronic disease follow-ups)

## Example output
**SOAP Note — Follow-up Visit**

**S:** Patient is a 58-year-old male presenting for 3-month diabetes follow-up. Reports improved dietary adherence over the past 6 weeks. Denies hypoglycemic episodes. Mild fatigue noted, particularly in afternoons. No new complaints.

**O:** BP 134/82, HR 76, Weight 198 lbs (down 4 lbs from last visit). FBG 118. HbA1c 7.1% (prior: 7.6%). Exam unremarkable.

**A:** Type 2 diabetes mellitus — improving glycemic control. Hypertension — stable. Fatigue — likely multifactorial; defer workup pending lifestyle changes.

**P:** Continue metformin 1000mg BID. Reinforce dietary goals. Repeat HbA1c in 3 months. RTC in 3 months or sooner if symptoms worsen.

*All clinical notes must be reviewed and authenticated by the treating provider before entry into any medical record.*
