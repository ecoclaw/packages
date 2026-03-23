---
name: treatment-plan-explainer
description: Write a patient-friendly explanation of a dental treatment plan — what's needed, why, and what to expect
license: MIT
triggers: ["treatment plan", "dental treatment", "patient explanation", "treatment explainer", "dental plan", "patient education"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Treatment Plan Explainer

## What this skill does

Translates a clinical dental treatment plan into a clear, warm, patient-facing document that helps patients understand what's recommended and why — so they can make confident, informed decisions. It covers every planned procedure in plain language, describes what the patient will experience, and highlights urgency levels so patients know what to address first.

1. **Plain-language procedure summaries** — each recommended treatment explained without clinical jargon
2. **Why it's needed** — clinical rationale translated into terms patients understand (e.g., "prevent the decay from reaching the nerve")
3. **What to expect** — sensation, duration, recovery, and any post-procedure care notes
4. **Insurance and priority notes** — flags which items are typically covered and which are urgent vs. elective
5. **Encouragement and next steps** — closes with a warm, action-oriented prompt to schedule

## How to invoke

```
/treatment-plan-explainer
```

Claude will ask:
- What procedures are included in this treatment plan (e.g., crown #19, 2 composites, full-mouth debridement)?
- What is the patient's overall oral health context (e.g., moderate periodontitis, history of anxiety, recent X-rays)?
- Which items are urgent vs. elective, and which are insurance-covered?
- What tone does your practice use — warm/conversational or professional/clinical?
- Any special patient considerations (anxiety, language preference, cost sensitivity)?

## Workflow steps

### Step 1 — Plan Intake
Claude parses the clinical treatment plan — procedure codes, tooth numbers, and clinical notes — and maps each item to a plain-language description.

### Step 2 — Procedure Explanations
Each recommended procedure is written as a short, clear section: what it is, why it's needed, what the patient will feel, and how long it takes.

### Step 3 — Priority and Coverage Flags
Urgent items (active infection, pain, structural risk) are clearly marked as "address soon." Elective or cosmetic items are noted as "when you're ready." Insurance coverage notes are added where applicable.

### Step 4 — Warm Close and Call to Action
The document closes with a reassuring summary and a clear prompt to call, schedule online, or ask questions — removing friction from the next step.

## Example outputs

### Example: Crown, Two Fillings, and a Deep Cleaning

**Input:** Patient needs crown on #19 (large failing amalgam, cracked cusp), composite fillings on #3 and #14 (moderate interproximal decay), and full-mouth debridement followed by scaling and root planing on the lower left quadrant. Patient has mild dental anxiety. Insurance covers the crown and fillings at 80%; perio treatment at 50%.

**Patient explanation draft:**
```
Your Dental Care Plan — What We're Recommending and Why

Hi [Patient Name],

Thank you for coming in for your visit. We want to make sure you understand
exactly what we found and why we're recommending each step of your care.
Here's a plain-language breakdown of your treatment plan.

---

1. CROWN ON YOUR LOWER LEFT MOLAR (Tooth #19)
   Priority: Address soon | Insurance: Covered at ~80%

   What it is: A crown is a cap that fits over your entire tooth, restoring
   its shape, strength, and function.

   Why you need it: Your back molar has an older silver filling that has
   started to crack the tooth underneath. If we don't protect it now, the
   crack could deepen and eventually split the tooth — which would mean
   extraction instead of a simple crown. The crown stops that from happening.

   What to expect: This is a two-appointment procedure. At the first visit
   (about 90 minutes), we'll numb the area, remove the old filling, shape
   the tooth, and place a temporary crown. You'll wear that for 2–3 weeks
   while your permanent crown is made. At the second visit (~30 minutes),
   we'll seat the final crown. Most patients feel mild sensitivity for a
   few days after each appointment — over-the-counter pain relievers handle
   it well.

---

2. TWO FILLINGS (Teeth #3 and #14, upper back molars)
   Priority: Address within 3 months | Insurance: Covered at ~80%

   What they are: Tooth-colored composite fillings that restore areas where
   decay has formed between your teeth.

   Why you need them: We spotted decay developing in the tight contacts
   between a few of your upper back teeth on your X-rays. Right now the
   cavities are small — a quick filling now prevents them from growing into
   something that would need a root canal or crown later.

   What to expect: Each filling takes about 30–45 minutes. We'll numb the
   area, remove the decay, and bond the tooth-colored material in place.
   You can eat normally once the numbness wears off (usually 1–2 hours).
   These are often done together in a single appointment.

---

3. PERIODONTAL THERAPY — DEEP CLEANING (Full Mouth + Lower Left Quadrant)
   Priority: Begin within 4–6 weeks | Insurance: Covered at ~50%

   What it is: This is a two-part process. First, a full-mouth debridement
   removes the heavy buildup of tartar that's accumulated above and below
   the gumline. Then, scaling and root planing (sometimes called a "deep
   cleaning") treats the lower left area where your gums have pulled away
   from the teeth.

   Why you need it: Your gums are showing signs of early periodontal disease
   — inflammation, some bone loss, and pockets that are deeper than healthy.
   Left untreated, gum disease is the leading cause of tooth loss in adults.
   The good news: caught at this stage, it's very manageable.

   What to expect: We typically do this in two appointments, one side at a
   time. Each takes about an hour. We'll numb the area so you're comfortable.
   Your gums may feel sore and look slightly swollen for a few days after —
   ibuprofen and salt-water rinses help. We'll check your healing at a
   follow-up visit 4–6 weeks later.

---

A NOTE ON ANXIETY

We know dental visits can feel stressful. Please tell us at any appointment
if you want a break, want us to explain what we're doing, or want to discuss
comfort options. We're here to work at your pace.

---

WHAT TO DO NEXT

We recommend starting with the crown on tooth #19 since it's the most time-
sensitive, and scheduling the fillings in the same block if possible to
minimize your trips. Call us at [phone] or book online at [website] — we're
happy to help you spread appointments across a few months to work with your
schedule and budget.

Questions? Don't hesitate to call or ask at your next visit. We want you to
feel confident about every step.
```

**Minimalist summary variant:**
```
YOUR TREATMENT SUMMARY

URGENT — Crown, Tooth #19
Large cracked filling; crown prevents further fracture and possible loss of
the tooth. Two appointments. ~80% covered.

SOON — Fillings, Teeth #3 & #14
Small cavities caught early. One appointment. ~80% covered.

SOON — Periodontal Therapy, Lower Left
Gum disease treatment. Two appointments. ~50% covered.

Next step: Call [phone] to schedule. Ask about bundling appointments.
```

**Next steps:**
- Customize the patient's name and tooth numbers before printing or emailing
- Add your practice phone number, website, and any financing options you offer
- Review urgency flags with the treating dentist before sending
- For anxious patients, consider attaching a short FAQ about sedation options
