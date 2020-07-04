import React from 'react'
import PropTypes from 'prop-types'

function StepsInput(props) {
  const handleChange = (e) => {
    const { name, value } = e.target
    props.onInput(name, parseInt(value, 10))
  }

  return (
    <>
      <label htmlFor="steps">Steps made</label>
      <input
        type="number"
        name="steps"
        value={props.steps}
        id="steps"
        className="form-input"
        min="0"
        required
        onChange={handleChange}
      />
      {/* <span className="form-input-validity"></span> */}
    </>
  )
}

StepsInput.propTypes = {
  steps: PropTypes.number.isRequired,
  onInput: PropTypes.func.isRequired,
}

export default StepsInput
