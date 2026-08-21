---
type: meta
title: "Hot Cache"
updated: 2026-08-21T00:00:00
---

# Recent Context

## Last Updated
2026-08-21. Site is live and has gone through 3 design iterations; Bootstrap 5 adopted for structure. Still no real DBD data ingested — everything on the live site is placeholder.

## Key Recent Facts
- **Live site**: https://dzottigit17.github.io/dbd-stats-wiki/ — repo `DzottiGit17/dbd-stats-wiki` (public, GitHub Pages serving from `docs/` on `master`).
- Site is a **plain static HTML/CSS/JS build, no build step** — Bootstrap 5.3 loaded via CDN `<link>`/`<script>` tags, no npm/bundler.
- Final design direction: clean dark data-dashboard — Space Grotesk/Inter/IBM Plex Mono type, red (killer) / teal (survivor) gradient accents, glass sticky navbar, floating cards with hover glow. (Rejected an earlier gothic/case-file "Trial Report" theme — user didn't like it.)
- `docs/css/style.css` overrides Bootstrap's CSS variables (`--bs-primary`, `--bs-card-bg`, etc.) to keep the custom skin rather than default Bootstrap look — see `CLAUDE.md` for the full convention.
- Wiki content (`wiki/killers/`, `wiki/perks/`, etc.) is still empty — the site's `docs/data/*.json` files only have placeholder/example entries.

## Recent Changes
- Created: `docs/` site scaffold (6 pages, Bootstrap navbar/grid/cards, JSON data files)
- Created: GitHub repo, enabled GitHub Pages
- Updated: `docs/css/style.css`, all `docs/*.html`, `docs/js/app.js` — 3x through design iteration, most recently to Bootstrap 5
- Updated: `CLAUDE.md` with the website/Bootstrap conventions section

## Active Threads
- No real DBD stats/perk/build/trivia data ingested yet — next real step is feeding actual sources (patch notes, a stats tracker export, or manually-entered killer/survivor/perk lists) into `wiki/` and mirroring into `docs/data/*.json`.
- Open question: where will usage-rate and "most killed survivor" data come from? (BHVR dev updates, Nightlight/community stats trackers, or manual entry?)
