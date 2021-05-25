"use strict";

function sequence(int) {
  let integers = [];

  for (let currentInt = 1; currentInt <= int; currentInt += 1) {
    integers.push(currentInt);
  }

  return integers;
}

console.log(sequence(5));
console.log(sequence(3));
console.log(sequence(1));
