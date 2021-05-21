"use strict";

function century(year) {
  let convertedToCentury = Math.ceil(year / 100);

  if (isTeen(convertedToCentury)) {
    return String(convertedToCentury) + 'th';
  } else if (isFirst(convertedToCentury)) {
    return String(convertedToCentury) + 'st';
  } else if (isSecond(convertedToCentury)) {
    return String(convertedToCentury) + 'nd';
  } else if (isThird(convertedToCentury)) {
    return String(convertedToCentury) + 'rd';
  } else {
    return String(convertedToCentury) + 'th';
  }
}

function isTeen(year) {
  return (year % 100) > 10 && (year % 100) < 20;
}

function isFirst(year) {
  return String(year).slice(-1) === '1';
}

function isSecond(year) {
  return String(year).slice(-1) === '2';
}

function isThird(year) {
  return String(year).slice(-1) === '3';
}

console.log(century(2000));
console.log(century(2001));
console.log(century(1965));
console.log(century(256));
console.log(century(5));
console.log(century(10103));
console.log(century(1052));
console.log(century(1127));
console.log(century(11201));
