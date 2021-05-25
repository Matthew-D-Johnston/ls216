"use strict";

function negative(number) {
  if (number >= 0) {
    return -Number(String(number));
  }

  return number;
}

console.log(negative(5));
console.log(negative(-3));
console.log(negative(0));
console.log(negative(-0));
