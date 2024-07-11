// Code 01 : 
//Functional Component Converted to TypeScript
//Before Editing
// import React from 'react'; 
// const Greeting = ({ name }) => { 
// return <div>Hello, {name}!</div>;
//  };
//  export default Greeting;
 

//After Editing
// Greeting.tsx
import React from 'react';

// Define the props interface
interface GreetingProps {
  name: string; // The name to display
}

// Functional component that displays a greeting
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;

//Extra Notes: 
//The Greeting component receives a name prop and displays a greeting message.
//The React.FC<GreetingProps> type annotation specifies that this is a functional component with the given props.
