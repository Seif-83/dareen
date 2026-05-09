<?php
/* ============================================================
   DARINE – process_order.php
   Receives checkout POST data, validates, saves order, responds
   ============================================================ */

header('Content-Type: application/json');

/* ── Only accept POST ── */
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

/* ── Sanitize helper ── */
function clean(string $val): string {
    return htmlspecialchars(strip_tags(trim($val)), ENT_QUOTES, 'UTF-8');
}

/* ── Collect & sanitize inputs ── */
$firstName  = clean($_POST['first_name']  ?? '');
$lastName   = clean($_POST['last_name']   ?? '');
$address    = clean($_POST['address']     ?? '');
$cartData   = $_POST['cart_data']         ?? '';

/* ── Server-side validation ── */
$errors = [];

if (empty($firstName)) $errors[] = 'First name is required.';
if (empty($lastName))  $errors[] = 'Last name is required.';
if (empty($address))   $errors[] = 'Address is required.';

/* Cart data */
$cart = null;
if (!empty($cartData)) {
    $cart = json_decode($cartData, true);
}
if (!$cart || empty($cart['items'])) {
    $errors[] = 'Cart is empty or invalid.';
}

/* ── Return validation errors ── */
if (!empty($errors)) {
    echo json_encode([
        'success' => false,
        'message' => implode(' ', $errors),
        'errors'  => $errors
    ]);
    exit;
}

/* ── Calculate totals server-side ── */
$subtotal = 0;
foreach ($cart['items'] as $item) {
    // Note: Standardized on 'quantity' in JS
    $subtotal += (float)($item['price'] ?? 0) * (int)($item['quantity'] ?? 1);
}
$shipping = (float)($cart['shipping'] ?? 15);
$total    = $subtotal + $shipping;

/* ── Build order record ── */
$order = [
    'order_id'   => 'ORD-' . strtoupper(bin2hex(random_bytes(4))),
    'created_at' => date('Y-m-d H:i:s'),
    'customer'   => [
        'first_name' => $firstName,
        'last_name'  => $lastName,
        'address'    => $address,
    ],
    'payment'    => [
        'method' => 'WhatsApp',
    ],
    'items'      => $cart['items'],
    'subtotal'   => $subtotal,
    'shipping'   => $shipping,
    'total'      => $total,
    'status'     => 'pending_whatsapp',
];

/* ── No local persistence required (WhatsApp-only flow) ── */
/* If you ever need to save orders to a database, you would do it here. */

/* ── Send confirmation email (optional – requires mail setup) ── */
/*
$to      = $email; // add email field if needed
$subject = 'Your Darine order ' . $order['order_id'];
$body    = "Thank you, {$firstName}! Your order {$order['order_id']} of \${$total} has been placed.";
mail($to, $subject, $body);
*/

/* ── Success response ── */
echo json_encode([
    'success'  => true,
    'order_id' => $order['order_id'],
    'total'    => $total,
    'message'  => 'Order placed successfully!'
]);
exit;
