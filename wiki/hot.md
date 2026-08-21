---
type: meta
title: "Hot Cache"
updated: 2026-08-21T00:00:00
---

# Recent Context

## Last Updated
2026-08-21. Killer/survivor cards are now clickable, leading to detail pages with real per-character perk-usage bar charts.

## Key Recent Facts
- **Live site**: https://dzottigit17.github.io/dbd-stats-wiki/ (repo `DzottiGit17/dbd-stats-wiki`, public, Pages from `docs/`).
- **Detail pages**: `docs/killer-detail.html` / `survivor-detail.html`, shared templates keyed by `?n=<name>`. Show pick rate, kill/escape rate, and (if seeded) a "Most Used Perks" horizontal bar chart.
- **Perk-breakdown coverage**: 12 killers (Skull Merchant, Slasher, Ghoul, Mastermind, Animatronic, Hillbilly, Legion, Nurse, Huntress, Spirit, Blight, Hag) and 9 survivors (Sable Ward, Vee Boonyasak, Dwight Fairfield, Lara Croft, Kate Denson, Cheryl Mason, Feng Min, Meg Thomas, Claudette Morel) have real per-character perk data in `docs/data/{killer,survivor}-perks/`. Everyone else's detail page gracefully shows "not yet ingested" instead of a broken chart.
- **Known limitation, stated in the UI**: NightLight.gg (the data source) doesn't track hook count or time-on-hook — only pick rate, kill/escape rate, and perk/build usage. Not fabricated; explicitly called out on every detail page and in CLAUDE.md.
- Chart built per the `dataviz` skill: single-hue bars (red=killer, teal=survivor), length = usage rate, secondary stat (kill/escape rate) shown as muted text rather than a second axis, no legend needed for a one-series chart.
- Roster/pick-kill-rate data (previous pass) is unchanged and still fully populated for all 44 killers / 53 survivors.

## Recent Changes
- Added `docs/killer-detail.html`, `docs/survivor-detail.html`
- Added `loadDetailPage()`, `renderPerkChart()`, `slugify()` to `docs/js/app.js`
- Added detail-page + chart CSS to `docs/css/style.css`
- Created 12 `docs/data/killer-perks/*.json` + 9 `docs/data/survivor-perks/*.json` files
- Made all killer/survivor cards on `killers.html`/`survivors.html` link to their detail page
- Updated `CLAUDE.md` with the detail-page convention and the hook-data limitation note

## Active Threads
- Perk-breakdown coverage is 12/44 killers, 9/53 survivors — expand incrementally the same way (browser-navigate to `nightlight.gg/{killers,survivors}/<Name>`, extract "Most Used Perks" table, save as `<slug>.json`).
- No hook-time/hook-count data source found yet — would need a different source than NightLight if the user wants this specifically.
- Consider adding a "Pick Rate By Patch" trend line (NightLight has this per-character too) as a future chart if historical trend is wanted.
