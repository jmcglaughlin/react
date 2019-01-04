import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Provider Component (capitalized)
import { createStore, applyMiddleware } from 'redux'; // createStore function
import thunk from 'redux-thunk';

// Our stuff
import App from './components/App';
import reducers from './reducers'; // Reducers that we c

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  // Wrapping the App inside the Provider component
  // provide a store from the createStore function
  // Provider takes care of it all
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
