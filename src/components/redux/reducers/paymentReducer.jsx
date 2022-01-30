import { GET_CARD_SUCCESS, SET_CARD_SUCCESS } from "../types"



const initialState = {
  cardNumber: '',

}

export function getCardReducer(state = initialState, action) {
  if (action.type === GET_CARD_SUCCESS) {
    return { ...state, cardNumber: action.payload }
  } else {
    return state
  }
}

export function setCardReducer(state = {
  isPaymentSuccess: false,
  cardName: '',
  cardNumber: '',
  expiryDate: '',
  cvc: ''
}, action) {
  switch (action.type) {
    case SET_CARD_SUCCESS:
      return { isPaymentSuccess: true, state: action.payload }
    default:
      return state
  }
}