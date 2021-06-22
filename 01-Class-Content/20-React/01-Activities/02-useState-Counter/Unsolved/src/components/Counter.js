// Import useState Hook from React
import React from 'react';

function Counter() {
  // Using `useState`, declare a new state variable, called "count", and set it to 0
  // Name the returned setter method "setCount"
  // YOUR CODE HERE
  //

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      <div className="card-body">
        {/* Add the count variable to show the current count value below*/}
        <p className="card-text">Click Count: </p>
        {/* When the button is clicked, we call setCount with the incremented value of count */}
        <button className="btn btn-primary">Increment</button>{' '}
        {/* When the button is clicked, we call setCount with the decremented value of count */}
        <button className="btn btn-danger">Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
