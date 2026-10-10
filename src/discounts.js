import { round2 } from './money.js';

export const DISCOUNT_CODES = { SAVE10: 0.1, SAVE20: 0.2, BLACKFRIDAY: 0.3 };

// Aplica un código de descuento al monto (no distingue mayúsculas)
export function applyDiscount(amount, code) {
  if (typeof code !== 'string') return amount;
  const rate = DISCOUNT_CODES[code.trim().toUpperCase()];
  if (rate === undefined) return amount;
  return round2(amount * (1 - rate));
}
