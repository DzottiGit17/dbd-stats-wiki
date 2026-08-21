---
type: meta
title: "Survivor Index"
updated: 2026-08-21T00:00:00
---

# Survivors

One page per survivor. Update this list whenever a survivor page is added.

## Pages
- [[full-roster|Full Survivor Roster (53) — Real Pick/Escape Rate Data]] — 53/54 now have real, current pick/escape-rate numbers (NightLight.gg, 28-day window)
- [[claudette-morel|Claudette Morel]] — cited as #1 most-played historically (BHVR stats reveal); ranks #12 in the current 28-day NightLight window — both numbers kept, see the roster page for why they differ

`docs/data/survivors.json` is now fully populated for 53/54 (The Troupe, a paired-character entity, still skipped — different data shape).

## Frontmatter for survivor pages
```yaml
---
type: survivor
name: ""
release: ""              # chapter / DLC name
usage_rank: null
usage_rate_pct: null
death_rank: null          # how often this survivor dies/is killed, if tracked
death_rate_pct: null
signature_perks: []
common_perks_used: []     # [[Perk Name]] links
tags: [survivor]
created: YYYY-MM-DD
updated: YYYY-MM-DD
---
```
