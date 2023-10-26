"use strict";

function BinarioADecimal(num) {
  var decimal = 0;
  var reverse = num.split("").reverse().join("");
  for (let i = 0; i < reverse.length; i++) {
    decimal += reverse[i] * 2 ** i;
  }
  return decimal;
}

function DecimalABinario(num) {
  let binario = "";
  while (num > 0) {
    binario += num % 2;
    num = Math.floor(num / 2);
  }
  return binario.split('').reverse().join('');
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
