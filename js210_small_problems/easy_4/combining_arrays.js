"use strict";

function union(array1, array2) {
  let results = [];

  array1.forEach(elem => {
    if (!results.includes(elem)) {
      results.push(elem);
    }
  });

  array2.forEach(elem => {
    if (!results.includes(elem)) {
      results.push(elem);
    }
  });

  return results;
}

console.log(union([1, 3, 5], [3, 6, 9]));
console.log(union([1, 3, 4, 4, 8], [4, 8, 9]));
