---
type: meta
title: "Killer Index"
updated: 2026-08-21T00:00:00
---

# Killers

One page per killer. Update this list whenever a killer page is added.

## Pages
- [[full-roster|Full Killer Roster (44)]] — all 44 have icons now; see this page for the complete list
- [[the-huntress|The Huntress]] — #1 most popular late 2024 (5.7% pick, 54.22% kill)
- [[the-dark-lord|The Dark Lord]] — #2 most popular late 2024 (5.81% pick, 58.19% kill)
- [[the-deathslinger|The Deathslinger]] — #3 most popular early 2024
- [[the-hillbilly|The Hillbilly]] — #1 most popular early 2024 (8% pick, post-rework)
- [[skull-merchant|Skull Merchant]] — top kill rate, but also named least popular Nov 2024
- [[the-hag|The Hag]] — least popular Nov 2024

All 44 killers have icons + a power blurb (see `docs/data/killers.json`). Only 6 have dedicated pages with real usage-rank data — that's still the gap, not the icons/roster itself.

## Frontmatter for killer pages
```yaml
---
type: killer
name: ""
power: ""
usage_rank: null        # 1 = most used, based on latest data source
usage_rate_pct: null
release: ""             # chapter / DLC name
signature_perks: []     # perk names unique to this killer
common_perks_used: []   # [[Perk Name]] links, most popular loadout perks
tags: [killer]
created: YYYY-MM-DD
updated: YYYY-MM-DD
---
```
