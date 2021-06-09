"use strict";

/*

Headline Hash Tags

Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. If multiple words tie for the same length, retrieve the word that occurs first.

Examples
getHashTags("How the Avocado Became the Fruit of the Global Trade")
➞ ["#avocado", "#became", "#global"]

getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")
➞ ["#christmas", "#probably", "#will"]

getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")
➞ ["#surprise", "#parents", "#fruit"]

getHashTags("Visualizing Science")
➞ ["#visualizing", "#science"]
Notes
If the title is less than 3 words, just order the words in the title by length in descending order (see example #4).
Punctuation does not count towards a word's length.

Problem:
Given a bit of text, find and extract the three longest words in that text. Prepend those words with a hashtag and return an array of them in order from longest word to shortest word.

Input:
- a headline with words
Output:
- an array of the three longest words prepended with hashtags and in descending order from longest to shortest word.

Definitions/Rules:
- word: delimited by white space
- length of word depends only on alphabetic characters--punctuation does not count
- words sorted from longest to smallest
- prepend three longest words with hashtags
- all words are in lowercase
- What if the same word occurs twice? => if it occurs twice then repeat the word
- if multiple words tie for the same length, retrieve the word that comes first

Mental Model:
Take a bit of text. Split the text into individual words, ensuring that they are all in lowercase at this point. Perform a transformation on the words that counts the alphabetic characters of each word and returns the length, ensuring not to count non-alphabetic characters. Then sort this array of word lengths in descending order and select the top three. Then using these top three word lengths, find the index in the broader word lengths array of these lengths. Given those indices, go back to the original words array and select the words at those indices. Now that we have our top three words, perform another transformation that prepends the words with hashtags and removes any punctuation.

Examples / Test Cases:

getHashTags("How the Avocado Became the Fruit of the Global Trade")
➞ ["#avocado", "#became", "#global"]

getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")
➞ ["#christmas", "#probably", "#will"]

getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")
➞ ["#surprise", "#parents", "#fruit"]

getHashTags("Visualizing Science")
➞ ["#visualizing", "#science"]

Data Structure:
Input: string
Output: an array of the top three words (strings)
Intermediate:
- dealing with arrays
- numbers
- strings

Algorithm:
- create a words variable and assign it to a lowercase split(' ') version of the input string.
- transform the words array by stripping out all non-alphabetic characters for each word
- if the length of this array is less than or equal to three, return the array in order
  of longest to shortest word.
- create a wordLengths variable that is assigned to a transformation of the words array where each element is the length of each word.
- create a sorted copy of this wordLengths array and extract the first three elements, assuming the copy is sorted in descending order.
- then create a longestWordIndices variable assigned to an empty array
- Iterate over the extracted three lengths array and find the index in the wordLengths array of those lengths and push them to the longestWordIndices
- then perform another transformation that takes these indices and retrieves the word at those indices in the words array, and prepends the word with a hashtag.

*/

// Code

function getHashTags(headline) {
  let words = headline.toLowerCase().split(' ');
  words = words.map(word => word.replace(/[^a-z]/g, ''));
  
  if (words.length <= 3) {
    return words.sort((a, b) => b.length - a.length).map(word => '#' + word);
  }
  
  let wordLengths = words.map(word => word.length);
  let topThreeLengths = wordLengths.slice().sort((a, b) => b - a).slice(0, 3);
  let longestWordIndices = [];
  
  for (let index = 0; index < wordLengths.length; index += 1) {
    if (topThreeLengths.includes(wordLengths[index])) {
      longestWordIndices.push(index);
      let value = wordLengths[index];
      topThreeLengths.splice(topThreeLengths.indexOf(value), 1);
    }
  }
  
  let longestWords = longestWordIndices.map(idx => '#' + words[idx]);
  
  return longestWords.sort((a, b) => b.length - a.length);
}

console.log(getHashTags('How the Avocado Became the Fruit of the Global Trade'));
console.log(getHashTags('Why You Will Probably Pay More for Your Christmas Tree This Year'));
console.log(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit"));
console.log(getHashTags("Visualizing Science"));
