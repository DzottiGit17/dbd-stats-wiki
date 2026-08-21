# DBD Wiki: LLM Wiki

Mode: Custom (Mode F "Book/Course" + Mode C "Business/Project", adapted for a game-stats content site)
Purpose: Knowledge base feeding a Dead by Daylight website — most-used killers/survivors, most-used perks per character, trivia (most-killed survivor, records), best perk combos, and fun builds.
Owner: Daniel
Created: 2026-08-21

## Structure

```
vault/
├── .raw/              # source dumps: patch notes, stats-site exports, community data, screenshots
├── wiki/
│   ├── killers/       # one page per killer (usage rank, common perks, playstyle)
│   ├── survivors/     # one page per survivor (usage rank, death rank, common perks)
│   ├── perks/         # one page per perk (side, effect, usage rate, synergies)
│   ├── builds/        # named perk combos: meta and fun/meme
│   ├── trivia/        # standalone stat/fact pages ("most killed survivor", records)
│   ├── site/          # drafts of actual website pages, built from the above
│   ├── index.md       # master catalog
│   ├── log.md         # chronological record (append-only, newest on top)
│   ├── hot.md          # ~500-word recent-context cache
│   └── overview.md     # executive summary of the vault
├── _templates/         # note templates per type (killer/survivor/perk/build/trivia)
└── CLAUDE.md            # this file
```

## Conventions

- All notes use YAML frontmatter: `type`, `tags`, `created`, `updated` at minimum (see each `_index.md` for full schema per type).
- Wikilinks use `[[Note Name]]` format: filenames are unique, no paths needed.
- `.raw/` contains source documents: never modify them.
- `wiki/index.md` is the master catalog: update on every ingest.
- `wiki/log.md` is append-only: never edit past entries; new entries go at the TOP.
- `wiki/hot.md` gets overwritten (not appended) after every ingest/session — it's a cache, not a journal.
- Usage-rate and death-rate numbers should always carry a `source` reference — don't state stats as fact without one. Use the `trivia` type's `confidence` field (`unverified` | `community-sourced` | `official`) to be honest about data quality.
- `wiki/site/` is where wiki content gets turned into actual website page drafts — don't skip straight to building the site before there's enough killers/survivors/perks/trivia data to pull from.

## Operations

- Ingest: drop a source (patch notes, stats export, perk list, etc.) in `.raw/`, say "ingest [filename]"
- Query: ask any question — Claude reads `wiki/hot.md` first, then `wiki/index.md`, then drills into specific pages
- Lint: say "lint the wiki" to run a health check (orphan pages, missing links, stale stats)
- New character/perk/build/trivia entries: use the matching template in `_templates/`

## Website (GitHub Pages)

The actual public site lives in `docs/` and is served by GitHub Pages directly from that folder on `main` — no build step, plain HTML/CSS/JS.

```
docs/
├── index.html, killers.html, survivors.html, perks.html, builds.html, trivia.html
├── css/style.css
├── js/app.js          # fetches docs/data/*.json and renders cards
├── data/*.json        # { "placeholder": bool, "items": [...] }  ← the site's actual content
└── .nojekyll           # disable Jekyll processing
```

- The repo is **private** on GitHub (`DzottiGit17/dbd-stats-wiki` or similar) — only `docs/` is public-facing via Pages; `wiki/`, `.raw/`, and `CLAUDE.md` sit in the same private repo but aren't served.
- Workflow: fill in `wiki/killers/`, `wiki/perks/`, etc. from real sources first → once a page has solid data, mirror it into the matching `docs/data/*.json` entry (drop the `placeholder` flag once real data is in) → commit → push → Pages redeploys automatically (usually <1 min).
- Don't hand-edit `docs/data/*.json` with fake stats. If a number isn't sourced, leave it `null` and keep `"placeholder": true`.
- To view the live site: `https://dzottigit17.github.io/<repo-name>/` (confirm exact URL after Pages is enabled).
