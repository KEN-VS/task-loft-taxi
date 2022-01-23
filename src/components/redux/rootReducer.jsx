import { combineReducers } from 'redux'
import { authReducer } from './reducers/authorizationReducer'
import { setCardReducer } from './reducers/paymentReducer'


export const rootReducer = combineReducers({
  auth: authReducer,
  setCard: setCardReducer,

})