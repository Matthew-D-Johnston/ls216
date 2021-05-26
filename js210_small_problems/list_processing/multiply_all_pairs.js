"use strict";

function multiplyAllPairs(set1, set2) {
  let products = [];

  set1.forEach(number1 => {
    set2.forEach(number2 => {
      products.push(number1 * number2);
    });
  });

  return products.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));
