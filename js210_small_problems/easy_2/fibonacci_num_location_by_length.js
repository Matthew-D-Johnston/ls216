"use strict";

function fibonacci(index) {
  if (index < 3) {
    return 1;
  }

  return fibonacci(index - 1) + fibonacci(index - 2);
}

// function fibonacci(num) {
//   if (num <= 2) {
//     return 1;
//   }
//   let sum = 0;
//   let num1 = 1;
//   let num2 = 1;

//   for (let index = 3; index <= num; index += 1) {
//     sum = (num2 + num1);
//     num1 = num2;
//     num2 = sum;
//   }

//   return sum;
// }

function fibonacciNumberLocation(length) {
  let index = 1;

  while (String(fibonacci(index)).length !== length) {
    index += 1;
  }

  return index;
}

// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(5));
// console.log(fibonacci(6));
// console.log(fibonacci(7));

console.log(fibonacciNumberLocation(2));
console.log(fibonacciNumberLocation(3));
// console.log(fibonacciNumberLocation(10));

