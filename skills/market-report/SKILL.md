---
name: market-report
description: Produce neighborhood or city-level real estate market reports with price trends, absorption rates, and client-facing narrative.
license: MIT
triggers: ["market report", "market analysis", "real estate market", "neighborhood report", "market conditions"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Market Report

## What this skill does

Generates a professional, client-ready market report for any neighborhood or city:

1. **Market snapshot** — median price, days on market, list-to-sale ratio, active inventory
2. **Trend analysis** — month-over-month and year-over-year comparisons
3. **Absorption rate** — months of supply with buyer/seller/balanced market interpretation
4. **Client narrative** — plain-language summary explaining what the data means for buyers or sellers
5. **Charts guidance** — suggested visualizations for PDF or presentation format

## How to invoke

```
/market-report
```

Claude will ask:
- What geographic area? (city, zip code, neighborhood)
- What property type? (single-family, condo, multi-family, all)
- What time period to cover? (default: last 30 days vs. prior 30 days and prior year)
- Who is this report for? (buyer client, seller client, investor, internal use)
- Do you have MLS data to paste in, or should Claude work from general market knowledge?

## Workflow steps

### Step 1 — Data Framing
Claude structures the report around provided MLS data or acknowledged market conditions, clearly flagging when estimates are used vs. sourced data.

### Step 2 — Market Snapshot Table
```
| Metric                  | This Month | Last Month | Last Year |
|-------------------------|------------|------------|-----------|
| Median Sale Price       |            |            |           |
| Avg Days on Market      |            |            |           |
| List-to-Sale Ratio      |            |            |           |
| Active Listings         |            |            |           |
| Months of Supply        |            |            |           |
```

### Step 3 — Trend Narrative
2–3 paragraph interpretation covering:
- Price trajectory and what's driving it
- Inventory conditions and competitive pressure
- Seasonal context and forward-looking note

### Step 4 — Client-Facing Summary
One-page executive summary tailored to buyer or seller audience:
- **For sellers:** what your home could sell for and how fast
- **For buyers:** how competitive the market is and what strategy to use
- **For investors:** cap rate context and appreciation trend

## Example outputs

### Example: East Nashville Single-Family, Q1 2026

**Market Snapshot:**
```
| Metric              | Feb 2026 | Jan 2026 | Feb 2025 |
|---------------------|----------|----------|----------|
| Median Sale Price   | $612,000 | $598,000 | $571,000 |
| Avg Days on Market  | 18       | 24       | 31       |
| List-to-Sale Ratio  | 101.3%   | 99.8%    | 97.2%    |
| Active Listings     | 47       | 61       | 89       |
| Months of Supply    | 1.4      | 1.8      | 2.9      |
```

**Seller Summary:**
> East Nashville is firmly a seller's market. With just 1.4 months of supply and homes averaging 101.3% of list price, well-priced properties are receiving multiple offers within days. Median prices have risen 7.2% year-over-year. If you're considering selling, conditions favor you — the window to maximize your return is open now.

**Next steps:**
- Insert your MLS data into the snapshot table before sending to clients
- Add neighborhood-specific comparables for listing presentations
- Brand with your headshot and brokerage logo before PDF export
- Follow up with `/listing-writer` if client is ready to list
