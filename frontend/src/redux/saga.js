
// Dependencies
import { all, fork } from 'redux-saga/effects'

// Sagas
import appSaga from './stores/app/saga'

export default function * root () {
  yield all([
    fork(appSaga)
  ])
}
