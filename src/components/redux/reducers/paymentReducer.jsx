import { SEND_CARD_DATA } from "../types"



const initialState = {
  isPaymentData: false
}

export function setCardReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_CARD_DATA:
      return { isPaymentData: true, token: action.payload }
    default:
      return state
  }
}