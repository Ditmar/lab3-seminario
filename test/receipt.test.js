
import test from 'node:test';
import assert from 'node:assert/strict';
import { buildReceipt } from '../src/receipt.js';

test('genera un recibo con el total', () => {
  const out = buildReceipt([
    { name: 'Mouse Inalambrico', price: 25.5, quantity: 2 },
  ]);

  assert.match(out, /=== MINI TIENDA ===/);
  assert.match(out, /Mouse Inalambrico x2/);
  assert.match(out, /TOTAL\s+Bs 51\.00/);
});

test('un recibo vacio tiene total 0', () => {
  assert.match(buildReceipt([]), /TOTAL\s+Bs 0\.00/);
});