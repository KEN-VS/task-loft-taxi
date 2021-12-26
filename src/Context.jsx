import React from "react";

const Context = React.createContext()

const dataContext = React.createContext({
  isLoggedIn: false,
  login() {
    this.isLoggedIn = true
  },
  logout() {
    this.isLoggedIn = false
  },
})

export { Context, dataContext }