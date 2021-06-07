"use strict";

/*

Guitar Tuner

Create a function that takes guitar strings as an array of frequencies, starting at the first string (High E) and ending in the sixth string (Low E).

The function must return the display of a tuner for each string, in the same order, as an array.

You can find the frequencies of the strings on the Wikipedia page (check the Resources tab).

1 (E)  329.63 Hz  E4
2 (B)  246.94 Hz  B3
3 (G)  196.00 Hz  G3
4 (D)  146.83 Hz  D3
5 (A)  110.00 Hz  A2
6 (E)   82.41 Hz  E2

The guitar strings are played 1st to 6th, High E to Low E.
If the guitar string matches, return "OK" for that guitar string.
If it's too low, return ">•" for 1 or 2 percent off (the arrow means, tune up).
Return ">>•" if it's way off. For more than 3 percent.
If it's too high, return "•<" for 1 or 2 percent, and "•<<" for more, (tune down).
Check the rounded percentages.
If 0 is given, the guitar string isn't played, return " - ".
Examples
tune([0, 246.94, 0, 0, 0, 80]) ➞ [" - ", "OK", " - ", " - ", " - ", ">>•"]

tune([329, 246, 195, 146, 111, 82]) ➞ ["OK", "OK", ">•", ">•", "•<", "OK" ]

tune([329.63, 246.94, 196, 146.83, 110, 82.41]) ➞ ["OK", "OK", "OK", "OK", "OK", "OK"]
Notes
Items in the array will always be numbers.

Problem:
Take an array of six elements representing the frequencies of each of the six strings of a guitar. Return an array that indicates whether or not the string is OK, needs tuning, or was not played.

Input: an array of numbers
Output: an array of strings

Definitions/Rules:
- guitar strings are played 1st to 6th: High E to Low E
- if guitar strings match, return "OK" for that string
- if too low by 1 or 2 percent, return ">."
- if too low by 3% or more, return ">>."
- if too high by 1 or 2 percent, return ".<"
- if too high by 3% or more, return ".<<"
- If 0 is given, return " - ";
- for percentage checks:
  - ((given value - standard freq.) / stand. freq.) * 100 rounded to nearest integer
- items in the array will always be numbers

Mental Model:
Take an array corresponding to the frequencies played by six strings of a guitar. Check those frequencies against their standard frequencies. Depending on how close they are, push a string indicator of the tuning requirements for that string to a result array.

Examples / Test Cases:
tune([0, 246.94, 0, 0, 0, 80]) ➞ [" - ", "OK", " - ", " - ", " - ", ">>•"]

tune([329, 246, 195, 146, 111, 82]) ➞ ["OK", "OK", ">•", ">•", "•<", "OK" ]

tune([329.63, 246.94, 196, 146.83, 110, 82.41]) ➞ ["OK", "OK", "OK", "OK", "OK", "OK"]

Data Structure:
Input: an array of numbers
Output: an array of strings
Intermediate:
- might use an object for the standard frequencies
- 

Algorithm:
- create a const STANDARD_FREQUENCIES and assign to array with the standard frequency values.
- within function:
- create a tuning array and assign to an empty array.
- iterate over the elements of the input array and compare to the values from STANDARD_FREQUENCIES
- if the element value is a zero, push " - " to the tuning array
- else
  - calculate the percent differnence
  - if 0, push "OK"
  - if 1 or 2 => push ".<"
  - if 3 or more => push ".<<"
  - if -1 or -2 => push ">."
  - if -3 or less => push ">>."
  -
- return the tuning array

*/

// Code

const STANDARD_FREQUENCIES = [329.63, 246.94, 196.00, 146.83, 110.00, 82.41];

function tune(stringFrequencies) {
  let tuning = [];
  
  stringFrequencies.forEach((frequency, string) => {
    if (frequency === 0) {
      tuning.push(" - ");
    } else {
      let difference = frequency - STANDARD_FREQUENCIES[string];
      let percentDifference = Math.round((difference / STANDARD_FREQUENCIES[string]) * 100);
      
      if (percentDifference === 0) {
        tuning.push("OK");
      } else if (percentDifference === 1 || percentDifference === 2) {
        tuning.push("•<");
      } else if (percentDifference > 3) {
        tuning.push("•<<");
      } else if (percentDifference === -1 || percentDifference === -2) {
        tuning.push(">•");
      } else {
        tuning.push(">>•");
      }   
    }
  });
  
  return tuning;
}

console.log(tune([0, 246.94, 0, 0, 0, 80]));
console.log(tune([329, 246, 195, 146, 111, 82]));
console.log(tune([329.63, 246.94, 196, 146.83, 110, 82.41]));
console.log(tune([0,0,190,0,110,0]));
