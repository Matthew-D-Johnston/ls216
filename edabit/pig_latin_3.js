"use strict";

/*

pigLatin 3.0
Write a function that converts a sentence into pig latin.

Rules for converting to pig latin:

For words that begin with a vowel (a, e, i, o, u), add "way".
Otherwise, move all letters before the first vowel to the end and add "ay".
For simplicity, no punctuation will be present in the inputs.
Examples
pigLatinSentence("this is pig latin") ➞ "isthay isway igpay atinlay"

pigLatinSentence("wall street journal") ➞ "allway eetstray ournaljay"
Notes
N/A

Problem:
Given a piece of text, translate that text into pig latin.

Input: piece of text without punctuation.
Output: a pig latin translation of the original input text.

Definitions/Rules:
- words that begin with vowels (a, e, i, o, u):
  - add "way" to the end of the word.
- all other words:
  - take all letters before the first vowel
  - move those letters to the end of the word
  - add "ay" to the end
- no punctuation present in original

Mental Model:
Take a piece of text and split it into individual words. Perform a transformation on those words. The two primary cases will be words that start with vowels and words that don't. If it starts with a vowel, simply add "way" to the end of the word. Otherwise, find the position of the first vowel, extract all letters that occur before this first vowel, and then add them to the end of the word. Then add "ay" to that new ending.

Examples / Test Cases:

pigLatinSentence("this is pig latin") ➞ "isthay isway igpay atinlay"

pigLatinSentence("wall street journal") ➞ "allway eetstray ournaljay"

pigLatinSentence("") ➞ ""

Data Structure:

Input: string
Output: string
Intermediate:
- probably dealing with arrays of strings


Algorithm:
- create a words variable and assign it to the result of splitting the input text into
  individual words using a space as the delimiter.
- next, use the map function because we want to transform each word and return an array 
  of those transformations.
- within the mapping iteration we need to employ some conditional statements
- if the first letter begins with a vowel
  => append "way" to the end of the word
- else
  => locate the index of the first vowel
  => use the slice function to extract the first part of the word up until that index
     and append "ay" to that extracted piece of the word.
  => return the second half of the word with the extracted piece and the "ay" appended
- then join the array of words using " " as a delimiter

*/


// Code

function pigLatinSentence(text) {
  let words = text.split(' ');
  
  return words.map(word => {
    if (['a', 'e', 'i', 'o', 'u'].includes(word[0])) {
      return word + 'way';
    } else {
      let firstVowelIdx = word.match(/[aeiou]/).index;
      let appendage = word.slice(0, firstVowelIdx) + 'ay';
      return word.slice(firstVowelIdx) + appendage;
    }
  }).join(' ');
}

console.log(pigLatinSentence('this is pig latin') === "isthay isway igpay atinlay");
console.log(pigLatinSentence("wall street journal") === "allway eetstray ournaljay");
