"use strict";

/* 

Let's build another program using madlibs. We made a similar program in the Easy exercises, but this time the requirements are a bit different.

Build a madlibs program that takes a text template as input, plugs in a selection of randomized nouns, verbs, adjectives, and adverbs into that text, and then returns it. You can build your lists of nouns, verbs, adjectives, and adverbs directly into your program. Your program should read this text and, for each line, place random words of the appropriate types into the text and return the result.

The challenge of this program isn't just about writing your solution—it's about choosing the structure of the text template. Choose the right way to structure your template and this problem becomes much easier. Consequently, this exercise is a bit more open-ended since the input is also something that you'll be defining.

Problem:
Define a text template. When this template is input to the program, the program will insert appropriate words in appropriate places within the template.

Input: a template
Output: the template with words filled in

Definitions/Rules:
- template: main body of text, but there will be certain words absent that need to be 
  filled in.
- lists of nouns, verbs, adjectives, and adverbs
- 

Mental Model:
Create a template of text that includes identifiers for the words that need to be replaced. The program will take the template and scan the text for these identifiers. The identifies will designate the type of word (i.e. noun, adjective, etc.). We will count each type of word that is necessary. Then for each type, we will replace the identifier in the template with a randomly selected word from our word lists of the appropriate type and do this for the number of identifiers that correspond to that type. 

Examples / Test Cases:

function madlibs(template) {
  // ...
}

// These examples use the following list of replacement texts:
adjectives: quick lazy sleepy noisy hungry
nouns: fox dog head leg tail cat
verbs: jumps lifts bites licks pats
adverbs: easily lazily noisily excitedly
------

madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

madlibs(template2);      // The "cat" "pats" the "cat"'s "head".

Data Structure:

Input: string (i.e. the template)
Output: string (the text template with appropriate words filled in)
Intermediate:
- word lists: arrays of strings
- create a separate function that replaces the words; it will take three arguments: 
  the template, the type of word to be replaced, and the number of words to be 
  replaced.
  
Algorithm:
- create words lists for each type: noun, adjective, verb, and adverb
- Structure of the Template:
  - "The **adjective** brown **noun** **adverb** **verb** ...."
  - the identifiers are placed between **..**
- make a copy of the template
- find the number of each type of word that needs replacing:
  - numberOfNouns = template.match(/\*\*noun\*\* /g);
  - do this for all types;
- Create a replaceWords function:
  - three arguments: template, wordType, numberOfType
  - create a string using string interpolation of the following structure:
    - identifier = `*(wordType)*`
  - then perform a loop that will run the number of times equal to the numberOfType
    variable.
  - in the loop randomly select a word from the apporiate list; this can be done with
    a switch statement, which we could make as another functunion.
    - function selectRandomWord(type)
    - switch (type):
      case 'adjective'
        return adjective[Math.floor(Math.random() * adjective.length)]
      same for the other types.
  - take the randomly selected word and use it with the following command:
    template.replace(identifier, randomWord);
  -
- Call the replaceWords function using the number of each type of word and do it for 
  each type of word;
- return the copy of the template


*/

// Code

const Adjectives = ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'];
const Nouns = ['fox', 'dog', 'head', 'leg', 'tail', 'cat'];
const Verbs = ['jumps', 'lifts', 'bites', 'licks', 'pats'];
const Adverbs = ['easily', 'lazily', 'noisily', 'excitedly'];

function selectRandomWord(type) {
  switch (type) {
    case 'adjective':
      return Adjectives[Math.floor(Math.random() * Adjectives.length)];
    case 'noun':
      return Nouns[Math.floor(Math.random() * Nouns.length)];
    case 'verb':
      return Verbs[Math.floor(Math.random() * Verbs.length)];
    case 'adverb':
      return Adverbs[Math.floor(Math.random() * Adverbs.length)];
    default:
      console.log('Error. Please select an appropriate word type');  
  }
}

function replaceWords(template, wordType, numberOfType) {
  let identifier = `**${wordType}**`;
  
  for (let index = 1; index <= numberOfType; index += 1) {
    let randomWord = selectRandomWord(wordType);
    template = template.replace(identifier, randomWord);
  }
  
  return template;
}

function madlibs(template) {
  let adjectiveIdentifiers = template.match(/\*\*adjective\*\*/g) || [];
  let nounIdentifiers = template.match(/\*\*noun\*\*/g) || [];
  let verbIdentifiers = template.match(/\*\*verb\*\*/g) || [];
  let adverbIdentifiers = template.match(/\*\*adverb\*\*/g) || [];
  
  let numberOfAdjectives = adjectiveIdentifiers.length;
  let numberOfNouns = nounIdentifiers.length;
  let numberOfVerbs = verbIdentifiers.length;
  let numberOfAdverbs = adverbIdentifiers.length;
  
  template = replaceWords(template, 'adjective', numberOfAdjectives);
  template = replaceWords(template, 'noun', numberOfNouns);
  template = replaceWords(template, 'verb', numberOfVerbs);
  template = replaceWords(template, 'adverb', numberOfAdverbs);
  
  return template;
}

let template1 = "The **adjective** brown **noun** **adverb** **verb** the **adjective** yellow **noun**, who **adverb** **verb** his **noun** and looks around."
let template2 = "The **noun** **verb** the **noun**'s **noun**."

console.log(madlibs(template1));
console.log(madlibs(template2));