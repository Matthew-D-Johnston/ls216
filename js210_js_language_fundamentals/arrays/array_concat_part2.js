"use strict";

function concat(array1, ...args) {
  let concatenated = array1.slice();

  args.forEach(arg => {
    if (Array.isArray(arg)) {
      arg.forEach(elem => concatenated.push(elem));
    } else {
      concatenated.push(arg);
    }
  });

  return concatenated;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));
console.log(concat([1, 2], 'a', ['one', 'two']));
console.log(concat([1, 2], ['three'], 4));
