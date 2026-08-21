---
type: meta
title: "Site Content Index"
updated: 2026-08-21T00:00:00
---

# Site Content

The actual website is **live**: https://dzottigit17.github.io/dbd-stats-wiki/
Repo: `DzottiGit17/dbd-stats-wiki` (public, GitHub Pages serving `docs/` on `master`).

It's built directly as a static site in `docs/` (not drafted here first) — plain HTML/CSS/JS with Bootstrap 5 via CDN, no build step. See the vault-root `CLAUDE.md` for the full website section.

## Live pages
- `docs/index.html` — home
- `docs/killers.html`, `docs/survivors.html`, `docs/perks.html`, `docs/builds.html`, `docs/trivia.html`
- Content source: `docs/data/*.json` — currently all placeholder data

## Status
Design finalized (3 iterations — see `wiki/log.md`): clean dark dashboard theme, Bootstrap 5 structure, red/teal DBD accents. **No real stats data yet** — this is the current bottleneck, not the site build.

## Next step
Once real killer/survivor/perk/build/trivia data lands in the matching `wiki/` folders, mirror it into `docs/data/*.json` (drop the `placeholder` flag per file) and push.

## Frontmatter for site draft pages
```yaml
---
type: site-page
title: ""
route: ""                  # e.g. "/killers/the-trapper"
status: draft               # draft | ready | published
pulls_from: []               # [[Wiki Page]] links this draft is built from
tags: [site]
created: YYYY-MM-DD
updated: YYYY-MM-DD
---
```
