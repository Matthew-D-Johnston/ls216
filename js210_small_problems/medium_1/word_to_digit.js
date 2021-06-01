"use strict";

/*
Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

Problem:
Take a string and replace each number word with its corresponding digit character.

Input: string
Output: modified string

Definitions/Rules:
- number word: e.g. 'zero'
- corresponding digit char: e.g. 'zero' => '0'

Mental Model:
Convert all number words in string to corresponding digit characters.

Examples/Test Case:

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."


Data Structure:
Input: string
Output: string

Intermediate: 

Algorithm:
Take the string and use the replace method for each digit.



*/

// Code

function wordToDigit(message) {
  message = message.replace(/zero/gi, '0');
  message = message.replace(/one/gi, '1');
  message = message.replace(/two/gi, '2');
  message = message.replace(/three/gi, '3');
  message = message.replace(/four/gi, '4');
  message = message.replace(/five/gi, '5');
  message = message.replace(/six/gi, '6');
  message = message.replace(/seven/gi, '7');
  message = message.replace(/eight/gi, '8');
  message = message.replace(/nine/gi, '9');
  return message;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
