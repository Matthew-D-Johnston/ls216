"use strict";

function interleave(array1, array2) {
  let results = [];

  for (let index = 0; index < array1.length; index += 1) {
    results.push(array1[index], array2[index]);
  }

  return results;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));
