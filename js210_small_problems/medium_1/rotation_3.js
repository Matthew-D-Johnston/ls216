"use strict";

/*

Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

Problem:

Perform the maximum rotation on a number.

Input: a number
Output: the rotated number

Definitions/Rules:
- max rotation:
  - take leftmost digit and append to the end of the number
  - step one digit to the right and take the second digit and append it to the end of 
    the number
  - keep stepping one digit to the right and perform the rotation by taking that     
    current digit and appending it to the end
- use the rotateRightmostDigits function from the previous problem.

Mental Model:
We perform the max rotation by starting at the leftmost digit and calling the rotateRightmostDigits function using the index that corresponds to the overall number of digits in the number. We then have to store the newly returned number and perform the same operation after decrementing the index by 1. Once the index gets down to 1 and the last rotation operation has been completed, we return the number.


Examples / Test Cases:

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845


Data Structure:
Input: number
Output: number
Intermediate data structures:
- transform number into an array of digits; but this is done by the previous function we wrote.

Algorithm:
- create a rotatedNumber variable and assign to the number argument
- set an index to the number of digits by converting number to string and using the length property
- while the index > 0
  - assign the return value of rotateRightmostDigits(rotatedNumber, index) to the rotatedNumber variable
- after the loop, return the rotatedNumber variable

*/

function maxRotation(number) {
  let rotatedNumber = number;
  let index = String(number).length;
  
  while (index > 0) {
    rotatedNumber = rotateRightmostDigits(rotatedNumber, index);
    index -= 1;
  }
  
  return rotatedNumber;
}

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

console.log(maxRotation(735291) === 321579);
console.log(maxRotation(3) === 3);
console.log(maxRotation(35) === 53);
console.log(maxRotation(105) === 15);
console.log(maxRotation(8703529146) === 7321609845);
