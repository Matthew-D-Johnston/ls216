"use strict";

function isRealPalindrome(string) {
  let stringCopy = string.replace(/[^a-z]/gi, '').toLowerCase();
  return stringCopy === stringCopy.split('').reverse().join('');
}

console.log(isRealPalindrome('madam'));
console.log(isRealPalindrome('Madam'));
console.log(isRealPalindrome("Madam, I'm Adam"));
console.log(isRealPalindrome('356653'));
console.log(isRealPalindrome('356a653'));
console.log(isRealPalindrome('123ab321'));
