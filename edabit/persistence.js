"use strict";

/*

Persistence

The additive persistence of an integer, n, is the number of times you have to replace n with the sum of its digits until n becomes a single digit integer.

The multiplicative persistence of an integer, n, is the number of times you have to replace n with the product of its digits until n becomes a single digit integer.

Create two functions that take an integer as an argument and:

Return its additive persistence.
Return its multiplicative persistence.
Examples: Additive Persistence
additivePersistence(1679583) ➞ 3
// 1 + 6 + 7 + 9 + 5 + 8 + 3 = 39
// 3 + 9 = 12
// 1 + 2 = 3
// It takes 3 iterations to reach a single-digit number.

additivePersistence(123456) ➞ 2
// 1 + 2 + 3 + 4 + 5 + 6 = 21
// 2 + 1 = 3

additivePersistence(6) ➞ 0
// Because 6 is already a single-digit integer.
Examples: Multiplicative Persistence
multiplicativePersistence(77) ➞ 4
// 7 x 7 = 49
// 4 x 9 = 36
// 3 x 6 = 18
// 1 x 8 = 8
// It takes 4 iterations to reach a single-digit number.

multiplicativePersistence(123456) ➞ 2
// 1 x 2 x 3 x 4 x 5 x 6 = 720
// 7 x 2 x 0 = 0

multiplicativePersistence(4) ➞ 0
// Because 4 is already a single-digit integer.
Notes
The input n is never negative.

Problem:
Create two functions. One takes a number and returns the additive persistence. The other takes a number and returns the multiplicative persistence.

Input: number
Output: number indicating the number of iterations it takes to obtain a single digit number from the given number.

Definitins/Rules:
- n is never negative
- additive persistence:
  - number of times one must sum the number's digits to obtain a single digit.
- multiplicative persistence:
  - number of times one must multiply the number's digits to obtain a single digit.

Mental Model:
Make two functions.

The first function takes a number. It sums the digits of the number and replaces the number with that sum. If the sum has more than one digit repeat the process and make sure to count the number of times this process is repeated until the sum is a single digit number. Return the number of times this process was repeated.

The second function does the same, but multiplies the digits rather than adds them.

Examples / Test Cases:

additivePersistence(1679583) ➞ 3
// 1 + 6 + 7 + 9 + 5 + 8 + 3 = 39
// 3 + 9 = 12
// 1 + 2 = 3
// It takes 3 iterations to reach a single-digit number.

additivePersistence(123456) ➞ 2
// 1 + 2 + 3 + 4 + 5 + 6 = 21
// 2 + 1 = 3

additivePersistence(6) ➞ 0
// Because 6 is already a single-digit integer.
Examples: Multiplicative Persistence
multiplicativePersistence(77) ➞ 4
// 7 x 7 = 49
// 4 x 9 = 36
// 3 x 6 = 18
// 1 x 8 = 8
// It takes 4 iterations to reach a single-digit number.

multiplicativePersistence(123456) ➞ 2
// 1 x 2 x 3 x 4 x 5 x 6 = 720
// 7 x 2 x 0 = 0

multiplicativePersistence(4) ➞ 0
// Because 4 is already a single-digit integer.

Data Structure:
Input: number
Output: number
Intermediate:
- dealing with strings and arrays


Algorithm:

additivePersistence:
- create an iterations variable and assign it the value of 0
- start a while loop whose condition is that the String(number).split('').length > 1
- within the loop transform the number to a string and split it into digits.
- use the reduce function to sum the digits and store the sum as the number
- outside of the loop, return the iterations variable.

multiplicativePersistence:
- follow the same methodology as the first function
- however, in the reduce function make sure to multiply instead of add and set the accum variable to 1.

*/

// Code

function additivePersistence(number) {
  let iterations = 0;
  
  while (String(number).split('').length > 1) {
    let digits = String(number).split('');
    number = digits.reduce((accum, digit) => accum + Number(digit), 0);
    iterations += 1;
  }
  
  return iterations;
}

console.log(additivePersistence(1679583));
console.log(additivePersistence(123456));
console.log(additivePersistence(6));

function multiplicativePersistence(number) {
  let iterations = 0;
  
  while (String(number).split('').length > 1) {
    let digits = String(number).split('');
    number = digits.reduce((accum, digit) => accum * Number(digit), 1);
    iterations += 1;
  }
  
  return iterations;
}

console.log(multiplicativePersistence(77));
console.log(multiplicativePersistence(123456));
console.log(multiplicativePersistence(4));
