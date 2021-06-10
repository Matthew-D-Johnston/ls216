"use strict";

/*

Shiny Semiprimes: Brilliant Numbers

In this challenge, you have to establish if a given number is Brilliant. A Brilliant number is a semiprime that can be obtained only by multiplicating two, and only two, different primes with the same number of digits.

A semiprime can be:

A composite number equal to the product of two different primes.
A composite number equal to the square of a prime.
Given an integer n, implement a function that returns true if n is a Brilliant number, or false if it's not.

Examples
isBrilliant(11) ➞ false
// 11 is a prime.

isBrilliant(9) ➞ true
// 9 is equal to the square of a prime: 3²

isBrilliant(21) ➞ true
// 21 is equal to the product of two different primes: 3 x 7
// 3 and 7 have the same digital length.

isBrilliant(22) ➞ false
// 22 is equal to the product of two different primes: 2 x 11
// 2 and 11 have different digital lengths.
Notes
The given n will be a positive integer greater than 0.
Remember that a Brilliant number is a semiprime that can be obtained only with a single combination of different primes having the same digital length.

Problem:
Given a number, determine whether it is a brilliant number or not.

Input: an integer
Output: true if number is brilliant; false otherwise.

Definitions/Rules:
- brilliant number:
  - semiprime: product of two different primes or the square of a prime
  - the two primes forming the semiprime must have the same number of digits
- given number will be a positive integer greater than 0
-

Examples / Test Cases:
isBrilliant(11) ➞ false
// 11 is a prime.

isBrilliant(9) ➞ true
// 9 is equal to the square of a prime: 3²

isBrilliant(21) ➞ true
// 21 is equal to the product of two different primes: 3 x 7
// 3 and 7 have the same digital length.

isBrilliant(22) ➞ false
// 22 is equal to the product of two different primes: 2 x 11
// 2 and 11 have different digital lengths.


Data Structure:
Input: a number
Output: a boolean
Intermediate:
- numbers
- booleans

Algorithm:
- there are a few intermediate functions we could create to simplify the main function
- isPrime(number); isSemiprime(number); sameDigitalLengths(number1, number2);
- isPrime(number):
  - iterate from 2 up until just before the given number;
  - if the given number is divisible by any integer without remainder during the 
    iterration, then return false.
  - else, after the iteration is complete return true.
- sameDigitalLengths(number1, number2):
  - convert both numbers to strings and compare their lengths;
- isSemiprime(number):
  - for the product of the number we start at 2
  - for the limit of the range of numbers to examine we need to take the floor of
    dividing the number by 2.
  - we then iterate from 2 to this limit
  - for each number, check if it is prime and if its square equals the given number.
    If so, then we have a semiprime and can return true.
  - otherwise, we will want to perform another inner loop
- isBrilliant(number)
- check to see if the number is prime; if so, return false
- create an empty array to be passed to the semiprime function
- if (semiprime(number)), take the array that was mutated by the function and take
- the two elements and input them to the sameDigitalLegnth function returning true
  if that function returns true.
- else, return false

*/

// Code

function isPrime(number) {
  for (let int = 2; int < number; int += 1) {
    if (number % int === 0) {
      return false;
    }
  }
  
  return true;
}

function sameDigitalLengths(number1, number2) {
  return String(number1).length === String(number2).length;
}

function semiprime(number, emptyArr) {
  let limit = Math.floor(number / 2);
  
  for (let idx1 = 2; idx1 <= limit; idx1 += 1) {
    if (isPrime(idx1)) {
      for (let idx2 = 2; idx2 <= limit; idx2 += 1) {
        if (isPrime(idx2)) {
          if ((idx1 * idx2) === number) {
            emptyArr.push(idx1, idx2);
            return true;
          }
        }
      }
    }
  }
  
  return false;
}

function isBrilliant(number) {
  if (isPrime(number)) {
    return false;
  }
  
  let primes = [];
  
  if (semiprime(number, primes)) {
    return sameDigitalLengths(primes[0], primes[1]);
  } else {
    return false;
  }
}

console.log(isBrilliant(11) === false);
console.log(isBrilliant(9) === true);
console.log(isBrilliant(21) === true);
console.log(isBrilliant(22) === false);
console.log(isBrilliant(1001) === false);
console.log(isBrilliant(77) === false);
console.log(isBrilliant(209) === true);
console.log(isBrilliant(211) === false);
console.log(isBrilliant(780) === false);
console.log(isBrilliant(703) === true);
console.log(isBrilliant(1000) === false);
console.log(isBrilliant(1003) === true);
console.log(isBrilliant(1008) === false);
console.log(isBrilliant(16459) === true);
