"use strict";

/*

Validate Phone Numbers
Write a function that returns true if the phone number is in a valid format. Valid formats are as follows:

With Country Code  Without Country Code
+1-892-445-7663  892-445-7663
1-892-445-7663  (892) 445-7663
1 (892) 445-7663  892.567.8901
1.892.567.8901  1/892/567/8901
1 892 567 8901  892/567/8901
18925678901  892 567 8901
Examples
validate("578-332-1114") ➞ true

validate("57-332-1114") ➞ false

validate("577 332  1114") ➞ false
// More than one space in between digits clusters.

validate("57 332 1114") ➞ false
// Unacceptable digit cluster length.

validate("157%332-1114") ➞ false
// Unacceptable delimiter.
Notes
The country code will always be +1 or 1.
Each phone number will contain either 10 or 11 digits (depending on whether the country code exists).
There must either be exactly one space, a delimiter, or no space at all between the digit clusters.
You do not have to worry about extensions.

Problem:
Given a phone number, check to see if it is in a valid format.

Input: a string of characters that likely resembles a valid phone number
Output: boolean indicating whether the input is a valid phone number or not

Definitions/Rules:
- phone number will contain 10 or 11 digits, depending on whether the country code exists
- must be exactly one space, a delimiter, or no space at all between digit clusters
- do not worry about extensions
- valid delimiters:
  - " (" and ") " => \s( and )\s
  - " " => \s
  - "-" => -
  - "." => \.
  - "/" => \/
- valid country code:
  - "+1" or "1" or "" => (+1|1)?
  

Mental Model:
Take a given string of characters. Test it against some regex to see if it is valid or not.

Examples / Test Cases:

With Country Code  Without Country Code
+1-892-445-7663  892-445-7663
1-892-445-7663  (892) 445-7663
1 (892) 445-7663  892.567.8901
1.892.567.8901  1/892/567/8901
1 892 567 8901  892/567/8901
18925678901  892 567 8901
Examples
validate("578-332-1114") ➞ true

validate("57-332-1114") ➞ false

validate("577 332  1114") ➞ false
// More than one space in between digits clusters.

validate("57 332 1114") ➞ false
// Unacceptable digit cluster length.

validate("157%332-1114") ➞ false
// Unacceptable delimiter.

Data Structure:
Input: string
Output: boolean
Intermediate:
- test with regex

Algorithm:
- the main problem is to find a regex that will cover all of the possible valid numbers
  and invalidate all of the numbers that do not fit the criteria
- for the first part of whether there is a country code:
  - (\+1|1)?
- this is followed by a delimiter or simply a digit
  - (-|\s\(|\.|\s|\/)?
- this is followed by three digits
  - \d{3}
- then another delimiter
  - (-|\)\s|\.|\s|\/)?
- then another three digits
  - \d{3}
- then another delimiter
  - (-|\.|\s|\/)?
- then four digits
  - \d{4}

- use the test regex method, /regex/.test(string)
*/

// Code

function validate(phoneNumber) {
  return /^(\+1|1|\()?(-|\s\(|\.|\s|\/)?\d{3}(-|\)\s|\.|\s|\/)?\d{3}(-|\.|\s|\/)?\d{4}/.test(phoneNumber);
}


console.log(validate("578-332-1114") === true);
console.log(validate("57-332-1114") === false);
console.log(validate("577 332  1114") === false);
console.log(validate("57 332 1114") === false);
console.log(validate("157%332-1114") === false);
console.log(validate("+1-892-445-7663") === true);
console.log(validate("892-445-7663") === true);
console.log(validate("1-892-445-7663") === true);
console.log(validate("(892) 445-7663") === true);
console.log(validate("1 (892) 445-7663") === true);
console.log(validate("892.567.8901") === true);
console.log(validate("1.892.567.8901") === true);
console.log(validate("1/892/567/8901") === true);
console.log(validate("1 892 567 8901") === true);
console.log(validate("892/567/8901") === true);
console.log(validate("18925678901") === true);
console.log(validate("892 567 8901") === true);
