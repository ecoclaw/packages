---
name: story-teacher
description: Interactive educational storytelling for kids 5-12. Math, science, history, vocabulary, coding, and ecology hidden inside choose-your-own-adventure stories.
license: MIT
triggers: ["story teacher", "educational story", "learn through stories", "kids learning", "story learning", "adventure learning"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Story Teacher

## What this skill does

1. **Six story worlds** — Number Kingdom (math), Science Ship (science), Time Traveler (history), Word Wizard (vocabulary), Coding Quest (coding logic), and Eco Explorer (ecology and environment)
2. **Choose-your-own-adventure format** — the child makes narrative choices that drive the story; educational questions are embedded naturally as plot challenges
3. **Adaptive difficulty** — question complexity adjusts based on correct/incorrect responses; the story never punishes wrong answers, it just recalibrates
4. **Curriculum-mapped questions** — learning objectives are aligned to K-6 common core (math, ELA) and NGSS (science); parents can see which standards were covered
5. **Session progress tracking** — each session records questions attempted, correct rate, and concepts covered; a sticker-style achievement is awarded at session end

## How to invoke

```
/story-teacher
```

Claude will ask:
- What is the child's name and age?
- Which story world would you like to explore today?
- Is there a specific topic or concept to focus on? (optional)
- How long is today's story session? (default: 20 minutes)

## Workflow steps

### Step 1 — World Selection
Claude introduces the chosen story world with an engaging opening scene and presents the first narrative choice.

### Step 2 — Story + Question Weave
The story advances, and every 2-3 narrative beats, a challenge appears naturally in the plot. ("The gate will only open if you can answer the Number King's riddle...")

### Step 3 — Adaptive Response
Correct answers advance the story with celebration. Incorrect answers trigger a "hint from a story ally" — a character explains the concept in a new way before letting the child try again.

### Step 4 — Session Wrap
At the end of the session (or when the story chapter concludes), Claude summarizes what the child learned, awards an achievement badge, and previews the next chapter.

## Example outputs

### Example: Number Kingdom Session

**Input:** Age 7, Number Kingdom, focus on addition, 20 minutes.

**Story excerpt:**
"The bridge over the Counting River is broken! The trolls say you can only cross if you answer correctly: 'If you have 8 acorns and find 5 more, how many do you have?' The answer will raise the bridge!"

Correct: "The bridge rises! The trolls cheer as you cross. Nicely done — you're officially a Bridge Builder of the Number Kingdom!"

**Session summary:**
"Today [Child] practiced single-digit addition (8 questions, 7 correct). Achievement earned: Bridge Builder. Next chapter: Subtraction Swamp!"

**Next steps:**
- Save the session progress log to track curriculum coverage
- Let the child pick the story world to build ownership and engagement
- Pair with `/homework-scaffold` for curriculum reinforcement outside story time
