import { SEND_CARD_DATA, SET_CARD_SUCCESS, GET_CARD_DATA } from "../types"



export function sendCardData(token) {
  return { type: SEND_CARD_DATA, payload: token }
}


export function setCartSuccess(cardNumber, expiryDate, cardName, cvc) {
  return {
    type: SET_CARD_SUCCESS,
    payload: { cardNumber, expiryDate, cardName, cvc }
  }
}


export function getCardData(token) {
  return { type: GET_CARD_DATA, payload: token }
}
