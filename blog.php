<?php include 'includes/products.php'; ?>
<?php include 'includes/testmonials_data.php'; ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Darine | Perfume Journal & Lab</title>

    <link rel="stylesheet" href="css/styling.css">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
</head>

<body>
<nav class="navbar" role="navigation" aria-label="Main navigation">
    <a class="navbar__logo" href="index.php" aria-label="Darine Home">DARINE</a>

    <ul class="navbar__links">
      <li><a href="index.php">Home</a></li>
      <li><a href="shop.php">Shop</a></li>
      <li><a href="quiz.php">Quiz</a></li>
      <li><a href="blog.php" class="is-active">Blog</a></li>
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
<header class="journal-header">
    <h1>The Perfume Edit</h1>

    <nav class="journal-nav">
        <a href="#articles">ARTICLES</a>
        <a href="#lab">PERFUME LAB</a>
        <a href="#testimonials">REVIEWS</a>
        <a href="#news">NEWS</a>
    </nav>
</header>

<main>

    <section id="articles" class="featured-article">
        <div class="article-container">
            <div class="article-image-placeholder">
                 <img src="assets/midnightrose1.png" alt="Midnight Rose">
            </div>

            <div class="article-text">
                <span class="date">April 28, 2026</span>
                <h2>Behind the Scent: Midnight Rose</h2>
                <p>The story behind our bestselling fragrance, crafted with rare petals from the Grasse region.</p>
                <a href="article.php" class="read-more">READ MORE &rarr;</a>
            </div>
        </div>
    </section>

    <hr class="divider">

    <section id="lab" class="perfume-lab">
        <div class="section-title">
            <h3 class="layeringlab">The Layering Lab</h3>
            <p style="margin-top: 5px; margin-bottom: 20px;">
                Discover our perfume combos and live the absolute dream
            </p>
        </div>

        <div class="carousel-wrapper">
            <button class="arrow prev" onclick="moveLab(-1)">&#8592;</button>

            <div class="lab-container">
                <div class="lab-track" id="labTrack">
                    <?php foreach($bundles as $index => $bundle): ?>
                        <div class="combo-card" onclick="openBundle(<?php echo $index; ?>)">
                            <h4><?php echo $bundle['bundle_name']; ?></h4>
                            <span class="view-products"><?php echo $bundle['vibe']; ?></span>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <button class="arrow next" onclick="moveLab(1)">&#8594;</button>
        </div>
    </section>

    <section id="testimonials" class="testimonials">

        <div class="testimonial-box">
            <?php foreach($celebrityReviews as $index => $cel): ?>
                <div class="review <?php echo $index === 0 ? 'active' : ''; ?>">
                    <blockquote>"<?php echo $cel['quote']; ?>"</blockquote>
                    <cite>— <?php echo $cel['name']; ?></cite>
                    <span class="wearing-tag">Wearing: <?php echo $cel['scent']; ?></span>
                </div>
            <?php endforeach; ?>
        </div>

        <div class="customer-reviews-grid">
            <?php foreach($customerReviews as $rev): ?>
                <div class="review-card-perimeter">
                    <span class="stars"><?php echo $rev['stars']; ?></span>
                    <p class="rev-text"><?php echo $rev['review']; ?></p>

                    <div class="rev-footer">
                        <strong class="reviewer"><?php echo $rev['reviewer']; ?></strong>
                        <span class="wearing">- Wearing: <?php echo $rev['scent']; ?></span>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

    </section>

</main>

<div id="product-module" class="module">
    <div class="module-content">
        <div class="module-header">
            <h2 id="modalTitle">Bundle Name</h2>
            <p id="modalDescription">Bundle description text goes here.</p>
        </div>

        <div class="product-grid-3" id="modalProductGrid"></div>
    </div>
</div>

<section id="news" class="news-section">

    <div class="section-title">
        <span class="label">NEWS</span>
        <h3>Latest From Darine</h3>
    </div>

    <div class="news-grid">

        <article class="news-card">
            <span class="news-tag">New Drop</span>
            <span class="news-date">April 30, 2026</span>
            <h4>Velvet Smoke Joins the Collection</h4>
            <p>
                Our newest unisex scent brings soft grey incense, labdanum, guaiac wood,
                and creamy vanilla into one smooth evening fragrance.
            </p>
        </article>

        <article class="news-card">
            <span class="news-tag">Restock</span>
            <span class="news-date">April 27, 2026</span>
            <h4>Santal Serenity Is Back</h4>
            <p>
                The minimalist sandalwood favorite has returned after selling out.
                A clean, woody scent made for everyday wear and quiet luxury lovers.
            </p>
        </article>

        <article class="news-card">
            <span class="news-tag">Best Seller</span>
            <span class="news-date">April 25, 2026</span>
            <h4>April’s Best Seller: Oud Nocturne</h4>
            <p>
                Rich oud, honey, saffron, and leather made Oud Nocturne our most requested
                fragrance this month.
            </p>
        </article>

        <article class="news-card">
            <span class="news-tag">Layering Lab</span>
            <span class="news-date">April 22, 2026</span>
            <h4>The Urban Nomad Is Trending</h4>
            <p>
                Black Tea Concentrate, Paper Sage, and Zen Matcha became one of our most
                saved layering combinations this week.
            </p>
        </article>

        <article class="news-card">
            <span class="news-tag">Limited Edit</span>
            <span class="news-date">April 18, 2026</span>
            <h4>Rose Saffron Gets a Seasonal Feature</h4>
            <p>
                A warm floral blend of saffron, raspberry, Bulgarian rose, incense,
                vanilla, and guaiac wood — selected for spring evenings.
            </p>
        </article>

        <article class="news-card">
            <span class="news-tag">Community Pick</span>
            <span class="news-date">April 15, 2026</span>
            <h4>Vanilla Cloud Becomes a Layering Favorite</h4>
            <p>
                Customers are pairing Vanilla Cloud with oils and eau de parfums for a
                soft, creamy finish that makes every scent feel warmer.
            </p>
        </article>

    </div>

</section>


<div id="cartPopup" class="cart-popup"></div>

<script>
    const perfumeBundles = <?php echo json_encode($bundles); ?>;
    const perfumeData = <?php echo json_encode($perfumeBrand); ?>;
</script>

<script src="js/cart_global.js"></script>
<script src="js/script.js"></script>

</body>
</html>
