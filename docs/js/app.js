// Shared data loader + card renderer for the DBD stats site (Bootstrap grid).
// Each page calls loadAndRender(jsonPath, containerId, renderCardFn).
// containerId must point at a Bootstrap row (e.g. class="row row-cols-1 row-cols-md-3 g-3").
// renderCardFn receives one data item and returns the inner .card element;
// it gets wrapped in a Bootstrap <div class="col"> automatically.

async function loadData(jsonPath) {
  const res = await fetch(jsonPath);
  if (!res.ok) throw new Error(`Failed to load ${jsonPath}: ${res.status}`);
  return res.json();
}

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstChild;
}

function renderPlaceholderNotice(container, data) {
  if (data.placeholder) {
    container.before(el(`<div class="placeholder-note mb-4">
      ⚠ UNVERIFIED FILE — this page hasn't been filled in from real stats yet.
    </div>`));
  }
}

async function loadAndRender(jsonPath, containerId, renderCardFn) {
  const container = document.getElementById(containerId);
  try {
    const data = await loadData(jsonPath);
    renderPlaceholderNotice(container, data);
    const items = data.items || [];
    if (!items.length) {
      container.innerHTML = "<p class=\"text-muted\">No entries yet.</p>";
      return;
    }
    items.forEach((item) => {
      const col = document.createElement("div");
      col.className = "col";
      // searchable text: name/title, plus any tag-worthy fields, lowercased
      col.dataset.search = [item.name, item.title, item.power, item.effect, item.category]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      col.appendChild(renderCardFn(item));
      container.appendChild(col);
    });
  } catch (err) {
    container.innerHTML = `<p class="text-muted">Couldn't load data: ${err.message}</p>`;
  }
}

// ---- dynamic search ----
// Wires an <input> to live-filter a rendered grid's .col children by the
// col.dataset.search text set in loadAndRender. Shows an empty-state message
// when nothing matches instead of just leaving a blank grid.
function initSearch(inputId, gridId) {
  const input = document.getElementById(inputId);
  const grid = document.getElementById(gridId);
  if (!input || !grid) return;

  let emptyMsg = null;

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    let visibleCount = 0;
    grid.querySelectorAll(":scope > .col").forEach((col) => {
      const match = !q || (col.dataset.search || "").includes(q);
      col.style.display = match ? "" : "none";
      if (match) visibleCount++;
    });

    if (visibleCount === 0 && grid.children.length > 0) {
      if (!emptyMsg) {
        emptyMsg = document.createElement("p");
        emptyMsg.className = "text-muted search-empty";
        grid.after(emptyMsg);
      }
      emptyMsg.textContent = `No results for "${input.value.trim()}".`;
      emptyMsg.style.display = "";
    } else if (emptyMsg) {
      emptyMsg.style.display = "none";
    }
  });
}

