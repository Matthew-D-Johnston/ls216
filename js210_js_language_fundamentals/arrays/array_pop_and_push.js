"use strict";

function pop(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array.splice(array.length - 1, 1)[0];
}

const array1 = [1, 2, 3];
console.log(pop(array1));
console.log(array1);
console.log(pop([]));
console.log(pop([1, 2, ['a', 'b', 'c']]));

function push(array, ...args) {
  args.forEach(arg => {
    array[array.length] = arg;
  });

  return array.length;
}

const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6));
console.log(array2);
console.log(push([1, 2], ['a', 'b']));
console.log(push([], 1));
console.log(push([]));
