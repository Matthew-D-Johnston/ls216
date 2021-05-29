"use strict";

function letterCaseCount(string) {
  let caseCounts = { lowercase: 0, uppercase: 0, neither: 0 };

  string.split('').forEach(char => {
    if (/[a-z]/.test(char)) {
      caseCounts.lowercase += 1;
    } else if (/[A-Z]/.test(char)) {
      caseCounts.uppercase += 1;
    } else {
      caseCounts.neither += 1;
    }
  });

  return caseCounts;
}

console.log(letterCaseCount('abCdef 123'));
console.log(letterCaseCount('AbCd +Ef'));
console.log(letterCaseCount('123'));
console.log(letterCaseCount(''));
