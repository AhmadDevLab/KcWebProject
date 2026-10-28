/**
 * KC The Royal Karan's Collection - storefront logic.
 * Renders the catalog from PRODUCTS, handles filters, lightbox and WhatsApp links.
 */

const state = { filter: "all", visible: [], current: -1 };

const $ = (sel) => document.querySelector(sel);

function waUrl(message) {
  return `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(message)}`;
}

function formatPrice(product) {
  return product.price ? `${STORE.currencySymbol} ${product.price.toLocaleString("en-US")}` : "Price on WhatsApp";
}

function productMessage(product) {
  const price = product.price ? ` (${formatPrice(product)})` : "";
  return `Assalam o Alaikum! I am interested in "${product.title}"${price} from ${STORE.brand}. Please share price and availability.`;
}

const GENERAL_MESSAGES = {
  general: `Assalam o Alaikum! I would like to know more about ${STORE.brand}.`,
  shirts: `Assalam o Alaikum! I would like to enquire about volleyball shirts from ${STORE.brand}.`
};

function renderFilters() {
  $("#filters").innerHTML = FILTERS.map(f =>
    `<button class="chip${f.key === state.filter ? " active" : ""}" role="tab" aria-selected="${f.key === state.filter}" data-filter="${f.key}">${f.label}</button>`
  ).join("");
}

function renderGrid() {
  state.visible = PRODUCTS.filter(p => state.filter === "all" || p.category === state.filter);
  $("#grid").innerHTML = state.visible.map((p, i) => `
    <article class="card">
      <button class="card-img" data-index="${i}" aria-label="View ${p.title}">
        <img src="images/${p.image}" alt="${p.title}" loading="lazy" />
      </button>
      <div class="card-body">
        <span class="card-tag">${p.tag}</span>
        <h3>${p.title}</h3>
        <p class="card-price">${formatPrice(p)}</p>
        <a class="card-link" href="${waUrl(productMessage(p))}" target="_blank" rel="noopener">Enquire on WhatsApp &rarr;</a>
      </div>
    </article>`).join("");
}

function openLightbox(index) {
  const total = state.visible.length;
  state.current = (index + total) % total;
  const p = state.visible[state.current];
  $("#lb-img").src = `images/${p.image}`;
  $("#lb-img").alt = p.title;
  $("#lb-tag").textContent = p.tag;
  $("#lb-title").textContent = p.title;
  $("#lb-price").textContent = formatPrice(p);
  $("#lb-order").href = waUrl(productMessage(p));
  $("#lb-order").target = "_blank";
  $("#lb-order").rel = "noopener";
  $("#lightbox").hidden = false;
  document.body.classList.add("no-scroll");
}

function closeLightbox() {
  $("#lightbox").hidden = true;
  document.body.classList.remove("no-scroll");
}

function setMenu(open) {
  $("#nav").classList.toggle("open", open);
  $("#menu-btn").setAttribute("aria-expanded", String(open));
}

document.addEventListener("DOMContentLoaded", () => {
  // Generic WhatsApp links
  document.querySelectorAll("[data-wa]").forEach(el => {
    el.href = waUrl(GENERAL_MESSAGES[el.dataset.wa] || GENERAL_MESSAGES.general);
    el.target = "_blank";
    el.rel = "noopener";
  });
  $("#call-link").href = `tel:${STORE.phoneDisplay.replace(/[^0-9+]/g, "")}`;
  $("#phone-text").textContent = STORE.phoneDisplay;
  $("#year").textContent = new Date().getFullYear();

  renderFilters();
  renderGrid();

  $("#filters").addEventListener("click", (e) => {
    const chip = e.target.closest("[data-filter]");
    if (!chip) return;
    state.filter = chip.dataset.filter;
    renderFilters();
    renderGrid();
  });

  $("#grid").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-index]");
    if (btn) openLightbox(Number(btn.dataset.index));
  });

  $("#lb-close").addEventListener("click", closeLightbox);
  $("#lb-prev").addEventListener("click", () => openLightbox(state.current - 1));
  $("#lb-next").addEventListener("click", () => openLightbox(state.current + 1));
  $("#lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if ($("#lightbox").hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") openLightbox(state.current - 1);
    if (e.key === "ArrowRight") openLightbox(state.current + 1);
  });

  $("#menu-btn").addEventListener("click", () => setMenu(!$("#nav").classList.contains("open")));
  $("#nav").addEventListener("click", (e) => { if (e.target.tagName === "A") setMenu(false); });

  const header = $(".site-header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 20);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});
