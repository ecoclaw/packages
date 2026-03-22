---
name: board-memo
description: Draft board-ready memos and briefing documents with executive summary, context, recommendation, and risk sections.
triggers: ["board memo", "board brief", "board update", "board presentation", "briefing document", "executive memo"]
---

# Board Memo

## What this skill does

Produces structured, decision-ready board memos and briefing documents:

1. **Executive summary** — one paragraph that tells the board everything they need to decide
2. **Situation and context** — background, relevant history, and current state
3. **Analysis** — data, options considered, and key tradeoffs
4. **Recommendation** — clear ask with rationale
5. **Risk and mitigation** — key risks and how management plans to address them

## How to invoke

```
/board-memo
```

Claude will ask:
- What is the memo about? (strategic decision, financial update, M&A, policy change, crisis update)
- What is the specific ask of the board? (approve, inform, provide guidance, vote)
- Key facts, data, and context to include?
- Options considered and why you're recommending one over others?
- Key risks and mitigation plans?
- Target length? (1-page briefing vs. full 3-page memo)

## Workflow steps

### Step 1 — Framing the Ask
Claude identifies the board's decision point and ensures the memo is organized around a clear ask — not a status update.

### Step 2 — Memo Structure
```
MEMO
To: Board of Directors
From: [Name, Title]
Date: [Date]
Re: [Subject line — decision-focused]
Confidential

EXECUTIVE SUMMARY
[3–4 sentences: situation, recommendation, and key rationale]

BACKGROUND
[Context the board needs — assumes they haven't been in the weeds]

ANALYSIS
[Options considered, data, and tradeoffs]

RECOMMENDATION
[Specific ask, rationale, and why now]

RISKS AND MITIGATIONS
[Top 3 risks and management's response]

REQUESTED ACTION
[What you need from the board today]
```

### Step 3 — Tone Calibration
Adjusts language for:
- Board-appropriate brevity (no operational details that belong in management updates)
- Confidence without overstatement
- Financial precision where numbers are involved

### Step 4 — Appendix Guidance
Recommends supporting materials to attach:
- Financial models, org charts, legal summaries, or market data that inform but don't belong in the memo body

## Example outputs

### Example: Board Memo — Series B Extension

**Excerpt:**
```
MEMO
To: Board of Directors, Acme Inc.
From: Jane Chen, CEO
Date: March 21, 2026
Re: Approval Request — Series B Extension Round ($8M)
Confidential

EXECUTIVE SUMMARY
We are requesting Board approval to raise an $8M extension to our Series B at
our existing valuation cap of $95M. The extension will extend our runway from
5 to 14 months, enabling us to reach cash-flow neutral before requiring a
Series C raise. Three existing investors have committed $6M; we are requesting
authority to close the remaining $2M with new investors by April 30.

BACKGROUND
Following our Q4 restructuring, monthly burn has decreased from $1.1M to
$780K. At current burn, existing cash extends runway to August 2026 —
insufficient to close a Series C from a position of strength. ARR stands
at $4.2M, growing 8% month-over-month. We have reached the inflection point
where additional capital converts directly into revenue growth, not overhead.

RECOMMENDATION
Approve the $8M extension at the existing Series B cap. The dilution (~8.4%)
is accretive relative to a down-round or premature C raise at current market
conditions. We believe this is the highest-value use of dilution available today.

RISKS AND MITIGATIONS
1. Failure to close remaining $2M — mitigated by 3 warm leads and a signed
   term sheet from one strategic investor
2. Burn increases before cash-flow neutral — monthly finance review in place;
   board approval required for any expense above plan by >10%
3. Market conditions change — extension structured with 6-month deploy window
   to preserve optionality

REQUESTED ACTION
Approve the Series B extension resolution (attached) and authorize CEO to
execute subscription agreements up to $8M total through April 30, 2026.
```

**Next steps:**
- Have legal counsel review before distributing to board members
- Attach signed term sheet, cap table model, and updated financial projections
- Send via board portal (BoardVantage, Diligent, or Carta) at least 5 business days before the meeting
- Prepare a 5-minute verbal summary using `/stakeholder-update` for the meeting itself
