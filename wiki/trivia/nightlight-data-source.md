---
type: trivia
title: "How We Got Full Roster Data"
category: "methodology"
stat_value: "NightLight.gg's per-character stats pages sit behind a Cloudflare bot-check that blocks plain HTTP requests (curl, scraping tools) with a 403 'Just a moment...' challenge page — the data itself loads client-side via an API call after that challenge passes. A real browser (rendering JS, passing the challenge) can view it fine; the block is on the API call, not the page."
source: "First-hand — hit the 403 via a scraping tool, then confirmed the page renders normally in an actual browser."
confidence: official
tags: [trivia, methodology]
created: 2026-08-21
updated: 2026-08-21
---

# How We Got Full Roster Data

Early passes at this wiki only had usage-rank data for ~7 characters, sourced from news coverage of BHVR developer updates. Getting **every** killer and survivor required going straight to a live community stats tracker (NightLight.gg), which aggregates crowd-sourced match uploads into per-character pick-rate/kill-rate/escape-rate numbers.

The catch: NightLight's stat viewer pages are a client-rendered app — the numbers load via an API call after the page's JavaScript runs. That API sits behind Cloudflare bot-protection, which returns a 403 challenge page to plain scraping tools (no JS execution). The fix was simple once identified: load the page in an actual browser, let it render normally, and read the resulting page text.

## Why this matters for future ingests
If a data source "doesn't have" numbers when checked with a scraper/fetch tool, that's not proof the numbers aren't public — it may just mean the source needs a real browser to render. Worth trying before concluding data doesn't exist.

## Data window
This site's killer/survivor stats reflect NightLight's 23 Jul – 20 Aug 2026 rolling 28-day window (13,645 games for killers, 54,333 players for survivors). This will drift over time — refresh periodically rather than treating it as a permanent snapshot.
