"use strict";

function runningTotal(numbers) {
  // let result = [];
  let total = 0;

  // for (let index = 0; index < numbers.length; index += 1) {
  //   total += numbers[index];
  //   result.push(total);
  // }

  return numbers.map(number => {
    total += number;
    return total;
  })

  // return result;
}

console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([3]));
console.log(runningTotal([]));
