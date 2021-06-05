/*

Merge sort is a recursive sorting algorithm that works by breaking down an array's elements into nested subarrays, then combining those nested subarrays back together in sorted order. It is best explained with an example. Given the array [9, 5, 7, 1], let's walk through the process of sorting it with merge sort. We'll start off by breaking the array down into nested subarrays:

[9, 5, 7, 1] -->
[[9, 5], [7, 1]] -->
[[[9], [5]], [[7], [1]]]

We then work our way back to a flat array by merging each pair of nested subarrays back together in the proper order:

[[[9], [5]], [[7], [1]]] -->
[[5, 9], [1, 7]] -->
[1, 5, 7, 9]

Write a function that takes an array argument and returns a new array that contains the values from the input array in sorted order. The function should sort the array using the merge sort algorithm as described above. You may assume that every element of the array will be of the same data type—either all numbers or all strings.

Feel free to use the merge function you wrote in the previous exercise.

Problem:
Sort an array using the merge sort algorithm. First break the array down into nested subarrays all the way till each element has its own nested subarray. Then beginning flattening the subarrays and sorting them as you go (use the merge method from the previous exercise). The final array should be sorted in ascending order.

Input: a single, unsorted array
Output: a single, sorted array

Definitions/Rules
- assume all elements have the same data type
- Merge Sort Algo:
  - Part 1:
    - [4, 3, 8, 1, 2, 4, 0] -->
      [[4, 3, 8, 1], [2, 4, 0]] -->
      [[[[4, 3], [8, 1]], [[2, 4], [0]]] -->
      [[[[[4], [3]], [[8],[2]], [[[2], [4]], [0]]]]]
  - each breakdown splits the array in two parts
  - as long as an array has more than one element, it must continue to be halved
  - if the first element of an array is not an array, then you know that that array
    needs to be split. Otherwise you need to perform an iteration over each of the   
    subarrays.
  - Part 2:
    - Given an array of nested subarrays, we need to find the deepest level of   
      subarrays (i.e. the subarrays that don't contain any further subarrays).
    - once we find a subarray whose first element is not an array we need to perform 
      our merge function with the array that contains that element and its 
      neighbouring array.
    - continue to go through the array until there are no more subarrays
    
Mental Model:
Take an array and find the midpoint. Split the array into two halves based on the midpoint and nest the two halves in subarrays within the original array. Continue to do this until every element is nested within its own subarray. Each subarray will contain just two elements (either more subarrays or elements of another data type). Once that process is completed, sift through the array and find the deepest nested subarrays which contain just one element. Merge that subarray with its neighbour and continue to do so until there are no more subarrays.

Examples / Test Cases

mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
mergeSort([5, 3]);                 // [3, 5]
mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]

mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

Data Structure:
Input: An array containing elements of another data type
Output: an array with all elements sorted in ascending order
Intermediate:
- nested subarrays

Algorithm:
- We need a function that will create nested subarrays from an original array.
  - createNestedArrays(array)
  - find the length, divide by two, Math.ceil
  - firstElement = array.slice(0, midpoint)
  - secondElement = array.slice(midpoint, length);
  - return [firstElement, secondElement]
- When do we want to use this function?
- We want to use it, whenever we encounter an array whose first element (i.e.   
  array[0]) is not an array and the length of the array is greater than 1.
  - if (!Array.isArray(array[0]) && array.length > 1) => createdNestedArrays
  - if (Array.isArray(array[0]) && array.length > 1) => iterate over the arrays, and   
    recursively perform the function
  - if (!Array.isArray(array[0]) && array.length === 1) => return array
  
- 
  


*/


// Code

function createSubarrays(array) {
  let midpoint = Math.ceil(array.length / 2);
  let subarray1 = array.slice(0, midpoint);
  let subarray2 = array.slice(midpoint, array.length);
  return [subarray1, subarray2];
}

function firstElementIsArray(array) {
  return Array.isArray(array[0]);
}

function buildNestedArrays(array) {
  if (firstElementIsArray(array) && array.length > 1) {
    return array.map(subarray => {
      if (!firstElementIsArray(subarray) && subarray.length === 1) {
        return subarray;
      } else {
        return buildNestedArrays(subarray);
      }
    });
  } else if (!firstElementIsArray(array) && array.length === 2) {
    return createSubarrays(array);
  } else if (!firstElementIsArray(array) && array.length > 1) {
    return buildNestedArrays(createSubarrays(array));
  } 
}

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


function flattenAndMerge(array) {
  if (firstElementIsArray(array) && !firstElementIsArray(array[0])) {
    if (Array.isArray(array[0]) && Array.isArray(array[1])) {
      return merge(array[0], array[1]);
    }
  } else if (firstElementIsArray(array) && firstElementIsArray(array[0])) {
    array = array.map(subarray => flattenAndMerge(subarray));
    return flattenAndMerge(array);
  } else if (!firstElementIsArray(array)) {
    return array;
  }
}

function mergeSort(array) {
  return flattenAndMerge(buildNestedArrays(array));
}

console.log(mergeSort([9, 5, 7, 1]));
console.log(mergeSort([5, 3]));
console.log(mergeSort([6, 2, 7, 1, 4]));
console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
