"use strict";

function crunch(string) {
  let crunched = string[0] || '';

  for (let index = 1; index < string.length; index += 1) {
    if (string[index] !== string[index - 1]) {
      crunched += string[index];
    }
  }

  return crunched;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));
console.log(crunch('4444abcabccba'));
console.log(crunch('ggggggggggggggg'));
console.log(crunch('a'));
console.log(crunch(''));
