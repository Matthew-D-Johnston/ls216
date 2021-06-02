"use strict";

/*
A triangle is classified as follows:

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.
To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

Problem:
Determine if the triangle is valid based on the three angles given. If so, determine what type of triangle it is: right, acute, or obtuse.

Input: 3 angles in degrees
Output: a string indicating the type of triangle

Definitions/Rules:
- assume all input args are integer values
- assume angles are in degrees
- valid triangle must meet two conditions:
  1) angle1 + angle2 + angle3 = 180
  2) every angle > 0; which means smallest angle > 0
- obtuse: largest angle > 90
- right: largest angle = 90
- acute: largest angle < 90

Mental Model:
Take the three angles and sort them from smallest to largest. Check if the three angles form a valid triangle. If so, determine what type of triangle it is.

Examples / Test Cases:
triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"

Data Structure:
Input: three integer values
Output: a string
Intermediate:
- use array to sort angles
- then assign each to variable.

Algorithm:
- create angles variable and store sorted angles in array
- assign each angle to a separate variable
- check if triangle is valid (small + medium + large = 180 && small > 0):
  true:
    - check if angle > 90
      => 'obtuse'
    - check if angle = 90
      => 'right'
    - check if angle < 90
      => 'acute'
  false:
    => 'invalid'
    
    
*/

// Code

function triangle(angle1, angle2, angle3) {
  let [small, medium, large] = [angle1, angle2, angle3].sort((a, b) => a - b);

  if (small + medium + large === 180 && small > 0) {
    if (large > 90) {
      return 'obtuse';
    } else if (large === 90) {
      return 'right';
    } else {
      return 'acute';
    }
  } else {
    return 'invalid';
  }
}

console.log(triangle(60, 70, 50) === 'acute');
console.log(triangle(30, 90, 60) === 'right');
console.log(triangle(120, 50, 10) === 'obtuse');
console.log(triangle(0, 90, 90) === 'invalid');
console.log(triangle(50, 50, 50) === 'invalid');