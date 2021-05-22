"use strict";

function swap(text) {
  let words = text.split(' ');

  return words.map(word => letterSwap(word)).join(' ');
}

function letterSwap(word) {
  if (word.length === 1) {
    return word;
  } else if (word.length === 2) {
    return word[1] + word[0];
  } else {
    let firstLetter = word[0];
    let lastLetter = word.slice(-1);

    return lastLetter + word.slice(1, -1) + firstLetter;
  }
}

console.log(swap('Oh what a wonderful day it is'));
console.log(swap('Abcde'));
console.log(swap('a'));
