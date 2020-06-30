import React from 'react'
import PropTypes from 'prop-types'

function DateInput(props) {
  const handleChange = (e) => {
    const { name, value } = e.target
    props.onInput(name, value)
  }

  return (
    <>
      {/* Localized constraints are provided by type="data"
          <label htmlFor="day">Date (MM.DD.YY)</label> */}
      <label htmlFor="day">Date</label>
      <input
        type="date"
        name="day"
        value={props.day}
        id="day"
        className="form-input"
        // fallback support for type=text
        // pattern="\d{4}-\d{2}-\d{2}"
        min="1900-01-01"
        required
        onChange={handleChange}
      />
      {/* <span className="form-input-validity"></span> */}
    </>
  )
}

DateInput.propTypes = {
  day: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
}

export default DateInput
