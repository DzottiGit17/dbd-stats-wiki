// Shared data loader + card renderer for the DBD stats site.
// Each page calls loadAndRender(jsonPath, containerId, renderCardFn).

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
    container.before(el(`<div class="placeholder-note">
      ⚠️ Placeholder data — this page hasn't been filled in from real stats yet.
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
      container.innerHTML = "<p>No entries yet.</p>";
      return;
    }
    items.forEach((item) => container.appendChild(renderCardFn(item)));
  } catch (err) {
    container.innerHTML = `<p>Couldn't load data: ${err.message}</p>`;
  }
}
