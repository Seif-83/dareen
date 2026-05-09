<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description"
    content="Darine Perfumes — Discover your signature scent through our curated fragrance quiz." />
  <title>Darine — Find Your Scent</title>
  <link rel="stylesheet" href="css/quiz.css" />
</head>

<body>

  <!-- ═══════════════════════════════════════════
       NAVIGATION
  ═══════════════════════════════════════════ -->
  <nav class="navbar" role="navigation" aria-label="Main navigation">
    <a class="navbar__logo" href="index.php" aria-label="Darine Home">DARINE</a>

    <ul class="navbar__links">
      <li><a href="index.php">Home</a></li>
      <li><a href="shop.php">Shop</a></li>
      <li><a href="quiz.php" class="is-active">Quiz</a></li>
      <li><a href="blog.php">Blog</a></li>
      <li><a href="contact.php">Contact</a></li>
    </ul>

    <div class="navbar__icons">
      <!-- Search -->
      <button aria-label="Search" onclick="toggleSearch()">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </button>
      <!-- Shopping bag -->
      <button aria-label="Shopping bag" onclick="toggleCart()" style="position:relative">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
        <span id="cartBadge" class="cart-badge" style="display:none">0</span>
      </button>
    </div>
  </nav>

  <!-- CART OVERLAY -->
  <div id="cartOverlay" class="cart-overlay" onclick="toggleCart()"></div>

  <!-- CART DRAWER -->
  <aside id="cartDrawer" class="cart-drawer" aria-label="Shopping cart">
    <div class="cart-drawer__header">
      <h3 class="cart-drawer__title">My Cart</h3>
      <button class="cart-drawer__close" onclick="toggleCart()" aria-label="Close cart">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
          stroke-linecap="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
    <div class="cart-drawer__body" id="cartBody">
      <div class="cart__empty">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"
          stroke-linecap="round" stroke-linejoin="round" style="opacity:.35;margin-bottom:.8rem">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
        <p>Your cart is empty</p>
        <span>Add fragrances from your results</span>
      </div>
    </div>
    <div class="cart-drawer__footer" id="cartFooter"></div>
  </aside>


  <!-- ═══════════════════════════════════════════
       PAGE 1 — LANDING
  ═══════════════════════════════════════════ -->
  <main>

    <section id="page-landing" class="page is-active" aria-label="Quiz introduction">
      <div class="landing">
        <!-- Decorative rings -->
        <div class="landing__ring" aria-hidden="true"></div>
        <div class="landing__ring landing__ring--2" aria-hidden="true"></div>

        <!-- Orbs -->
        <div class="landing__orb landing__orb--1" aria-hidden="true"></div>
        <div class="landing__orb landing__orb--2" aria-hidden="true"></div>
        <div class="landing__orb landing__orb--3" aria-hidden="true"></div>

        <div class="landing__inner">
          <p class="landing__eyebrow">
            <span></span>
            The Darine Scent Ritual
            <span></span>
          </p>

          <h1 class="landing__title">
            Your soul has<br />
            a <em>scent.</em><br />
            Let's find it.
          </h1>

          <p class="landing__desc">
            In <strong>seven questions</strong>, our curated ritual reveals
            the perfumes, oils, and mists that were made for exactly
            who you are — not just how you smell.
          </p>

          <div class="landing__cta">
            <button class="btn--primary" onclick="startQuiz()" type="button">
              <span>✦</span>
              <span>Unveil My Scent</span>
            </button>

          </div>


        </div>
      </div>
    </section>


    <!-- ═══════════════════════════════════════════
         PAGE 2 — QUIZ
    ═══════════════════════════════════════════ -->
    <section id="page-quiz" class="page" aria-label="Fragrance quiz">
      <div class="quiz">
        <div class="quiz__wrap">

          <!-- Progress bar -->
          <div class="quiz__progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
            <div class="quiz__progress-track">
              <div class="quiz__progress-fill" id="progressFill" style="width: 0%"></div>
            </div>
            <p class="quiz__progress-label" id="progressLabel">Question 1 of 7</p>
          </div>

          <!-- Dynamic question content -->
          <div id="questionContainer"></div>

          <!-- Navigation -->
          <div class="quiz__nav">
            <button class="quiz__nav-back" id="btnBack" onclick="goBack()" type="button" aria-label="Previous question">
              ← Back
            </button>
            <button class="quiz__nav-next" id="btnNext" onclick="goNext()" type="button">
              Continue →
            </button>
          </div>

        </div>
      </div>
    </section>


    <!-- ═══════════════════════════════════════════
         PAGE 3 — RESULTS
    ═══════════════════════════════════════════ -->
    <section id="page-results" class="page" aria-label="Your fragrance results">
      <div class="results">
        <div class="results__wrap" id="resultsWrap">
          <!-- Dynamically populated by quiz.js -->
        </div>
      </div>
    </section>

  </main>


  <!-- ═══════════════════════════════════════════
       SCRIPTS
  ═══════════════════════════════════════════ -->
  <script src="js/cart_global.js"></script>
  <script src="js/quiz.js"></script>

</body>

</html>