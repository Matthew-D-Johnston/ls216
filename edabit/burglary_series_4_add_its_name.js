"use strict";

/*

Burglary Series (04): Add Its Name

Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).

Examples
addName({}, "Brutus", 300) ➞ { Brutus: 300 }

addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }

addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }
Notes
The value argument will be a number.

Problem:
Given an object of stolen items, a pets name, and a value, return the object with that name and value in it as key-value pairs.

Input:
- object
- name
- value

Output:
- object that includes the name and value as one of the object's properties

Definitions/Rules:
- value argument will be a number
- object may have other properties
- 

Mental Model:
Take the given object and add the name as a key that corresponds to the value given.

Examples / Test Cases:

addName({}, "Brutus", 300) ➞ { Brutus: 300 }

addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }

addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }

Data Structure:
Inputs:
- object
- string
- number

Output:
- object with the string and number as key-value pairs

Intermediate: ???

Algorithm:
- simply add the name as a key and give it the value of the number given as the third argument
- return the object

*/

// Code

function addName(obj, name, value) {
  obj[name] = value;
  return obj;
}

console.log(addName({}, "Brutus", 300));
console.log(addName({ piano: 500 }, "Brutus", 400));
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440));
