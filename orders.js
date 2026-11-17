import { STORE } from './config';
import { money } from './utils';

const KEY = 'kc_orders';

function readAll() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  } catch {
    return [];
  }
}

export function getOrders(email) {
  return readAll()
    .filter((o) => o.email === email)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export function saveOrder(order) {
  try {
    localStorage.setItem(KEY, JSON.stringify([order, ...readAll()]));
  } catch {
    /* storage unavailable: order still shown once on screen */
  }
}

export function newOrderId() {
  const d = new Date();
  const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
  return `KC-${ymd}-${Math.floor(1000 + Math.random() * 9000)}`;
}

// Opens a WhatsApp chat to the shop with the order details filled in.
export function whatsappLink(order) {
  const items = order.lines
    .map((l) => `${l.qty} x ${l.name} (UK ${l.size}) - ${money(l.price * l.qty)}`)
    .join('\n');
  const text = [
    `New order ${order.id}`,
    items,
    `Delivery: ${order.deliveryFee ? money(order.deliveryFee) : 'Free'}`,
    `Total: ${money(order.total)} (${order.payment === 'cod' ? 'Cash on delivery' : 'UPI on delivery'})`,
    '',
    `${order.ship.name}, ${order.ship.phone}`,
    `${order.ship.address}, ${order.ship.district} - ${order.ship.pincode}`,
  ].join('\n');
  return `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(text)}`;
}
