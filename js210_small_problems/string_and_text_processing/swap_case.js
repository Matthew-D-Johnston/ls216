"use strict";

function swapCase(text) {
  let chars = text.split('');
  return chars.map(char => {
    if (char === char.toLowerCase()) {
      return char.toUpperCase();
    } else if (char === char.toUpperCase()) {
      return char.toLowerCase();
    }
  }).join('');
}

console.log(swapCase('CamelCase'));
console.log(swapCase('Tonight on XYZ-TV'));
console.log(swapCase('Hello 342 there'));
