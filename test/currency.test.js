import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { getCurrency, convert } from '../src/currency.js';

describe('currency module', () => {
  it('obtiene moneda existente correctamente', () => {
    const bob = getCurrency('BOB');
    assert.equal(bob.symbol, 'Bs');
    assert.equal(bob.rate, 1);
  });

  it('lanza error al solicitar moneda no soportada', () => {
    assert.throws(() => getCurrency('GBP'), /Moneda no soportada: GBP/);
  });

  it('convierte montos a la moneda especificada', () => {
    assert.equal(convert(100, 'USD'), 14.5);
    assert.equal(convert(10, 'BOB'), 10);
  });
});