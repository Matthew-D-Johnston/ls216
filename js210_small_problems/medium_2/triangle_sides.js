"use strict";

/*
A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.


Problem:
Take the lengths of three sides of a triangle and determine, first whether it is a valid triangle, and if so, then what type of triangle.

Input: three arguments, each representing a different side of the triangle
Output: a string indicating the type of triangle or if it is invalid.

Definitions/Rules:
- equilateral: side1 = side2 = side3;
- isosceles: two sides equal, one side different
- escalene: side1 != side2 != side3
- valid: 1) sum of two shortest sides is greater than length of longest side
-    and 2) every side musth be greater than zero.

Mental Model:
Organize the sides so that they are sorted from smallest to largest. Evaluate whether the three sides consitute a valid triangle. If so then, determine which type of triangle it is.

Examples / Test Cases:

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"

Data Structure:
Inputs: 3 numbers; maybe integers or floating points.
Output: string value either: "equilateral", "isosceles", "scalene", or "invalid".
Intermediate:
- use an array to store the three sides of triangle and sort them from smallest side to largest.
- 

Algorithm:
- sort sides in an array from smallest side to largest side
- assign the separate values of the sides two the following three variables: small, medium, and large
- Check to see if triangle is valid:
  => if (small + medium > large && sides.every(side => side > 0)) => valid
    if (small === medium && medium === large)
      => return 'equilateral'
    if (small === medium || medium === large)
      => return 'isosceles';
    else
      => return 'scalene'
  => else return "invalid"
*/

// Code:

function triangle(side1, side2, side3) {
  let sides = [side1, side2, side3].sort((a, b) => a - b);
  let small = sides[0];
  let medium = sides[1];
  let large = sides[2];
  
  if (small + medium > large && sides.every(side => side > 0)) {
    if (small === medium && medium === large) {
      return 'equilateral';
    } else if (small === medium || medium === large) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  } else {
    return 'invalid';
  }
}

console.log(triangle(3, 3, 3) === "equilateral");
console.log(triangle(3, 3, 1.5) === "isosceles");
console.log(triangle(3, 4, 5) === "scalene");
console.log(triangle(0, 3, 3) === "invalid");
console.log(triangle(3, 1, 1) === "invalid");
