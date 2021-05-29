"use strict";

function staggeredCase(text) {
  let staggeredText = '';

  for (let index = 0; index < text.length; index += 1) {
    if (index % 2 === 0) {
      staggeredText += text[index].toUpperCase();
    } else {
      staggeredText += text[index].toLowerCase();
    }
  }

  return staggeredText;
}

console.log(staggeredCase('I Love Launch School!'));
console.log(staggeredCase('ALL_CAPS'));
console.log(staggeredCase('ignore 77 the 4444 numbers'));
