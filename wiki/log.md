---
type: meta
title: "Log"
updated: 2026-08-21T00:00:00
---

# Log

Append-only. New entries go at the TOP. Never edit past entries.

---

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
