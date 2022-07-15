// Actions

import { GET_DATA, SET_RESPONSE } from './constants'

export const getData = (query = '', cb) => ({
  type: GET_DATA,
  payload: { query },
  cb
})

export const setResponse = (type, response, cb) => {
  const action = {
    type: SET_RESPONSE,
    payload: response
  }
  if (cb) {
    cb(type, response)
    return action
  }
  return action
}