"use strict";

function repeater(string) {
  let doubledChars = '';
  string.split('').forEach(char => doubledChars += char.repeat(2));
  return doubledChars;
}

console.log(repeater('Hello'));
console.log(repeater('Good job!'));
console.log(repeater(''));
