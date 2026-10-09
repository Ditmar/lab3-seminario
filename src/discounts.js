import { round2 } from './money.js';
// Codigos de descuento disponibles para la tienda
export const DISCOUNT_CODES = {
  SAVE10: 0.1,
  SAVE20: 0.2,
  BLACKFRIDAY: 0.3,
};

export function applyDiscount(amount, code) {
  const normalizedCode = code?.toUpperCase();
  const discount = DISCOUNT_CODES[normalizedCode];

  if (discount === undefined) {
    return round2(amount);
  }

  return round2(amount * (1 - discount));
}