"use strict";

/*

Data Structures (1): Find Max of Sliding Window

The sliding window is a technique used to simplify complex data problems. A window that slides over the data to examine different sections of it.

Your challenge is to create a sliding window that traverses the array and returns the maximum value in each window.

Arguments
Array:The array over which you are traversing.
windowLength: The length of the window you will be using to do the search.
Returns Array: A new array containing the maximums for each window.
You are given this array and a window length of 2.
[4, 5, 6, 7, 8, 9]
Our function would start by examining the first two elements of the array and pushes the max value to a new array.

[**4, 5,** 6, 7, 8, 9]
... then the window slides to examine the next two, in this case 5 and 6, and pushes the max value to the array.

[4, **5, 6**, 7, 8, 9]
The window will examine the entire length of the array until the maximums for each window have been added to the new array.

Examples
windowMaxes([1, 2, 3, 4, 3, 2, 1, 2, 5], 3) ➞ [3, 4, 4, 4, 3, 2, 5]
Notes
This is part of my Data Structures series. A collection of common coding interview challenges used to test ones understanding of data structures.
This entire series of challenges can be found here.

Problem:
Given an array and window length, traverse the array using the window and extract the maximum value from each window as the array is traversed. Push the max value to a separate array that will be returned.

Input:
- an array of numbers
- a number indicating window length

Output:
- an array containing the max values of the window shots

Definitions/Rules:
- window: a subsection of the array
- traversing: start at first element of array
  - examine the elements that fit within the window.
  - select the max value and push to results array
  - then slide the window one element to the right
  - repeat this process until the far side of the window is at the last index
- 

Mental Model:
Take an array of numbers and a window length. Start with the leftmost side of the window's edge at the first element. Examine all of the elements that fit within the current window position. Extract the max value and push it to a results array. Then slide the window one element to the right. Repeat this process until the right edge of the window is on the last element.

Examples / Test Cases:

windowMaxes([1, 2, 3, 4, 3, 2, 1, 2, 5], 3) ➞ [3, 4, 4, 4, 3, 2, 5]
windowMaxes([1, 2, 3, 4, 3, 2, 1, 2, 5], 4) ➞ [4, 4, 4, 4, 3, 5]
windowMaxes([], 3) ➞ [];
windowMaxes([1, 2, 3, 4, 3, 2, 1, 2, 5], 0) ➞ [];

Data Structure:
Input:
- an array of numbers
- a number for the window length

Output:
- an array of numbers (max values)

Intermediate:
- ???

Algorithm:
- initialize a maxValues variable and assign it to an empty array.
- start a for loop with an initial index of 0; the index will increment by 1 up until
  it is the length of the array minus the window length.
- obtain the elements of the array that fit into the window
- from this subsection of the array, select the max value and push it to the maxValues array.
- outside the loop, return the maxValues array

*/


// Code

// function windowMaxes(array, windowSize) {
//   if (windowSize === 0) {
//     return [];
//   }
  
//   let maxValues = [];
  
//   for (let index = 0; index <= array.length - windowSize; index += 1) {
//     let window = array.slice(index, index + windowSize).sort((a, b) => b - a);
    
//     maxValues.push(window[0]);
//   }
  
//   return maxValues;
// }


// Refactored

function windowMaxes(array, windowSize) {
  if (windowSize === 0) {
    return [];
  }
  
  let maxValues = [];
  
  for (let index = 0; index <= array.length - windowSize; index += 1) {
    let window = array.slice(index, index + windowSize);
    
    maxValues.push(Math.max(...window));
  }
  
  return maxValues;
}

console.log(windowMaxes([1, 2, 3, 4, 3, 2, 1, 2, 5], 3));
console.log(windowMaxes([1, 2, 3, 4, 3, 2, 1, 2, 5], 4));
console.log(windowMaxes([], 3));
console.log(windowMaxes([1, 2, 3, 4, 3, 2, 1, 2, 5], 0));
