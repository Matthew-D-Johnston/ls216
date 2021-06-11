"use strict";

/*

Car Park Exit

You are stuck in a multi-storey car parking lot. Your task is to exit the carpark using only the staircases. Exit is always at the bottom right of the ground floor.

Create a function that takes a two-dimensional array where:

Free carparking spaces are represented by a 0
Staircases are represented by a 1
Your starting position is represented by a 2 and can be at any level of the car park.
Exit is always at the bottom right of the ground floor.
You must use the staircases (1) to go down a level.
Each floor will have only one staircase apart from the ground floor which will not have any staircases.
... and returns an array of the quickest route out of the carpark.

arr = [
  [1, 0, 0, 0, 2],
  [0, 0, 0, 0, 0]
]

// Starting from 2, move to left 4 times = "L4"
// Go down from stairs 1 step = "D1"
// Move to right 4 times to exit from right bottom corner = "R4"

result = ["L4", "D1", "R4"]
See the below examples to better understand:

Examples
parking_exit([
  [1, 0, 0, 0, 2],
  [0, 0, 0, 0, 0]
]) ➞ ["L4", "D1", "R4"]
parking_exit([
  [2, 0, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0]
]) ➞ ["R3", "D2", "R1"]

// Starting from 2, move to right 3 times = "R3"
// Go down from stairs 2 steps = "D2"
// Move to right 1 step to exit from right bottom corner = "R1"
parking_exit([[0, 0, 0, 0, 2]]) ➞ []
// You are already at right bottom corner.
Notes
N/A

Problem:
Given a two-dimensional array that represents a car park, find the quickest way out of the car park given an initial starting position.

Input: a two-dimensional array
Output: an array consisting of the various movements that must be taken to get out of the car park.

Definitions/Rules:
- carpark: an array of nested arrays whose elements are either 0, 1, or 2
- start position: this is represented by the number 2 (it is the initial position and
  therefore there should only be one 2 in the whole matrix).
- end position: this will always be to the far right of the ground floor; that means it
  can be represented by the last index of the main array and the last index of the last
  subarray; for an MxN matrix, the exit position will be given as matrix[m - 1][n - 1].
- parking spaces: given by the number 0; this must be traversed to get out of the car
  park, but other than that they do not serve much purpose.
- staircase: this is where one moves down a level/storey within the car park; it is
  represented by the number 1.
- moves are indicated by a letter signifiying the direction (e.g. "D" for down, "L" for 
  left, and "R" for right) and a number for the number of spaces traversed to get to
  either a staircase, or go down levels. Thus, "R3" represents three places to the
  right.
- 

Mental Model:
Identify the current starting and final destination position. If the starting position is the same as the final destination, then we do not need to move anywhere and can return an empty array. Otherwise, we need to identify where we need to move to. If we are not on the ground floor, then we need to move to the closest staircase. Find the position of that staircase and determine what direction needs to be traversed from the current position and how many spaces need to be traversed. Once this is determined, store the direction and number of spaces to traverse as a string in a moves array. Then move the current position and determine how many floors one is able to descend at a time. Once on the next floor, repeat the process. Do this until you get to the final destination position, that is the exit. Then return the moves array.

Examples / Test Cases:

parking_exit([
  [1, 0, 0, 0, 2],
  [0, 0, 0, 0, 0]
]) ➞ ["L4", "D1", "R4"]
parking_exit([
  [2, 0, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0]
]) ➞ ["R3", "D2", "R1"]

Data Structure:
Input: an array whose elements are arrays, the elements of which are numbers (either 0, 1, or 2)
Output: An array of strings.
Intermediate:
- strings
- numbers

Algorithm:
- create an exit variable and assign to an object with two properties: floor and aisle
  => floor will be equal to the length of the main array minus 1
  => aisle will be equal to the length of the subarrays minus 1
- create a start variable and assign to an object with two properties: floor and aisle
  => loop over the floors and aisles to find the number 2
  => whichever floor it is on, assign that to the start[floor] key, and whichever aisle
     it is on, assign that to the start[aisle] key.
- Check if the positions of the start and end are the same; if so, return [];
- Else...
- Start on the floor that matches start[floor];
- find the staircase and determine its aisle position
- Take the start aisle position and subtract the staircase aisle position:
  => if positive => we know we have to move to the left or "L"
  => if negative => we know we have to move to the right or "R"
  => assign either "L" or "R" to a move variable
  => take the absolute value of the difference and append that to the move variable.
  => push this string value to a moves array
  => take the current floor and aisle and assign to a current position variable.
- Now determine how many staircases to descend

*/

// Code

function parkingExit(carpark) {
  let exitFloor = carpark.length - 1;
  let exitAisle = carpark[0].length - 1;
  
  let currentFloor = findCurrentFloor(carpark, 2);
  let currentAisle = findCurrentAisle(carpark, currentFloor, 2);
  
  let moves = [];
  
  if (exitFloor === currentFloor && exitAisle === currentAisle) {
    return [];
  }
  
  while (!(exitFloor === currentFloor && exitAisle === currentAisle)) {
    if (currentFloor === exitFloor) {
      let aisleDifference = currentAisle - exitAisle;
      let moveMagnitude = Math.abs(aisleDifference);
      let move = 'R' + moveMagnitude;
      moves.push(move);
      currentAisle = exitAisle;
      break;
    } else {
      let staircaseAisle = carpark[currentFloor].indexOf(1);
      let aisleDifference = currentAisle - staircaseAisle;
      let moveMagnitude = Math.abs(aisleDifference);
      let move = '';
      if (aisleDifference < 0) {
        move = 'R' + String(moveMagnitude);
      } else {
        move = 'L' + String(moveMagnitude);
      }
      moves.push(move);
      currentAisle = staircaseAisle;
    }
    
    let floorMoveMagnitude = staircasesInAisle(carpark, currentFloor);
    moves.push('D' + String(floorMoveMagnitude));
    currentFloor += floorMoveMagnitude;
  }
  
  return moves;
}

function findCurrentFloor(carpark, identifier) {
  let currentFloor;
  
  for (let floor = 0; floor < carpark.length; floor += 1) {
    if (carpark[floor].includes(identifier)) {
      currentFloor = floor;
    }
  }
  
  return currentFloor;
}

function findCurrentAisle(carpark, floor, identifier) {
  let currentAisle;
  
  for (let aisle = 0; aisle < carpark[floor].length; aisle += 1) {
    if (carpark[floor][aisle] === identifier) {
      currentAisle = aisle;
    }
  }
  
  return currentAisle;
}

function staircasesInAisle(carpark, currentFloor) {
  let staircaseAisle = carpark[currentFloor].indexOf(1);
  let staircaseInSameAisle = 0;
  for (let floor = currentFloor; floor < carpark.length; floor += 1) {
    if (carpark[floor].indexOf(1) === staircaseAisle) {
      staircaseInSameAisle += 1;
    } else {
      break;
    }
  }
  
  return staircaseInSameAisle;
}

console.log(parkingExit([
  [1, 0, 0, 0, 2],
  [0, 0, 0, 0, 0]
]));

console.log(parkingExit([
  [2, 0, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0]
]));

console.log(parkingExit([[0, 2, 0, 0, 1], [0, 0, 0, 0, 1], [0, 0, 0, 0, 1], [0, 0, 0, 0, 0]]));

console.log(parkingExit([[1, 0, 0, 0, 2], [0, 0, 0, 0, 1], [1, 0, 0, 0, 0], [0, 0, 0, 0, 0]]));

console.log(parkingExit([[0, 0, 0, 0, 2]]));
