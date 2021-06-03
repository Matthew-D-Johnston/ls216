"use strict";

/* 

Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

Problem:
Take a number and sum all the integers from one up until that number. Then take its square. Then sum all of the squares of the number one and all integers up to the number. Then subtract that number from the square of sums.

Input: a number
Output: a number that is the difference between the square of sums and the sum of squares.

Definitions/Rules:
- square of sums: sum up all integers from one to number; then take the square root.
- sum of squares: sum the squares of all integers from one to number.
- difference: square of sums - sum of squares;
- 

Mental Model:
Add up all the integers from one to number. Square them. Square all the integers from one to number. Sum them. Subtract second calc'd number from first.


Examples / Test Cases:

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150

Data Structure:
Input: number
Output: number
Intermediate:

Algorithm:
- create sumOfIntegers variable; assign to zero.
- create a sumOfSquares variable; assign to zero.
- implement a loop that counts from one up to the given number
- increment sumOfIntegers variable by each successive integer that is incremented.
- increment sumOfSquares variable by each successive squared integer.
- After the loop is complete, take the difference of squaring the sumOfIntegers 
  variable and the sumOfSquares variable.
  

*/

// Code

function sumSquareDifference(number) {
  let sumOfIntegers = 0;
  let sumOfSquares = 0;
  
  for (let integer = 1; integer <= number; integer += 1) {
    sumOfIntegers += integer;
    sumOfSquares += (integer ** 2);
  }
  
  return (sumOfIntegers ** 2) - sumOfSquares;
}

console.log(sumSquareDifference(3) === 22);
console.log(sumSquareDifference(10) === 2640);
console.log(sumSquareDifference(1) === 0);
console.log(sumSquareDifference(100) === 25164150);
