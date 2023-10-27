"use strict";

function BinarioADecimal(num) {
  let decimal = 0;
  for (let i = 0; i < num.length; i++) {
    decimal += (num[i] * 2) ** i;
  }
  return decimal;
}

function DecimalABinario(num) {}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
