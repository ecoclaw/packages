---
name: listing-writer
description: Generate MLS-ready property listing descriptions with long form, short form, and social media variants.
license: MIT
triggers: ["listing writer", "write listing", "property description", "mls listing", "listing copy"]
metadata:
  skill-author: ecoclaw
  data-sources: []
  compatibility: claude-code>=1.0
  byok: []
---

# Listing Writer

## What this skill does

Produces publish-ready property listing copy across all formats:

1. **Long-form MLS description** — 200–400 words, feature-forward narrative, neighborhood context
2. **Short-form summary** — 50–75 words for portal snippets and print
3. **Social media variants** — Instagram caption, LinkedIn post, Facebook post with hashtags
4. **Headline options** — 5 attention-grabbing headline variants for ads and email subject lines

## How to invoke

```
/listing-writer
```

Claude will ask:
- Property address or general location (city/neighborhood)?
- Property type and size (beds, baths, sq ft, lot size)?
- Key features and recent upgrades?
- Price and any offer strategy context (e.g., offers reviewed Tuesday)?
- Target buyer profile? (first-time buyer, move-up, investor, luxury)
- Any agent or brokerage branding to include?

## Workflow steps

### Step 1 — Feature Prioritization
Claude identifies the top 5 selling points from your inputs and ranks them by buyer appeal for the target profile.

### Step 2 — Long-Form MLS Description
Full narrative with:
- Attention-grabbing opening line
- Room-by-room highlights woven into a flow (not a bullet dump)
- Neighborhood, school, and lifestyle context
- Soft call to action ("Schedule your private showing today")
- Character count confirmed within MLS limits

### Step 3 — Short-Form and Headlines
- 50–75 word portal summary
- 5 headline variants (question, benefit-led, curiosity, urgency, lifestyle)

### Step 4 — Social Variants
```
Instagram: [Emoji-forward, lifestyle caption, 5 hashtags, 150–200 chars]
Facebook: [Conversational, feature highlights, CTA with link placeholder]
LinkedIn: [Professional investor/relocation angle, neighborhood data]
```

## Example outputs

### Example: 3BD Craftsman in East Nashville

**Input:** 3BD/2BA, 1,450 sq ft, renovated kitchen, original hardwoods, 0.2-acre lot, asking $575K, target: young professional couple

**Long-Form:**
```
Where original character meets modern living — this East Nashville Craftsman has
been thoughtfully updated without losing an ounce of its 1928 soul.

Original hardwood floors run through sun-filled living and dining rooms anchored
by a brick fireplace. The kitchen has been fully renovated with quartz countertops,
open shelving, and a farmhouse sink that looks out onto a fully fenced backyard
built for weekend gatherings.

Three bedrooms give you room to grow. Two updated baths mean no morning standoffs.
And at 0.2 acres, you have the outdoor space East Nashville buyers fight for —
without the maintenance of something larger.

Walk to Five Points for coffee. Bike the Shelby Bottoms Greenway on weekends.
Come home to a neighborhood that's arrived — but still has its edge.

Offered at $575,000. Private showings begin Thursday.
```

**Headline variants:**
1. "The Craftsman East Nashville Buyers Have Been Waiting For"
2. "Original Character. Completely Renovated. East Nashville's Most Livable Block."
3. "1928 Soul, 2024 Kitchen — See It Before Thursday"
4. "Hardwoods, Fireplace, Half-Acre Block. $575K."
5. "Walk to Five Points. Come Home to This."

**Next steps:**
- Review MLS character limits for your board and trim if needed
- Add specific school names if relevant to target buyer
- Schedule social posts using a content calendar
- Pair Instagram post with drone or dusk exterior photo
