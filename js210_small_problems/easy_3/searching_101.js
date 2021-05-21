"use strict";

let rlSync = require('readline-sync');

let first = rlSync.question('Enter the 1st number: ');
let second = rlSync.question('Enter the 2nd number: ');
let third = rlSync.question('Enter the 3rd number: ');
let fourth = rlSync.question('Enter the 4th number: ');
let fifth = rlSync.question('Enter the 5th number: ');
let last = rlSync.question('Enter the last number: ');

let numbers = [first, second, third, fourth, fifth];

if (numbers.includes(last)) {
  console.log(`The number ${last} appears in [${numbers.join(', ')}].`);
} else {
  console.log(`The number ${last} does not appear in [${numbers.join(', ')}].`);
}
