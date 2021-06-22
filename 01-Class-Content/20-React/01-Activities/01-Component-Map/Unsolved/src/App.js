import React from 'react';
import List from './components/List';

const groceries = [
  {
    id: 1,
    name: 'Milk'
  },
  {
    id: 2,
    name: 'Eggs'
  },
  {
    id: 3,
    name: 'Cheese'
  },
  {
    id: 4,
    name: 'Cake Mix'
  },
  {
    id: 5,
    name: 'Carrots'
  },
  {
    id: 6,
    name: 'Juice'
  }
];

function App() {
  return <List groceries={groceries} />;
}

export default App;