// ---- shared detail-page helpers ----

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[''`]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function getQueryParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

// Renders the top-4 perk icon strip. Each tile shows the perk icon (or a letter
// fallback if no icon is known) and exposes name + effect as a native tooltip
// (title attribute) on hover — no JS tooltip framework needed.
function renderTopPerkIcons(perks, perkInfo) {
  const top4 = perks.slice(0, 4);
  const tiles = top4
    .map((p) => {
      const info = perkInfo[p.name];
      const effect = info ? info.effect : "No description available yet.";
      const iconSrc = info && info.icon;
      const inner = iconSrc
        ? `<img src="${iconSrc}" alt="${p.name}" loading="lazy">`
        : `<span class="perk-icon-fallback">${p.name.charAt(0)}</span>`;
      return `
        <div class="perk-icon-tile">
          ${inner}
          <div class="perk-tooltip">
            <span class="perk-tooltip-name">${p.name}</span>
            <span class="perk-tooltip-effect">${effect}</span>
          </div>
        </div>`;
    })
    .join("");
  return `<div class="perk-icon-strip">${tiles}</div>`;
}

// Renders a single-series horizontal bar chart: one bar per perk, length = usage_pct
// AS A REAL PERCENTAGE OF 0-100 (not rescaled to the top perk) so the bar width
// always matches the printed number. A small muted stat (kill/escape rate) shown
// beside the bar. No legend needed (one series).
function renderPerkChart(perks, opts) {
  const accentVar = opts.side === "survivor" ? "var(--teal)" : "var(--red)";
  const rateLabel = opts.side === "survivor" ? "escape" : "kill";
  const rows = perks
    .map((p) => {
      const rate = opts.side === "survivor" ? p.escape_pct : p.kill_pct;
      const width = Math.min(p.usage_pct, 100).toFixed(1);
      return `
        <div class="chart-bar-row">
          <div class="chart-bar-head">
            <span class="chart-bar-name">${p.name}</span>
            <span class="chart-bar-value">${p.usage_pct}%</span>
          </div>
          <div class="chart-bar-track">
            <div class="chart-bar-fill" style="width:${width}%; background:${accentVar};"></div>
          </div>
          <span class="chart-bar-sub">${rate}% ${rateLabel} rate</span>
        </div>`;
    })
    .join("");
  return `<div class="chart-bar-list">${rows}</div>`;
}

async function loadDetailPage(opts) {
  // opts: { listJson, perksDir, side: 'killer'|'survivor', backHref, backLabel }
  const name = getQueryParam("n");
  const root = document.getElementById("detail-root");
  if (!name) {
    root.innerHTML = `<p class="text-muted">No character specified. <a href="${opts.backHref}">${opts.backLabel}</a></p>`;
    return;
  }
  try {
    const list = await loadData(opts.listJson);
    const entry = (list.items || []).find((i) => i.name === name);
    if (!entry) {
      root.innerHTML = `<p class="text-muted">"${name}" not found. <a href="${opts.backHref}">${opts.backLabel}</a></p>`;
      return;
    }
    const slug = slugify(entry.name);
    const rateLabel = opts.side === "survivor" ? "Escape Rate" : "Kill Rate";
    const rateValue = opts.side === "survivor" ? entry.escape_rate_pct : entry.kill_rate_pct;

    root.innerHTML = `
      <a href="${opts.backHref}" class="back-link">&larr; ${opts.backLabel}</a>
      <div class="detail-header">
        ${entry.icon ? `<img class="detail-icon" src="${entry.icon}" alt="${entry.name} icon">` : ""}
        <div>
          <h1 class="detail-title">${entry.name}</h1>
          <p class="detail-sub">${entry.power || ""}</p>
        </div>
      </div>
      <div class="stat-tiles">
        ${entry.usage_rank ? `<div class="stat-tile"><span class="stat-tile-value">#${entry.usage_rank}</span><span class="stat-tile-label">Pick rank</span></div>` : ""}
        ${entry.usage_rate_pct != null ? `<div class="stat-tile"><span class="stat-tile-value">${entry.usage_rate_pct}%</span><span class="stat-tile-label">Pick rate</span></div>` : ""}
        ${rateValue != null ? `<div class="stat-tile"><span class="stat-tile-value">${rateValue}%</span><span class="stat-tile-label">${rateLabel}</span></div>` : ""}
      </div>
      ${entry.note ? `<p class="placeholder-note">${entry.note}</p>` : ""}
      <h2 class="section-title">Top 4 Most Used Perks</h2>
      <div id="perk-icons"><p class="text-muted">Loading…</p></div>
      <h2 class="section-title">All Most Used Perks</h2>
      <div id="perk-chart"><p class="text-muted">Loading…</p></div>
      <p class="chart-caption">Not tracked by this source: hook counts / time-on-hook. Only pick rate, ${opts.side === "survivor" ? "escape" : "kill"} rate, and perk usage are available.</p>
    `;

    const iconsEl = document.getElementById("perk-icons");
    const chartEl = document.getElementById("perk-chart");
    try {
      const [perkData, perkInfo] = await Promise.all([
        loadData(`${opts.perksDir}/${slug}.json`),
        loadData("data/perk-info.json"),
      ]);
      iconsEl.innerHTML = renderTopPerkIcons(perkData.perks, perkInfo);
      chartEl.innerHTML = renderPerkChart(perkData.perks, { side: opts.side });
      const caption = document.querySelector(".chart-caption");
      if (caption && perkData.source) {
        const note = document.createElement("p");
        note.className = "chart-caption";
        note.textContent = `Source: ${perkData.source}`;
        caption.after(note);
      }
    } catch {
      iconsEl.innerHTML = "";
      chartEl.innerHTML = `<p class="placeholder-note">Detailed perk breakdown not yet ingested for this character.</p>`;
    }
  } catch (err) {
    root.innerHTML = `<p class="text-muted">Couldn't load data: ${err.message}</p>`;
  }
}
