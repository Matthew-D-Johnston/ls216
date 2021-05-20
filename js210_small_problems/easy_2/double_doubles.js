"use strict";

function twice(number) {
  let stringNumber = String(number);

  if (stringNumber.length % 2 === 0) {
    let midpoint = stringNumber.length / 2;
    if (stringNumber.slice(0, midpoint) === stringNumber.slice(midpoint)) {
      return number;
    }
  }

  return number * 2;
}

console.log(twice(37));
console.log(twice(44));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(107));
console.log(twice(103103));
console.log(twice(3333));
console.log(twice(7676));
