
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import RootReducer from './reducer'
import rootSagas from './saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  RootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSagas)

export default store
