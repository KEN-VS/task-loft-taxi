import { SEND_CARD_DATA, SET_CARD_SUCCESS } from "../types"



export function sendCardData(token) {
  return { type: SEND_CARD_DATA, payload: token }
}


export function setCartSuccess(cardNumber, expiryDate, cardName, cvc, token) {
  return {
    type: SET_CARD_SUCCESS,
    payload: { cardNumber, expiryDate, cardName, cvc, token }
  }
}

