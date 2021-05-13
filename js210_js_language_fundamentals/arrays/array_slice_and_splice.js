"use strict";

function slice(array, begin, end) {
  let length = array.length;

  if (begin > length) {
    begin = length;
  }

  if (end > length) {
    end = length;
  }

  let result = [];

  for (let index = begin; index < end; index += 1) {
    result.push(array[index]);
  }

  return result;
}

// console.log(slice([1, 2, 3], 1, 2));
// console.log(slice([1, 2, 3], 2, 0));
// console.log(slice([1, 2, 3], 5, 1));
// console.log(slice([1, 2, 3], 0, 5));

// const arr1 = [1, 2, 3];
// console.log(slice(arr1, 1, 3));
// console.log(arr1);

function splice(array, start, deleteCount, ...args) {
  let length = array.length;
  if (start > length) {
    start = length;
  }

  if (deleteCount > (length - start)) {
    deleteCount = length - start;
  }

  let arraySlice = slice(array, start, length);
  array.length = start;
  let deletedElements;

  if (deleteCount === 0 && args.length > 0) {
    deletedElements = [];
    args.forEach(elem => array.push(elem));
    arraySlice.forEach(elem => array.push(elem));
  } else if (deleteCount > 0 && args.length > 0) {
    deletedElements = slice(arraySlice, 0, deleteCount);
    arraySlice = slice(arraySlice, deleteCount, arraySlice.length);
    args.forEach(elem => array.push(elem));
    arraySlice.forEach(elem => array.push(elem));
  } else if (deleteCount > 0 && args.length === 0) {
    deletedElements = slice(arraySlice, 0, deleteCount);
    arraySlice = slice(arraySlice, deleteCount, arraySlice.length);
    arraySlice.forEach(elem => array.push(elem));
  } else {
    deletedElements = [];
    arraySlice.forEach(elem => array.push(elem));
  }

  return deletedElements;
}

console.log(splice([1, 2, 3], 1, 2));
console.log(splice([1, 2, 3], 1, 3));
console.log(splice([1, 2, 3], 1, 0));
console.log(splice([1, 2, 3], 0, 1));
console.log(splice([1, 2, 3], 1, 0, 'a'));

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));
console.log(arr2);

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));
console.log(arr3);

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));
console.log(splice(arr4, 1, 0, 'a'));
console.log(arr4);

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));
console.log(arr5);
