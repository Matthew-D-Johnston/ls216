"use strict";

/*

Balanced Words
We can assign a value to each character in a word, based on their position in the alphabet (a = 1, b = 2, ... , z = 26). A balanced word is one where the sum of values on the left-hand side of the word equals the sum of values on the right-hand side. For odd length words, the middle character (balance point) is ignored.

Write a function that returns true if the word is balanced, and false if it's not.

Examples
balanced("zips") ➞ true
// "zips" = "zi|ps" = 26+9|16+19 = 35|35 = true

balanced("brake") ➞ false
// "brake" = "br|ke" = 2+18|11+5 = 20|16 = false
Notes
All words will be lowercase, and have a minimum of 2 characters.
Palindromic words will always be balanced.

Problem:
Given a word, check to see if the values for each character in each half of the sum up and equal the other half of the summed values of the individual characters of the other half.

Input: a word
Output: a boolean: true if word is balanced; false otherwise

Definitions/Rules:
- alphabet values: a = 1, b = 2, ... , z = 26;
- balance: value of chars in first half = value of chars in second half
- half: split the word into two equal parts
        if the word has an odd number of letters, ignore the middle letter.
- all words will be lowercase letters and have a minimum of 2 characters

Mental Model:
Take a word. Check if it has an odd number of letters. If so, remove the middle letter. Take the word with an even number of letters and split it into two halves. Iterate over the first half and calculate the values of each character and sum them together. Do the same for the second half. Compare the summed values. If equal, return true. Otherwise, return false.

Examples / Test Cases:

balanced("zips") ➞ true
// "zips" = "zi|ps" = 26+9|16+19 = 35|35 = true

balanced("brake") ➞ false
// "brake" = "br|ke" = 2+18|11+5 = 20|16 = false

Data Structure:

Input:
- a string of alphabetic characters

Output:
- a boolean value

Intermediate:
???

Algorithm:
- check if length of string is odd
- if so, remove the middle character
- create a midpoint variable by dividing the length by 2.
- create two variables, half1 and half2 and assign them to the first and second half of the word, respectively.
- create two sum variables, sum1 and sum2 and assign to zero
- iterate over the chars in each half of the word using a for loop and a limit that is equal to the length of each half
- increment the respective sum variables by the value of the character found using char.charCodeAt() % 96;
- outside the loop return the comparison of the two sum values

*/

// Code

function balanced(word) {
  let midpoint = Math.floor(word.length / 2);
  
  if (word.length % 2 === 1) {
    let chars = word.split('');
    chars.splice(midpoint, 1);
    word = chars.join('');
  }
  
  let half1 = word.slice(0, midpoint);
  let half2 = word.slice(midpoint);
  let sum1 = 0;
  let sum2 = 0;
  
  for (let index = 0; index < midpoint; index += 1) {
    sum1 += (half1[index]).charCodeAt() % 96;
    sum2 += (half2[index]).charCodeAt() % 96;
  }
  
  return sum1 === sum2;
}

console.log(balanced("zips"));
console.log(balanced("brake"));
