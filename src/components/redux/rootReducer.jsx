import { combineReducers } from 'redux'
import { LOG_IN, LOG_OUT } from "./types"


const initialState = {
  isLoggedIn: false
}

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return { isLoggedIn: true }
    case LOG_OUT:
      return { isLoggedIn: false }
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  auth: authReducer,

})