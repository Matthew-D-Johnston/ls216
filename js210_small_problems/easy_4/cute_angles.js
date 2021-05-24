"use strict";

const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;

function dms(angle) {
  let degrees = Math.floor(angle);
  let minutesAngle = (angle - degrees) * MINUTES_PER_DEGREE;
  let minutes = Math.floor(minutesAngle);
  let seconds = Math.floor((minutesAngle - minutes) * SECONDS_PER_MINUTE);

  return degrees + '˚' + zeroPads(minutes) + "'" + zeroPads(seconds);
}

function zeroPads(number) {
  if (number < 10) {
    return '0' + String(number);
  }

  return String(number);
}

console.log(dms(30));
console.log(dms(76.73));
console.log(dms(254.6));
console.log(dms(93.034773));
console.log(dms(0));
console.log(dms(360));
