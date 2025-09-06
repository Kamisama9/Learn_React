// Conditonal Statements
let age = 18;

// If-Else Statement
if (age < 18) {
    console.log("You are a minor.");
}
else if (age === 18) {
    console.log("You are just an adult.");
}       
else {
    console.log("You are an adult.");
}
// In this example, the if-else statement checks the value of age and prints a message based on the condition that is true.

// Switch Statement
let day = 3;
let dayName;
switch (day) {
    case 1:
        dayName = "Monday";
        break;  
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5: 
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}
console.log("Day Name:", dayName); // Outputs: "Day Name: Wednesday"
// The switch statement evaluates the expression (day) and executes the corresponding case block. If none of the cases match, it executes the default block.


// Ternary Operator
let isMember = true;
let discount = isMember ? 0.1 : 0;
console.log("Discount:", discount); // Outputs: 0.1
// The ternary operator is a shorthand for an if-else statement. It assigns a value to discount based on the condition isMember. If isMember is true, discount is 0.1; otherwise, it is 0.

// You can run this code in the browser's console to see the output and understand how conditional statements work in JavaScript.