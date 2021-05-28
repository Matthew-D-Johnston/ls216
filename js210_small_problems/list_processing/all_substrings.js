"use strict";

function substrings(text) {
  let substringsArr = [];

  for (let outerIdx = 0; outerIdx < text.length; outerIdx += 1) {
    let subtext = text.slice(outerIdx, text.length);
    for (let innerIdx = 1; innerIdx <= subtext.length; innerIdx += 1) {
      substringsArr.push(subtext.slice(0, innerIdx));
    }
  }

  return substringsArr;
}

console.log(substrings('abcde'));
console.log(substrings('Matthew'));
