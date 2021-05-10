"use strict";

const prompt = require('prompt-sync')();

let firstNumber = Number(prompt('==> Enter the first number: '));
let secondNumber = Number(prompt('==> Enter the second number: '));

let addition = '==> ' + firstNumber + ' + ' + secondNumber + ' = ' + (firstNumber + secondNumber);
let subtraction = `==> ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`;
let multiplication = `==> ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`;
let division = `==> ${firstNumber} / ${secondNumber} = ${Math.round(firstNumber / secondNumber)}`;
let remainder = `==> ${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`;
let square = `==> ${firstNumber} ** ${secondNumber} = ${firstNumber ** secondNumber}`;
console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);
console.log(remainder);
console.log(square);




