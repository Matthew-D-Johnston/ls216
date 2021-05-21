"use strict";

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome("madam i'm adam"));
console.log(isPalindrome('356653'));
