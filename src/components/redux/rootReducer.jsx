import { combineReducers } from 'redux'
import { authReducer } from './reducers/authorizationReducer'
import { getCardReducer, setCardReducer } from './reducers/paymentReducer'


export const rootReducer = combineReducers({
  auth: authReducer,
  getCard: getCardReducer,
  setCard: setCardReducer,

})