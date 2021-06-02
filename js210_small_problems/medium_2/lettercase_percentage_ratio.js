"use strict";

/*
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.


Problem:
Input: a string with different types of characters
Output: an object with three properties:
  1) percent of chars that are lowercase
  2) percent of chars that are uppercase
  3) percent of chars that are neither
  
Definitions/Rules:
- assume string always has at least one char; don't have to deal with empty strings, ''.
- any type of character is valid.
- output percent values as strings rounded to two decimal places.

Mental Model:
Take a string and count the total number of chars. Count the number of lowercase letters and divide by the number of total chars to obtain percentage. Store this value as a value in our main object. It will be associated with a 'lowercase' key. Do this for uppercase letters as well. Then do it for all non-letter chars.

Examples:

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

Data Structures:
Input: string
Output: object with three properties whose values are strings.
Intermediate: ???

Algorithm:
- create totalChars variable and store the return value of obtaining the length of the input string
- use the match method and approriate regex in combination with the length method to obtain the number of lowercase, uppercase, and non-alphabetic chars.
- Divide these values by the totalChars variable
- format these results to strings rounded to two decimal places.
- store in the object under the appropriate keys
*/

// Code

function letterPercentages(string) {
  let totalChars = string.length;
  let lowercaseChars = string.match(/[a-z]/g) || [];
  let uppercaseChars = string.match(/[A-Z]/g) || [];
  let nonAlphaChars = string.match(/[^a-z]/gi) || [];
  
  return { lowercase: ((lowercaseChars.length / totalChars) * 100).toFixed(2),
           uppercase: ((uppercaseChars.length / totalChars) * 100).toFixed(2),
           neither:   ((nonAlphaChars.length / totalChars) * 100).toFixed(2),
         };
}

console.log(letterPercentages('abCdef 123'));
console.log(letterPercentages('AbCd +Ef'));
console.log(letterPercentages('123'));
