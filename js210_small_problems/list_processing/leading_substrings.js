"use strict";

function leadingSubstrings(text) {
  return text.split('').map((char, index) => {
    return text.slice(0, index + 1);
  });
}

console.log(leadingSubstrings('abc'));
console.log(leadingSubstrings('a'));
console.log(leadingSubstrings('xyzzy'));
