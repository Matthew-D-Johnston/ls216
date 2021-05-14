"use strict";

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  let array2Copy = array2.slice();

  array1.forEach(elem => {
    if (array2Copy.includes(elem)) {
      let index = array2Copy.indexOf(elem);
      array2Copy.splice(index, 1);
    }
  });

  return array2Copy.length === 0;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));
console.log(areArraysEqual([1, 1, 1], [1, 1]));
console.log(areArraysEqual([1, 1], [1, 1]));
