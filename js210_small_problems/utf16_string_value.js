"use strict";

function utf16Value(string) {
  let utf16Sum = 0;
  for (let index = 0; index < string.length; index += 1) {
    utf16Sum += string[index].charCodeAt();
  }

  return utf16Sum;
}

console.log(utf16Value('Four score'));
console.log(utf16Value('Launch School'));
console.log(utf16Value('a'));
console.log(utf16Value(''));

const OMEGA = "\u03A9";
console.log(utf16Value(OMEGA));
console.log(utf16Value(OMEGA + OMEGA + OMEGA));
