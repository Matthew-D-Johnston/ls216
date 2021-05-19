"use strict";

const readlineSync = require("readline-sync");

let billAmount = readlineSync.question("What is the bill? ");
let tipPercentage = readlineSync.question("What is the tip percentage? ");

billAmount = parseInt(billAmount, 10);
tipPercentage = parseInt(tipPercentage, 10);

let tip = billAmount * (tipPercentage / 100);
let total = billAmount + tip;

console.log(`The tip is ${tip.toFixed(2)}`);
console.log(`The total is ${total.toFixed(2)}`);
