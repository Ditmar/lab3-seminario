
import { formatPrice } from './format.js';

/**
 * Genera el texto de un recibo.
 *
 * @param {Array<{name: string, price: number, quantity: number}>} items Ítems comprados.
 * @returns {string} Recibo de varias líneas.
 */
export function buildReceipt(items) {
  const lines = ['=== MINI TIENDA ==='];
  let total = 0;

  for (const item of items) {
    const subtotal = item.price * item.quantity;
    total += subtotal;

    const label = `${item.name} x${item.quantity}`.padEnd(28);
    lines.push(label + formatPrice(subtotal).padStart(12));
  }

  lines.push('TOTAL'.padEnd(28) + formatPrice(total).padStart(12));

  return lines.join('\n');
}