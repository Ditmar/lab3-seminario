# Changelog

Todos los cambios relevantes de este proyecto se documentan en este archivo.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/)
y el proyecto usa [Versionado Semántico](https://semver.org/lang/es/).

## [Unreleased]

## [1.1.0] - 2026-10-09

### Added
- Generación de recibos de compras mediante el comando `receipt`.
- Añade códigos de descuento SAVE10, SAVE20 y BLACKFRIDAY.
- Agrega el cálculo opcional del IVA del 13 % al total del carrito mediante `includeTax`.
- Soporte para conversión y formateo de monedas (BOB, USD, EUR).

### Changed
- Se amplió `formatPrice` para permitir alinear los montos mediante el parámetro `width`.

## [1.0.0] - 2026-10-01

### Added
- Catálogo de productos (`products`, `findProductBySku`, `searchProducts`).
- Cálculo del total de un carrito (`calculateTotal`).
- Formato de precios en bolivianos (`formatPrice`).
- CLI básica con los comandos `list` y `search`.