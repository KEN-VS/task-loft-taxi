import React from "react";
import PropTypes from "prop-types"

function Input({ inputId, labelName, inputType, inputValue, inputSize, inputHolder, inputPattern, inputName }) {
  return (
    <div className='input__form'>
      <label
        htmlFor={inputId}
        className="label-name">
        {labelName}
      </label>
      <input
        className="input-name"
        name={inputName}
        type={inputType}
        id={inputId}
        value={inputValue}
        size={inputSize}
        placeholder={inputHolder}
        pattern={inputPattern} />
    </div>

  )

}

Input.propTypes = {
  inputId: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputValue: PropTypes.string,
  inputSize: PropTypes.string,
  inputHolder: PropTypes.string
}

export default Input