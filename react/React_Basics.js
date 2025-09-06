//React Basics

//Why React?
//1. Component-Based
//2. Declarative
//3. Learn Once, Write Anywhere
//4. Strong Community and Ecosystem
//5. Performance
//6. Backed by Facebook

//Differences between React and Vanilla JS
//1. Component-Based Architecture
//2. JSX Syntax
//3. Virtual DOM
//4. State Management
//5. Ecosystem and Libraries
//6. Development Tools
//7. Learning Curve

//What is JSX?
// JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. It is used in React to describe what the UI should look like. JSX allows you to write HTML-like code within JavaScript, making it easier to create and visualize the structure of your components. Under the hood, JSX is transpiled to regular JavaScript function calls that create React elements.

//Example of JSX
const element = <h1>Hello, world!</h1>;
//This JSX code is transpiled to the following JavaScript code:
const elementJS = React.createElement('h1', null, 'Hello, world!');


//What is virtual DOM?
// The virtual DOM (VDOM) is a lightweight, in-memory representation of the actual DOM. It is a concept used by React to optimize updates to the user interface. When the state of a component changes, React creates a new virtual DOM tree and compares it with the previous one using a process called "reconciliation." It then calculates the minimum number of changes needed to update the actual DOM, which improves performance and reduces unnecessary re-renders.

//What is DOM?
// The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, where each object corresponds to a part of the document (such as elements, attributes, and text). The DOM allows programming languages like JavaScript to manipulate the content, structure, and style of web pages dynamically. When you interact with a web page (e.g., clicking a button or submitting a form), JavaScript can modify the DOM to reflect those changes in the user interface.
//in simple terms, the DOM is the actual structure of a web page that browsers render and display to users, while the virtual DOM is an abstraction used by libraries like React to optimize updates to that structure.

//example of DOM
// HTML
/*  
<div id="root"></div>
 // JavaScript
const rootElement = document.getElementById('root');
const heading = document.createElement('h1');
heading.textContent = 'Hello, world!';
rootElement.appendChild(heading);
*/
//In this example, we create a new h1 element and append it to the root div in the DOM.


//Differences between js libraries and frameworks
//1. Definition --> A library is a collection of pre-written code that developers can use to optimize tasks. 
// A framework is a more comprehensive structure that provides a foundation and set of rules for building applications.
//2. Control --> In a library, the developer is in control and calls the library when needed.
//  In a framework, the framework is in control and calls the developer's code at specific points (Inversion of Control).
//3. Scope --> Libraries are typically focused on specific functionalities (e.g., React for UI, Lodash for utility functions). Frameworks provide a broader scope and often include multiple features (e.g., Angular, Django).
//4. Learning Curve --> Libraries usually have a gentler learning curve since they focus on specific tasks. Frameworks can have a steeper learning curve due to their comprehensive nature and conventions.
//5. Flexibility --> Libraries offer more flexibility as developers can choose which libraries to use and how to integrate them. Frameworks often impose certain structures and patterns that developers must follow.
//6. Examples --> Popular libraries include React, jQuery, and Lodash. Popular frameworks include Angular, Vue.js, Django, and Ruby on Rails.


//What is rendering?
// Rendering is the process of transforming your React components into actual DOM elements that can be displayed in the browser. When a component's state or props change, React re-renders the component to reflect those changes in the UI.
// React uses a virtual DOM to efficiently update the real DOM by only changing the parts that have changed, rather than re-rendering the entire UI from scratch. This makes React applications fast and responsive.  

//React installation

//1. Using Create React App
//npx create-react-app my-app
//cd my-app
//npm start
//2. Using Vite 
//npm create vite@latest my-react-app
//cd my-react-app
//npm install
//npm run dev

//3. Using CDN (for simple demos or learning purposes)
// Add the following script tags to your HTML file
/*
<script src="https://unpkg.com/react/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone/babel.min.js"></script>
*/

// I will use vite for this document

//What is Vite and why would we use it?
// Vite is a modern build tool that provides a fast and efficient development environment for web projects, including React applications. It leverages native ES modules in the browser for development, which allows for instant server start and lightning-fast hot module replacement (HMR). Vite also offers optimized builds using Rollup for production, ensuring that your application is performant and ready for deployment. We use Vite because it significantly improves the developer experience with its speed and simplicity compared to traditional bundlers like Webpack.

//what is HMR?
// HMR stands for Hot Module Replacement. It is a feature in modern web development tools that allows modules (or components) to be updated in a running application without requiring a full page reload. This means that when you make changes to your code, only the affected modules are replaced, and the application state is preserved. HMR significantly speeds up the development process by providing instant feedback and reducing the time spent waiting for the application to reload after each change.

//Why use JSX?
// Most of the time in apps, rendering logic and markup are inherently coupled, but we typically separate them by having our logic and markup in separate files. JSX allows React to separate concerns by containing both rendering logic and content in the same place (a component).
// On top of this, it’s a more intuitive, visual way to work with the UI inside your code, and allows React to show more useful error and warning messages.
// JSX (JavaScript XML) is used in React for several reasons:
//1. Familiar Syntax: JSX resembles HTML, making it easier for developers familiar with web development to understand and write UI components.
//2. Improved Readability: JSX allows you to visualize the structure of your UI directly within your JavaScript code, improving readability and maintainability.
//3. Integration with JavaScript: JSX allows you to embed JavaScript expressions within the markup, enabling dynamic content and logic directly in the UI definition.
//4. Tooling Support: JSX is supported by various development tools and IDEs, providing features like syntax highlighting, linting, and auto-completion.
//5. Performance Optimization: JSX is transpiled to efficient JavaScript code that creates React elements, allowing React to optimize rendering and updates through its virtual DOM.
//Overall, JSX enhances the developer experience and productivity when building React applications.



//React important concepts
//1. Functional Components
//2. Class Components (less common in modern React)
//3. Props
//4. State and Lifecycle (using Hooks in functional components)
//5. Event Handling
//6. Conditional Rendering
//7. Lists and Keys  --> lists are rendered using the map() function, and each element in the list should have a unique "key" prop to help React identify which items have changed, are added, or are removed.
//8. Forms
//9. Lifting State Up --> state is often lifted to a common ancestor component to share it among multiple child components.
//10. Composition vs Inheritance -->composition is combining  components together to build complex UIs, rather than relying on inheritance hierarchies.
//11. React Router (for navigation)
//12. State Management (using Context API or libraries like Redux)
//13. Hooks (useState, useEffect, useContext, etc.)
//14. Performance Optimization (React.memo, useMemo, useCallback)
//15. Testing (Jest, React Testing Library)
//16. Deployment (Netlify, Vercel, GitHub Pages, etc.)


// In a vite project, you will find some folders, as well as package.json, package-lock.json, .gitignore, and README.md files. The README.md contains some useful information that you should take the time to skim through now.
//The public folder is where all of the static assets related to your app will go. This could include images, icons, and information files for the browser.
//Inside the src folder is where you will find the code that runs your app. The main.jsx file here serves as the entry point of the application

//main.jsx
import React from 'react'
import App from './App.jsx'
import {createRoot} from 'react-dom/client'  // Import the createRoot function from the react-dom/client package to enable rendering of React components into the DOM.
createRoot.createRoot(document.getElementById('root')).render(  // renders the App component into the root element in the HTML file
  <React.StrictMode>  // helps to identify potential problems in an application by activating additional checks and warnings for its descendants. It does not render any visible UI itself.
    <App />
  </React.StrictMode>,
)


//map() function

let arr=[1,2,3,4,5];
let newArr=arr.map((e)=> e*2)



