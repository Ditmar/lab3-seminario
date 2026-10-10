
import { round2 } from './money.js';

export const TAX_RATE = 0.13;

/**
 * Calcula el importe del IVA del 13 %.
 *
 * @param {number} amount Importe base.
 * @returns {number} Importe del IVA redondeado a dos decimales.
 */
export function calculateTax(amount) {
  return round2(amount * TAX_RATE);
}

/**
 * Añade el IVA del 13 % al importe base.
 *
 * @param {number} amount Importe base.
 * @returns {number} Importe total con IVA.
 */
export function addTax(amount) {
  return round2(amount + calculateTax(amount));
}