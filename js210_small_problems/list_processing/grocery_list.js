"use strict";

function buyFruit(list) {
  let expandedList = [];

  for (let index = 0; index < list.length; index += 1) {
    for (let idx = 1; idx <= list[index][1]; idx += 1) {
      expandedList.push(list[index][0]);
    }
  }

  return expandedList;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
console.log(buyFruit([['apple', 2], ['orange', 4], ['banana', 2], ['watermelon', 3]]));
