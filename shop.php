<?php include 'includes/products.php'; ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Darine | Shop</title>

    <link rel="stylesheet" href="css/shop_styling.css">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
</head>

<body>

  <nav class="navbar" role="navigation" aria-label="Main navigation">
    <a class="navbar__logo" href="index.php" aria-label="Darine Home">DARINE</a>

    <ul class="navbar__links">
      <li><a href="index.php">Home</a></li>
      <li><a href="shop.php" class="is-active">Shop</a></li>
      <li><a href="quiz.php" >Quiz</a></li>
      <li><a href="blog.php">Blog</a></li>
      <li><a href="contact.php">Contact</a></li>
    </ul>

    <div class="navbar__icons">
      <!-- Search -->
      <button aria-label="Search" onclick="toggleSearch()">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
      </button>
      <!-- Shopping bag -->
      <button aria-label="Shopping bag" onclick="window.location.href='cart.php'" style="position:relative">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
        <span id="cartBadge" class="cart-badge" style="display:none">0</span>
      </button>
    </div>
  </nav>

<header class="shop-header">
    <h1>Shop</h1>
</header>

<main>

    <section class="shop-hero">
        <span class="small-label">THE COLLECTION</span>
        <h2>Find Your Signature Scent</h2>
        <p>
            Explore eau de parfums, perfume oils, and body mists created for every mood,
            every moment, and every layer of your scent story.
        </p>
    </section>

    <section class="quick-filters">
        <button class="quick-filter active" data-filter="all">All</button>
        <button class="quick-filter" data-filter="for him">For Him</button>
        <button class="quick-filter" data-filter="for her">For Her</button>
        <button class="quick-filter" data-filter="unisex">For Them</button>
    </section>

    <section class="filter-menu">

        <div class="filter-box">
            <label for="genderFilter">Gender</label>
            <select id="genderFilter">
                <option value="all">All</option>
                <option value="for him">For Him</option>
                <option value="for her">For Her</option>
                <option value="unisex">For Them</option>
            </select>
        </div>

        <div class="filter-box">
            <label for="categoryFilter">Category</label>
            <select id="categoryFilter">
                <option value="all">All</option>
                <option value="Fruity">Fruity</option>
                <option value="Floral">Floral</option>
                <option value="Clean">Clean</option>
                <option value="Sweet">Sweet</option>
                <option value="Woody">Woody</option>
                <option value="Vanilla">Vanilla</option>
            </select>
        </div>

        <div class="filter-box">
            <label for="typeFilter">Product Type</label>
            <select id="typeFilter">
                <option value="all">All</option>
                <option value="Eau de Parfum">Eau de Parfum</option>
                <option value="Perfume Oils">Perfume Oils</option>
                <option value="Body and Hair Mists">Body and Hair Mists</option>
            </select>
        </div>

        <div class="filter-box">
            <label for="sortFilter">Sort By</label>
            <select id="sortFilter">
                <option value="default">Default</option>
                <option value="name-az">Name A-Z</option>
                <option value="name-za">Name Z-A</option>
                <option value="type">Product Type</option>
            </select>
        </div>

    </section>

    <section id="products" class="products-section">
        <div class="products-grid" id="productsGrid"></div>
    </section>

</main>

<div id="cartPopup" class="cart-popup"></div>

<script>
const perfumeData = <?php echo json_encode($perfumeBrand); ?>;
</script>

<script src="js/cart_global.js"></script>
<script src="js/shop.js"></script>


</body>
</html>
