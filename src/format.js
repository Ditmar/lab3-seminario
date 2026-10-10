
import { getCurrency, convert } from './currency.js';

/**
 * Da formato a un precio para mostrarlo al usuario.
 *
 * Reglas:
 * - Muestra el símbolo de la moneda seleccionada.
 * - Siempre utiliza dos decimales.
 *
 * @param {number} amount Monto a convertir desde BOB.
 * @param {string} currency Código de la moneda.
 * @returns {string} Precio convertido y formateado.
 *
 * @example
 * formatPrice(10)          // 'Bs 10.00'
 * formatPrice(100, 'USD')  // '$ 14.50'
 * formatPrice(100, 'EUR')  // '€ 13.30'
 */
export function formatPrice(amount, currency = 'BOB') {
  const currencyInfo = getCurrency(currency);
  const convertedAmount = convert(amount, currency);
  return `${currencyInfo.symbol} ${convertedAmount.toFixed(2)}`;
}