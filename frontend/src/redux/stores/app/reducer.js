// Reducer

import { SET_RESPONSE } from './constants'

const initialState = {
  data: [],
  loading: true
}
const AppReducer = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case SET_RESPONSE:
      return {
        ...state,
        data: payload
      }
    default:
      return state
  }
}

export default AppReducer
