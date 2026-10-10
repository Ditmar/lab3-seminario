import test from 'node:test';
import assert from 'node:assert/strict';
import { TAX_RATE, calculateTax, addTax } from '../src/tax.js';
import { calculateTotal } from '../src/pricing.js';

test('TAX_RATE es 13 %', () => {
  assert.equal(TAX_RATE, 0.13);
});

test('calculateTax(100) devuelve 13', () => {
  assert.equal(calculateTax(100), 13);
});

test('addTax(100) devuelve 113', () => {
  assert.equal(addTax(100), 113);
});

test('calculateTax redondea a 2 decimales', () => {
  assert.equal(calculateTax(10.99), 1.43);
});

test('calculateTotal suma el IVA con includeTax', () => {
  assert.equal(calculateTotal([{ price: 100, quantity: 1 }], { includeTax: true }), 113);
});

test('calculateTotal sin includeTax no cambia el total', () => {
  assert.equal(calculateTotal([{ price: 100, quantity: 1 }]), 100);
});

test('calculateTotal aplica primero el descuento y luego el IVA', () => {
  assert.equal(
    calculateTotal([{ price: 100, quantity: 1 }], { discountCode: 'SAVE10', includeTax: true }),
    101.7,
  );
});
