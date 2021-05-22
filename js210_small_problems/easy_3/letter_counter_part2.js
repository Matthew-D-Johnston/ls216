"use strict";

function wordSizes(text) {
  if (text.length === 0) {
    return {};
  }

  let counts = {};
  let textCopy = text.replace(/[^a-z\s]/gi, '');

  textCopy.split(' ').forEach(word => {
    if (counts[word.length]) {
      counts[word.length] += 1;
    } else {
      counts[word.length] = 1;
    }
  });

  return counts;
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));
