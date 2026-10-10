
import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateTax, addTax, TAX_RATE } from '../src/tax.js';

test('la tasa del IVA debe ser del 13 %', () => {
  assert.equal(TAX_RATE, 0.13);
});

test('calcula el IVA de 100 correctamente', () => {
  assert.equal(calculateTax(100), 13);
});

test('calcula el IVA de 25.50 correctamente', () => {
  assert.equal(calculateTax(25.50), 3.32);
});

test('suma el IVA al importe base', () => {
  assert.equal(addTax(100), 113);
});

test('suma el IVA a un importe decimal', () => {
  assert.equal(addTax(25.50), 28.82);
});
test('calcula el IVA de cero correctamente', () => {
  assert.equal(calculateTax(0), 0);
});