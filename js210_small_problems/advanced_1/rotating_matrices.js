"use strict";

/*

As we saw in the previous exercises, a matrix can be represented by an array of arrays. For example, the 3x3 matrix shown below:

1  5  8
4  7  2
3  9  6

is represented by the following array of arrays:

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

A 90-degree rotation of a matrix produces a new matrix in which each side of the matrix is rotated clockwise by 90 degrees. For example, the 90-degree rotation of the matrix shown above is:

3  4  1
9  7  5
6  2  8

A 90-degree rotation of a non-square matrix is similar. For example, given the following matrix:

3  4  1
9  7  5

its 90-degree rotation is:

9  3
7  4
5  1

Write a function that takes an arbitrary MxN matrix, rotates it clockwise by 90-degrees as described above, and returns the result as a new matrix. The function should not mutate the original matrix.

Problem:
Given an MxN matrix, rotate it clockwise by 90-degrees.

Input: an MxN matrix
Output: will be an NxM matrix

Definitions/Rules
- do not mutate the original matrix:
- 90-degree rotation example given 2x3 matrix:
  - rotated[0][0] = matrix[1][0]
  - rotated[0][1] = matrix[0][0]
  - rotated[1][0] = matrix[1][1]
  - rotated[1][1] = matrix[0][1]
  - The first row becomes the last column
  - the last row becomes the first column

Mental Model:
Take a MxN matrix and create a new rotated matrix that has the same number of rows as the number of columns in the original matrix. Then loop over the rows of the original matrix, starting with the last row. Given a row from the original matrix, loop over the individual elements and push them to the rows of the rotated matrix.

Examples / Test Cases

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

Data Structure:
Input: an array of nested subarrays (rows equal number of subarrays and columns equal 
       number of elements in each subarray)
Output: an array of nested subarrays (rows equal number of columns in original matrix)


Algorithm:
- create a rotated array and assign it to an empty array
- find the number of columns in the original matrix by taking the length of matrix[0];
- add that number of empty subarrays to the rotated array
- loop over the rows/subarrays of the original matrix starting from the last row and
  counting down.
- within that loop, start another loop that iterates through the elements of each 
  sucessive row. Push these elements to rotated[column].

*/

// Code

function rotate90(matrix) {
  let totalRows = matrix.length;
  let totalColumns = matrix[0].length;
  let rotated = [];
  
  for (let index = 1; index <= totalColumns; index += 1) {
    rotated.push([]);
  }
  
  for (let row = totalRows - 1; row >= 0; row -= 1) {
    for (let column = 0; column < totalColumns; column += 1) {
      rotated[column].push(matrix[row][column]);
    }
  }
  
  return rotated;
}

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);
console.log(newMatrix2);
console.log(newMatrix3);
