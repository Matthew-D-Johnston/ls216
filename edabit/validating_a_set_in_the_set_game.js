"use strict";

/* 

Validating a Set in the Set Game

In the game Set, three cards form a set if each of the cards are identical or completely different for each of the four properties. All three cards must:

Have the same color or different colors.
Have the same number or different numbers.
Have the same shades or different shades.
Have the same shape or different shapes.
The four properties are:

Colors: red, purple, green
Numbers: 1, 2, 3
Shades: empty, lined, full
Shapes: squiggle, oval, diamond
Here, a set is represented by an array containing three cards. Each card is represented by an object of properties and values. Write a function that determines whether three cards constitute a valid set.

Here is an example of a set:

[
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]

// "Same" properties: color
// "Different" properties: numbers, shading and shapes
The following is not a set:

[
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "purple", number: 3, shade: "full", shape: "oval" }
]

// Colors are not all identical, but not all different.
Examples
isSet([
  { color: "green", number: 1, shade: "empty", shape: "squiggle" },
  { color: "green", number: 2, shade: "empty", shape: "diamond" },
  { color: "green", number: 3, shade: "empty", shape: "oval" }
]) ➞ true

isSet([
  { color: "purple", number: 1, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 1, shade: "full", shape: "oval" }
]) ➞ true

isSet([
  { color: "purple", number: 3, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]) ➞ false
Notes
A set cannot have 2/3 cards having the same property. Either all must share that property, or none will share that particular property.
You can play Set by checking the Resources tab.

Problem:
Given an array that contains three object elements each representing a card, determine whether those three cards form a valid set in the Set game.

Input: an array that contains three objects, which each represent a card having four properties
Output: true or false depending on whether the three cards form a valid set

Definitions/Rules:
- each input has three cards
- each card has four properties: color, number, shade, shape
- each property has three possibilities
- valid set:
  - four each property, the three cards have the exact same property value or a unique 
    property value.
  - in other words for each property, there cannot exist two cards with identical   
    property values and a third card with a different property; if this is the case for 
    any of the properties, then we know the set is not valid.

Mental Model:
Given an array containing the three cards (i.e. objects), consider each of the four properties. Compare the values of each of the four properties for each of three cards. If for any property, we find two cards with the same property value and one that is different, we know that we have an invalid set and we can return false. If we go through each of the four properties and do not come across this condition, then we have a valid set and can return true.

Examples / Test Cases:

isSet([
  { color: "green", number: 1, shade: "empty", shape: "squiggle" },
  { color: "green", number: 2, shade: "empty", shape: "diamond" },
  { color: "green", number: 3, shade: "empty", shape: "oval" }
]) ➞ true

isSet([
  { color: "purple", number: 1, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 1, shade: "full", shape: "oval" }
]) ➞ true

isSet([
  { color: "purple", number: 3, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]) ➞ false

Data Structure:
Input: an array containing three elements, which are objects having four properties
Output: a boolean
Intermediate:
- the property values are strings

Algorithm:
- for each of the properties, we need to extract the values for each card.
- that is we will have three separate values to compare
- we need a function that will determine whether two are the same and one is different
- if that function returns true then we know we have an invalid set.
- create an invalidValues(value1, value2, value3) function
  - if value1 === value2 === value3 => false
  - if value1 !== value2 && value1 !== value3 and value2 !== value3 => false
  - otherwise true
- for the main isSet function
- we need to iterate over each object and extract the property values for each property
- we can extract them to four different arrays the names of the properties:
  - colors
  - numbers
  - shades
  - shapes
- each one of these arrays will have three elements
- to implement the iteration, we can use a forEach method
- then for each object, we push the value corresponding to the property to appropriate array.
- once we have our property arrays we can pass each one to our invalidValues function,
- and if that function returns true, then we can immediately return false.
- if the invalidValues function returns false for each of the four property arrays,
- we can return true

*/

// Code

function isSet(cards) {
  let colors = [];
  let numbers = [];
  let shades = [];
  let shapes = [];
  
  cards.forEach(card => {
    colors.push(card.color);
    numbers.push(card.number);
    shades.push(card.shade);
    shapes.push(card.shape);
  });
  
  if (invalidValues(...colors)) {
    return false;
  } else if (invalidValues(...numbers)) {
    return false;
  } else if (invalidValues(...shades)) {
    return false;
  } else if (invalidValues(...shapes)) {
    return false;
  } else {
    return true;
  }
}

function invalidValues(value1, value2, value3) {
  if (value1 === value2 && value2 === value3) {
    return false;
  } else if (value1 !== value2 && value1 !== value3 && value2 !== value3) {
    return false;
  } else {
    return true;
  }
}

console.log(isSet([
  { color: "green", number: 1, shade: "empty", shape: "squiggle" },
  { color: "green", number: 2, shade: "empty", shape: "diamond" },
  { color: "green", number: 3, shade: "empty", shape: "oval" }
]));

console.log(isSet([
  { color: "purple", number: 1, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 1, shade: "full", shape: "oval" }
]));

console.log(isSet([
  { color: "purple", number: 3, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]));