import test from 'node:test';
import assert from 'node:assert/strict';
import { buildReceipt } from '../src/receipt.js';

test('genera un recibo con un producto', () => {
  const items = [
    { name: 'Mouse Inalambrico', price: 25.5, quantity: 2 },
  ];

  const receipt = buildReceipt(items);

  assert.ok(receipt.includes('=== MINI TIENDA ==='));
  assert.ok(receipt.includes('Mouse Inalambrico x2'));
  assert.ok(receipt.includes('Bs 51.00'));
  assert.ok(receipt.includes('TOTAL'));
});

test('calcula correctamente varios productos', () => {
  const items = [
    { name: 'Mouse', price: 25.5, quantity: 2 },
    { name: 'Libro', price: 40, quantity: 1 },
    { name: 'Teclado', price: 15.25, quantity: 2 },
  ];

  const receipt = buildReceipt(items);
  const lines = receipt.split('\n');

  assert.ok(receipt.includes('Mouse x2'));
  assert.ok(receipt.includes('Libro x1'));
  assert.ok(receipt.includes('Teclado x2'));

  assert.equal(lines[1], 'Mouse x2'.padEnd(28) + 'Bs 51.00'.padStart(12));
  assert.equal(lines[2], 'Libro x1'.padEnd(28) + 'Bs 40.00'.padStart(12));
  assert.equal(lines[3], 'Teclado x2'.padEnd(28) + 'Bs 30.50'.padStart(12));

  assert.equal(lines[4], 'TOTAL'.padEnd(28) + 'Bs 121.50'.padStart(12));
});

test('genera un recibo para un carrito vacio', () => {
  const receipt = buildReceipt([]);

  assert.ok(receipt.includes('=== MINI TIENDA ==='));
  assert.ok(receipt.includes('TOTAL'));
  assert.ok(receipt.includes('Bs 0.00'));
});

test('alinea las etiquetas y los montos', () => {
  const receipt = buildReceipt([
    { name: 'Mouse', price: 25.5, quantity: 2 },
  ]);

  const lines = receipt.split('\n');

  assert.equal(
    lines[1],
    'Mouse x2'.padEnd(28) + 'Bs 51.00'.padStart(12)
  );
});
