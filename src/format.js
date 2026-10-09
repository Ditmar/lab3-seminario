import { getCurrency, convert } from './currency.js';

/**
 * Da formato a un precio para mostrarlo al usuario.
 *
 * @param {number} amount Monto a formatear.
 * @param {string} [currency='BOB'] Código de la moneda (BOB, USD, EUR).
 * @returns {string} Precio formateado.
 * @example
 * formatPrice(100, 'USD') // '$ 14.50'
 * formatPrice(10)        // 'Bs 10.00'
 */
export function formatPrice(amount, currency = 'BOB') {
  const curr = getCurrency(currency);
  const convertedAmount = convert(amount, currency);
  return `${curr.symbol} ${convertedAmount.toFixed(2)}`;
}
