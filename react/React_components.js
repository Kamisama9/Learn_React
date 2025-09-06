// Reaact components

// beauty of React is that it allows you to break a UI (User Interface) down into independent reusable chunks, which we will refer to as components


//  React components must be capitalized or they will not function as expected.Why?
// In React, components must be capitalized because JSX treats lowercase tag names as HTML tags. For example, <div> is treated as an HTML div element, while <MyComponent> is treated as a custom React component. If you use a lowercase name for a component, React will not recognize it as a component and will instead try to render it as a standard HTML element, which can lead to unexpected behavior or errors. Capitalizing component names helps React distinguish between built-in HTML elements and user-defined components.


// react has 2 types of components
//1. Functional components
//2. Class components (older way, less used now)

//Functional component example
import React from 'react';  
function Greeting() {
    return <h1>Hello</h1>;
}   
export default Greeting;
//In this example, we define a functional component named Greeting that returns a simple JSX element (an h1 tag with the text "Hello"). We then export the component so it can be used in other parts of the application.

//Class component example   
import React, { Component } from 'react';
class Welcome extends Component {
    render() {
        return <h1>Welcome</h1>;
    }
}
export default Welcome;
//In this example, we define a class component named Welcome that extends React's Component class. The render method returns a JSX element (an h1 tag with the text "Welcome"). We then export the component for use in other parts of the application.


// React map method in components
// The map() method in React is commonly used to render lists of elements based on an array of data. It allows you to iterate over an array and return a new array of JSX elements, which can then be rendered in the component's output.