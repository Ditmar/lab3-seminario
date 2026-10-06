import { round2 } from './money.js';

export const DISCOUNT_CODES = { 
  SAVE10: 0.1, 
  SAVE20: 0.2, 
  BLACKFRIDAY: 0.3 
};

export function applyDiscount(amount, code) {
  if (!code) {
    return round2(amount);
  }
  
  const upperCode = code.toUpperCase();
  const discountRate = DISCOUNT_CODES[upperCode];
  
  if (discountRate === undefined) {
    return round2(amount);
  }
  
  const discountAmount = amount * discountRate;
  return round2(amount - discountAmount);
}