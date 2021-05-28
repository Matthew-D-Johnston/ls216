"use strict";

function palindromes(text) {
  return substrings(text).filter(substring => {
    if (substring.length > 1) {
      return substring === substring.split('').reverse().join('');
    }
  });
}

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

console.log(palindromes('abcd'));
console.log(palindromes('madam'));
console.log(palindromes('hello-madam-did-madam-goodbye'));
