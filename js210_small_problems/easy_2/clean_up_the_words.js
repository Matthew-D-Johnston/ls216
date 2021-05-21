"use strict";

// function cleanUp(string) {
//   let cleaned = string.replace(/[^a-z]/gi, ' ');
//   let stripped = '';

//   for (let index = 0; index < cleaned.length; index += 1) {
//     if (cleaned[index] === ' ' && cleaned[index + 1] === ' ') {
//       continue;
//     }
    
//     stripped += cleaned[index];
//   }

//   return stripped;
// }

// Or

function cleanUp(string) {
  return string.replace(/[^a-z]+/gi, ' ');
}

console.log(cleanUp("---what's my +*& line?") === " what s my line ");
console.log(cleanUp("My  name is--* Matty*= Yahoo!"));
