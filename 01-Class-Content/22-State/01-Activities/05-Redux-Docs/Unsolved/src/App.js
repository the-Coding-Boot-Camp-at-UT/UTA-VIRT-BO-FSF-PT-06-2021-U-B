import React from 'react';

// Replace StoreProvider here and in App()
import { StoreProvider } from './utils/GlobalState';
// Import the Redux store you created
//

function App() {
  return (
    <div>
      <StoreProvider>
        <h4>Check the console</h4>
        <div className="container">{console.log(store.getState())}</div>
      </StoreProvider>
    </div>
  );
}

export default App;
