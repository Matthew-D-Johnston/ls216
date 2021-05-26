"use strict";

function sum(number) {
  return String(number).split('').reduce((accum, digit) => Number(digit) + accum, 0);
}

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));
