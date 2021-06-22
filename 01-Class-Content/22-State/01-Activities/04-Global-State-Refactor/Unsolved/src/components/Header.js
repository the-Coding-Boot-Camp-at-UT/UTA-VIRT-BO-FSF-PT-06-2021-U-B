import React from 'react';
import { Link } from 'react-router-dom';
// Import the `useStoreContext()` Hook

// Remove all traces of prop drilling
const Header = ({ currentBook }) => {
  // Retrieve the current state from the global state using the useStoreContext() Hook.

  return (
    <header className="bg-info mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>The Book Lounge</h1>
        </Link>
        <h3>Now Viewing: {currentBook.title || 'Your book list'}</h3>
      </div>
    </header>
  );
};

export default Header;
