"use strict";

function shift(array) {
  let firstElement = array[0];
  let length = array.length;

  if (length === 0) {
    return firstElement;
  }

  for (let index = 0; index < length; index += 1) {
    array[index] = array[index + 1];
  }

  array.length = length - 1;
  return firstElement;
}

function unshift(array, ...args) {
  let lengthIncrement = args.length;

  for (let index = array.length - 1; index >= 0; index -= 1) {
    array[index + lengthIncrement] = array[index];
  }
  for (let index = 0; index < lengthIncrement; index += 1) {
    array[index] = args[index];
  }

  return array.length;
}

console.log(shift([1, 2, 3]));
console.log(shift([]));
console.log(shift([[1, 2, 3], 4, 5]));
console.log(unshift([1, 2, 3], 5, 6));
console.log(unshift([1, 2, 3]));
console.log(unshift([4, 5], [1, 2, 3]));

const testArray = [1, 2, 3];
console.log(shift(testArray));
console.log(testArray);
console.log(unshift(testArray, 5));
console.log(testArray);
