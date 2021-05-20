"use strict";

function triangle(n) {
  let spaces = n - 1;
  let stars = 1;

  while (spaces >= 0) {
    console.log(' '.repeat(spaces) + '*'.repeat(stars));
    spaces -= 1;
    stars += 1;
  }
}

triangle(5);
triangle(9);
