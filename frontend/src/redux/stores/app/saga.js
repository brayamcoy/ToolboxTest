// Redux
import { put, call, takeLatest } from 'redux-saga/effects'
import { setResponse } from './actions'

// Helpers
import notificationToast from '../../../utils/helpers'

// Constants
import { GET_DATA } from './constants'

const request = async (url, options) =>
  await fetch(url, options)
    .then((response) => response.json())
    .catch((err) => err)

function * getDataGenerator (action) {
  const { payload: { query }, cb } = action
  const url = `http://localhost:4001/files/data?fileName=${query}`

  try {
    const response = yield call(request, url)
    yield put(setResponse('success', response, cb))
    notificationToast('success', 'Request success')
  } catch (error) {
    console.log(error)
    notificationToast('error', `${error}`)
  }
}

export default function * rootSaga () {
  yield takeLatest(GET_DATA, getDataGenerator)
}
