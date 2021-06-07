"use strict";

/*

Piggy Bank

John wants to save money for his first car. He puts money in his piggy bank every day. Every day, he puts in $1 more than the previous day. Every Monday he starts with a new value ⁠— $1 more than the previous Monday.

Week 1 (starting at $1)
Day  Amount  Sum
Monday  $1  $1
Tuesday  $2  $3
Wednesday  $3  $6
Thursday  $4  $10
Friday  $5  $15
Saturday  $6  $21
Sunday  $7  $28
Week 2
Day  Amount  Sum
Monday  $2  $30
Tuesday  $3  $33
Wednesday  $4  $37
etc ...

Write a function that returns the number of days he needs to buy his first car cost. John had some savings (include it before counting). On the first Monday, he puts the start amount into his piggy bank.

Examples
numOfDays(2050, 1200, 10) ➞ 53
// 2050: cost of car, 1200: savings, 10: start amount
// After 53 days he can buy a car.

numOfDays(10000, 2500, 50) ➞ 123
// After 123 days he can buy a car.

numOfDays(500, 300, 50) ➞ 4
// After 4 days he can buy a car.
Notes
The first day is always Monday.
To buy a car, he needs money greater than or equal to cost.
All given numbers will be greater than 0.
BONUS: Try not adding the sum every day!

Problem:
Given the cost of car, the amount of savings, and the amount to be saved on the first day he starts saving, calculate the number of days it will take John to have saved up enough to buy the car.

Input:
- cost: cost of car
- savings: how much he has saved initially
- start: the amount he will save on the first day

Output:
- number of days it takes to save enough to buy the car

Definitions/Rules:
- savings algo:
  - start saving on Monday with initial `start` amount
  - add $1 to each successive day of the week
  - when starting a new week, add $1 to the start amount from the previous Monday
- when total savings >= to cost, he has enough.
- all given numbers are greater than 0
- first day is always Monday
- try not adding the sum every day

Mental Model:
Take the initial savings and continue to add the daily savings until total savings is equal to or greater than the cost of the car. Keep track of the number of days it takes to get to this point.

Examples / Test Cases:

numOfDays(2050, 1200, 10) ➞ 53
// 2050: cost of car, 1200: savings, 10: start amount
// After 53 days he can buy a car.

numOfDays(10000, 2500, 50) ➞ 123
// After 123 days he can buy a car.

numOfDays(500, 300, 50) ➞ 4
// After 4 days he can buy a car.

Data Structure:
Input:
- three arguments, all numbers

Output:
- a single number

Intermediate:
- use an array to store the amounts John saves each day
- use some day counter variables

Algorithm:
- create a dayCount variable and assign to the value 0
- start a while loop conditional on savings being less than cost
- create a new dailyContribution variable and assign it to the start value.
- start a for loop that uses a day variable initialized with the value of 1
- the day varible increments by one up until 7.
- within the for loop increment the savings variable by the dailyContribution amount
- increment the dailyContribution value by 1
- increment the dayCount variable by 1
- creat a break condition if savings >= cost
- outside the for loop, increment the start variable by 1
- at the end, return the dayCount variable


*/

// Code

function numOfDays(cost, savings, start) {
  let dayCount = 0;
  
  while (savings < cost) {
    let dailyContribution = start;
    
    for (let day = 1; day <= 7; day += 1) {
      savings += dailyContribution;
      dailyContribution += 1;
      dayCount += 1;
      if (savings >= cost) {
        break;
      }
    }
    
    start += 1;
  }
  
  return dayCount;
}

console.log(numOfDays(2050, 1200, 10));
console.log(numOfDays(10000, 2500, 50));
console.log(numOfDays(500, 300, 50));
