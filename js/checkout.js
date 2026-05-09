/* ============================================================
   DARINE – checkout.js
   Handles: validation, card formatting, cart totals, submission
   ============================================================ */

"use strict";

/* ── CART STATE ── */
let cart = {
  items: [],
  shipping: 15,
};

function loadCart() {
  const savedCart = JSON.parse(localStorage.getItem("darineCart")) || [];
  cart.items = savedCart;
}

/* ── DOM READY ── */
document.addEventListener("DOMContentLoaded", () => {
  loadCart(); // 👈 ضيفي دي
  renderCart();

  initCardFormatting();
  initNavScroll();
  initLiveValidation();
});

/* ── RENDER CART ── */
function renderCart() {
  const container = document.getElementById("orderItems");
  if (!container) return;

  // لو الكارت فاضي
  if (cart.items.length === 0) {
    container.innerHTML = "<p>Your cart is empty 🛒</p>";
    setText("subtotal", "$0");
    setText("shipping", "$0");
    setText("total", "$0");
    setText("cartBadge", "0");
    return;
  }

  const subtotal = cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const total = subtotal + cart.shipping;

  container.innerHTML = cart.items
    .map(
      (item) => `
    <div class="order-item">
      <div class="item-info">
        <p class="item-name">${item.name}</p>
        <p class="item-qty">Qty: ${item.quantity}</p>
      </div>
      <p class="item-price">$${item.price}</p>
    </div>
  `,
    )
    .join("");

  setText("subtotal", `$${subtotal}`);
  setText("shipping", `$${cart.shipping}`);
  setText("total", `$${total}`);

  // 👇 عدد المنتجات الحقيقي
  setText(
    "cartBadge",
    cart.items.reduce((n, i) => n + i.quantity, 0),
  );

  const cartInput = document.getElementById("cartData");
  if (cartInput) cartInput.value = JSON.stringify(cart);
}

/* ── CARD NUMBER FORMATTING ── */
function initCardFormatting() {
  const cardInput = document.getElementById("cardNumber");
  const expiryInput = document.getElementById("expiry");
  const cvvInput = document.getElementById("cvv");

  if (cardInput) {
    cardInput.addEventListener("input", (e) => {
      let val = e.target.value.replace(/\D/g, "").slice(0, 16);
      e.target.value = val.replace(/(.{4})/g, "$1 ").trim();
      updateCardIcon(val);
    });
  }

  if (expiryInput) {
    expiryInput.addEventListener("input", (e) => {
      let val = e.target.value.replace(/\D/g, "").slice(0, 4);
      if (val.length >= 2) val = val.slice(0, 2) + " / " + val.slice(2);
      e.target.value = val;
    });
  }

  if (cvvInput) {
    cvvInput.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D/g, "").slice(0, 4);
    });
  }
}

/* ── CARD TYPE ICON ── */
function updateCardIcon(digits) {
  const icon = document.querySelector(".card-icon");
  if (!icon) return;
  // Basic detection – Visa starts 4, Mastercard 5, Amex 3
  const first = digits[0];
  if (first === "4") {
    icon.style.opacity = "1";
  } else if (first === "5") {
    icon.style.opacity = "1";
  } else {
    icon.style.opacity = "0.5";
  }
}

/* ── LIVE VALIDATION ── */
function initLiveValidation() {
  const fields = ["firstName", "lastName", "address"];
  fields.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("blur", () => validateField(id));
    el.addEventListener("input", () => {
      if (el.classList.contains("input-error")) validateField(id);
    });
  });
}

/* ── VALIDATE SINGLE FIELD ── */
function validateField(id) {
  const el = document.getElementById(id);
  const err = document.getElementById("err-" + id);
  if (!el) return true;

  const val = el.value.trim();
  let msg = "";

  switch (id) {
    case "firstName":
    case "lastName":
      if (!val) msg = "This field is required.";
      break;
    case "address":
      if (!val) msg = "Please enter your address.";
      break;
  }

  if (err) err.textContent = msg;
  el.classList.toggle("input-error", !!msg);
  el.classList.toggle("input-valid", !msg && val.length > 0);
  return !msg;
}

/* ── VALIDATE ALL FIELDS ── */
function validateAll() {
  const fields = ["firstName", "lastName", "address"];
  return fields.map(validateField).every(Boolean);
}

/* ── SUBMIT ORDER ── */
function submitOrder() {
  if (!validateAll()) {
    showToast("Please fill in all required fields correctly.");
    return;
  }

  const btn = document.getElementById("placeOrderBtn");
  const spinner = document.getElementById("spinner");
  const msg = document.getElementById("orderMsg");

  btn.disabled = true;
  spinner.classList.add("active");
  if (msg) {
    msg.className = "order-msg";
    msg.textContent = "";
  }

  // Build form data
  const form = document.getElementById("checkoutForm");
  const formData = new FormData(form);

  // Skip PHP processing for static gh-pages hosting
  spinner.classList.remove("active");
  msg.className = "order-msg success";
  msg.textContent = "✓ Order details ready! Redirecting to WhatsApp...";
  btn.textContent = "Redirecting...";
  showToast("Order ready! Opening WhatsApp...");

  // WhatsApp Redirect
  const phoneNumber = "201070495213"; // Egyptian format
  let summary = `Hello Darine, I would like to place an order:\n\n`;
  summary += `*Customer:* ${formData.get("first_name")} ${formData.get("last_name")}\n`;
  summary += `*Address:* ${formData.get("address")}\n\n`;
  summary += `*Order Items:*\n`;

  cart.items.forEach((item) => {
    summary += `- ${item.name} (${item.quantity}x) - $${item.price}\n`;
  });

  const subtotal = cart.items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0,
  );
  summary += `\n*Total:* $${subtotal + cart.shipping}`;

  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(summary)}`;

  // Clear cart after a short delay and redirect
  localStorage.removeItem("darineCart");
  setTimeout(() => {
    window.location.href = waUrl;
  }, 1500);
}

/* Search functionality handled by cart_global.js */

/* ── NAV SCROLL SHADOW ── */
function initNavScroll() {
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 10);
  });
}

/* ── TOAST ── */
function showToast(message, duration = 3000) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), duration);
}

/* ── HELPERS ── */
function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}
