"use strict";

/*

Infection of the Ones
Write a function that replaces every row and column that contains at least one 1 into a row/column that is filled entirely with 1s.

Examples
onesInfection([
  [0, 0, 1],
  [0, 0, 0],
  [0, 0, 0]
]) ➞ [
  [1, 1, 1],
  [0, 0, 1],
  [0, 0, 1]
]

onesInfection([
  [1, 0, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0]
]) ➞ [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 0]
]

onesInfection([
  [0, 1, 0, 1],
  [0, 0, 0, 0],
  [0, 1, 0, 0]
]) ➞ [
  [1, 1, 1, 1],
  [0, 1, 0, 1],
  [1, 1, 1, 1]
]
Notes
You must mutate the original array.
Input matrices will have at least row and one column.
Bonus: Solve this without using any higher-order functions.


Problem:
Given a matrix (i.e. array of subarrays) that contains elements that are either 1s or 0s, return the same matrix but wherever a 1 occurs, the row and column of that 1 will be entirely filled with 1s.

Input: a matrix of 1s and 0s
Output: a matrix of 1s and 0s, but with all rows and columns containing a 1 in the input matrix completely filled in with 1s.

Definitions/Rules:
- matrix: array of subarrays
- row: a subarray
- column: all of the elements with the same index for each of the subarrays
- mutate the original array
- input matrix will have at least 1 row and 1 column
- bonus: solve without use of higher-order functions

Mental Model:
Given an array of subarrays, sift through each subarray and if it contains a one, mark true for that row. If an element contains a 1, take the index and that will be a column that will need to be marked true. Afterwards, find all the rows and columns marked true, and fill them in entirely with 1s.

Examples / Test Cases:

onesInfection([
  [0, 0, 1],
  [0, 0, 0],
  [0, 0, 0]
]) ➞ [
  [1, 1, 1],
  [0, 0, 1],
  [0, 0, 1]
]

onesInfection([
  [1, 0, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0]
]) ➞ [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 0]
]

onesInfection([
  [0, 1, 0, 1],
  [0, 0, 0, 0],
  [0, 1, 0, 0]
]) ➞ [
  [1, 1, 1, 1],
  [0, 1, 0, 1],
  [1, 1, 1, 1]
]

Data Structure:

Input:
- an array of subarrays containing 1s and 0s
Output:
- the same array of subarrays containing 1s and 0s
Intermediate:
- booleans
- numbers
- object

Algorithm:
- find the number of rows
- find the number of columns
- create an object with two properties: rows and columns; the value of these keys will
  be arrays of length equal to the total number of rows and columns, respectively
- create a for loop that iterates over all the rows (i.e. subarrays)
- within that loop create another loop that iterates over each element (i.e. columns)
- if an element contains a 1, then mark true value in the object for the appropriate 
  row and column.
- continue this process until all elements have been iterated over.
- Now create another for loop that iterates over the subarrays and replaces every 0 with a 1 for each element if that row is marked true in the object.
- Do the same thing for the columns
- return the matrix


*/

// Code

function onesInfection(matrix) {
  let numberOfRows = matrix.length;
  let numberOfColumns = matrix[0].length;
  
  let ones = { rows: [], columns: [] };
  
  ones.rows.length = numberOfRows;
  ones.columns.length = numberOfColumns;
  
  for (let rowIdx = 0; rowIdx < numberOfRows; rowIdx += 1) {
    for (let colIdx = 0; colIdx < numberOfColumns; colIdx += 1) {
      if (matrix[rowIdx][colIdx] === 1) {
        ones.rows[rowIdx] = true;
        ones.columns[colIdx] = true;
      }
    }
  }
  
  for (let rowIdx = 0; rowIdx < numberOfRows; rowIdx += 1) {
    for (let colIdx = 0; colIdx < numberOfColumns; colIdx += 1) {
      if (ones.rows[rowIdx] || ones.columns[colIdx]) {
        matrix[rowIdx][colIdx] = 1;
      }
    }
  }
  
  return matrix;
}

console.log(onesInfection([
  [0, 0, 1],
  [0, 0, 0],
  [0, 0, 0]
]));

console.log(onesInfection([
  [1, 0, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0]
]));

console.log(onesInfection([
  [0, 1, 0, 1],
  [0, 0, 0, 0],
  [0, 1, 0, 0]
]));
