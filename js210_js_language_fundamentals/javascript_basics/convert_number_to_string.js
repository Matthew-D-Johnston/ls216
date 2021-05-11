"use strict";

const DIGITS = { 0: '0',
                 1: '1',
                 2: '2',
                 3: '3',
                 4: '4',
                 5: '5',
                 6: '6',
                 7: '7',
                 8: '8',
                 9: '9',
               }

function integerToString(number) {
  if (number === 0) {
    return '0';
  }

  let digits = [];

  while (number > 0) {
    digits.unshift(DIGITS[number % 10]);
    number = Math.floor(number / 10);
  }

  return digits.join('');
}

console.log(integerToString(4321));
console.log(integerToString(0));
console.log(integerToString(5000));
