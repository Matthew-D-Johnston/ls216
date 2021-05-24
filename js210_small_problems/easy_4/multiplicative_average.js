"use strict";

function showMultiplicativeAverage(array) {
  let product = array.reduce((accum, value) => accum * value);
  return (product / array.length).toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5]));
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));
