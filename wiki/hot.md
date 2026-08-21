---
type: meta
title: "Hot Cache"
updated: 2026-08-21T00:00:00
---

# Recent Context

## Last Updated
2026-08-21. Perks/trivia solid; killer roster growing (6/44 seeded with real pick/kill-rate data); survivor roster still thin (1 entry). Icon art now pulled in from DBD Wiki for perks/killers/survivors.

## Key Recent Facts
- **Live site**: https://dzottigit17.github.io/dbd-stats-wiki/ (repo `DzottiGit17/dbd-stats-wiki`, public, Pages from `docs/`).
- **Perks**: full top-10 killer + top-10 survivor pick-rate list is real, sourced from BHVR's 7.1.0-window stats update (Apr–Aug 2023). `docs/data/perks.json` no longer placeholder.
- **Trivia**: 4 real facts — Jolt's history as Surge, ~58.5% average kill rate (official), Claudette as most-played survivor (official), Skull Merchant/Plague/Sadako as top kill-rate killers (community-sourced). `docs/data/trivia.json` no longer placeholder.
- **Builds**: 1 real build so far — Gen Rush Squad (Prove Thyself, Windows of Opportunity, Bond, Adrenaline), built from confirmed top-pick perks.
- **Killers**: 6/44 seeded — The Huntress (#1 popular late 2024), The Dark Lord (#2), The Deathslinger (#3 early 2024), The Hillbilly (#1 early 2024, post-rework), Skull Merchant + The Hag (least popular Nov 2024).
- **Survivors**: still only Claudette Morel — the biggest remaining gap.
- **Icons**: pulled from deadbydaylight.wiki.gg into `docs/assets/icons/{perks,killers,survivors}/`, attributed in site footer (© Behaviour Interactive, fan use/unofficial).
- Every fact/stat carries a `confidence` field (`official` vs `community-sourced`) — official traces to BHVR's own dev updates/stats reveals, community-sourced traces to third-party trackers like NightLight.gg.

## Recent Changes
- Created: 4 trivia pages, 8 perk pages, 1 killer page, 1 survivor page, 1 build page in `wiki/`
- Updated: all 5 sub-`_index.md` files (killers/survivors/perks/builds/trivia) to list new pages
- Updated: `docs/data/perks.json`, `trivia.json`, `builds.json` (real data, placeholder flag dropped), `killers.json`/`survivors.json` (1 real entry each, still mostly empty)

## Active Threads
- **Next priority**: survivor roster is the biggest gap (1/dozens). Killers at 6/44.
- Open question: is there a source for a full per-character pick-rate breakdown, or should the rest be filled with wiki.gg power/lore descriptions only (no usage stats) until better data surfaces?
- Continuing to research + pull icons in subsequent passes per user request ("keep searching").
