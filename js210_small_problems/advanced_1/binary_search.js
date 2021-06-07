"use strict";

/*

It is quite common to find yourself in a situation where you need to perform a search on some data to find something you're looking for. Imagine that you need to search through the yellow pages to find the phone number of a particular business. A straightforward way to do this would be to go through the yellow pages one business at a time, checking if the current business name is the one you're trying to find.

This may be a simple and easy way to search, but it's not very efficient. In the worst case scenario, it could mean having to search through every single business name before finding out that the business isn't listed—or, slightly better, having to go through every letter from 'A' to 'Z' before finding the business. A linear search such as this can take quite a long time.

A binary search algorithm is a much more efficient alternative. This algorithm allows you to cut the search area in half on each iteration by discarding the half that you know your search term doesn't exist in. The binary search algorithm is able to do this by relying on the data being sorted. Going back to the yellow pages example, let's say that we're searching the following yellowPages data for the search item 'Pizzeria':

// Yellow pages list of business names data:
const yellowPages = ['Apple Store', 'Bags Galore',
                     'Bike Store',  'Donuts R Us',
                     'Eat a Lot',   'Good Food',
                     'Pasta Place', 'Pizzeria',
                     'Tiki Lounge', 'Zooper'];
                     
With a linear search, we would have to sequentially go through each of the items until we found the search item 'Pizzeria'. In a binary search, however, the following sequence happens:

Retrieve the middle value from the data (assume truncation to integer) --> 'Eat a Lot'.
If the middle value is equal to 'Pizzeria', stop the search.
If the middle value is less than 'Pizzeria':
Discard the lower half, including the middle value --> ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot'].
Repeat the process from the top, using the upper half as the starting data --> ['Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'].
If the middle value is greater than 'Pizzeria', do the same as the previous step, but with opposite halves.
Using the process described above, the search successfully ends on the second iteration when the middle value is 'Pizzeria'.

Implement a binarySearch function that takes an array and a search item as arguments, and returns the index of the search item if found, or -1 otherwise. You may assume that the array argument will always be sorted.

Problem:
Given an array and a search item, implement a binary search that locates the index of the search item within the array. Otherwise, if the search item is not found in the list, return -1.

Input: an array and a search item
Output: index of the search item's location in the array

Definitins/Rules:
- assume array argument is sorted in ascending order
- binary search:
  -> retrieve middle value
  -> check whether search term is equal to, lesser than, or greater than the middle 
     value
  -> if equal to => return the index
  -> if less than => discard the upper half of array, including the middle value; 
    repeat the process until the search term is located in the array;
  -> if greater than => discard the lower half of array, including the middle value;
     repeat the process
  -> it will be necessary to keep track of the length of the lower array halves that   
     are discarded in order to add them to the final index value.


Examples / Test Cases

const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
binarySearch(yellowPages, 'Pizzeria');                   // 7
binarySearch(yellowPages, 'Apple Store');                // 0

binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6

Data Structure:
Inputs:
- an array
- a search term that has the same data type as array elements (e.g. string or number)
Output:
- an integer representing the index of the search term's location in the array.
Intermediate:
- working with arrays
- integer values
- conditional statements

Algorithm:
- create a copy of the input array
- will need to implement some type of looping condition (perhaps a while loop that is 
  conditional on the length of the copied input array being greater than 0).
- create indexTracker variable that we assign to zero
- within the loop:
  - we need some conditional statements:
  - find the middleIndex of the array: Math.floor(array.length / 2)
  - if (search term === array[middleIndex])
    => return middleIndex + indexTracker
  - else if (search term < array[middleIndex])
    => assign the array copy to arraycopy.slice(0, middleIndex)
  - else (this is the case where the search term > array[middleIndex]
    => arrayCopy - arrayCopy.slice(middleIndex)
    => indexTracker += (middleIndex + 1)
  -
- outside of loop
- return -1


*/

// Code

function binarySearch(array, term) {
  let arrayCopy = array.slice();
  let indexTracker = 0;
  
  while (arrayCopy.length > 0) {
    let midIndex = Math.floor(arrayCopy.length / 2);
    
    if (term === arrayCopy[midIndex]) {
      return midIndex + indexTracker;
    } else if (term < arrayCopy[midIndex]) {
      arrayCopy = arrayCopy.slice(0, midIndex);
    } else {
      arrayCopy = arrayCopy.slice(midIndex);
      indexTracker += midIndex;
      if (arrayCopy.length === 1 && term > arrayCopy[0]) {
        break;
      }
    }
  }
  
  return -1;
}

const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];

console.log(binarySearch(yellowPages, 'Pizzeria'));
console.log(binarySearch(yellowPages, 'Apple Store'));
console.log(binarySearch([3, 5, 7, 11, 23, 45, 65, 89, 102], 2));
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));