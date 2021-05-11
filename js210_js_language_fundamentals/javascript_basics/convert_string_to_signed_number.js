"use strict";

const CONVERTER = { '0': 0, 
                    '1': 1,
                    '2': 2,
                    '3': 3,
                    '4': 4,
                    '5': 5,
                    '6': 6,
                    '7': 7,
                    '8': 8,
                    '9': 9,
                  }

function stringToInteger(numberString) {
  let sign = numberString[0];
  let reversedDigits = numberString.replace(/[-+]/, '').split('').reverse();
  let unitsMultiple = 10;

  let absoluteNumber = reversedDigits.map((digit, index) => {
    digit = CONVERTER[digit];
    
    if (index > 0) {
      digit *= unitsMultiple;
      unitsMultiple *= 10;
    }

    return digit;
  }).reduce((accum, currentNumber) => accum + currentNumber);

  if (sign === '-') {
    return absoluteNumber * -1;
  }

  return absoluteNumber;
}

console.log(stringToInteger('4321'));
console.log(stringToInteger('-570'));
console.log(stringToInteger('+100'));
