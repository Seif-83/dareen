<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Darine – Checkout</title>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="css/checkout.css"/>
</head>
<body>

<!-- NAV -->
<nav>
  <a href="index.php" class="logo">Darine</a>
  <ul class="nav-links">
    <li><a href="index.php">Home</a></li>
    <li><a href="shop.php">Shop</a></li>
    <li><a href="quiz.php">Quiz</a></li>
    <li><a href="blog.php">Blog</a></li>
    <li><a href="contact.php">Contact</a></li>
  </ul>
  <div class="nav-icons">
    <button aria-label="Search" onclick="toggleSearch()" style="background:none;border:none;cursor:pointer;padding:0;">
      <svg viewBox="0 0 24 24" style="width:22px;height:22px;stroke:currentColor;fill:none;">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
      </svg>
    </button>
    <div class="cart-wrapper" onclick="window.location.href='cart.php'" style="cursor:pointer">
      <svg viewBox="0 0 24 24" style="width:22px;height:22px;stroke:currentColor;fill:none;">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
      <span class="cart-badge" id="cartBadge">0</span>
    </div>
  </div>

</nav>

<!-- Universal Search Overlay Injected via cart_global.js -->

<!-- MAIN -->
<main>
  <h1>Checkout</h1>

  <div class="checkout-grid">

    <!-- LEFT: FORM -->
    <div class="form-card">

      <!-- SHIPPING -->
      <p class="section-title">Shipping Information</p>
      <form id="checkoutForm" action="includes/process_order.php" method="POST" novalidate>

        <div class="form-row">
          <div class="field">
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" name="first_name" placeholder="first name" required/>
            <span class="error-msg" id="err-firstName"></span>
          </div>
          <div class="field">
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" name="last_name" placeholder="last name" required/>
            <span class="error-msg" id="err-lastName"></span>
          </div>
        </div>

        <div class="form-row single">
          <div class="field">
            <label for="address">Address</label>
            <input type="text" id="address" name="address" placeholder="e.g. 123 Nile Street, Building 4" required/>
            <span class="error-msg" id="err-address"></span>
          </div>
        </div>



        <!-- PAYMENT -->
        <div class="payment-section">
          <p class="section-title">Payment Method</p>

          <div class="whatsapp-payment-box">
            <div class="whatsapp-icon-circle">
              <svg viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.8 69.4 27.2 106.2 27.2 122.4 0 222-99.6 222-222 0-59.3-23-115.1-65-157.1zM223.9 446.3c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.7-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.5-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 54.1 81.2 54.1 130.4 0 101.7-82.8 184.5-184.5 184.5zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.1-3.2-5.5-.3-8.5 2.5-11.2 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.5 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
            </div>
            <div class="whatsapp-info">
              <h4>Order via WhatsApp</h4>
              <p>Click "Complete Order" to send your order details to <span class="whatsapp-number">01070495213</span> and finalize your purchase.</p>
            </div>
          </div>
        </div>

        <!-- Hidden cart data passed to PHP -->
        <input type="hidden" name="cart_data" id="cartData"/>

      </form>
    </div>

    <!-- RIGHT: SUMMARY -->
    <div class="summary-card">
      <p class="summary-title">Order Summary</p>

      <div id="orderItems">
        <!-- Populated by JS from cart -->
        <div class="order-item">
          <div class="item-info">
            <p class="item-name">Midnight Rose</p>
            <p class="item-qty">Qty: 1</p>
          </div>
          <p class="item-price">$130</p>
        </div>
        <div class="order-item">
          <div class="item-info">
            <p class="item-name">White Jasmine</p>
            <p class="item-qty">Qty: 1</p>
          </div>
          <p class="item-price">$155</p>
        </div>
      </div>

      <hr class="summary-divider"/>

      <div class="summary-row">
        <span>Subtotal</span>
        <span id="subtotal">$285</span>
      </div>
      <div class="summary-row">
        <span>
          <svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8Z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          Shipping
        </span>
        <span id="shipping">$15</span>
      </div>

      <hr class="summary-divider"/>

      <div class="summary-total">
        <span>Total</span>
        <span id="total">$300</span>
      </div>

      <button class="btn-order" id="placeOrderBtn" onclick="submitOrder()">Complete Order</button>

      <!-- Spinner shown during submission -->
      <div class="spinner" id="spinner"></div>

      <!-- Success / error message -->
      <div class="order-msg" id="orderMsg"></div>
    </div>

  </div>
</main>

<!-- TOAST -->
<div class="toast" id="toast"></div>

<script src="js/cart_global.js"></script>
<script src="js/checkout.js"></script>
</body>
</html>
