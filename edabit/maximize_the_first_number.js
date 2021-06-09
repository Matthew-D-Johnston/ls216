"use strict";

/*

Maximize the First Number

Write a function that makes the first number as large as possible by swapping out its digits for digits in the second number.

To illustrate:

maxPossible(9328, 456) ➞ 9658
// 9658 is the largest possible number built from swaps from 456.
// 3 replaced with 6 and 2 replaced with 5.
Examples
maxPossible(523, 76) ➞ 763

maxPossible(9132, 5564) ➞ 9655

maxPossible(8732, 91255) ➞ 9755
Notes
Each digit in the second number can only be used once.
Zero to all digits in the second number may be used.

Problem:
Given two numbers, make a swap from digits in the second number with those in the first that will maximize the size of the first number given all of the digits in both numbers.

Input:
- 2 numbers
- first number is the one to maximize
- second number is to be used for replacement digits

Output:
- a single number that is the maximum possible based on the digits in both numbers

Definitions/Rules:
- digit swap:
  - if there are larger digits in the second number, swap those with the smaller digits
    in the first number.
  - do not rearrange the placement of digits in the first number; only swaps for other
    digits can be made.
- you can only use each digit in the second number once
- you can use all or none of the digits in the second number

Mental Model:
Take two numbers. Iterate over the digits of the first number. Sort the digits in the second number in descending order. If there is a digit from the second number that is larger than the current digit in the first number, swap those digits and remove that digit from the second number. Move onto the next digit in the first number, and go back to the start of the second number and repeat this process until after the last digit of the first number.

Examples / Test Cases:
maxPossible(523, 76) ➞ 763

maxPossible(9132, 5564) ➞ 9655

maxPossible(8732, 91255) ➞ 9755

Data Structure:
Input: two numbers
Output: a single number
Intermediate:
- will likely be dealing with strings and arrays
- converting nubmers to strings in order to split into digits
- convert string digits back to numbers and collected in an array

Algorithm:
- initialize a maxNumber variable and assign to string version of first number
- initialize a replacementDigits variable and assign to a split string version of the
  second number, which will be an array, and use the map function to convert the
  individual string digits to number digits.
- Create nested loops, the first will iterate over the digits of the maxNumber and the
  second will iterate over the digits of the replacementDigits array
- first for loop
- then initiate the second for loop
- within the second for loop, compare a Number version of the first digit from the
  maxNumber with the first digit from the replacementDigits array
  - if maxNumber digit < replacementDigits digit => swap the digit and remove that
    digit from the replacementDigits array
  - then break from the second loop so that we move to the second digit of the
    maxNumber variable
  - however, if maxNumber digit >= replacementDigits digit => don't do anything, the
    loop will continue onto the next replacementDigits digit
- Once the initial outer loop is finished, we can then return a Number version of the
  maxNumber variable


*/

// Code

function maxPossible(number1, number2) {
  let maxDigits = String(number1).split('').map(digit => Number(digit));
  let replacementDigits = String(number2).split('').map(digit => Number(digit));
  replacementDigits.sort((a, b) => b - a);
  
  for (let outerIdx = 0; outerIdx < maxDigits.length; outerIdx += 1) {
    for (let innerIdx = 0; innerIdx < replacementDigits.length; innerIdx += 1) {
      if (maxDigits[outerIdx] < replacementDigits[innerIdx]) {
        maxDigits[outerIdx] = replacementDigits[innerIdx];
        replacementDigits.splice(innerIdx, 1);
        break;
      }
    }
  }
  
  return Number(maxDigits.join(''));
}

console.log(maxPossible(9328, 456) === 9658);
console.log(maxPossible(523, 76) === 763);
console.log(maxPossible(9132, 5564) === 9655);
console.log(maxPossible(8732, 91255) === 9755);