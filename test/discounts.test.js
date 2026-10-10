import test from 'node:test';
import assert from 'node:assert/strict';
import { applyDiscount } from '../src/discounts.js';

test('SAVE10 descuenta 10%', () => {
  assert.equal(applyDiscount(100, 'SAVE10'), 90);
});

test('el código no distingue mayúsculas', () => {
  assert.equal(applyDiscount(100, 'save10'), 90);
});

test('un código desconocido devuelve el monto sin cambios', () => {
  assert.equal(applyDiscount(100, 'NOEXISTE'), 100);
});

test('un código undefined devuelve el monto sin cambios', () => {
  assert.equal(applyDiscount(100, undefined), 100);
});

test('redondea a 2 decimales', () => {
  assert.equal(applyDiscount(19.99, 'SAVE10'), 17.99);
});

test('ignora espacios alrededor del código', () => {
  assert.equal(applyDiscount(100, ' save10 '), 90);
});
