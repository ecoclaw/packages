---
name: menu-writer
description: Write menu item descriptions in three style options — elevated, casual, and minimalist
triggers: ["menu writer", "menu description", "menu copy", "food description", "menu item", "restaurant menu"]
---

# Menu Writer

## What this skill does

Takes dish details — ingredients, preparation method, inspiration, and the restaurant's concept — and produces three distinct style variants for each item so the kitchen and front-of-house team can choose the copy that fits the context best. Works for print menus, websites, digital ordering apps, and social media captions.

1. **Elevated / fine dining** — evocative, precise prose that signals craft and intention without being overwrought
2. **Casual / approachable** — warm, conversational copy that makes guests excited without intimidating them
3. **Minimalist** — clean, ingredient-forward listing for modern menus where white space does the work
4. **Allergen and dietary flag prompts** — Claude flags where to add GF, V, VG, or nut icons
5. **Seasonal and sourcing callouts** — origin and sourcing language woven in naturally when provided

## How to invoke

```
/menu-writer
```

Claude will ask:
- What is the dish name and core components (protein, starch, sauce, garnish)?
- How is it prepared (technique, cooking method, key flavor profile)?
- What is the restaurant's concept and overall tone?
- Are there sourcing, local, or seasonal details to highlight?
- Any dietary or allergen flags to note (GF, V, VG, dairy-free, contains nuts)?

## Workflow steps

### Step 1 — Dish Intake
Claude collects the dish name, components, preparation method, concept context, and any sourcing or dietary notes.

### Step 2 — Three Style Variants
All three copy styles are generated for the same dish so the team can compare and choose — or mix elements from each.

### Step 3 — Allergen and Icon Guidance
Claude notes where to place dietary symbols and flags any common allergens present in the described dish.

### Step 4 — Social Caption Bonus
A short Instagram/social caption version is included — punchy, visual, and shareable.

## Example outputs

### Example: Pan-Seared Duck Breast Entrée

**Input:** Pan-seared duck breast, medium-rare, with a sour cherry reduction, celery root purée, crispy duck confit leg, pickled mustard seeds. Restaurant: upscale New American bistro, seasonal focus. Sourcing: duck from a local farm (Maple Hill Farm). No common allergen flags beyond dairy in the purée. Pricing: $42.

**Elevated variant:**
```
Pan-Seared Duck Breast

Maple Hill Farm magret, scored and seared to a blush medium-rare, rested
and sliced against the grain. Accompanied by a silken celery root purée,
a tart sour cherry gastrique built from last season's preserves, a crisp
leg confit croquette, and a scattering of pickled mustard seeds for
brightness and bite.

Contains dairy. GF
```

**Casual variant:**
```
Duck Breast

Local duck, seared until the skin crackles, served over creamy celery root
purée with a sour cherry sauce and a crispy little duck confit on the side.
Pickled mustard seeds cut through the richness. It's the dish regulars keep
coming back for.

Contains dairy. Gluten-free.
```

**Minimalist variant:**
```
Duck Breast  42

Maple Hill Farm magret — celery root purée — sour cherry reduction
duck confit — pickled mustard seed

GF  Contains dairy
```

**Social caption:**
```
Duck night done right. Maple Hill Farm magret, sour cherry gastrique,
celery root purée, crispy confit on the side. On the menu now — reserve
your table at the link in bio.
```

---

**Bonus: Vegetarian entrée example — Roasted Beet Salad**

**Input:** Roasted golden and Chioggia beets, whipped goat cheese, candied walnuts, watercress, orange segments, sherry vinaigrette. V, GF. Casual neighborhood wine bar concept.

**Elevated variant:**
```
Roasted Beet Salad

Golden and Chioggia beets, slow-roasted until concentrated and sweet,
arranged over whipped goat cheese and dressed with a sherry vinaigrette.
Finished with winter citrus segments, peppery watercress, and house-candied
walnuts.

V  GF  Contains tree nuts and dairy
```

**Casual variant:**
```
Beet & Goat Cheese Salad

Two kinds of roasted beets, creamy whipped goat cheese, candied walnuts,
fresh orange, and watercress — all tied together with a light sherry
vinaigrette. Great starter, great side, great excuse to eat something
colorful.

Vegetarian. Gluten-free. Contains dairy and tree nuts.
```

**Minimalist variant:**
```
Beet Salad

Golden + Chioggia beet — whipped goat cheese — candied walnut
orange — watercress — sherry vinaigrette

V  GF  Tree nuts  Dairy
```

**Next steps:**
- Share all three variants with the chef and front-of-house manager for a final pick
- Confirm allergen flags with the kitchen before printing — ingredients change
- For print menus, the minimalist variant typically sets at a smaller point size; elevated copy needs more column width
- Add the social caption to your content calendar for posting on the day the dish launches
