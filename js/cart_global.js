// Injected Styles for Cart Badge
const style = document.createElement("style");
style.textContent = `
    .cart-badge {
        position: absolute;
        top: -6px;
        right: -8px;
        background-color: #b8915a; /* Gold color */
        color: white;
        font-size: 10px;
        font-weight: 600;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid white;
        pointer-events: none;
        z-index: 10;
    }

    /* Universal Search Overlay */
    #universalSearchOverlay {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        background: rgba(74, 44, 94, 0.95) !important;
        display: none;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
        z-index: 9999 !important;
        color: white !important;
        transition: all 0.3s ease !important;
    }
    #universalSearchOverlay.is-active {
        display: flex !important;
        animation: fadeIn 0.3s ease !important;
    }

    .search-container {
        width: 80%;
        max-width: 600px;
        text-align: center;
    }
    .search-container input {
        width: 100%;
        background: none;
        border: none;
        border-bottom: 2px solid rgba(255, 255, 255, 0.2);
        color: white;
        font-size: 2rem;
        padding: 1rem;
        outline: none;
        text-align: center;
        margin-bottom: 2rem;
        font-family: 'Cormorant Garamond', serif;
    }
    .search-container input::placeholder {
        color: rgba(255, 255, 255, 0.4);
    }
    .close-search {
        position: absolute;
        top: 2rem;
        right: 2rem;
        background: none;
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
    }
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);

// Inject Search Overlay HTML
const searchHTML = `
    <div id="universalSearchOverlay">
        <button class="close-search" onclick="toggleSearch()">&times;</button>
        <div class="search-container">
            <input type="text" id="universalSearchInput" placeholder="What are you looking for?" onkeyup="handleSearch(event)">
            <p style="opacity: 0.6; font-size: 0.9rem; letter-spacing: 2px;">PRESS ENTER TO SEARCH</p>
        </div>
    </div>
`;
document.body.insertAdjacentHTML("beforeend", searchHTML);

function toggleSearch() {
  const overlay = document.getElementById("universalSearchOverlay");
  const input = document.getElementById("universalSearchInput");
  const isActive = overlay.classList.contains("is-active");

  if (!isActive) {
    overlay.classList.add("is-active");
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("q")) {
      input.value = urlParams.get("q");
    }
    input.focus();
  } else {
    overlay.classList.remove("is-active");
  }
}

function handleSearch(event) {
  const query = event.target.value.trim();

  // If we are on the shop page, we can filter instantly (or on Enter)
  if (typeof filterProducts === "function") {
    // If they press enter, just close the overlay
    if (event.key === "Enter") {
      toggleSearch();
      return;
    }
    // Live search if on shop page
    filterProducts(query);
    return;
  }

  if (event.key === "Enter") {
    if (query) {
      window.location.href = `shop.html?q=${encodeURIComponent(query)}`;
    } else {
      window.location.href = `shop.html`; // Clear search
    }
  }
}

function getCart() {
  return JSON.parse(localStorage.getItem("darineCart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("darineCart", JSON.stringify(cart));
}

function getProductPrice(type) {
  if (type === "Eau de Parfum") return 180;
  if (type === "Perfume Oils") return 95;
  if (type === "Body and Hair Mists") return 65;
  if (type === "Layering Bundle") return 300; // Bundle price fallback
  return 0;
}

function addToCart(product) {
  if (!product) return;

  let cart = getCart();

  // Normalize and ensure all fields exist
  let itemToAdd = {
    name: product.name,
    type: product.type || "Product",
    gender: product.gender || "unisex",
    categories: Array.isArray(product.categories) ? product.categories : [],
    description: product.description || "",
    notes: product.notes || { top: "N/A", middle: "N/A", base: "N/A" },
    price: product.price || getProductPrice(product.type),
    quantity: 1,
  };

  // Check if product already in cart
  let existingProduct = cart.find(function (item) {
    return item.name === itemToAdd.name;
  });

  if (existingProduct) {
    existingProduct.quantity += 1;
    // Ensure price is set if it was missing
    if (!existingProduct.price) {
      existingProduct.price = getProductPrice(existingProduct.type);
    }
  } else {
    cart.push(itemToAdd);
  }

  saveCart(cart);
  updateCartBadge();
  showCartPopup(itemToAdd.name + " added to cart");
}

function showCartPopup(message) {
  let popup = document.getElementById("cartPopup");

  if (!popup) return;

  popup.innerText = message;
  popup.classList.add("show");

  setTimeout(function () {
    popup.classList.remove("show");
  }, 2500);
}

function updateCartBadge() {
  let cart = getCart();
  let total = cart.reduce((sum, item) => sum + item.quantity, 0);
  let badge = document.getElementById("cartBadge");
  if (badge) {
    badge.innerText = total;
    badge.style.display = total > 0 ? "flex" : "none";
  }
}

document.addEventListener("DOMContentLoaded", updateCartBadge);
