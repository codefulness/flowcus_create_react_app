import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import authService from './services/auth'
import databaseService from './services/database'

const logger = createLogger({ collapsed: true })
const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware, logger),
  )
  sagaMiddleware.run(authService)
  sagaMiddleware.run(databaseService)


  return store
}