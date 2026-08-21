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
      col.appendChild(renderCardFn(item));
      container.appendChild(col);
    });
  } catch (err) {
    container.innerHTML = `<p class="text-muted">Couldn't load data: ${err.message}</p>`;
  }
}
