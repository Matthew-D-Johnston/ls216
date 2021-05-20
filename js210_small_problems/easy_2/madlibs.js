"use strict";

let rlSync = require("readline-sync");

let noun = rlSync.question("Enter a noun: ");
let verb = rlSync.question("Enter a verb: ");
let adjective = rlSync.question("Enter an adjective: ");
let adverb = rlSync.question("Enter an adverb: ");

let message = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`;

console.log(message);
