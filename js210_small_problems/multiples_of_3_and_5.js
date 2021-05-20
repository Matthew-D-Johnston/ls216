"use strict";

function multisum(number) {
  let totalSum = 0;
  for (let index = 3; index <= number; index += 1) {
    if (index % 3 === 0 || index % 5 === 0) {
      totalSum += index;
    }
  }

  return totalSum;
}

console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(1000));
