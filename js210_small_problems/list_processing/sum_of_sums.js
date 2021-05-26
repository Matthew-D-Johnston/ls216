"use strict";

function sumOfSums(array) {
  let sum = 0;

  for (let index = 1; index <= array.length; index += 1) {
    sum += array.slice(0, index).reduce((accum, value) => accum + value);
  }

  return sum;
}

console.log(sumOfSums([3, 5, 2]));
console.log(sumOfSums([1, 5, 7, 3]));
console.log(sumOfSums([4]));
console.log(sumOfSums([1, 2, 3, 4, 5]));
