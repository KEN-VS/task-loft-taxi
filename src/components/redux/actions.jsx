import { LOG_IN, LOG_OUT, AUTHENTICATE, SIGN_UP, REGISTRATION } from "./types"

export function logIn() {
  return { type: LOG_IN }
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

export function signUp() {
  return { type: SIGN_UP }
}

export function registration(email, password, name, surname) {
  return {
    type: REGISTRATION,
    payload: { email, password, name, surname }
  }
}