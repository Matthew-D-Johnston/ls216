"use strict";

function sequence(count, startSeq) {
  let multiples = [];

  for (let index = 1; index <= count; index += 1) {
    multiples.push(startSeq * index);
  }

  return multiples;
}

console.log(sequence(5, 1));
console.log(sequence(4, -7));
console.log(sequence(3, 0));
console.log(sequence(0, 1000000));
