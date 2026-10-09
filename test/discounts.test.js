import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { applyDiscount, DISCOUNT_CODES } from '../src/discounts.js';
import { calculateTotal } from '../src/pricing.js';

describe('applyDiscount', () => {
  it('aplica el 10 %, 20 % y 30 % de descuento', () => {
    assert.equal(applyDiscount(100, 'SAVE10'), 90);
    assert.equal(applyDiscount(100, 'SAVE20'), 80);
    assert.equal(applyDiscount(100, 'BLACKFRIDAY'), 70);
  });

  it('acepta códigos en minúsculas', () => {
    assert.equal(applyDiscount(100, 'save10'), 90);
  });

  it('mantiene el monto si el código es desconocido o undefined', () => {
    assert.equal(applyDiscount(100, 'INVALIDO'), 100);
    assert.equal(applyDiscount(100, undefined), 100);
  });

  it('redondea a dos decimales', () => {
    assert.equal(applyDiscount(10.05, 'SAVE10'), 9.05);
  });

  it('conserva los porcentajes definidos', () => {
    assert.deepEqual(DISCOUNT_CODES, {
      SAVE10: 0.1,
      SAVE20: 0.2,
      BLACKFRIDAY: 0.3,
    });
  });
});

describe('calculateTotal con descuentos', () => {
  it('conserva el comportamiento anterior sin opciones', () => {
    assert.equal(calculateTotal([{ price: 10, quantity: 2 }]), 20);
  });

  it('aplica el descuento al subtotal', () => {
    assert.equal(
      calculateTotal([{ price: 100, quantity: 1 }], {
        discountCode: 'SAVE10',
      }),
      90,
    );
  });
});