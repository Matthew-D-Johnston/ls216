"use strict";

function multiplyList(array1, array2) {
  return array1.map((elem, index) => elem * array2[index]);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));
