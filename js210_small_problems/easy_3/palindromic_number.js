"use strict";

function isPalindromicNumber(number) {
  return String(number) === String(number).split('').reverse().join('');
}

console.log(isPalindromicNumber(34543));
console.log(isPalindromicNumber(123210));
console.log(isPalindromicNumber(22));
console.log(isPalindromicNumber(5));
