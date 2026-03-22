---
name: patient-education
description: Produce plain-language patient education handouts tailored to diagnosis, reading level, and language preference.
triggers: ["patient education", "patient handout", "patient instructions", "discharge instructions", "health education"]
---

# Patient Education

## What this skill does

Creates clear, actionable patient education materials that patients actually read and understand:

1. **Diagnosis explainer** — what the condition is in plain language
2. **What to expect** — symptoms, timeline, and what's normal vs. concerning
3. **Self-care instructions** — medication guidance, activity, diet, wound care
4. **Warning signs** — specific symptoms that warrant a call or ER visit
5. **Follow-up reminders** — next appointment, labs, or referral timing

## How to invoke

```
/patient-education
```

Claude will ask:
- What diagnosis or topic? (e.g., Type 2 diabetes, post-op knee replacement, UTI)
- Target reading level? (3rd, 5th, 8th grade — default: 6th grade)
- Language? (English default; Spanish, Simplified Chinese, or other available)
- Any specific instructions or medications to include?
- Format? (one-page handout, Q&A format, or bulleted quick guide)

## Workflow steps

### Step 1 — Content Scoping
Claude identifies the 5–7 most important things the patient needs to know and prioritizes by safety-critical information first.

### Step 2 — Plain Language Draft
Written at the specified reading level using:
- Short sentences (≤15 words preferred)
- Common words instead of medical terms (or medical term + plain explanation)
- Active voice and "you" framing
- Numbered steps for instructions

### Step 3 — Warning Signs Box
Prominently formatted section:
```
⚠ CALL YOUR DOCTOR OR GO TO THE ER IF YOU HAVE:
• [Symptom 1]
• [Symptom 2]
• [Symptom 3]
```

### Step 4 — Follow-Up Section
Clear reminder with blanks for office to personalize:
```
YOUR NEXT STEPS:
□ Take [medication] [dose] [frequency]
□ Return visit: _______________
□ Call us at _______________  if you have questions
```

## Example outputs

### Example: UTI Handout, 6th Grade Level

**You Have a Urinary Tract Infection (UTI)**

A UTI is an infection in your urinary tract — the tubes and organs that carry urine out of your body. UTIs are very common and are treatable with antibiotics.

**What to Expect**
You may feel burning when you urinate, need to go more often, or feel pressure in your lower belly. These symptoms usually improve within 2–3 days of starting antibiotics.

**Your Treatment**
- Take all of your antibiotic, even if you feel better early
- Drink plenty of water (6–8 glasses a day)
- Avoid caffeine and alcohol until you feel better

**To Feel Better Faster**
- Urinate after sex
- Wipe front to back
- Wear loose, breathable underwear

> ⚠ **Call us or go to the ER if you have:**
> - Fever over 101°F (38.3°C)
> - Back or side pain
> - Nausea or vomiting
> - Symptoms that get worse after 2–3 days

**Your Next Steps**
- Take your antibiotic: _______________
- Follow up if symptoms don't improve in 3 days
- Call us: _______________

*This handout is for general information. Ask your provider if you have questions about your care.*

**Next steps:**
- Have a provider review before distributing
- Add your practice name, logo, and phone number
- Print at 12pt font minimum for readability
- Consider laminated versions for exam room reference
