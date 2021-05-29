"use strict";

function isUppercase(string) {
  let sanitized = string.replace(/[^A-Z]/gi, '');
  return !sanitized.match(/[^A-Z]/g);
}

console.log(isUppercase('t'));
console.log(isUppercase('T'));
console.log(isUppercase('Four Score'));
console.log(isUppercase('FOUR SCORE'));
console.log(isUppercase('4SCORE!'));
console.log(isUppercase(''));
