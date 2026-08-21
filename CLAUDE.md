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
