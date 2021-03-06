import React from "react"
import PropTypes from "prop-types"

function Button({ text }) {
  return (
    <button className="btn ">{text}</button>
  )
}

Button.propTypes = {
  props: PropTypes.string
}


export default Button
