//String Methods
let sampleString = " Hello, World! ";

// Length of the string
console.log("Length:", sampleString.length); // Outputs: 15

// Convert to uppercase
console.log(toUpperCase(sampleString))  // Outputs: " HELLO, WORLD! "

// Convert to lowercase
console.log(toLowerCase(sampleString))  // Outputs: " hello, world! "

// Trim whitespace from both ends
console.log(sampleString.trim()) // Outputs: "Hello, World!"

// Access character at a specific index
console.log("Character at index 7:", sampleString.charAt(7)); // Outputs: "W"

// Find the index of a substring
console.log("Index of 'World':", sampleString.indexOf("World")); // Outputs: 8

// Replace a substring with another substring
console.log(sampleString.replace('World' , 'Universe')) // Outputs: " Hello, Universe! "

// Extract a substring
console.log("Substring (7, 12):", sampleString.substring(7, 12)); // Outputs: "World"

// Split the string into an array of substrings
let StringArray = sampleString.trim().split(", ");
console.log("Split by ', ':", StringArray); // Outputs: ["Hello", "World!"]

// Check if the string includes a substring
console.log(sampleString.includes("Universe")) // Outputs: false
console.log(sampleString.includes("World")) // Outputs: true

// Check if the string starts with a specific substring
console.log(sampleString.startsWith(" Hello")) // Outputs: true
console.log(sampleString.startsWith("World")) // Outputs: false

// Check if the string ends with a specific substring
console.log(sampleString.endsWith("! ")) // Outputs: true
console.log(sampleString.endsWith("World")) // Outputs: false

// Note: Strings in JavaScript are immutable, meaning that methods like toUpperCase(), toLowerCase(), trim(), and replace() return new strings and do not modify the original string.

//What is the relationship between null and undefined?
// null is an assignment value that represents no value or no object.
let emptyValue = null;
console.log("Empty Value:", emptyValue); // Outputs: null
console.log("Type of emptyValue:", typeof emptyValue); // Outputs: "object" (this is a known quirk in JavaScript)
// undefined means a variable has been declared but has not yet been assigned a value.
let notAssigned;
console.log("Not Assigned:", notAssigned);
console.log("Type of notAssigned:", typeof notAssigned); // Outputs: "undefined"
// Both null and undefined represent the absence of a value, but they are used in different contexts. null is explicitly set by the programmer to indicate "no value", while undefined is the default state of a variable that has not been assigned a value.

//What is the difference between single, double, and backtick quotes for strings?
// Single and double quotes are functionally equivalent in JavaScript. You can use either to define a string.
let singleQuoteString = 'Hello, World!';
let doubleQuoteString = "Hello, World!";
console.log(singleQuoteString === doubleQuoteString); // Outputs: true

// Backticks (``) are used for template literals, which allow for multi-line strings and string interpolation (embedding expressions).
let name = "Alice";
let backtickString = `Hello, ${name}! Welcome to JavaScript.`;
console.log(backtickString); // Outputs: "Hello, Alice! Welcome to JavaScript."