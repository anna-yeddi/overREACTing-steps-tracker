import React from 'react'
import PropTypes from 'prop-types'
import DayModel from '../models/DayModel'

function RemoveBtn(props) {
  const el = props.el

  const handleRemove = () => {
    props.onRemove(el.id)
  }

  return (
    <button className="table-btn table-remove" onClick={() => handleRemove()}>
      <i className="material-icons" role="presentation">
        clear
      </i>
      <span className="sr-only">{`Remove ${el.day}`}</span>
    </button>
  )
}

RemoveBtn.propTypes = {
  el: PropTypes.instanceOf(DayModel).isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default RemoveBtn
