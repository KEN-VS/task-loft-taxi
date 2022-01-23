import { SEND_CARD_DATA } from "../types"



const initialState = {
  isPaymentSuccess: false
}

export function setCardReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_CARD_DATA:
      return { isPaymentSuccess: true, token: action.payload }
    default:
      return state
  }
}