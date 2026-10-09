import { round2 } from './money.js';
import { applyDiscount } from './discounts.js';

/**
 * Calcula el total de un carrito de compras.
 *
 * Aplica el descuento al subtotal antes de cualquier impuesto.
 * Si no se proporciona un código, conserva el comportamiento anterior.
 *
 * @param {Array<{price: number, quantity: number}>} items Ítems del carrito.
 * @param {{discountCode?: string}} [options={}] Opciones de cálculo.
 * @returns {number} Total del carrito redondeado a 2 decimales.
 *
 * @example
 * calculateTotal([]) // 0
 * calculateTotal([{ price: 10, quantity: 2 }]) // 20
 * calculateTotal(
 *   [{ price: 100, quantity: 1 }],
 *   { discountCode: 'SAVE10' }
 * ) // 90
 */
export function calculateTotal(items, { discountCode } = {}) {
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  if (discountCode === undefined) {
    return round2(subtotal);
  }

  return applyDiscount(subtotal, discountCode);
}
