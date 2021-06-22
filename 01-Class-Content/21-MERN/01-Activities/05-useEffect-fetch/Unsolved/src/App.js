import React from 'react';
import './App.css';
import SearchGiphy from './pages/SearchGiphy';

const App = () => {
  return (
    <div className='App' style={{ backgroundColor: 'teal' }}>
      {<SearchGiphy />}
    </div>
  );
};

export default App;
