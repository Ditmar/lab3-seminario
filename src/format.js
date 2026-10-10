import { getCurrency, convert } from './currency.js';

/**
 * Da formato a un precio para mostrarlo al usuario.
 *
 * Reglas actuales:
 *  - Siempre se muestra en bolivianos (Bs).
 *  - Siempre con dos decimales.
 *
* @param {number} amount Monto a formatear.
 * @param {object} [options={}] Opciones de formato.
 * @param {number} [options.width=0] Ancho mínimo para alinear el precio a la derecha.
 * @param {number} amount Monto a formatear.
 * @param {string} [currency='BOB'] Código de la moneda (BOB, USD, EUR).
 * @returns {string} Precio formateado.
 */
export function formatPrice(amount, currency = 'BOB', { width = 0 } = {}) {
  const curr = getCurrency(currency);
  const convertedAmount = convert(amount, currency);
  const formatted = `${curr.symbol} ${convertedAmount.toFixed(2)}`;

  return formatted.padStart(width);
}
