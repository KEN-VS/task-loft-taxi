import { LOG_IN, LOG_OUT, SIGN_UP } from "../types"


const initialState = {
  isLoggedIn: false
}

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return { isLoggedIn: true, token: action.payload }
    case LOG_IN:
      return { isLoggedIn: true, token: action.payload }
    case LOG_OUT:
      return { isLoggedIn: false }
    default:
      return state
  }
}

// export function regReducer(state = initialState, action) {

//   if (action.type === SIGN_UP) {
//     return { isLoggedIn: true }
//   } else {
//     return state
//   }
// }