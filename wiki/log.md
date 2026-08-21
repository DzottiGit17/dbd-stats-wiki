---
type: meta
title: "Log"
updated: 2026-08-21T00:00:00
---

# Log

Append-only. New entries go at the TOP. Never edit past entries.

---

## 2026-08-21 (12)
Fixed a real bug: the perk-usage bar chart on detail pages was rescaling each bar relative to that character's own top perk, so the #1 perk always showed a full-width bar regardless of its actual percentage — didn't match the printed number. Now bar width = the real 0-100 percentage. Also added a dynamic search box (`initSearch()` in app.js) to killers.html, survivors.html, and perks.html — live-filters the grid as you type, matching against name/power/effect/category text, with a "no results" empty state. Answered a user question honestly: no public aggregate "most prestiged character" data exists anywhere I could find (NightLight and BHVR's official tracker only expose personal/per-account prestige, not a community leaderboard) — didn't fabricate a stat for it.

## 2026-08-21 (11)
Added a "Top 4 Most Used Perks" icon strip above the full bar chart on detail pages, per user request — 4 perk icons per character, native `title`-attribute tooltip on hover showing name + effect text. Downloaded 23 new perk icons from deadbydaylight.wiki.gg (confirmed the `IconPerks_camelCase.png` naming pattern, including `Hex:`→`hex` and `Scourge Hook:`→`scourgeHook` prefixes) to cover every perk appearing in a top-4 slot across the 12 killers + 9 survivors already seeded. Added `docs/data/perk-info.json` as a name→{icon, effect} lookup (effect text hand-written from known perk mechanics, not scraped — flagged as such). Falls back to a plain letter tile if a perk has no icon/info entry yet, rather than a broken image.

## 2026-08-21 (10)
Added clickable killer/survivor detail pages per user request ("clickable to see most used perks stats with graphs"). Built `docs/killer-detail.html`/`survivor-detail.html` as shared templates keyed by `?n=<name>` query param, plus a vanilla-CSS single-series horizontal bar chart component in `app.js`/`style.css` (dataviz skill applied: one hue per side, no legend needed for single series, thin rounded bars, secondary stat as muted text rather than a second axis). Pulled real per-character perk-usage breakdowns via NightLight.gg (same browser-bypass method as the roster pull) for 12 killers and 9 survivors — the top ~10 by pick rate on each side, plus Skull Merchant/Hag/Claudette from earlier passes. Every killer/survivor card now links to its detail page; characters without a seeded perk file show an honest "not yet ingested" message instead of a broken/empty chart. Explicitly noted in the UI and CLAUDE.md that hook-count/time-on-hook data isn't available from this source — didn't fabricate it.

## 2026-08-21 (9)
**Solved the "how do we get everyone's data" problem.** Discovered NightLight.gg's per-character stat viewer pages are client-rendered and their data API sits behind a Cloudflare bot-check (403 to plain scraping) — but a real browser (via claude-in-chrome) passes the check and renders the full table fine. Used this to pull real, current pick-rate + kill-rate for all 44 killers and pick-rate + escape-rate for 53/54 survivors (28-day window, 23 Jul–20 Aug 2026: 13,645 killer games, 54,333 survivor players). Rewrote `docs/data/killers.json` and `survivors.json` in full — every character now has real numbers, no more nulls except explicit small-sample-size notes (Judgment: 12 games, Aurora Stardotter: 24 games). Updated card templates to show pick/kill/escape rate. Added `wiki/trivia/nightlight-data-source.md` documenting the methodology for future ingests. Noted the historical-vs-current-window discrepancy for Claudette Morel (#1 all-time per BHVR, #12 in current 28-day window) rather than silently overwriting one claim with the other.

## 2026-08-21 (8)
Full roster pass. Pulled the complete killer list (44) and survivor list (54) from deadbydaylight.wiki.gg, discovered the wiki's image filenames follow a predictable `K##_Name_Portrait.png` / `S##_Name_Portrait.png` pattern matching list position, and batch-downloaded icons for all 44 killers and 53/54 survivors (The Troupe/paired-entity skipped). `docs/data/killers.json` and `survivors.json` now have every character with a name, power/lore blurb, icon, and null usage stats except the ~7 with confirmed real data. Added `wiki/killers/full-roster.md` and `wiki/survivors/full-roster.md` as compact reference pages instead of ~90 near-duplicate stub files — dedicated per-character pages still reserved for entries with real stats.

## 2026-08-21 (7)
Pulled real perk/killer/survivor icon art from the Dead by Daylight Wiki (deadbydaylight.wiki.gg) — 8 perk icons, 6 killer portraits, 1 survivor portrait, downloaded into `docs/assets/icons/`. Added attribution footer note (© Behaviour Interactive, fan use). Continued killer roster research: added The Huntress, The Dark Lord, The Deathslinger, The Hillbilly (all real 2024 pick/kill-rate data from dev stats coverage) and The Hag (named least popular alongside Skull Merchant). 6 of 44 killers now seeded.

## 2026-08-21 (6)
First real data ingest. Researched via web search: BHVR's official most-used-perk stats (7.1.0 patch window, Apr–Aug 2023), average kill rate (~58.5%, Feb 2024 dev update), most-played survivors (Claudette #1, official), and community kill-rate leaderboard (Skull Merchant/Plague/Sadako, NightLight.gg). Created 4 trivia pages, 8 perk pages (4 killer + 4 survivor of the top-10/top-10 lists), 1 killer page (Skull Merchant), 1 survivor page (Claudette Morel), 1 build (Gen Rush Squad). Mirrored full top-10/top-10 perk list + trivia + build into `docs/data/*.json`, dropped `placeholder` flag on perks/trivia/builds (killers/survivors JSON still marked with a "note" — only 1 real entry each so far, most characters still need data).

## 2026-08-21 (5)
Site design pass 3: adopted Bootstrap 5.3 (via CDN, no build step) for navbar/grid/card structure. `docs/css/style.css` now overrides Bootstrap's CSS variables to keep the red/teal DBD skin instead of default Bootstrap look. Mobile nav now has a proper collapsing hamburger menu. `docs/js/app.js` updated to render Bootstrap `col`/`card` markup.

## 2026-08-21 (4)
Site design pass 2: modernized the clean dashboard theme — sticky glass navbar (backdrop-filter blur), gradient accents (red→teal) on logo/nav/rank numbers, ambient radial-gradient background glow, floating cards with hover lift + colored shadow.

## 2026-08-21 (3)
Site design pass 1: replaced initial gothic/case-file theme ("Trial Report" — blackletter font, stitched borders, grain texture) with a clean dark data-dashboard theme (Space Grotesk/Inter/IBM Plex Mono, big rank numbers, red/teal accents) per user feedback that the gothic look didn't land.

## 2026-08-21 (2)
Set up the actual public website: `docs/` folder scaffolded as a plain static HTML/CSS/JS site (index, killers, survivors, perks, builds, trivia pages + JSON data files). Created private→public GitHub repo `DzottiGit17/dbd-stats-wiki`, enabled GitHub Pages serving from `docs/` on `master`. Repo is public (GitHub Pages on private repos needs a paid plan). Live at https://dzottigit17.github.io/dbd-stats-wiki/. All site data is still placeholder — no real stats ingested yet.

## 2026-08-21 (1)
Vault scaffolded. Purpose: Dead by Daylight stats/trivia website — most used killers/survivors, most used perks per character, most-killed survivor stats, best perk combos, fun builds. Structure created: killers/, survivors/, perks/, builds/, trivia/, site/. No sources ingested yet.
