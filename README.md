# Darine – Perfume Website · Checkout Page

## 📁 Project Structure

```
darine/
├── checkout.html          ← Main checkout page (HTML)
├── process_order.php      ← Backend: validates & saves orders
├── config.php             ← Site config, DB settings, helpers
│
├── css/
│   └── style.css          ← All styles (variables, layout, responsive)
│
├── js/
│   └── checkout.js        ← Validation, cart, formatting, submission
│
└── orders/
    └── orders.json        ← Auto-created; stores orders (replace with DB)
```

## 🚀 How to Run

### Local (PHP built-in server)
```bash
cd darine
php -S localhost:8000
# Then open: http://localhost:8000/checkout.html
```

### Apache / NGINX / cPanel
Upload all files maintaining the folder structure. No build step needed.

## ⚙️ Configuration

Edit `config.php` to set:
- Your site URL and email
- Database credentials (MySQL)
- Shipping cost / free shipping threshold

## 🛒 How the Cart Works

Cart items are defined in `js/checkout.js` inside the `cart` object.  
In production, connect this to your session or database cart.

```js
const cart = {
  items: [
    { name: 'Midnight Rose', qty: 1, price: 130 },
    { name: 'White Jasmine', qty: 1, price: 155 }
  ],
  shipping: 15
};
```

## 🗄️ Database (Production)

Uncomment the PDO block in `config.php` and update `process_order.php`  
to insert into a MySQL table instead of the JSON file.

Example table:
```sql
CREATE TABLE orders (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  order_id   VARCHAR(20) UNIQUE NOT NULL,
  first_name VARCHAR(100),
  last_name  VARCHAR(100),
  address    TEXT,
  city       VARCHAR(100),
  state      VARCHAR(100),
  zip        VARCHAR(20),
  card_last4 VARCHAR(4),
  subtotal   DECIMAL(10,2),
  shipping   DECIMAL(10,2),
  total      DECIMAL(10,2),
  status     VARCHAR(20) DEFAULT 'pending',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## 🎨 Design Tokens

Colours are defined as CSS variables in `css/style.css`:

| Variable      | Value     | Usage              |
|---------------|-----------|--------------------|
| `--cream`     | `#f5f0ea` | Page background    |
| `--border`    | `#d8cfc5` | Borders, dividers  |
| `--text`      | `#2c2620` | Body text          |
| `--muted`     | `#7a6f65` | Labels, secondary  |
| `--purple`    | `#3b2f4a` | CTA button, focus  |

Fonts: **Cormorant Garamond** (headings) + **Jost** (body) via Google Fonts.

## 📌 Notes

- Card data is **never stored** – only the last 4 digits are saved.
- For real payments, integrate **Stripe.js** or **PayPal SDK**.
- The `orders/` folder is auto-created by PHP on first order.
