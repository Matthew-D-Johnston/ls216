"use strict";

const WORD_NUMBERS = ['zero', 'one', 'two', 'three', 'four',
                      'five', 'six', 'seven', 'eight', 'nine',
                      'ten', 'eleven', 'twelve', 'thirteen',
                      'fourteen', 'fifteen', 'sixteen',
                      'seventeen', 'eighteen', 'nineteen'];


function alphabeticNumberSort(numbers) {
  let wordNumbers = numbers.map(number =>  WORD_NUMBERS[number])
                           .sort()
                           .map(number => WORD_NUMBERS.indexOf(number));
  return wordNumbers;
}

console.log(alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
console.log(alphabeticNumberSort([5, 8, 3]));

let arr = [5, 3, 4, 9, 11];
console.log(alphabeticNumberSort(arr));
console.log(arr);
