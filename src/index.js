import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import allReducers  from './reducers'
import { Router, Route, hashHistory } from 'react-router'

import './index.css'
import App from './App'

const store = createStore(allReducers)

ReactDOM.render(
<Provider store={store}>
  <Router history={hashHistory}>
    <Route path='/' component={App} />
  </Router>
  </Provider>,

  document.getElementById('root'))
  registerServiceWorker()
