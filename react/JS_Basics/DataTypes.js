//DataTypes
//JavaScript has several data types, which can be categorized into two main types: Primitive and Non-Primitive (or Reference) types.
//Primitive Data Types: These include String, Number, Boolean, Undefined, Null, Symbol, and BigInt.
//Non-Primitive Data Types: These include Objects and Arrays (which are a type of object).


//Static vs Dynamic Typing
//Static Typing: In statically typed languages (like Java or C++), you must declare the data type of a variable when you create it, and that type cannot change.
//Dynamic Typing: In dynamically typed languages (like JavaScript or Python), you do not need to declare the data type of a variable. The type is determined automatically based on the value assigned to the variable, and it can change over time.


//String
let name = "John Doe";
console.log("Name:", name);
console.log("Type of name:", typeof name);

//Number
let age = 30;
console.log("Age:", age);
console.log("Type of age:", typeof age);

//Boolean
let isStudent = false;
console.log("Is Student:", isStudent);
console.log("Type of isStudent:", typeof isStudent);

//Undefined
let address;
console.log("Address:", address);
console.log("Type of address:", typeof address);

//Null
let phoneNumber = null;
console.log("Phone Number:", phoneNumber);
console.log("Type of phoneNumber:", typeof phoneNumber); // Note: typeof null returns "object" due to a historical bug in JavaScript

//Object    --> Most Used Data Type in JS 
let person = {
    name: "Alice",
    age: 25
};
console.log("Person:", person);
console.log("Type of person:", typeof person);

//Array (which is a type of object)
let colors = ["red", "green", "blue"];
console.log("Colors:", colors);
console.log("Type of colors:", typeof colors); // Note: typeof array returns "object"

//Symbol (introduced in ES6)
let uniqueId = Symbol("id");
console.log("Unique ID:", uniqueId);
console.log("Type of uniqueId:", typeof uniqueId);

//BigInt (introduced in ES2020)
let bigNumber = BigInt(9007199254741991);
console.log("Big Number:", bigNumber);
console.log("Type of bigNumber:", typeof bigNumber);

//Type Conversion  --> means converting a value from one data type to another
//String to Number
let numString = "100";
let convertedNumber = Number(numString);
console.log("Converted Number:", convertedNumber);

// There is also parseInt and parseFloat for more specific conversions
let intString = "100px";
let parsedInt = parseInt(intString);
console.log("Parsed Integer:", parsedInt);
let floatString = "10.5px"; 
let parsedFloat = parseFloat(floatString);
console.log("Parsed Float:", parsedFloat);

//Number to String
let numValue = 200;
let convertedString = String(numValue);
console.log("Converted String:", convertedString); //outputs "200"

//Boolean to String
let boolValue = true;
let boolToString = String(boolValue);
console.log("Boolean to String:", boolToString); //outputs "true"

//String to Boolean
let emptyString = "";
let nonEmptyString = "Hello";
console.log("Empty String to Boolean:", Boolean(emptyString)); //outputs false
console.log("Non-Empty String to Boolean:", Boolean(nonEmptyString)); //outputs true

//Number to Boolean             
let zero = 0;
let nonZero = 42;
console.log("Zero to Boolean:", Boolean(zero)); //outputs false
console.log("Non-Zero to Boolean:", Boolean(nonZero)); //outputs true

//Boolean to Number
let trueValue = true;
let falseValue = false;
console.log("True to Number:", Number(trueValue)); //outputs 1
console.log("False to Number:", Number(falseValue)); //outputs 0

//Null to Number
let nullValue = null;
console.log("Null to Number:", Number(nullValue)); // Outputs 0

//Undefined to Number
let undefinedValue;
console.log("Undefined to Number:", Number(undefinedValue)); // Outputs NaN

//Character Data Type
// There is no character data type in JavaScript. A single character is simply a string of length 1.

let char = 'A'; // This is a string, not a character data type
console.log("Character:", char);
console.log("Type of char:", typeof char); // Outputs "string"







