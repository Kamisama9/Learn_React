//Conditional Rendering in React
//Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.

//1. Element Variables
//You can use variables to store elements. This can help you conditionally render a part of the component while the rest of the output doesn’t change.
//2. Ternary Conditional Operator
//In JavaScript, the conditional operator is the only JavaScript operator that takes three operands. This operator is frequently used as an alternative to an if...else statement.
//3. Short-Circuit Operator
//You may embed any expressions in JSX by wrapping them in curly braces. This includes the JavaScript logical && operator. {}
// Example: {condition && <SomeComponent />}
//4. Preventing Component from Rendering
//You can prevent a component from rendering by returning null instead of its render output.
//Example:
// function WarningBanner(props) {
//   if (!props.warn) {
//     return null;
//   }
//5. Using IIFE (Immediately Invoked Function Expression)
//You can use an IIFE to conditionally render JSX inside a component.
//Example:
// {(() => {
//   if (condition) {
//     return <ComponentA />;
//   } else {
//     return <ComponentB />;
//   }
// })()}

//Example of Conditional Rendering
import React, { useState } from 'react';
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
    return (
        <div>
            {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>}
        </div>
    );
}
export default Greeting;

//Usage
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Greeting from './Greeting';
// ReactDOM.render(
//   // Try changing to isLoggedIn={false} to see the other message
//   <Greeting isLoggedIn={true} />,
//   document.getElementById('root')
// );


// While using conditional rendering in React, don't use numbers with && operator because 0 is considered as false in JavaScript and it will not render the component. Instead, use Boolean values like true or false.
// Nested Ternary Operators can make the code hard to read. It's better to use if-else statements or switch cases for complex conditions.
// Example of nested ternary operator (not recommended):
// {condition1 ? (condition2 ? <ComponentA /> : <ComponentB />) : <ComponentC />}
// Instead, use if-else statements for better readability.  
// Example using if-else (recommended):
// let componentToRender;
// if (condition1) {    
//   if (condition2) {
//     componentToRender = <ComponentA />;
//   } else {
//     componentToRender = <ComponentB />;  
//   }
// } else {
//   componentToRender = <ComponentC />;
// }
// return <div>{componentToRender}</div>;
