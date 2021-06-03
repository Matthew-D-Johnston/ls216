"use strict";

/*

A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

Problem:
Find the next featured number higher than the given number. For any given number, continue to count upward until the one reaches the next featured number. Issue error message if no next featured number exists.

Input: number to begin counting from
Output: next featured number or error message

Definitions/Rules:
- featured number:
  => odd
  => multiple of 7
  => all of its digits occur only once
- issue error if no next featured number
- largest possible featured number 9876543201
- if given number is featured number, must still return next highest featured number
- assume the argument is greater than 0

Mental Model:
Take a given number. If it is a multiple of 7, continue incrementing by 7 and each time check whether it is odd and all of its digits occur exactly one. If that happens then return that number. If the given number is not a multiple of 7, increment it by one until it is a multiple of 7. Issue an error message if the current multiple of 7 is greater than 9876543201.


Examples / Test Cases:

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."

Data Structure:

Input: number
Output: number or error message
Intermediate:
- may need to use an array for splitting the number into individual digits and checking that each digit is unique.
- may want to create some helper functions

Algorithm:

- helper function for checking whether each digit is unique:
  - create an empty array
  - take given number, convert to string, and split into array of individual digits
  - iterate over this array of digits and push each digit to the empty array if that 
    digit is not already included in the array.
  - after the iteration, return the comparison of the lengths of the two arrays
  - if the digits are unique, then it should return true, otherwise false.
  
- main function
  - use a while loop to increment by 1 the given number while it is not a multiple of 
    7.
  - once it becomes a multiple of 7, check if it is odd and has unique digits
  - continue to increment by 7 until it meets those conditions or if becomes greater 
    than 9876543201.
  - 

*/

// Code

function hasUniqueDigits(number) {
  let comparisonArray = [];
  let digits = String(number).split('');
  
  digits.forEach(digit => {
    if (!comparisonArray.includes(digit)) {
      comparisonArray.push(digit);
    }
  });
  
  return digits.length === comparisonArray.length;
}

function isOdd(number) {
  return number % 2 != 0;
}

const LargestFeaturedNumber = 9876543201;

function featured(number) {
  do {
    number += 1;
  } while (number % 7 != 0);
  
  for (let index = number; index <= LargestFeaturedNumber; index += 7) {
    if (isOdd(index) && hasUniqueDigits(index)) {
      return index;
    };
  }
  
  return "There is no possible number that fulfills those requirements.";
}

console.log(featured(12));
console.log(featured(20));
console.log(featured(21));
console.log(featured(997));
console.log(featured(1029));
console.log(featured(999999));
console.log(featured(999999987) === 1023456987);
console.log(featured(9876543186) === 9876543201);
console.log(featured(9876543200) === 9876543201);
console.log(featured(9876543201));
