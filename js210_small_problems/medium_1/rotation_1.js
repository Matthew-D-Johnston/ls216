"use strict";

/*

Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.
Review the test cases below, then implement the solution accordingly.

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

*/

/*

Rotate an array by taking the first element and appending it to the end of the array.

Input: array
Output: array

Definitions/Rules:
- Rotation: take first element and append to end of array
- if input is not array, return undefined
- if input is empty array, return empty array
- do not mutate the input array

Mental Model:
Take the input array. Check to see if the input is an array and return undefined if it is not. If it is an array, check to see if it is empty and return the empty array if it is. Otherwise, make a copy of it so that we can perform operations without mutating the original array. Then shift the first eelement and append it to the end of the array using push.

Data Structure:
Input: array
Output: array
Intermediate data structures: ???

Algorithm:
- check if array
- false => return undefined
- true => check if empty
       - true => return empty array
       - false => make copy of array using slice

with copied array:
shift the first element and push it to the end of the array

*/

// Code

function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  } else if (array.length === 0) {
    return array;
  } else {
    let arrayCopy = array.slice();
    arrayCopy.push(arrayCopy.shift());
    return arrayCopy;
  }
}

console.log(rotateArray([7, 3, 5, 2, 9, 1])); // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));
console.log(rotateArray(['a']));
console.log(rotateArray([1, 'a', 3, 'c']));
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));
console.log(rotateArray([]));
console.log(rotateArray());
console.log(rotateArray(1));

const array = [1, 2, 3, 4];
console.log(rotateArray(array));
console.log(array);
