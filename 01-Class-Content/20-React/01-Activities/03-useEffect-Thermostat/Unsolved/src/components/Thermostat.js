// Import `useEffect` Hook from React
import React, { useState } from 'react';

function Thermostat() {
  // Set the starting temperature
  const [temp, setTemp] = useState(0);

  // Use the `useEffect` Hook to set the `document.title` to the current temperature
  // YOUR CODE HERE
  //

  return (
    <div className="card text-center">
      <div className="card-header bg-warning text-white">
        Building Temperature
      </div>
      <div className="card-body">
        <p className="card-text">
          Current temperature: {temp} degrees Fahrenheit
        </p>
        <button className="btn btn-danger" onClick={() => setTemp(temp + 1)}>
          Raise temperature
        </button>{' '}
        <button className="btn btn-primary" onClick={() => setTemp(temp - 1)}>
          Lower temperature
        </button>
      </div>
    </div>
  );
}

export default Thermostat;
