"use strict";

function reverse(original) {
  let array = true;
  if (!Array.isArray(original)) {
    original = original.split('');
    array = false;
  }

  let reversed = [];

  for (let index = original.length - 1; index >= 0; index -= 1) {
    reversed.push(original[index]);
  }

  return array ? reversed : reversed.join('');
}

console.log(reverse('Hello'));
console.log(reverse('a'));
console.log(reverse([1, 2, 3, 4]));
console.log(reverse([]));

const array = [1, 2, 3];
console.log(reverse(array));
console.log(array);
