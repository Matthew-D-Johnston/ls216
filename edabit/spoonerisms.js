"use strict";

/*

Spoonerisms
A spoonerism is when the first letters / sounds of two words are transposed onto one another. Create a function that takes a two-word string and performs a spoonerism on the phrase.

Examples
spoonerise("history lecture") ➞ "listory hecture"

spoonerise("loud noises") ➞ "noud loises"

spoonerise("chow mein") ➞ "mow chein"

spoonerise("edabit rules!") ➞ "redabit ules!"
Notes
Only two words will be parsed into the function. Don't worry about handling more than two.
You won't always just have to swap the first letters, take care to notice which letters have been switched in the examples (notice the difference between vowel-starting and consonant-starting words).

Problem:
Given a piece of text with two words, swap the consonant beginnings of the two words.

Input: two-word text
Output: two-word text with consonant beginnings swapped

Definitions/Rules:
- text will have two words delimited by a space
- swap the consonant beginnings of the two words
- consonant beginnings:
  => find the first vowel for each word
  => slice off any letters that come before that vowel; if the word starts with a vowel
     then no slice will take place.
  => with those slices, swap the one for the other and prepend the words.
- only two words will be parsed into the function

Mental Model:
Take the string of two words. Isolate each word in a separate variable. Find the first the index of the first vowel for each word. Slice off the bit of text that comes before that first vowel. Store the slice in a separate prefix variable. Then swap the prefixes for each word, attaching them to the beginning of the parts of the word starting from the first value.

Examples / Test Cases:
spoonerise("history lecture") ➞ "listory hecture"

spoonerise("loud noises") ➞ "noud loises"

spoonerise("chow mein") ➞ "mow chein"

spoonerise("edabit rules!") ➞ "redabit ules!"

Data Structure:

Input: a string
Output: a string
Intermediate:
- strings

Algorithm:
- split the string into two separate words
- assign each words to a separate word variable
- find index of first vowel for each word
- store a slice of each word from the beginning of the word up to the vowel in a new variable
- then add the prefix to the rest of the word starting from the first value
- return the two words as a single string separated by a space



*/

// Code

function spoonerise(string) {
  let words = string.split(' ');
  let word1 = words[0];
  let word2 = words[1];
  
  let firstVowelIdx1 = word1.match(/[aeiou]/).index;
  let firstVowelIdx2 = word2.match(/[aeiou]/).index;
  
  let prefix1 = word1.slice(0, firstVowelIdx1);
  let prefix2 = word2.slice(0, firstVowelIdx2);
  
  let swap1 = prefix2 + word1.slice(firstVowelIdx1);
  let swap2 = prefix1 + word2.slice(firstVowelIdx2);
  
  return [swap1, swap2].join(' ');
}

console.log(spoonerise("history lecture") === "listory hecture");
console.log(spoonerise("loud noises") === "noud loises");
console.log(spoonerise("chow mein") === "mow chein");
console.log(spoonerise("edabit rules!") === "redabit ules!");
console.log(spoonerise("christmas eve") === "istmas chreve");
console.log(spoonerise("crushing failure") === "fushing crailure");
console.log(spoonerise("highlighter fluid") === "flighlighter huid");
console.log(spoonerise("chocolate biscuits") === "bocolate chiscuits");
