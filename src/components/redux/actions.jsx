import { LOG_IN, LOG_OUT, AUTHENTICATE } from "./types"

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