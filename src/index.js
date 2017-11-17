import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import routes from './routes'

import './index.css'
import App from './App'

const store = configureStore()
// createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
<Provider store={store}>
{
    routes
}
  </Provider>,

  document.getElementById('root'))
  registerServiceWorker()
