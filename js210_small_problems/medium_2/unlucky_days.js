"use strict";

/* 

Write a function that takes a year as an argument and returns the number of 'Friday the 13ths' in that year. You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). You may also assume that the same calendar will remain in use for the foreseeable future.


getDay()

*/

function fridayThe13ths(year) {
  let numberOfFridays = 0;
  
  for (let monthIndex = 0; monthIndex <= 11; monthIndex += 1) {
    let date = new Date(year, monthIndex, 13);
    if (date.getDay() === 5) {
      numberOfFridays += 1;
    }
  }
  
  return numberOfFridays;
}

console.log(fridayThe13ths(1986));
console.log(fridayThe13ths(2015));
console.log(fridayThe13ths(2017));
console.log(fridayThe13ths(1983));
