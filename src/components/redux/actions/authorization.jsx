import { LOG_IN, LOG_OUT, AUTHENTICATE, REGISTRATION, SIGN_UP } from "../types"

export function logIn(token) {
  return { type: LOG_IN, payload: token }
}

export function logOut() {
  return { type: LOG_OUT }
}

export function authenticate(email, password) {
  return {
    type: AUTHENTICATE,
    payload: { email, password }
  }
}

export function signUp(token) {
  return { type: SIGN_UP, payload: token }
}

export function registration(email, password, name, surname) {
  return {
    type: REGISTRATION,
    payload: { email, password, name, surname }
  }
}