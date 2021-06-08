"use strict";

/*

Product of Digits of Sum
Create a function that takes numbers as arguments, adds them together, and returns the product of digits until the answer is only 1 digit long.

Examples
sumDigProd(16, 28) ➞ 6
// 16 + 28 = 44
// 4 * 4 =  16
// 1 * 6 = 6

sumDigProd(0) ➞ 0

sumDigProd(1, 2, 3, 4, 5, 6) ➞ 2
Notes
The input of the function is at least one number.

Problem:
Given two numbers, add them together. Then, multiply their digits until the result is only one digit long.

Input:
- at least one number

Output:
- a number that is only 1 digit in length

Definitions/Rules:
- input of function is at least one number
- add numbers together.
- multiply digits
- store product in starting variable
- repeat until one digit long

Mental Model:
Take two numbers and add them together. Split the number into separate digits. Multliply the digits together and store the result. Keep multiplying the digits of the result until the result is only one digit long.

Examples / Test Cases:

sumDigProd(16, 28) ➞ 6
// 16 + 28 = 44
// 4 * 4 =  16
// 1 * 6 = 6

sumDigProd(0) ➞ 0

sumDigProd(1, 2, 3, 4, 5, 6) ➞ 2

Data Structure:
Inputs:
- at least one number


Output:
- a number that is one digit long

Intermediate: ???

Algorithm:
- set the second argument to zero if it was not supplied.
- sum the two arguments together and store in result 
- start a while loop with the conditon (String(result).split('').length > 1)
- within the loop:
  - take result and transform to a string, split into array of digits
  - then multiply the digits to get the product
  - store the product in the results variable
- outside the loop, return the results variable

*/

// Code

function sumDigProd(...args) {
  let result = args.reduce((accum, number) => accum + number);
  
  while (String(result).length > 1) {
    let digits = String(result).split('');
    
    result = digits.reduce((accum, digit) => accum * Number(digit), 1);
  }
  
  return result;
}

console.log(sumDigProd(16, 28) === 6);
console.log(sumDigProd(0) === 0);
console.log(sumDigProd(1, 2, 3, 4, 5, 6) === 2);
