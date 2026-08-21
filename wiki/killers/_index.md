---
type: meta
title: "Killer Index"
updated: 2026-08-21T00:00:00
---

# Killers

One page per killer. Update this list whenever a killer page is added.

## Pages
- [[full-roster|Full Killer Roster (44) — Real Pick/Kill Rate Data]] — all 44 now have real, current pick/kill-rate numbers (NightLight.gg, 28-day window)
- [[the-huntress|The Huntress]], [[the-dark-lord|The Dark Lord]], [[the-deathslinger|The Deathslinger]], [[the-hillbilly|The Hillbilly]], [[skull-merchant|Skull Merchant]], [[the-hag|The Hag]] — earlier dedicated pages (2024 dev-update era data; slightly different window than the NightLight numbers, both kept for comparison)

`docs/data/killers.json` is now fully populated for all 44 — icon, power blurb, pick rate, and kill rate. No more nulls except sample-size caveats noted per entry (e.g. The Judgment, only 12 games).

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
