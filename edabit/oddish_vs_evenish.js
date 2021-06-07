"use strict"

/* 
Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

Examples
oddishOrEvenish(43) ➞ "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1

oddishOrEvenish(373) ➞ "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1

oddishOrEvenish(4433) ➞ "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0
Notes
N/A

Problem:
Given a number, determine whether it is oddish or evenish by checking whether the sum of its digits is odd or even.

Input: number
Output: "Oddish" or "Evenish"

Definitions/Rules:
- sum of digits: e.g. 121 => 1 + 2 + 1 = 4
- oddish: if sum of digits % 2 === 1
- evenish: if sum of digits % 2 === 0
- 

Mental Model:
Take the given number and split it into its individual digits. Sum the digits. Check to see whether even or odd, and return "Evenish" or "Oddish" according to the outcome.

Examples / Test Case:

oddishOrEvenish(43) ➞ "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1

oddishOrEvenish(373) ➞ "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1

oddishOrEvenish(4433) ➞ "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0

Data Structure:
Input: number
Output: string
Intermediate:
- convert number to string
- then convert string digits back to numbers

Algorithm:
- create string version of number and split into individual digits stored in an array.
- use the reduce method to sum the string digits converted to numbers.
- take the sum and check whether it is even or odd.

*/

// Code

function oddishOrEvenish(number) {
  let digits = String(number).split('');
  let sum = digits.reduce((accum, digit) => accum + Number(digit), 0);
  return sum % 2 === 0  ? "Evenish" : "Oddish";
}

console.log(oddishOrEvenish(43));
console.log(oddishOrEvenish(373));
console.log(oddishOrEvenish(4433));
