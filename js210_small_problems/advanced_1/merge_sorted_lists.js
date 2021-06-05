"use strict";

/* 

Write a function that takes two sorted arrays as arguments and returns a new array that contains all the elements from both input arrays in sorted order.

You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

Your solution should not mutate the input arrays.

Problem:
Take two sorted arrays. Merge them in a way that they remain sorted.

Input: two arrays
Output: one array that contains the all the elements from the two input arrays

Definitions/Rules:
- sorted array: ascending order (i.e. smallest to largest)
- cannot simply sort the result array; the array must be built one element at a time 
  in the correct order.
- do not mutate the input arrays

Mental Model:
Take two arrays that are sorted in ascending order. Iterate through the elements of each array. Compare the elements and add them to the result array in an order from smallest to largest.

Examples / Test Cases:

merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]


Data Structure:
- Input: two arrays containing integer elements in ascending order
- Output: a single array that combines all elements from the input arrays in ascending 
  order.
- Intermediate: ???

Algorithm:
- create a result variable and assign an empty array to it.
- add the lengths of the two arrays and store the result in a variable called 
  resultLength.
- create copies of the two input arrays.
- begin a while loop that continues to loop while the length of the result array is < 
  the resultLength variable we created.
- if array1.length === 0 => result.push(array2.splice(0, 1)[0]);
- if array2.length === 0 => result.push(array1.splice(0, 1)[0]);
- if array1[0] < array2[0] => result.push(array1.splice(0, 1)[0]);
- else => result.push(array2.splice(0, 1)[0]);

*/

// Code

function merge(array1, array2) {
  let array1Copy = array1.slice();
  let array2Copy = array2.slice();
  let merged = [];
  let mergedLength = array1.length + array2.length;
  
  while (merged.length < mergedLength) {
    if (array1Copy.length === 0) {
      merged.push(array2Copy.splice(0, 1)[0]);
    } else if (array2Copy.length === 0) {
      merged.push(array1Copy.splice(0, 1)[0]);
    } else if (array1Copy[0] < array2Copy[0]) {
      merged.push(array1Copy.splice(0, 1)[0]);
    } else {
      merged.push(array2Copy.splice(0, 1)[0]);
    }
  }
  
  return merged;
}

console.log(merge([1, 5, 9], [2, 6, 8]));
console.log(merge([1, 1, 3], [2, 2]));
console.log(merge([], [1, 4, 5]));
console.log(merge([1, 4, 5], []));

let arr1 = [1, 2, 5, 8];
let arr2 = [3, 5, 8, 9, 23];

console.log(merge(arr1, arr2));
console.log(arr1);
console.log(arr2);