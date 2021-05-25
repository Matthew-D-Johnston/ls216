"use strict";

function countOccurrences(array) {
  let occurrences = {};

  array.forEach(elem => {
    occurrences[elem] = occurrences[elem] || 0;
    occurrences[elem] += 1;
  });

  Object.keys(occurrences).forEach(elem => {
    console.log(`${elem} => ${occurrences[elem]}`);
  });
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);
