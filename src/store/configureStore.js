import { createStore, applyMiddleware } from 'redux'
import rootReducer  from '../reducers'

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

    if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
      })
    }

  return store
}
