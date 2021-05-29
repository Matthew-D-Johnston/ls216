"use strict";

function wordCap(text) {
  let words = text.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());
  return words.join(' ');
}

console.log(wordCap('four score and seven'));
console.log(wordCap('the javaScript language'));
console.log(wordCap('this is a "quoted" word'));
