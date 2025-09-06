// Keys in React
// Keys help React identify which items have changed, are added, or are removed. They should be given to the elements inside an array to give the elements a stable identity.
// The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys.
// Example of using keys in a list:
import React from 'react';

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // Correct way to use keys
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

export default NumberList;

// Note: Avoid using indexes as keys if the order of items may change. This can lead to issues with component state and performance.

// Example of incorrect way to use keys (using index):
// const listItems = numbers.map((number, index) =>
//     <li key={index}>
//         {number}
//     </li>
// );
// This can cause problems if the list is reordered or items are added/removed.
// Instead, always try to use a unique identifier from your data as the key.

// crypto.randomUUID() can be used to generate unique keys if no stable IDs are available, but it's generally better to have stable keys for performance reasons.
// Example of generating unique keys (not recommended for dynamic lists):
// const listItems = numbers.map((number) =>    
//     <li key={crypto.randomUUID()}>
//         {number}
//     </li>
// );
// This approach can lead to performance issues as React will treat every item as a new item on each render.
// Always ensure keys are unique among siblings to avoid rendering issues.
  