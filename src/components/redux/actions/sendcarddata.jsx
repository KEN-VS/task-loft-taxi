import { SEND_CARD_DATA, SET_CARD_SUCCESS, GET_CARD_DATA, GET_CARD_SUCCESS } from "../types"



export function setCartSuccess(token) {
  return { type: SET_CARD_SUCCESS, payload: token }
}


export function sendCardData(cardNumber, expiryDate, cardName, cvc) {
  return {
    type: SEND_CARD_DATA,
    payload: { cardNumber, expiryDate, cardName, cvc }
  }
}


export function getCardData(token) {
  return { type: GET_CARD_DATA, payload: token }
}

export function getCardSuccess(cardNumber) {
  return { type: GET_CARD_SUCCESS, payload: cardNumber }
}


