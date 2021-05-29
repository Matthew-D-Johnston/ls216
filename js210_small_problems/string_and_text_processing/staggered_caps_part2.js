"use strict";

function staggeredCase(text) {
  let staggeredText = '';
  let upperCase = true;

  for (let index = 0; index < text.length; index += 1) {
    if (/[^A-Z]/i.test(text[index])) {
      staggeredText += text[index];
    } else if (upperCase === true) {
      staggeredText += text[index].toUpperCase();
      upperCase = false;
    } else {
      staggeredText += text[index].toLowerCase();
      upperCase = true;
    }
  }

  return staggeredText;
}

console.log(staggeredCase('I Love Launch School!'));
console.log(staggeredCase('ALL CAPS'));
console.log(staggeredCase('ignore 77 the 444 numbers'));
