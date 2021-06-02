"use strict";

/*

In the previous exercise, we developed a recursive solution for computing the nth Fibonacci number. In a language that is not optimized for recursion, some (but not all) recursive functions can be extremely slow and may require massive quantities of memory and/or stack space. If you tested for bigger nth numbers, you might have noticed that getting the 50th fibonacci number already takes a significant amount of time.

Fortunately, every recursive function can be rewritten as a non-recursive (or procedural) function.

Rewrite your recursive fibonacci function so that it computes its results without using recursion.

Problem:
Compute the nth fibonacci number using a procedural, rather than a recursive, function.

Input: the nth value designating the nth fibonacci number in the series of fibonacci numbers.
Output: the nth fibonacci number

Definitions/Rules:
- use procedural function
- if less than or equal to 2, return 1
- for f(3): f(2) + f(1) = 1 + 1
- for f(4): 

Mental Model:
Take the argument and if it is less than 2, return 1. If greater than 2, then it is a function of the two previous fibonacci numbers before it.

Examples / Test Cases:

fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050

Data Structure:
Input: integer number
Output: integer number
Intermediate: integer numbers

Algorithm:
- if argument is less than or equal to 2, return 1.
- create fibSum variable and assign to zero.
- create nMinusOne variable and nMinusTwo variable and assign to the values of 1 for each.
- create a while loop with an index that will increment until reaching the argument number.
- for the first iteration, the index will be 3.
- add the nMinusOne variable to the nMinusTwo variable and increment the fibSum value by that amount.
- Then set the nMinusTwo variable to the nMinusOne variable value and the nMinusOne variable value to the fibSum value.
- increment the index
- go to the next iteration and repeat until the index is greater than the argument value.

*/

// Code

function fibonacci(num) {
  if (num <= 2) {
    return 1;
  }
  
  let fibSum = 0;
  let nMinusOne = 1;
  let nMinusTwo = 1;
  
  for (let index = 3; index <= num; index += 1) {
    fibSum = nMinusOne + nMinusTwo;
    nMinusTwo = nMinusOne;
    nMinusOne = fibSum;
  }
  
  return fibSum;
}

console.log(fibonacci(20) === 6765);
console.log(fibonacci(50) === 12586269025);
console.log(fibonacci(75) === 2111485077978050);
