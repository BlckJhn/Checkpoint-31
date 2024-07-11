//Code 02 :
//Class Component Converted to TypeScript
//Before Editing
//import React, { Component } from 'react'; 
// class Counter extends Component { 
// state = {
//  count: 0
//  }; increment = () => {
//  this.setState({ count: this.state.count + 1 }); 
// }; 
// render() { 
// return 
// ( <div> 
// <p>Count: {this.state.count}</p> 
// <button onClick={this.increment}>Increment</button> 
// </div> );
//  }
//  } 
// export default Counter;

//After Editing 
// After conversion (TypeScript)
import React, { Component } from 'react';

// Define props and state interfaces
interface CounterProps {}
interface CounterState {
  count: number; // 'count' state should be a number
}

// Class component with TypeScript
class Counter extends Component<CounterProps, CounterState> {
  state: CounterState = {
    count: 0 // Initial state for 'count' is 0
  };

  // Increment function updates 'count' state
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;

//Extra Notes
//The Counter class manages a numeric count in its state.
// The increment method updates the count when the button is clicked.
// The component renders the current count and an increment button.
//import React, { Component } from 'react';: Import React and Component from 'react' for class component definition.
// interface CounterProps {}: Interface defining props for Counter (empty in this case).
// interface CounterState { count: number; }: Interface defining state for Counter, specifying that count should be a number.
// state: CounterState = { count: 0 };:

//     Initializes component state with count starting at 0.

// increment = () => { this.setState({ count: this.state.count + 1 }); };:

//     Arrow function increment that increments count in state when button is clicked.

// <p>Count: {this.state.count}</p>: Displays current count from state in JSX.
// <button onClick={this.increment}>Increment</button>: Button triggering increment function when clicked.
// export default Counter;: Exporting Counter component as default.