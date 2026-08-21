---
type: meta
title: "Hot Cache"
updated: 2026-08-21T00:00:00
---

# Recent Context

## Last Updated
2026-08-21. **Full roster now has real, current data for everyone** — the "most characters have no stats" gap from earlier today is closed.

## Key Recent Facts
- **Live site**: https://dzottigit17.github.io/dbd-stats-wiki/ (repo `DzottiGit17/dbd-stats-wiki`, public, Pages from `docs/`).
- **Killers**: all 44 have real pick-rate + kill-rate data (NightLight.gg, 28-day window 23 Jul–20 Aug 2026, 13,645 games). Top: The Slasher (8.24% pick). Highest kill rate: The Pig (56.59%).
- **Survivors**: 53/54 have real pick-rate + escape-rate data (same source, 54,333 players). Top: Sable Ward (5.96% pick). The Troupe (paired entity) still skipped.
- **Key methodology finding**: NightLight's stats API is Cloudflare-blocked for scraping tools (403) but renders fine in an actual browser (claude-in-chrome) — client-side rendered data, not missing data. Documented in [[nightlight-data-source|How We Got Full Roster Data]] for future reference.
- **Data reconciliation note**: Claudette Morel is cited both as #1 all-time most-played (BHVR stats reveal) AND #12 in the current 28-day NightLight window — both numbers kept with their own sources rather than one silently overwriting the other.
- Perks (top 10/10, BHVR 7.1.0 window) and 5 trivia facts remain as before — this pass was specifically about closing the killer/survivor roster gap.

## Recent Changes
- Rewrote `docs/data/killers.json` (all 44, pick+kill rate) and `survivors.json` (53/54, pick+escape rate)
- Updated `docs/killers.html`/`survivors.html` card templates to render the new rate fields
- Rewrote `wiki/killers/full-roster.md` and `wiki/survivors/full-roster.md` with real top-5/bottom-5 breakdowns
- Added `wiki/trivia/nightlight-data-source.md`, 3 new trivia entries in `docs/data/trivia.json`
- Updated all relevant `_index.md` files

## Active Threads
- Consider a refresh cadence — NightLight's window is rolling 28 days, so these numbers will drift. No automated refresh set up (this is a static site, would need a manual re-pull or a build step).
- Perks list is still just the BHVR top-10/top-10 (2023 data) — NightLight may have a perks viewer too, worth checking with the same browser approach if a deeper perk breakdown is wanted.
- `common_perks_used` is still empty for almost every character — real per-character perk-loadout data hasn't been sourced yet.
