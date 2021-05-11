"use strict";

// const readlineSync = require('readline-sync');

// console.log('Please enter a phrase:');
// let phrase = readlineSync.prompt();

// console.log(`There are ${phrase.length} characters in "${phrase}".`);


// Refactor (spaces don't count as characters)

// const readlineSync = require('readline-sync');

// console.log('Please enter a phrase:');
// let phrase = readlineSync.prompt();
// let numberOfChars = phrase.replace(/\s/g, '').length;

// console.log(`There are ${numberOfChars} characters in "${phrase}".`);

// Refactor Again (only alphabetic characters count)

const readlineSync = require('readline-sync');

console.log('Please enter a phrase:');
let phrase = readlineSync.prompt();
let numberOfChars = phrase.replace(/[^a-zA-Z]/g, '').length;

console.log(`There are ${numberOfChars} characters in "${phrase}".`);
