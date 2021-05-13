##### Courses > LS216 Assessment: Computational Thinking and Problem Solving > Start the Assessment

---

## Interview Study Guide

In this interview, you will be expected to follow the process we covered in the last lesson, "A General Problem Solving Approach," to solve a coding challenge. You will have 40 minutes to answer it.  

- Understand the problem
- Examples/test cases
- Data structure and algorithms
- Verify your algorithm against the examples
- Start coding

---

### Topics

---

#### Language syntax, types, and flow control

##### Data Types

JavaScript has the following primitive data types:

- number
- boolean
- string
- null
- undefined
- symbols (ES6) - not discussed in this course
- big integers (ES9) - not discussed in this course

and one compound data type:

- object

##### Flow Control

* `if` conditional statements
* loops

##### Truthy/Falsy

Recall that only the following six values are **falsy**:

- `false`
- `null`
- `undefined`
- `0`
- `NaN`
- `''`

All other values are **truthy**.

---

#### Functions, variables, and scopes

JavaScript uses lexical scope. This means that it determines the scope of a variable by the structure of the program.



---

#### Arrays and objects

##### Arrays

* `[]`

##### Objects

* `{}`

---

#### Language built-in methods on String and Array

`splice(start, deleteCount, item1, item2, itemN)`

* `start`: the index at which to start changing the array.
* `deleteCount` (optional): an integer indicating the number of elements in the array to remove from the `start`.
* `item1, item2, ...` (optional): the elements to add to the array, beginning from `start`; if you do not specify any elements, `splice()` will only remove elements from the array.





---

#### Mutability of values and objects

##### strings

* primitive strings are immutable.

##### numbers

* immutable

* An example:

  ```javascript
  let a = 7;
  
  function myValue(b) {
    b += 10;
  }
  
  myValue(a);
  console.log(a)
  => 7						// pass by value
  ```

##### arrays

* mutable

* An example:

  ```javascript
  let a = [1, 2, 3];
  
  function myValue(b) {
    b[2] += 7;
  }
  
  myValue(a);
  console.log(a);
  => [1, 2, 10]						// pass by reference
  ```

##### objects

* mutable





---

#### Pure functions and side effects

##### Side Effects

A function call that performs any of the following actions is said to have side effects:

1. It reassigns any non-local variable.
2. It mutates the value of any object referenced by a non-local variable.
3. It reads from or writes to any data entity (files, network connections, etc.) that is non-local to your program.
4. It raises an exception.
5. It calls another function that has side effects.

##### Pure Function

**Pure functions** are functions that:

1. Have no side effects.
2. Given the same set of arguments, the function always returns the same value during the function's lifetime. This rule implies that the return value of a pure function depends solely on its arguments. function's lifetime.

A function's **lifetime** begins when the function is created. It ends when the function is destroyed. That may sound a little strange, but it isn't. Nested functions, for instance, have a lifetime that spans a single execution of the outer function. Furthermore, nested functions are created every time the outer function is invoked. Each instantiation of the nested function is separate. Even if the function looks identical, it can produce different results for each instantiation -- that does not change its status as a pure function.  

A big benefit of pure functions is that the consistent return value and lack of side effects make them easy to test. Since they are effectively isolated from the rest of the program, you don't have to worry about what happens elsewhere. Nothing outside of the function can have any effect on it. Nothing in the function can have any impact on the rest of the program. This is very convenient and helpful when testing.  

As with side effects, it's common to speak of functions as being pure or impure. However, it's more correct to talk about whether a specific function **call** is pure or impure. A function that is pure with one set of arguments could be impure with another. It all depends on whether the function call has side effects and whether using those arguments produces consistent return values.  

Nevertheless, we will usually talk about pure functions as a general kind of function. If the function is always pure when used as intended, then we say the function itself is pure. In practice, functions that are pure are always pure regardless of what arguments are passed in.

---

#### Regular expressions (what's covered in our book)

#### Concatenation

You can *concatenate* two or more patterns into a new pattern that matches each of the originals in sequence. The regex `/cat/`, for instance, consists of the concatenation of the `c`, `a`, and `t` patterns, and matches any string that contains a `c` followed by an `a` followed by a `t`.

#### Alternation

In this section, we introduce alternation, a simple way to construct a regex that matches one of several sub-patterns. In its most basic form, you write two or more patterns separated by pipe (`|`) characters, and then surround the entire expression in parentheses. For example, try the regex `/(cat|dog|rabbit)/` with the following strings:  

```
The lazy cat.
The dog barks.
Down the rabbit hole.
The lazy cat, chased by the barking dog,
dives down the rabbit hole.
catalog
The Yellow Dog
My bearded dragon's name is Darwin
```

#### Character Classes

**Character classes** are patterns that let you specify a set of characters that you want to match.  Character class patterns use a list of characters between square brackets, e.g., `/[abc]/`. Such a pattern matches a single occurrence of any of the characters between the brackets. Try these regex:

```
/[FX]/
/[e+]/
/[abAB]/
/[*+]/
```

Character classes also come in handy when you need to check for uppercase and lowercase letters, but can't use the `i` flag to make the entire regex case insensitive. For example, `/[Hh]oover/` matches `Hoover` or `hoover`, but not `HOOVER`.

