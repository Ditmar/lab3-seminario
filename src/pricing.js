
import { round2 } from './money.js';
import { applyDiscount } from './discounts.js';
import { addTax } from './tax.js';

/**
 * Calcula el total del carrito de compras.
 * Primero aplica el descuento y después el IVA, si se solicita.
 *
 * @param {Array<{price: number, quantity: number}>} items Productos del carrito.
 * @param {{discountCode?: string, includeTax?: boolean}} [options={}] Opciones de cálculo.
 * @returns {number} Total del carrito redondeado a dos decimales.
 */
export function calculateTotal(items, { discountCode, includeTax = false } = {}) {
  const subtotal = round2(
    items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );

  const discountedTotal =
    discountCode === undefined
      ? subtotal
      : applyDiscount(subtotal, discountCode);

  return includeTax ? addTax(discountedTotal) : round2(discountedTotal);
}