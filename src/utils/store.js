import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from './reducers'

export function configureStore(initialState = {}) {
  // Middleware and store enhancers
  const middlewares = [
    thunk,
    process.env.NODE_ENV !== 'production' && logger,
  ].filter(Boolean)
  const enhancer = compose(applyMiddleware(...middlewares))

  const store = createStore(rootReducer, initialState, enhancer)

  // For hot reloading reducers
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default // eslint-disable-line

      store.replaceReducer(nextReducer)
    })
  }

  return store
}

export default configureStore
