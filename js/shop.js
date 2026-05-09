const productsGrid = document.getElementById("productsGrid");

const genderFilter = document.getElementById("genderFilter");
const categoryFilter = document.getElementById("categoryFilter");
const typeFilter = document.getElementById("typeFilter");
const sortFilter = document.getElementById("sortFilter");

const quickButtons = document.querySelectorAll(".quick-filter");

let allProducts = [];

const bestsellers = [
    "Santal Serenity",
    "Oud Nocturne",
    "Vanilla Cloud",
    "Amber Velvet",
    "Paper Sage",
    "Midnight Rose"
];

function prepareProducts() {
    allProducts = [];

    for (let type in perfumeData) {
        perfumeData[type].forEach(function(product) {
            allProducts.push({
    name: product.name,
    image: product.image,
    type: type,
    gender: product.gender,
    categories: product.categories,
    description: product.description,
    notes: product.notes
});
        });
    }
}

function displayProducts(products) {
    productsGrid.innerHTML = "";

    if (products.length === 0) {
        productsGrid.innerHTML = `<p class="empty-message">No products found.</p>`;
        return;
    }

    products.forEach(function(product) {
        const card = document.createElement("div");
        card.className = "product-card fade-card";

        let tag = "";

        if (bestsellers.includes(product.name)) {
            tag = `<span class="best-tag">Bestseller</span>`;
        }

        card.innerHTML = `
    ${tag}

    <div class="product-image-wrapper">
        <img src="${product.image}" alt="${product.name}" class="product-image">
    </div>

    <div class="product-info">
        <span class="product-type">${product.type}</span>

        <h3>${product.name}</h3>

        <p class="product-description">${product.description}</p>

        <p class="product-meta">
            ${formatGender(product.gender)} • ${product.categories.join(", ")}
        </p>

        <p class="notes">
            <strong>Top:</strong> ${product.notes.top}<br>
            <strong>Heart:</strong> ${product.notes.middle}<br>
            <strong>Base:</strong> ${product.notes.base}
        </p>

        <button class="add-to-cart">Add to Cart</button>
    </div>
`;
        productsGrid.appendChild(card);

        const addButton = card.querySelector(".add-to-cart");

        addButton.addEventListener("click", function() {
            addToCart(product);
        });
    });

    revealCards();
}

function formatGender(gender) {
    if (gender === "for him") {
        return "For Him";
    }

    if (gender === "for her") {
        return "For Her";
    }

    return "For Them";
}

function filterProducts(forcedQuery) {
    let selectedGender = genderFilter.value;
    let selectedCategory = categoryFilter.value;
    let selectedType = typeFilter.value;
    let selectedSort = sortFilter.value;

    const urlParams = new URLSearchParams(window.location.search);
    const urlQuery = urlParams.get('q') ? urlParams.get('q').toLowerCase() : "";
    
    // Use the forcedQuery if provided (live search), otherwise fallback to URL query
    const searchQuery = (typeof forcedQuery === 'string' ? forcedQuery : urlQuery).toLowerCase().trim();

    let filtered = allProducts.filter(function(product) {
        let genderMatch = selectedGender === "all" || product.gender === selectedGender;
        let categoryMatch = selectedCategory === "all" || product.categories.includes(selectedCategory);
        let typeMatch = selectedType === "all" || product.type === selectedType;
        
        let searchMatch = true;
        if (searchQuery) {
            searchMatch = (product.name || "").toLowerCase().includes(searchQuery) || 
                          (product.description || "").toLowerCase().includes(searchQuery) ||
                          (product.type || "").toLowerCase().includes(searchQuery);
        }

        return genderMatch && categoryMatch && typeMatch && searchMatch;
    });

    if (selectedSort === "name-az") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedSort === "name-za") {
        filtered.sort((a, b) => b.name.localeCompare(a.name));
    } else if (selectedSort === "type") {
        filtered.sort((a, b) => a.type.localeCompare(b.type));
    }

    displayProducts(filtered);
}

function revealCards() {
    const cards = document.querySelectorAll(".fade-card");

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(function(card) {
        observer.observe(card);
    });
}

genderFilter.addEventListener("change", filterProducts);
categoryFilter.addEventListener("change", filterProducts);
typeFilter.addEventListener("change", filterProducts);
sortFilter.addEventListener("change", filterProducts);

quickButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        quickButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        genderFilter.value = button.dataset.filter;
        filterProducts();
    });
});

// Using global addToCart from cart_global.js

prepareProducts();
filterProducts(); // Apply initial filters including search query from URL
