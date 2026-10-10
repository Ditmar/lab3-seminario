
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { getCurrency, convert } from '../src/currency.js';
import { formatPrice } from '../src/format.js';

describe('Monedas', () => {
  it('obtiene una moneda válida', () => {
    assert.equal(getCurrency('USD').symbol, '$');
  });

  it('rechaza una moneda desconocida', () => {
    assert.throws(
      () => getCurrency('XYZ'),
      /Moneda no soportada: XYZ/
    );
  });

  it('convierte montos correctamente', () => {
    assert.equal(convert(100, 'USD'), 14.5);
    assert.equal(convert(100, 'EUR'), 13.3);
    assert.equal(convert(10), 10);
  });

  it('formatea precios en distintas monedas', () => {
    assert.equal(formatPrice(100, 'USD'), '$ 14.50');
    assert.equal(formatPrice(10), 'Bs 10.00');
    assert.equal(formatPrice(100, 'EUR'), '€ 13.30');
  });

  it('rechaza monedas desconocidas al formatear', () => {
    assert.throws(
      () => formatPrice(100, 'XYZ'),
      /Moneda no soportada: XYZ/
    );
  });
});