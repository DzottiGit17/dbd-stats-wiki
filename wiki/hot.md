---
type: meta
title: "Hot Cache"
updated: 2026-08-21T00:00:00
---

# Recent Context

## Last Updated
2026-08-21. First real data ingest done — perks and trivia are now solidly populated with sourced data; killers and survivors are still thin (1 entry each).

## Key Recent Facts
- **Live site**: https://dzottigit17.github.io/dbd-stats-wiki/ (repo `DzottiGit17/dbd-stats-wiki`, public, Pages from `docs/`).
- **Perks**: full top-10 killer + top-10 survivor pick-rate list is real, sourced from BHVR's 7.1.0-window stats update (Apr–Aug 2023). `docs/data/perks.json` no longer placeholder.
- **Trivia**: 4 real facts — Jolt's history as Surge, ~58.5% average kill rate (official), Claudette as most-played survivor (official), Skull Merchant/Plague/Sadako as top kill-rate killers (community-sourced). `docs/data/trivia.json` no longer placeholder.
- **Builds**: 1 real build so far — Gen Rush Squad (Prove Thyself, Windows of Opportunity, Bond, Adrenaline), built from confirmed top-pick perks.
- **Killers/Survivors**: only Skull Merchant and Claudette Morel have real pages/JSON entries — this is the current gap, not perks/trivia.
- Every fact/stat carries a `confidence` field (`official` vs `community-sourced`) — official traces to BHVR's own dev updates/stats reveals, community-sourced traces to third-party trackers like NightLight.gg.

## Recent Changes
- Created: 4 trivia pages, 8 perk pages, 1 killer page, 1 survivor page, 1 build page in `wiki/`
- Updated: all 5 sub-`_index.md` files (killers/survivors/perks/builds/trivia) to list new pages
- Updated: `docs/data/perks.json`, `trivia.json`, `builds.json` (real data, placeholder flag dropped), `killers.json`/`survivors.json` (1 real entry each, still mostly empty)

## Active Threads
- **Next priority**: fill out killers/ and survivors/ — need a full character roster (44 killers, dozens of survivors) with usage-rank data, not just the 1-2 seeded so far.
- Open question: is there a source for a full per-character pick-rate breakdown (not just top-3), or should the rest be filled with wiki.gg power/lore descriptions only (no usage stats) until better data surfaces?
