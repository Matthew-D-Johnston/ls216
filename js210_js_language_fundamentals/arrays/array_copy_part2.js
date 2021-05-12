"use strict";

// let myArray = [1, 2, 3, 4];
// const myOtherArray = myArray;

// myArray.pop();
// console.log(myOtherArray);

// myArray = [1, 2];
// console.log(myOtherArray);


// Alternative 1

// let myArray = [1, 2, 3, 4];
// const myOtherArray = myArray.slice();

// myArray.pop();
// console.log(myArray);
// console.log(myOtherArray);

// myArray = [1, 2];
// console.log(myOtherArray);

// Alternative 2

let myArray = [1, 2, 3, 4];
const myOtherArray = myArray.map(elem => elem);

myArray.pop();
console.log(myArray);
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);
