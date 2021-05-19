"use strict";

const SQUARE_FT_PER_SQUARE_M = 10.7639;

const readlineSync = require('readline-sync');

let length = Number(readlineSync.question('Enter the length of the room in meters: '));
let width = Number(readlineSync.question('Enter the width of the room in meters: '));
let areaInMeters = (length * width).toFixed(2);
let areaInFeet = (areaInMeters * SQUARE_FT_PER_SQUARE_M).toFixed(2);

console.log(`The area of the room is ${areaInMeters} square meters (${areaInFeet} square feet).`);


