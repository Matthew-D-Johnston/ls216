"use strict";

/*
The Fibonacci series is a sequence of numbers in which each number is the sum of the previous two numbers. The first two Fibonacci numbers are 1 and 1. The third number is 1 + 1 = 2, the fourth is 1 + 2 = 3, the fifth is 2 + 3 = 5, and so on. In mathematical terms, this can be represented as:

F(1) = 1
F(2) = 1
F(n) = F(n - 1) + F(n - 2) where n > 2

This simple sequence can easily be computed using a recursive function. A recursive function is one in which the function calls itself. For example, the following function is a recursive function that computes the sum of all integers between 1 and n:

function sum(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sum(n - 1);
  }
}

A good recursive function has three primary qualities:

It calls itself at least once.
It has an ending condition — e.g., if (n === 1), in the sum function above.
The results of each recursion are used in each step — e.g., n + sum(n - 1) uses sum(n - 1).
Write a recursive function that computes the nth Fibonacci number, where nth is an argument passed to the function.

NOTE: This exercise verges on the Advanced level of exercises, so do not be discouraged if you are not able to solve it on your own; recursion is tricky, and even experienced developers can have difficulty dealing with it.

fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765

Problem:
Compute the nth fibonacci number.

Input: the nth number in the series of fibonacci numbers
Output: the nth fibonacci number

Definitions/rules:
- use recursion
- first fibonacci number f(1): 1
- second fibonacci number f(2): 1
- third fibonacci number f(3): f(3 - 1) + f(3 - 2) = f(2) + f(1) = 1 + 1 = 2
- fourth fibonacci number f(4): f(3) + f(2) = 2 + 1 = 3
- nth fibonacci numbber f(n): f(n - 1) + f(n - 2)

Mental Model:
If the given argument is less than or equal to two, the fibonacci number will be equal to one. Otherwise, it is equal to the two previous fibonacci numbers.

Examples / Test Cases:

fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765

Data Structure:
Input: integer/number
Output: integer/number
Intermediate: ???

Algorithm:
- check if argument value is less than or equal to 2
  - if so, return 1.
- recursively call the fibonacci function twice: f(n - 1) + f(n - 2) and return the value.


*/

// Code

function fibonacci(num) {
  if (num <= 2) {
    return 1;
  }
  
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(12));
console.log(fibonacci(20));
