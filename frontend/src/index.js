// Requiring specific classes/object from packages
  // Ruby 'require'
import React from 'react';
import ReactDOM from 'react-dom';

// Importing things from other files
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

// let h1Object = <h1 id="chicken">Hello World</h1>
// console.log(h1Object)

ReactDOM.render(<App />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
