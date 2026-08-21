---
type: meta
title: "Perk Index"
updated: 2026-08-21T00:00:00
---

# Perks

One page per perk. Split conceptually by `side` in frontmatter (killer vs survivor) rather than separate folders, so cross-linking stays simple.

## Pages
- [[jolt|Jolt]] — killer, #1 pick rate (22%)
- [[barbecue-and-chilli|Barbecue & Chilli]] — killer, #5 (14%)
- [[corrupt-intervention|Corrupt Intervention]] — killer, #7 (12%)
- [[lethal-pursuer|Lethal Pursuer]] — killer, #6 (14%)
- [[windows-of-opportunity|Windows of Opportunity]] — survivor, #1 pick rate (29%)
- [[adrenaline|Adrenaline]] — survivor, #2 (22%)
- [[bond|Bond]] — survivor, #9 (9%)
- [[prove-thyself|Prove Thyself]] — survivor, #7 (11%)

Full top-10/top-10 pick-rate list (including perks without a dedicated page yet) is mirrored in `docs/data/perks.json`, sourced from BHVR's 7.1.0-window stats update.

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
