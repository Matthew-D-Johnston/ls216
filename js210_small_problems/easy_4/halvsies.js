"use strict";

function halvsies(array) {
  let midpoint = Math.ceil(array.length / 2);
  let firstHalf = array.slice(0, midpoint);
  let secondHalf = array.slice(midpoint);

  return [firstHalf, secondHalf];
}

console.log(halvsies([1, 2, 3, 4]));
console.log(halvsies([1, 5, 2, 4, 3]));
console.log(halvsies([5]));
console.log(halvsies([]));
