"use strict";

function isItemAvailable(transId, list) {
  let sum = 0;

  transactionsFor(transId, list).forEach(item => {
    if (item['movement'] === 'in') {
      sum += item['quantity'];
    } else {
      sum -= item['quantity'];
    }
  });

  return sum > 0;
}

function transactionsFor(transId, list) {
  return list.filter(item => item['id'] === transId);
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));
console.log(isItemAvailable(105, transactions));


