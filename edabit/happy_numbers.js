"use strict";

/* 

Happy Numbers

Given any number, we can create a new number by adding the sums of squares of digits of that number. For example, given 203, our new number is 4 + 0 + 9 = 13. If we repeat this process, we get a sequence of numbers:

203 -> 13 -> 10 -> 1 -> 1
Sometimes, like with 203, the sequence reaches (and stays at) 1. Numbers like this are called happy.

Not all numbers are happy. If we started with 11, the sequence would be:

11 -> 2 -> 4 -> 16 -> ...
This sequence will never reach 1, and so the number 11 is called unhappy.

Given a positive whole number, you have to determine whether that number is happy or unhappy.

Examples
happy(203) ➞ true

happy(11) ➞ false

happy(107) ➞ false
Notes
You can assume (and it is actually true!) that all positive whole numbers are either happy or unhappy. Any happy number will have a 1 in its sequence, and every unhappy number will have a 4 in its sequence.
The only numbers passed to your function will be positive whole numbers.

Problem:
Given a number, determine whether it is a happy or unhappy number.

Input: a positive whole number
Output: true or false depending on whether the number is happy or unhappy

Definitions/Rules:
- positive whole number: positive integer
- happy number:
  - sum of the squares of the digits of the number when repeated eventually converges to 1
  - also, all happy numbers will eventually happen upon a 1 in their sequence
- unhappy number:
  - does not converge to 1
  - all unhappy numbers will have a 4 in their sequence
- every positive whole number is either happy or unhappy
-

Mental Model:
Given a number, repeat the following process: split the number into individual digits; sum the squares of those digits; store the result back in the original number variable. If at some point the number equals 4, we can return false for unhappy number. However, if the number ever equals 1, we can return true for happy number

Examples / Test Cases:

happy(203) ➞ true

happy(11) ➞ false

happy(107) ➞ false

Data Structure:
Input: positive number
Output: boolean
Intermediate:
- dealing with arrays of string digts


Algorithm:
- start a while loop conditional on number !== 1 and number !== 4
- within the loop conver the number to a string
- split the string into individual string digits
- use the reduce method to sum the squares of the digits and assign the result to the
  number variable
- after the loop is complete, return number === 1;

*/

// Code

function happy(number) {
  while (number !== 1 && number !== 4) {
    let digits = String(number).split('');
    
    number = digits.reduce((accum, digit) => accum + (Number(digit)**2), 0);
  }
  
  return number === 1;
}

console.log(happy(203));
console.log(happy(11));
console.log(happy(107));
