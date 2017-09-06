import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import allReducers  from './reducers'
import './index.css';
import App from './App';


const store = createStore(allReducers)

ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>,
  document.getElementById('root'));
registerServiceWorker();
