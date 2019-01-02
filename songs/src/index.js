import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Provider Component (capitalized)
import { createStore } from 'redux'; // createStore function

// Our stuff
import App from './components/App';
import reducers from './reducers'; // Reducers that we c

ReactDOM.render(
  // Wrapping the App inside the Provider component
  // provide a store from the createStore function
  // Provider takes care of it all
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
