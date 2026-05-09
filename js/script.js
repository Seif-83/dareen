function findProduct(productName, productType) {
    let foundProduct = null;

    if (!perfumeData) {
        return null;
    }

    for (let type in perfumeData) {
        perfumeData[type].forEach(function(product) {
            if (product.name === productName) {
                foundProduct = {
                    name: product.name,
                    image: product.image,
                    gender: product.gender,
                    categories: product.categories,
                    description: product.description,
                    notes: product.notes,
                    type: type
                };
            }
        });
    }

    return foundProduct;
}

function openBundle(index) {
    const bundle = perfumeBundles[index];
    const modal = document.getElementById('product-module');
    const grid = document.getElementById('modalProductGrid');

    document.getElementById('modalTitle').innerText = bundle.bundle_name;
    document.getElementById('modalDescription').innerText = bundle.description;

    grid.innerHTML = '';

    Object.entries(bundle.layering_steps).forEach(function([step, fullName], i) {
        const parts = fullName.split('(');
        const cleanName = parts[0].trim();
        const productType = parts[1] ? parts[1].replace(')', '').trim() : 'Product';

        let price = "$180";
        if (step === "Base") price = "$95";
        if (step === "Finish") price = "$65";

        const product = findProduct(cleanName, productType);

        const imagePath = product && product.image ? product.image : "assets/placeholder.png";

        const card = document.createElement("div");
        card.className = "modal-prod-card";
        card.style.animationDelay = `${i * 0.2}s`;

        card.innerHTML = `
            <div class="modal-img-wrapper">
                <img src="${imagePath}" alt="${cleanName}" class="modal-product-image">
            </div>

            <div class="modal-details-row">
                <div class="details-left">
                    <span class="step-label">${step}</span>
                    <h5>${cleanName}</h5>
                    <span class="modal-price">${price}</span>
                </div>

                <div class="details-right">
                    <span class="product-type">${productType}</span>
                    <button class="add-to-cart-glass">ADD</button>
                </div>
            </div>
        `;

        grid.appendChild(card);

        const addButton = card.querySelector(".add-to-cart-glass");

        addButton.addEventListener("click", function(event) {
            event.stopPropagation();

            if (product) {
                addToCart(product);
            } else {
                alert("Product not found");
            }
        });
    });

    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModule() {
    const modal = document.getElementById('product-module');
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    const modal = document.getElementById('product-module');

    if (event.target == modal) {
        closeModule();
    }
};

let labIndex = 0;

function moveLab(direction) {
    const track = document.getElementById('labTrack');
    const cards = document.querySelectorAll('.combo-card');
    const totalCards = cards.length;

    labIndex += direction;

    if (labIndex >= totalCards) {
        labIndex = 0;
    } else if (labIndex < 0) {
        labIndex = totalCards - 1;
    }

    const cardWidth = cards[0].offsetWidth;
    const gap = 30;
    const moveDistance = cardWidth + gap;

    track.style.transform = `translateX(-${labIndex * moveDistance}px)`;
}

let testIndex = 0;

function autoScrollTestimonials() {
    const reviews = document.querySelectorAll('.review');

    if (reviews.length === 0) {
        return;
    }

    reviews[testIndex].classList.remove('active');
    testIndex = (testIndex + 1) % reviews.length;
    reviews[testIndex].classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    setInterval(autoScrollTestimonials, 4000);

    const reveals = document.querySelectorAll('.reveal');

    if (reveals.length > 0) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        reveals.forEach(function(reveal) {
            observer.observe(reveal);
        });
    }
});