"use strict";

let rlSync = require("readline-sync");

let age = rlSync.question("What is your age? ");
let retirementAge = rlSync.question("At what age would you like to retire? ");
let yearsToRetirement = retirementAge - age;
let currentYear = new Date().getFullYear();
let retirementYear = currentYear + yearsToRetirement;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${yearsToRetirement} years of work to go!`);
