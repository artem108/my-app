import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ListItems from '../app/containers/ListItems'
import InfoPage from '../app/containers/InfoPage'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <section>
        <Route path="/" component={ListItems} />
        <Route path="/info" component={InfoPage} />
      </section>
    </Router>
  </Provider>
)

export default Root
