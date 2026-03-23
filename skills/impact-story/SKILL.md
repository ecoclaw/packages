---
name: impact-story
description: Write a beneficiary narrative impact story for fundraising appeals, annual reports, or social media
license: MIT
triggers: ["impact story", "beneficiary story", "fundraising story", "case study", "donor appeal", "success story"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Impact Story

## What this skill does

Produces a compelling beneficiary narrative that follows a proven story arc — challenge, intervention, transformation, call to action — with the sensory detail, emotional authenticity, and structural discipline that makes readers feel something and then do something. The story can be formatted for long-form annual reports, mid-length fundraising appeals, or condensed social media versions.

1. **Challenge** — establishes who the person is, what their life looked like before, and what obstacle or crisis they faced, in vivid and specific terms
2. **Intervention** — describes how your organization entered the story, what services or support were provided, and how the relationship developed
3. **Transformation** — shows the outcome in concrete, human terms: what changed, what is possible now, what the person says in their own words
4. **Call to action** — bridges the reader from the story to their role in making more stories like it possible, without feeling manipulative
5. **Format variants** — delivers the same story in multiple lengths (600-word full version, 150-word appeal excerpt, 2–3 sentence social caption)

## How to invoke

```
/impact-story
```

Claude will ask:
- Who is the beneficiary? (first name, age, brief background — or describe a composite if anonymized)
- What challenge or crisis brought them to your organization?
- What specific services, programs, or relationships made a difference?
- What changed in their life? What do they do or have now that they didn't before?
- Do you have a direct quote from them? If not, what sentiments have they expressed?

## Workflow steps

### Step 1 — Story Architecture
Claude maps the narrative arc before writing: identifying the tension (what was at stake), the turning point (when your organization entered), and the resolution (the transformation and its meaning). A story without stakes does not move readers.

### Step 2 — Voice and Detail
Claude writes in close third person with sensory specificity — real places, real objects, real moments — rather than summary statements. "She had $40 left" works harder than "she was experiencing financial hardship."

### Step 3 — Quote Integration
Claude weaves the beneficiary's own words at the moment of highest emotional resonance — usually at or just after the transformation. If no direct quote is provided, Claude drafts plausible language flagged for verification or replacement.

### Step 4 — Multi-Format Output
Claude produces the full-length story plus a condensed appeal excerpt and a social media caption version, so the story is ready for every channel without additional editing.

## Example outputs

### Example: Single Mother Who Received Job Training Services

**Input:** Beneficiary: Denise, 34, single mother of two (ages 5 and 9), was laid off from a hotel housekeeping job during a property closure. No college degree. Behind on rent. Enrolled in workforce development program: 12-week medical billing and coding certification. Got a job at a local health clinic within 3 weeks of completing training. Now earns $21/hour vs. previous $14/hour. Quote: "I cried when I got the call. I didn't think I was the kind of person who got jobs like that." Organization: Bridges Workforce Center.

**Full impact story draft:**
```
THE CALL SHE DIDN'T THINK SHE'D GET

The letter from the hotel arrived on a Thursday. Denise read it twice,
standing at the kitchen counter while her youngest drew on the back of
an envelope at her feet. The property was closing. Her last shift would
be in two weeks. After seven years, that was all it said.

Denise, 34, had built her life on that job. The hours were hard — 5 AM
starts, rooms that never ended — but the paycheck was reliable, and
reliable was everything when you were raising two kids alone. Now she
had $600 in savings, $1,100 due in rent, and a 5-year-old who still
believed everything was going to be fine.

"I didn't let myself panic in front of them," she says. "But I sat in
my car that night for a long time."

━━━━━━━━━━━━━━━━━━━

A friend who had gone through Bridges Workforce Center's training
program texted her the link. Denise almost didn't click it. She had
never taken a certification course. She had never worked in an office.
She was not, she had told herself for years, that kind of person.

But the program was free. Childcare was provided for evening sessions.
And the certificate — medical billing and coding — came with a job
placement guarantee Bridges had earned through relationships with
health systems across the county.

She enrolled on a Monday. By Wednesday, she was sitting in a classroom
for the first time in 14 years, trying to remember how to take notes.

"The instructor, Ms. Karimi, noticed I was struggling and stayed after
class," Denise recalls. "She said, 'You're not behind. You're learning
something new. Those are different things.' I needed to hear that."

Over twelve weeks, Denise learned medical terminology, insurance coding
systems, and claims submission software. She studied after bedtime, her
notes spread on the kitchen table while her kids slept. She asked
questions she was afraid to ask. She got the answers.

She passed her certification exam on her first attempt.

━━━━━━━━━━━━━━━━━━━

Three weeks after completing the program, her phone rang. It was a
health clinic across town — a place she had driven past a hundred times
without thinking she could work there. They wanted her to come in.

She got the job.

She starts at $21 an hour — $7 more than her hotel wage, with benefits
she has never had before: health insurance for the first time in six
years, paid sick days, a retirement account she doesn't fully understand
yet but is learning.

The day she got the call, she sat in her car again. This time, she cried.

"I didn't think I was the kind of person who got jobs like that," she
says quietly. "I'm still figuring out that I am."

Her daughter drew a picture of a nurse on the back of the letter Denise
brought home. She asked her mom if that's what she was now. Denise
told her it was close enough.

━━━━━━━━━━━━━━━━━━━

Denise's story is not a miracle. It is what happens when someone who
wants to work is given a real path forward — the right training, the
right support, and someone who believes in them long enough for them
to start believing in themselves.

Every year, Bridges Workforce Center walks that path with hundreds of
people like Denise. Each journey costs approximately $3,200 — the cost
of instruction, materials, childcare support, and job placement
coordination for one participant through completion.

Your gift today is that path for someone who is sitting in their car
right now, trying to figure out what comes next.

[GIVE NOW]
```

**Fundraising appeal excerpt (150 words):**
```
Denise was 34, a single mother of two, when her hotel closed and took
her job with it. She had $600 in savings and $1,100 in rent due.

A friend sent her a link to Bridges Workforce Center. She almost didn't
click it. "I didn't think I was the kind of person who got jobs like
that," she says.

Twelve weeks later, she had a medical billing certification. Three weeks
after that, she had a job — $21/hour, full benefits, paid sick days.
The first steady health insurance she'd had in six years.

"I'm still figuring out that I am," she says, "the kind of person who
gets jobs like that."

Every year, Bridges walks this path with hundreds of people like Denise.
Each journey costs $3,200. Your gift today is that path for someone who
needs it right now.

[Make your gift →]
```

**Social media caption variants:**
```
LONG CAPTION (Instagram/LinkedIn):
Denise was a hotel housekeeper for 7 years. When the property closed,
she had two weeks' notice, two kids, and $600 in savings.

She enrolled in our 12-week medical billing certification — studying
at the kitchen table after bedtime. She passed on her first try.

Three weeks after completing the program, she got a call. A health clinic
wanted her to come in. She started at $21/hour with full benefits.

"I didn't think I was the kind of person who got jobs like that," she
told us. "I'm still figuring out that I am."

This is what workforce development looks like. This is what your support
makes possible. Link in bio to learn more.

#WorkforceDevelopment #EconomicMobility #ImpactStory

SHORT CAPTION (X/Twitter):
"I didn't think I was the kind of person who got jobs like that."

Denise was laid off with 2 kids and $600. After 12 weeks in our job
training program, she's earning $21/hr with full benefits for the first
time in her life.

This is what your support does. →
```

**Next steps:**
- Obtain signed photo and story release from Denise (or the real beneficiary) before publishing
- Verify all figures (wage, program cost per participant) with program and finance staff
- Assign a staff photographer to capture a portrait of Denise at her new workplace if she consents
- Submit the full story to the annual report designer and the appeal package lead simultaneously
