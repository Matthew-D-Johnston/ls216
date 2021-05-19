"use strict";

const rlSync = require('readline-sync');

let integer = Number(rlSync.question('Please enter an integer greater than 0: '));
let type = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

if (type === 's') {
  let total = 0;
  for (let index = 1; index <= integer; index += 1) {
    total += index;
  }
  console.log(`The sum of the integers between 1 and ${integer} is ${total}.`);
} else {
  let total = 1;
  for (let index = 1; index <= integer; index += 1) {
    total *= index;
  }
  console.log(`The product of the integers between 1 and ${integer} is ${total}.`);
}
