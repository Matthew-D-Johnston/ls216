"use strict";

function stringy(integer) {
  let string = '';

  for (let index = 0; index < integer; index += 1) {
    string += index % 2 === 0 ? '1' : '0';
  }

  return string;
}

console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));
console.log(stringy(7));
