/* 

In the previous exercise, you wrote a function that transposed a 3x3 matrix represented by an array of arrays.

Matrix transposes are not limited to 3x3 matrices, or even square matrices. Any matrix can be transposed simply by switching columns with rows.

Modify your transpose function from the previous exercise so that it works with any MxN matrix with at least one row and one column.

Problem:
Given any MxN matrix, return its transpose, which will be an NxM matrix.

Definitions/Rules:
- at least one row and one column
- transpose:
  - transposed[0][0] = matrix[0][0]
  - transposed[1][0] = matrix[0][1]
  - transposed[2][0] = matrix[0][2]
  - transposed[n][m] = matrix[m][n]
  
Examples / Test Case:

transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

Data Structure:

Input: array of subarrays
Output: transposed array of subarrays


Algorithm:
- create a transposed variable and assign to an empty array.
- Find the number of columns in the original matrix
- use that number to create an equal number of subarrays (i.e. rows) for the transpose
- Start a loop for iterating through the rows of the original matrix; rows < 
  matrix.length
- Within that loop, start a nested loop that iterates over the columns of each 
  individual row; column < matrix[row].length
- push to the transposed[column] matrix the matrix[row][column]


*/

// Code

function transpose(matrix) {
  let totalColumns = matrix[0].length;
  let totalRows = matrix.length;
  let transposed = [];
  
  for (let index = 1; index <= totalColumns; index += 1) {
    transposed.push([]);
  }
  
  for (let row = 0; row < totalRows; row += 1) {
    for (let column = 0; column < totalColumns; column += 1) {
      transposed[column][row] = (matrix[row][column]);
    }
  }
  
  return transposed;
}

console.log(transpose([[1, 2, 3, 4]]));
console.log(transpose([[1], [2], [3], [4]]));
console.log(transpose([[1]]));
console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
