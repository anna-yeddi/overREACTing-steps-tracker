import React from 'react'
import PropTypes from 'prop-types'
import DayModel from '../models/DayModel'

function EditBtn(props) {
  const el = props.el

  const handleEdit = () => {
    props.onEdit(el)
  }

  return (
    <button className="table-btn table-edit" onClick={() => handleEdit()}>
      <i className="material-icons" role="presentation">
        edit
      </i>
      <span className="sr-only">{`Edit ${el.day}`}</span>
    </button>
  )
}

EditBtn.propTypes = {
  el: PropTypes.instanceOf(DayModel).isRequired,
  onEdit: PropTypes.func.isRequired,
}

export default EditBtn
