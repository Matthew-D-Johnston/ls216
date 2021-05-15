"use strict";

const MILLISECONDS_PER_MINUTE = 60000;

function afterMidnight(timeStr) {
  return millisecondsAfterMidnight(timeStr) / MILLISECONDS_PER_MINUTE;
}

function beforeMidnight(timeStr) {
  if (timeStr === '00:00') {
    return 0;
  }
  return 1440 - (millisecondsAfterMidnight(timeStr) / MILLISECONDS_PER_MINUTE);
}

function millisecondsAfterMidnight(timeStr) {
  return Date.parse(`01 Jan 1970 ${timeStr}:00 GMT`);
}

console.log(afterMidnight('00:00'));
console.log(beforeMidnight('00:00'));
console.log(afterMidnight('12:34'));
console.log(beforeMidnight('12:34'));
console.log(afterMidnight('17:21'));
console.log(beforeMidnight('17:21'));