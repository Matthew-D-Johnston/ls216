"use strict";

/*

'Bubble Sort' is one of the simplest sorting algorithms available. Although it is not an efficient algorithm, it is an excellent exercise for student developers. In this exercise, you will write a function that sorts an array using the bubble sort algorithm.

A bubble sort works by making multiple passes (iterations) through an array. On each pass, the two values of each pair of consecutive elements are compared. If the first value is greater than the second, the two elements are swapped. This process is repeated until a complete pass is made without performing any swaps — at which point the array is completely sorted.

We can stop iterating the first time we make a pass through the array without making any swaps because this means that the entire array is sorted.

Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. The sorting should be done "in-place" — that is, the function should mutate the array. You may assume that the array contains at least two elements.

Problem:

Take an array and sort it in ascending order (i.e. from smallest to largest) using the bubble sort algorithm. 

Input: array
Output: mutated array

Definitions/Rules
- assume array contains at least 2 elements
- make multiple passes/iterations
- bubble sort algorithm:
  => iterate over the elements of the array
  => compare two consecutive elements (i.e. at index 0 and index 1)
  => if the element at the lower index (say 0) is greater than the element at the 
     higher index (say 1), then swap those elements.
  => continue to the next index (i.e. 1 and 2); perform the same comparison and swap
     if necessary.
  => do this until the final index
  => repeat the process (i.e. keep iterating) until no more swaps are made on a single
     pass.
- 

Mental Model:
Take an array and iterate over each of its elements. Begining with the first two elements, compare them, and swap if the first element is greater than the second. Move onto the second element and compare it to the third, swapping if necessary. Continue until the last two elements have been reached. Repeat this process. If on a single iteration no swap is made, then the sorting is complete and the mutated array can be returned.

Exapmles / Test Cases:

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

Data Structure:
Input: array
Output: a mutated version of the original array where all elements have been sorted in ascending order
Intermediate:
- continue with arrays

Algorithm:
- we need an inner and outer loop
- the outer loop will be a while loop conditional on a boolean swapMade variable
- outside the loop we assign that variable the value true, but immediate inside we 
  assign it the value false
- then we introduce a for loop for iterating over the array
- iterate over the array
- we will want to stop iterating at the index just before the last index (length of 
  array minus 2)
- start by comparing the element at the zero index with the element at index 1
  - start by assign the values at those indices to new variables, first and second
  - first = array[0]
  - second = array[1]
  - if (first > second) => array[0] = second; and array[1] = first;
  - indicate that a swap was made by changing the swapMade variable to true.
  - move on to the next two elements and repeat the comparison.
  - once we arrive at the last two (index = length - 2 and index = length - 1).
  - then we break out of the for loop and if swapMade is true, then we do another loop
    in the while loop, once again resetting the swapMade variable to false.
  - If we don't ever swap in the for loop then the swapMade variable will be false and
    we will exit the while loop.
  - Then return the array.

*/

// Code

function bubbleSort(array) {
  let swapMade = true;
  
  while (swapMade) {
    swapMade = false;
    
    for (let index = 0; index < array.length - 1; index += 1) {
      let first = array[index];
      let second = array[index + 1];
      if (first > second) {
        array[index] = second;
        array[index + 1] = first;
        swapMade = true;
      }
    }
  }
  
  return array;
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
