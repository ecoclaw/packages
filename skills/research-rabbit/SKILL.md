---
name: research-rabbit
description: Academic research MCP for university students — searches ArXiv, Semantic Scholar, OpenAlex, PubMed simultaneously, maps literature, finds research gaps, builds argument scaffolds.
triggers: ["research rabbit", "academic research", "literature review", "find papers", "research papers", "scholarly research", "arxiv search"]
---

# Research Rabbit

## What this skill does

1. **Multi-source parallel search** — searches ArXiv, Semantic Scholar, OpenAlex, PubMed, and CrossRef simultaneously; results are de-duplicated, ranked by relevance and citation count
2. **Paper summarization** — each returned paper is summarized from its abstract: core argument, methodology, key findings, and limitations in 3-4 sentences
3. **Literature mapping** — identifies consensus positions, active debates, and minority views across the returned papers; produces a structured literature landscape overview
4. **Gap finder** — analyzes what the existing literature does not address; surfaces 3-5 potential research gaps or underexplored angles
5. **Argument scaffold** — builds a structured argument outline using the found literature as evidence; ready to expand into an essay or paper introduction
6. **Citation formatting** — outputs citations in APA, MLA, or Chicago format; all citations are real papers from the search results — no hallucinated references

## How to invoke

```
/research-rabbit
```

Claude will ask:
- What is your research topic or question?
- What field or discipline? (helps prioritize which databases to weight)
- What type of output do you need? (literature review, gap analysis, argument scaffold, or all three)
- What citation format do you need? (APA / MLA / Chicago)
- Any date range for papers? (e.g., 2018-present)

## Workflow steps

### Step 1 — Search Execution
Claude runs the query across all five databases simultaneously. Returns up to 20 relevant results, ranked by relevance and citation count.

### Step 2 — Paper Summaries
Each paper is summarized: title, authors, year, core argument, methodology, findings, limitations. Papers without accessible abstracts are flagged.

### Step 3 — Literature Map
Claude organizes the papers into a landscape: consensus (what most papers agree on), active debates (where papers disagree), and outlier positions.

### Step 4 — Gap Analysis
Based on the literature map, Claude identifies 3-5 research gaps: questions the literature raises but doesn't answer, populations not studied, methodologies not applied.

### Step 5 — Argument Scaffold
Claude builds a structured outline using the literature as evidence: thesis options, supporting evidence from found papers, counterarguments and rebuttals, conclusion angles.

### Step 6 — Citation Output
All references formatted in the requested citation style. Each citation links back to the actual paper URL.

## Example outputs

### Example: Climate Policy Research

**Input:** Topic: "Carbon pricing effectiveness in developing economies"; Field: Environmental economics; Output: All three; Format: APA; Date: 2018-present.

**Literature map excerpt:**
"Consensus: Carbon taxes are politically difficult to implement in developing economies without revenue redistribution mechanisms. Debate: Whether cap-and-trade or carbon tax is more effective in low-institutional-capacity contexts. Gap: Limited empirical data from Sub-Saharan Africa post-2020."

**Gap identified:**
"No studies have examined the long-term behavioral effects of carbon pricing on informal-sector energy use in urban Africa."

**Next steps:**
- Export the citation list to Zotero or your reference manager before closing the session
- Use the gap analysis as the basis for a research proposal introduction
- Run a follow-up search on the specific gap identified to see if emerging papers address it
