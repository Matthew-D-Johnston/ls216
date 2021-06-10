"use strict";

/*

Lemonade Stand

At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).

Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

Return true if and only if you can provide every customer with correct change.

Examples
lemonade([5, 5, 5, 10, 20]) ➞ true

lemonade([5, 5, 10, 10, 20]) ➞ false

lemonade([10, 10]) ➞ false

lemonade([5, 5, 10]) ➞ true
Notes
You don't have any change in hand at first.
bills is an integer array.
bills[i] will be either 5, 10, or 20.

Problem:
Given a list of bills, check to see if one has enough change on hand to complete each of the bill transactions.

Input: a list of bills
Output: true if there was enough change on hand to honor each bill; false if for any bill one did not have enough change on hand to give back to the customer.

Definitions/Rules:
- bills: an array of amounts, either 5, 10, or 20
- cost of lemonade = 5
- each customer only buys one lemonade
- change due: the bill amount - the cost of a lemonade (i.e. 5)
- at the start the amount of change on hand is 0
- 

Mental Model:
Given the list of bills, go through each bill and if the customer pays 5, simply add that to the total change bucket. If it is either 10 or 20, then the amount of change due will be either 5 or 15, respectively. If there is not enough total change, return false. However, if there is, deduct the amount of change needed to give to the customer from the total change bucket. If all bills are completed without returning false, return true.

Examples / Test Cases:

lemonade([5, 5, 5, 10, 20]) ➞ true

lemonade([5, 5, 10, 10, 20]) ➞ false

lemonade([10, 10]) ➞ false

lemonade([5, 5, 10]) ➞ true

Data Structure:
Input:
- an array of integers
Output:
- boolean

Intermediate:
- dealing with numbers

Algorithm:
- create a fives array and assign to empty array; do the same with a tens and twenties array.
- iterate over the bills array
- if the current bill = 5, push the bill to the fives array.
- if ten, push it to the tens array and return a five by popping it from the fives array. If the fives array is empty and cannot give a value return false
- if twenty, push it to the twenties array, and return one five and one ten, or three fives. If there isn't either one five and one ten or three fives, return false.
- if we get through all the bills without returning false, return true.


*/

// Code:

function lemonade(bills) {
  let fives = [];
  let tens = [];
  let twenties = [];
  
  for (let bill = 0; bill < bills.length; bill += 1) {
    if (bills[bill] === 5) {
      fives.push(5);
    } else if (bills[bill] === 10) {
      if (fives.length > 0) {
        tens.push(10);
        fives.pop();
      } else {
        return false
      }
    } else {
      if ((fives.length > 0 && tens.length > 0)) {
        twenties.push(20);
        fives.pop();
        tens.pop();
      } else if (fives.length >= 3) {
        twenties.push(20);
        fives.length -= 3;
      } else {
        return false;
      }
    }
  }
  
  return true;
}

console.log(lemonade([5, 5, 5, 10, 20]) === true);
console.log(lemonade([5, 5, 10, 10, 20]) === false);
console.log(lemonade([10, 10]) === false);
console.log(lemonade([5, 5, 10]) === true);
console.log(lemonade([5, 5, 5, 20]) === true);
console.log(lemonade([5, 5, 10, 10, 20]) === false);
console.log(lemonade([5, 5, 5, 5, 10, 5, 10, 10, 10, 20]) === true);
console.log(lemonade([5, 10, 5, 5, 5, 20, 5, 10, 5, 5, 10, 20]) === true);
console.log(lemonade([5, 10, 5, 5, 5, 20, 5, 10, 20, 5, 10, 20, 10]) === false);
