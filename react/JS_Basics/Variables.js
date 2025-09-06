console.log("Hello, World!")

// Right-click on the blank webpage.
// Click on “Inspect” or “Inspect Element” to open the Developer Tools.
// Find and select the “Console” tab, where you should see the output of our console.log statement.

// Variables
let myVariable = 10; // Declare a variable named myVariable and assign it the value 10
console.log(myVariable); // Output the value of myVariable to the console
myVariable = 20; // Change the value of myVariable to 20
console.log(myVariable); // Output the new value of myVariable to the console

// Naming Conventions
let _myVariable2 = 15; // Valid variable name starting with an underscore
let $myVariable3 = 25; // Valid variable name starting with a dollar sign
// let 2myVariable = 30; // Invalid variable name starting with a number (uncommenting this line will cause an error)
//Note: Variable names are case-sensitive. myVariable and MyVariable would be considered different variables.

// Constants
const myConstant = 30; // Declare a constant named myConstant and assign it the value 30
console.log(myConstant); // Output the value of myConstant to the console
// myConstant = 40; // This will cause an error because constants cannot be reassigned
// Uncommenting the line above will demonstrate that constants cannot be changed.


// Old way of declaring variables (not recommended in modern JS)
//Var is function-scoped and can lead to unexpected behaviors, so it's better to use let and const.
var oldVariable = 50; // Declare a variable using var (not recommended in modern JS)
console.log(oldVariable); // Output the value of oldVariable to the console 
oldVariable = 60; // Change the value of oldVariable to 60
console.log(oldVariable); // Output the new value of oldVariable to the console
// Note: It's generally better to use let and const instead of var in modern JavaScript.
// let, which we can re-assign.
// const which we can’t re-assign and will throw an error if we try


//What’s the difference between == and ===?
// == checks for value equality (after type coercion)
// === checks for both value and type equality (no type coercion)

// Example:
let num = 5;    
let str = "5";
console.log(num == str);
console.log(num === str);
// In the first comparison (num == str), JavaScript converts the string "5" to the number 5 before comparing, so it returns true.
// In the second comparison (num === str), JavaScript checks both value and type. Since num is a number and str is a string, it returns false.


//When would you receive a NaN result?
let invalidOperation = "hello" / 2; // Trying to divide a string by a number
console.log(invalidOperation); // Output: NaN (Not a Number)
// NaN is a special value in JavaScript that indicates an invalid number operation, such as dividing a string by a number or performing arithmetic with undefined values.


//What is operator precedence and how is it handled in JS?
let result = 3 + 5 * 2; // Multiplication has higher precedence than addition
console.log(result); // Output: 13 (5 * 2 is calculated first, then 3 is added)
// Operator precedence determines the order in which operations are performed in an expression. In this case, multiplication (*) has higher precedence than addition (+), so it is performed first.


//What’s the difference between prefixing and postfixing increment/decrement operators?
let a = 5;
let prefixIncrement = ++a;  
console.log(prefixIncrement); // Output: 6 (a is incremented before being assigned to prefixIncrement)
let b = 5;
let postfixIncrement = b++; 
console.log(postfixIncrement); // Output: 5 (b is assigned to postfixIncrement before being incremented)
console.log(b); // Output: 6 (b is now incremented to 6)
// The prefix operator (++a) increments the value before it is used in the expression, while the postfix operator (b++) uses the current value in the expression and then increments it afterward.  



// You can run this code in the browser's console to see the output and understand how variables work in JavaScript.



