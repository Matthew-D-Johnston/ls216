"use strict";
/*
Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the left, moving the first digit to the end.

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

Problem:

Given a number and an argument indicating the number of digits from the right, take the number at the index and insert it at the end of the number.

Inputs: 
- a number to rotate
- a number indicating the number of digits from the right of the number.

Outputs:
- the rotated number

Definition/Rules: 
- 

Mental Model
Take the number and locate the digit that is n digits to the left of the end of the number. Remove that digit from that location and append it to the end of the number.

Examples/Test Cases
rotateRightmostDigits(735291, 0);     // 735291
rotateRightmostDigits(735291, 7);     // 735291
rotateRightmostDigits(735291, 8);     // 735219

Data Structure:

Input:
- number (to rotate)
- number (the digit index)

Output:
- rotated number

Intermediate data structures:
- split the number into an array of digits


Algorithm:
- create an array of individual digits: transform number to string then split into digits.
- for the index, get the remainder of the index divided by the length of the array
- use the splice method to retrieve the element that is n digits to the left of the end of the number.
- take that element and append it to the end of the array
- then join the array into a single string and transfomr back into a number.

*/

// Code

function rotateRightmostDigits(number, index) {
  if (index === 0) {
    return number;
  }
  
  let digits = String(number).split('');
  index = index % digits.length;
  
  let lastElement = digits.splice(-index, 1).pop();
  digits.push(lastElement);
  
  return Number(digits.join(''));
}

console.log(rotateRightmostDigits(735291, 1) === 735291);
console.log(rotateRightmostDigits(735291, 2) === 735219);
console.log(rotateRightmostDigits(735291, 3) === 735912);
console.log(rotateRightmostDigits(735291, 4) === 732915);
console.log(rotateRightmostDigits(735291, 5) === 752913);
console.log(rotateRightmostDigits(735291, 6) === 352917);
console.log(rotateRightmostDigits(735291, 8) === 735219);
console.log(rotateRightmostDigits(735291, 0) === 735291);