import React from 'react';
import Header from './Header'
import Store from './Store'

import './App.css';


// Props is information coming from a Parent Component down to its children
  // Information that's passed when the component is created
  // props is always received as a POJO

// JS  code can be interpolated in JSX with {}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header title="List of Bubble Tea Stores"/>

        <Store storeName="Quicklys"/>
        <Store storeName="Vivis"/>
        <Store 
          storeName="Yayas"
          price={10}
          boolean={true}
          funcDefinition={() => {}}
          arrays={ [] }
          pojo={ {} }
          />

      </header>
    </div>
  );
}

export default App;
