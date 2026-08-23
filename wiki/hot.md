---
type: meta
title: "Hot Cache"
updated: 2026-08-23T00:00:00
---

# Recent Context

## Last Updated
2026-08-23. Killer AND survivor perk-breakdown coverage are both now complete: 44/44 killers, 53/53 survivors. Trivia expanded 7→11 entries, builds expanded 1→3 entries. Every item from the "what else can we add or fix" punch list is done.

## Key Recent Facts
- **Live site**: https://dzottigit17.github.io/dbd-stats-wiki/ (repo `DzottiGit17/dbd-stats-wiki`, public, Pages from `docs/`).
- **Detail pages**: `docs/killer-detail.html` / `survivor-detail.html`, shared templates keyed by `?n=<name>`. Show pick rate, kill/escape rate, top-4 perk icon strip (hover tooltip), and a full "Most Used Perks" bar chart.
- **Perk-breakdown coverage**: **44/44 killers AND 53/53 survivors** — no character shows "not yet ingested" anymore.
- **Naming gotcha (recurring)**: `slugify()` strips any non-ASCII-alnum character, including accents — "The Onryō" → `the-onry`, "Élodie Rakoto" → `lodie-rakoto` (not `the-onryo` / `elodie-rakoto`). Always verify the actual slugify() output against the *site's own* name string (killers.json/survivors.json), not the source site's display name — they sometimes differ (e.g. site says "Bill Overbeck", NightLight says `William "Bill" Overbeck`; site says "Leon Scott Kennedy", NightLight says "Leon S. Kennedy").
- **Known limitation, stated in the UI**: NightLight.gg (the data source) doesn't track hook count/time-on-hook — only pick rate, kill/escape rate, and perk/build usage. Not fabricated; explicitly called out on every detail page and in CLAUDE.md.
- Bar chart: real percentage = bar width. Single-hue bars (red=killer, teal=survivor), no legend needed.
- Search boxes on killers/survivors/perks pages filter live against name + power/effect/category text.
- No public "most prestiged character" data exists anywhere (checked NightLight + BHVR's official tracker) — didn't fabricate one when asked.
- `perks.json` (20 items) is a deliberately curated top-10-killer/top-10-survivor overview with its own source citation — not a gap, don't expand it into a full perk list without discussing scope first.
- `perk-info.json` (30 entries) is the icon/tooltip lookup map for the top-4 perk-icon strip — separate schema from perks.json, also fine as-is.

## Recent Changes (2026-08-23 session)
- Added the 2 missing killer-perks files (The Deathslinger, The Dark Lord) — killer coverage was actually 42/44, now genuinely 44/44
- Pulled survivor perk-usage data for all 44 remaining survivors from NightLight.gg, wrote `docs/data/survivor-perks/*.json` for each (53/53 total now)
- Fixed 2 slug mismatches: `bill-overbeck.json` (not `william-bill-overbeck.json`), `leon-scott-kennedy.json` (not `leon-s-kennedy.json`), plus `lodie-rakoto.json` (not `elodie-rakoto.json`, same accent-stripping bug as "Onryō")
- Expanded `trivia.json` 7→11 entries (lowest kill rate, highest/lowest escape rate, + a caveat entry on Aurora Stardotter's tiny 24-game sample)
- Expanded `builds.json` 1→3 entries (killer "Slowdown Stack" meta build, survivor "Boon Squad" fun build)
- Updated `killers.json`/`survivors.json` source notes to reflect full coverage

## Active Threads
- **Next priority (not yet done)**: perk pages (`perks.html`) have no per-perk detail/drill-down view — only killer/survivor have `-detail.html` templates. Worth deciding if that's in scope.
- No hook-time/hook-count data source found yet — would need a different source than NightLight if the user wants this specifically.
- Consider a "Pick Rate By Patch" trend line (NightLight has this per-character) as a future chart.
- Uncommitted work from this session still needs `git add`/`commit`/`push` — nothing has been pushed yet.
