"use strict";

function centerOf(text) {
  let length = text.length;
  let middleIndex = Math.ceil((length - 1) / 2);

  if (length % 2 === 0) {
    return text.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return text.slice(middleIndex, middleIndex + 1);
  }
}

console.log(centerOf('I Love JavaScript'));
console.log(centerOf('Launch School'));
console.log(centerOf('Launch'));
console.log(centerOf('Launchschool'));
console.log(centerOf('x'));


