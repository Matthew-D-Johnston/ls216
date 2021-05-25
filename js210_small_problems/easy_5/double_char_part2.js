"use strict";

const consonants = ['A', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M',
                    'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']

function doubleConsonants(string) {
  let doubledConsonants = '';

  string.split('').forEach(char => {
    if (consonants.includes(char.toUpperCase())) {
      doubledConsonants += char.repeat(2);
    } else {
      doubledConsonants += char;
    }
  });

  return doubledConsonants;
}

console.log(doubleConsonants('String'));
console.log(doubleConsonants('Hello-World!'));
console.log(doubleConsonants('July 4th'));
console.log(doubleConsonants(''));
