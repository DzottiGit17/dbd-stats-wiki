---
type: meta
title: "Perk Index"
updated: 2026-08-21T00:00:00
---

# Perks

One page per perk. Split conceptually by `side` in frontmatter (killer vs survivor) rather than separate folders, so cross-linking stays simple.

## Pages
*(none yet — ingest perk data to populate)*

## Frontmatter for perk pages
```yaml
---
type: perk
name: ""
side: killer              # killer | survivor
origin_character: ""      # which character it's from, or "general" if teachable to all
effect: ""                # short effect summary
usage_rank: null           # pick-rate rank within its side
usage_rate_pct: null
synergizes_with: []        # [[Other Perk]] links
used_in_builds: []          # [[Build Name]] links
tags: [perk]
created: YYYY-MM-DD
updated: YYYY-MM-DD
---
```
