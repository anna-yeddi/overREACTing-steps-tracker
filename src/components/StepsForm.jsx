import React from 'react'
import PropTypes from 'prop-types'
import DateInput from './DateInput'
import StepsInput from './StepsInput'

function StepsForm(props) {
  const { form } = props

  const handleInput = (name, value) => {
    props.handleInput(name, value)
  }

  const handleSubmit = (e) => {
    props.handleSubmit(e)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-item">
        <DateInput onInput={handleInput} day={form.day} />
      </div>
      <div className="form-item">
        <StepsInput onInput={handleInput} steps={form.steps} />
      </div>
      <button type="submit" className="form-item form-cta form-input">
        ADD
      </button>
    </form>
  )
}

StepsForm.propTypes = {
  form: PropTypes.shape({
    day: PropTypes.string.isRequired,
    steps: PropTypes.number.isRequired,
  }),
}

export default StepsForm
