/* =========================================================
   PoshanBites — page behaviour
   Builds the snack cards from products.js, gives each card its
   own WhatsApp order message, and applies the settings below.
   ========================================================= */

// ---------- Settings ----------

const FSSAI_NUMBER = "";   // empty = hide the FSSAI line; when filled, show "FSSAI Reg. No. <number>"
const AGE_GUIDANCE = "";   // empty = show no age anywhere (see content rules)
                           // when filled, the text shows once, above the snack list, exactly as written

// WhatsApp number: country code + number, digits only (91 = India)
const WHATSAPP_NUMBER = "919822812616";


// ---------- WhatsApp links ----------

// Opens a chat with the message already typed in. Works in the
// WhatsApp app on phones and on WhatsApp Web on laptops.
function whatsappLink(message) {
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
}

function productMessage(product) {
  return "Hi PoshanBites! I'd like to order " + product.name + " (" + product.packSize + "). My area in Delhi NCR: ";
}


// ---------- Snack cards ----------

// Makes text safe to place inside the page (e.g. the "&" in "nuts & seeds")
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// 245 -> "₹245", 1250 -> "₹1,250"
function formatPrice(price) {
  return "₹" + price.toLocaleString("en-IN");
}

function photoHtml(product) {
  if (!product.image) {
    const tile = product.group === "sweet" ? "ph--blush" : "ph--sage";
    return `<div class="card__photo ph ${tile}" aria-hidden="true"><span>${escapeHtml(product.name)}</span></div>`;
  }
  // width/height only reserve space while loading; the stylesheet sets the real shape
  return `<img class="card__photo" src="${escapeHtml(product.image)}" alt="${escapeHtml(product.imageAlt || product.name)}" width="600" height="400" loading="lazy">`;
}

function cardHtml(product) {
  const allergens = product.allergens
    ? `<p class="card__allergens"><strong>Contains:</strong> ${escapeHtml(product.allergens)}</p>`
    : "";

  return `
    <li class="card">
      ${photoHtml(product)}
      <div class="card__body">
        <h4 class="card__name">${escapeHtml(product.name)}</h4>
        <p class="card__ingredients">${escapeHtml(product.ingredients)}</p>
        ${allergens}
        <p class="card__meta">
          <span>${escapeHtml(product.packSize)}</span>
          <span class="card__leader" aria-hidden="true"></span>
          <span class="card__price">${formatPrice(product.price)}</span>
        </p>
      </div>
      <a class="btn btn--card" href="${escapeHtml(whatsappLink(productMessage(product)))}" target="_blank" rel="noopener">
        <svg class="icon" aria-hidden="true" focusable="false"><use href="#i-whatsapp"/></svg>
        <span>Order this on WhatsApp<span class="visually-hidden">: ${escapeHtml(product.name)}</span></span>
      </a>
    </li>`;
}

// Fills each list on the page (data-group="savoury" / "sweet") with its snacks
function renderProducts() {
  document.querySelectorAll("[data-group]").forEach((list) => {
    const items = PRODUCTS.filter((product) => product.group === list.dataset.group);
    list.innerHTML = items.map(cardHtml).join("");
    // Laptop screens show up to 4 cards per row
    list.style.setProperty("--cols", Math.max(1, Math.min(items.length, 4)));
  });

  PRODUCTS.forEach((product) => {
    if (!document.querySelector(`[data-group="${product.group}"]`)) {
      console.warn(`"${product.name}" has group "${product.group}", which is not on the page. Use "savoury" or "sweet".`);
    }
  });
}


// ---------- Settings on the page ----------

function applySettings() {
  if (FSSAI_NUMBER) {
    const line = document.querySelector(".site-footer__fssai");
    line.textContent = "FSSAI Reg. No. " + FSSAI_NUMBER;
    line.hidden = false;
  }

  if (AGE_GUIDANCE) {
    const note = document.querySelector(".age-note");
    note.textContent = AGE_GUIDANCE;
    note.hidden = false;
  }
}


renderProducts();
applySettings();
