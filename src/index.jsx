// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import rootReducer from './reducers/index';

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
