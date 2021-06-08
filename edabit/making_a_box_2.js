"use strict";

/* 

Making a Box 2.0!
This is based on Helen Yu's Making a Box challenge. This challenge is the same execpt that instead of an array of strings, your function should output a matrix of characters.

Examples
charBox(1) ➞ [
  ["#"]
]

charBox(4) ➞ [
  ["#", "#", "#", "#"],
  ["#", " ", " ", "#"],
  ["#", " ", " ", "#"],
  ["#", "#", "#", "#"]
]

charBox(2) ➞ [
  ["#", "#"],
  ["#", "#"]
]
Notes
As an added bonus, try making charBox(0) output [[]] and make any strings, non-integers, and negative numbers output -1.

Problem:
Given an intger n, output an nxn box in the form of nested arrays.

Input: an integer indicating the side lengths of the box
Output: an array of subarrays containing "#" along the sides of the box and " " for the inner parts that are not sides.

Definitions/Rules:
- box: 
  - an array of subarrays
  - the first row/array consist of n elements that are all "#"
  - the first and last element of each row is always "#"
  - for rows that are not the first and last, all elements except for the first and
    last are " "
  - the last row/array consist of n elements that are all "#"
- length of sides is given by the input integer
- if length is 0, return [[]]
- if anything else other than a positive integer, return -1

Mental Model:
Take the input integer indicating the number of sides. Create the box array and push subarrays to that array in the amount giving by the input integer. Populate the first subarray with "#"s equal to the input integer. Do the same for the last subarray. For all subarrays in between, populate the first and last elements with "#"s and all other elements in between populate with " "'s. 

Examples / Test Cases:

charBox(1) ➞ [
  ["#"]
]

charBox(4) ➞ [
  ["#", "#", "#", "#"],
  ["#", " ", " ", "#"],
  ["#", " ", " ", "#"],
  ["#", "#", "#", "#"]
]

charBox(2) ➞ [
  ["#", "#"],
  ["#", "#"]
]

Data Structure:
Input: a positive integer greater than or equal to zero; if anything else return -1
Output: an array of subarrays or -1
Intermediate:
- working with arrays populated with strings

Algorithm:
- set this up in a conditional statement that checks if the input > 0
- else if input === 0 => return [[]];
- else => return -1;
- for the happy path where input > 0
- create box variable and assign to empty array
- loop from 1 to input number and push empty arrays until loop is finished
- then create start and end variables where start = 0 and end = input - 1
- create a loop that loops over the rows of the box from start to end
- within that loop create a loop that iterates over the columns
- thus we will have something like box[row][column]
- whenever the row === 0 or === end, we always make box[0/end][column] = "#"
- whenever column === 0 or end, we always make box[row][0/end] = "#"
- else, box[row][column] = " ";
- return the box;

*/

// Code

function charBox(sideLength) {
  if (sideLength > 0 && sideLength === Math.round(sideLength)) {
    let box = [];
    
    for (let row = 1; row <= sideLength; row += 1) {
      box.push([]);
    }
    
    for (let row = 0; row < sideLength; row += 1) {
      for (let column = 0; column < sideLength; column += 1) {
        if (row === 0 || row === sideLength - 1) {
          box[row][column] = "#";
        } else if (column === 0 || column === sideLength - 1) {
          box[row][column] = "#";
        } else {
          box[row][column] = " ";
        }
      }
    }    
    return box;
    
  } else if (sideLength === 0) {
    return [[]];
  } else {
    return -1;
  }
}

console.log(charBox(1));
console.log(charBox(4));
console.log(charBox(2));
console.log(charBox(3));
console.log(charBox(5));
console.log(charBox(0));
console.log(charBox(0.23));