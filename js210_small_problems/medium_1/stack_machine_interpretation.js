"use strict";

/*

A stack is a list of values that grows and shrinks dynamically. A stack may be implemented as an Array that uses two Array methods: Array.prototype.push and Array.prototype.pop.

A stack-and-register programming language is a language that uses a stack of values. Each operation in the language operates on a register, which can be thought of as the current value. The register is not part of the stack. An operation that requires two values pops the topmost item from the stack (i.e., the operation removes the most recently pushed value from the stack), operates on the popped value and the register value, and stores the result back in the register.

Consider a MULT operation in a stack-and-register language. It removes the value from the stack, multiplies the removed stack value with the register value, then stores the result back in the register. For example, if we start with a stack of [3, 6, 4] (where 4 is the topmost item in the stack) and a register value of 7, the MULT operation mutates the stack to [3, 6] (the 4 is removed), and the result of the multiplication, 28, is left in the register. If we do another MULT at this point, the stack is mutated to [3], and the register is left with the value 168.

Write a function that implements a miniature stack-and-register-based programming language that has the following commands (also called operations or tokens):

n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
POP : Remove the topmost item from the stack and place it in the register.
PRINT : Print the register value.
All operations are integer operations (which is only important with DIV and REMAINDER).

Programs will be supplied to your language function via a string argument. Your function may assume that all arguments are valid programs — i.e., they will not do anything like trying to pop a non-existent value from the stack, and they will not contain any unknown tokens.

Initialize the stack and register to the values [] and 0, respectively.

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)


Problem:
Create a stack-and-register function that will take a program in the version of a string argument and follow the instructions of the program.

Input: string of commands
Output: function will perform commands and print anything to the console if the Print command is used.

Definitions/Rules:
- stack: list of values
- register: current value
- n: integer values stored in the register
- PUSH: push register value onto stack
- ADD: pop a value from stack and add to register value; store value in register.
- SUB: pop value from stack and substract from register value; store in register.
- MULT: pop value from stack and multiply with register value; store in register.
- DIV: pop value from stack and divide register value by popped value; store in     
       register.
- REMAINDER: pop value from stack and divide register value by popped value, storing 
             remainder in register.
- POP: remove topmost value from stack and place in register.
- PRINT: log current register value to console.
- all operations are integer operations
- stack is mutated on all operations except PRINT

Mental Model:
Take a program input as a string of commands. Parse the string into individual commands. Iterate over the different commands and operate on the register and stack according to the rules for each command. 

Data Structure:

Input: string
Output: modify register and stack values
        print output if PRINT command

Intermediate Data Structures:
- register value: integer
- stack: array
- parse command string into array of individual commands

Algorithm:
- create a register variable
- create a stack variable
- create a commands variable that is assigned to an array of commands from input string
- iterate over the commands.
- use conditional if/else statements to determine which operations to perform
- 


*/


// Code

function minilang(program) {
  let register = 0;
  let stack = [];
  let commands = program.split(' ');
  
  commands.forEach(command => {
    if (command === 'PUSH') {
      stack.push(register);
    } else if (command === 'ADD') {
      register += stack.pop(); 
    } else if (command === 'SUB') {
      register -= stack.pop();
    } else if (command === 'MULT') {
      register *= stack.pop();
    } else if (command === 'DIV') {
      register = Math.round(register / stack.pop());
    } else if (command === 'REMAINDER') {
      register %= stack.pop();
    } else if (command === 'POP') {
      register = stack.pop();
    } else if (command === 'PRINT') {
      console.log(register);
    } else {
      register = Number(command);
    }
  });
}

minilang('PRINT');
minilang('5 PUSH 3 MULT PRINT');
minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
minilang('5 PUSH POP PRINT');
minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
minilang('3 PUSH PUSH 7 DIV MULT PRINT');
minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
minilang('-3 PUSH 5 SUB PRINT');
minilang('6 PUSH');
