---
type: meta
title: "Hot Cache"
updated: 2026-08-21T00:00:00
---

# Recent Context

## Last Updated
2026-08-21. Full character roster now has icons and basic info — the big remaining gap is real usage/pick-rate data for most of them, not coverage.

## Key Recent Facts
- **Live site**: https://dzottigit17.github.io/dbd-stats-wiki/ (repo `DzottiGit17/dbd-stats-wiki`, public, Pages from `docs/`).
- **Icons**: all 44 killers + 53/54 survivors (The Troupe paired-entity skipped) + 8 perks now have portrait/icon art in `docs/assets/icons/`, pulled from deadbydaylight.wiki.gg. Attributed in site footer (© Behaviour Interactive, fan use/unofficial).
- **Killers/Survivors JSON**: every character now has a name + short power/lore blurb + icon. Only ~7 characters (Huntress, Dark Lord, Deathslinger, Hillbilly, Skull Merchant, Hag, Claudette) have real, sourced pick/kill-rate numbers — the rest are `usage_rank: null`.
- **Perks**: full top-10 killer + top-10 survivor pick-rate list is real (BHVR 7.1.0-window stats).
- **Trivia**: 4 real sourced facts (Jolt/Surge history, ~58.5% avg kill rate, most-played survivors, deadliest killers by kill rate).
- **Builds**: 1 real build (Gen Rush Squad).
- Wiki convention: full rosters live in `wiki/killers/full-roster.md` and `wiki/survivors/full-roster.md` (not one file per character — too many near-duplicate stubs). Dedicated per-character pages are reserved for entries with real, sourced stats.

## Recent Changes
- Batch-downloaded 44 killer + 53 survivor portrait icons (discovered predictable `K##`/`S##` wiki.gg filename pattern by list position)
- Rewrote `docs/data/killers.json` and `survivors.json` with the complete rosters
- Created `wiki/killers/full-roster.md`, `wiki/survivors/full-roster.md`
- Updated `wiki/killers/_index.md`, `wiki/survivors/_index.md` to point at the roster pages

## Active Threads
- Next: find real per-character pick/kill-rate data beyond the ~7 confirmed so far (Meg Thomas is an easy next add — already have her official most-played-#2 ranking, just needs a dedicated page + JSON update).
- Consider: filling in `common_perks_used` for more characters, and expanding perks.json past the top-10/top-10 (currently only covers the officially-reported top lists).
