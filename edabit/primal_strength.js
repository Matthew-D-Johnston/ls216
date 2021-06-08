"use strict";

/*

Primal Strength
In number theory, a prime number is balanced if it is equidistant from the prime before it and the prime after it. It is therefore the arithmetic mean of those primes. For example, 5 is a balanced prime, two units away from 3, and two from 7. 211 is 12 units away from the previous prime, 199, and 12 away from the next, 223.

A prime that is greater than the arithmetic mean of the primes before and after it is called a strong prime. It is closer to the prime after it than the one before it. For example, the strong prime 17 is closer to 19 than it is to 13 (see note at bottom).

A prime that is lesser than the arithmetic mean of the primes before and after it is called weak prime. For example, 19.

Create a function that takes a prime number as input and returns "Strong" if it is a strong prime, "Weak" if it is a weak prime, or "Balanced".

Examples
primalStrength(211) ➞ "Balanced"

primalStrength(17) ➞ "Strong"

primalStrength(19) ➞ "Weak"
Notes
This definition of strong primes is not to be confused with strong primes as defined in cryptography, which are much more complicated than this. You are all welcome to make a challenge based on cryptographically strong primes.

Problem:
Given a prime number, determine whether it is a strong, weak, or balanced prime.

Input: a prime number
Output: either "Strong", "Weak", or "Balanced"

Definitions/Rules:
- prime number: divisible only by one and itself with no remainder
- balanced prime:
  - equidistant between the prime above and the prime below it
  - the arithmetic mean of the prime above and the prime below
- strong prime:
  - closer to the prime after it than the one before
  - greater than the arithmetic mean of the prime after and the one before
- weak prime:
  - closer to the prime before than the one after
  - less than the arithmetic mean of the prime before and after
- input to function is always a prime number

Mental Model:
Take a prime number. Find the prime number that comes before it and the one after it. Take the arithmetic mean of the two bordering primes. Compare this mean to the input prime. If equal, return "Balanced". If input is greater than mean, return "Strong". If input is less than mean, return "Weak".

Examples / Test Cases:

primalStrength(211) ➞ "Balanced"

primalStrength(17) ➞ "Strong"

primalStrength(19) ➞ "Weak"

Data Structure:
Input: a number (which is prime)
Output: a string (only three possibilities);
Intermediate:
- mainly dealing with numbers and comparing them
- only output deals with strings

Algorithm:
- first create a function that will determine whether a number is prime or not.
  - function isPrime(number);
  - iterate over every integer from 2 to one less than the number
  - if the remainder of dividing the number by any of these integers is equal to zero
    then return false; otherwise return true.
- now for the main function: function primalStrength(prime)
- create two variables:
  - lowPrime = prime - 1;
  - highPrime = prime + 1;
- initiate a while loop conditional on (!isPrime(lowPrime)) that will decrement lowPrime by 1 until it becomes a prime number
- do the same for highPrime, but increment by 1
- once we have our two outer primes, find their arithmetic mean.
- if the mean is equal to the input prime, return "Balanced"
- if input is greater than mean, return "Strong"
- if input is less than mean, return "Weak"


*/


// Code

function primalStrength(prime) {
  let lowPrime = prime - 1;
  let highPrime = prime + 1;
  
  while (!isPrime(lowPrime)) {
    lowPrime -= 1;
  }
  
  while (!isPrime(highPrime)) {
    highPrime += 1;
  }
  
  let mean = (highPrime + lowPrime) / 2;
  
  if (prime === mean) {
    return "Balanced";
  } else if (prime > mean) {
    return "Strong";
  } else {
    return "Weak";
  }
}

function isPrime(number) {
  for (let int = 2; int < number; int += 1) {
    if (number % int === 0) {
      return false;
    }
  }
  
  return true;
}

console.log(primalStrength(211));
console.log(primalStrength(17));
console.log(primalStrength(19));
console.log(primalStrength(5));
