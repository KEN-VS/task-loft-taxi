import { combineReducers } from 'redux'
import { LOG_IN, LOG_OUT, SIGN_UP } from "./types"


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
function regReducer(state = initialState, action) {

  if (action.type === SIGN_UP) {
    return { isLoggedIn: true }
  } else {
    return state
  }
}

export const rootReducer = combineReducers({
  auth: authReducer,
  reg: regReducer,

})