import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css'
import configureStore from './config/configStore';
import Root from './config/rootComponent'

const store = configureStore()

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)
