import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import DayModel from '../models/DayModel'
import StepsForm from './StepsForm'
import StepsTable from './StepsTable'

function Steps(props) {
  // Clear the form when submitted:
  const emptyForm = { day: '', steps: 0 }

  // Set state including previous data
  const [days, setDays] = useState(props.prevData)
  const [form, setForm] = useState(emptyForm)

  // Update days data helper function for handleSubmit:
  const daysUpdated = (arrDays) => {
    const newArray = [...arrDays]

    // Find if the day has been logged before:
    const oi = arrDays.findIndex((o) => o.day === form.day)

    if (oi === -1) {
      // Add new object, if the day is not found:
      newArray.push(new DayModel(nanoid(), form.day, parseInt(form.steps, 10)))
    } else if (oi >= 0) {
      // Update value for the day, by creating a new model,
      // if the day has been logged:
      newArray[oi] = new DayModel(
        nanoid(),
        form.day,
        newArray[oi].steps + parseInt(form.steps, 10)
      )
    }
    return newArray
  }

  const handleInput = (name, value) => {
    // Update form state:
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Sort updated days:
    setDays((prevDays) =>
      daysUpdated(prevDays).sort((a, b) => {
        return a.day < b.day ? 1 : -1
      })
    )

    setForm(emptyForm)
  }

  const handleEdit = (o) => {
    // Remove the existent day from list:
    handleRemove(o.id)

    // Update form state with editing day:
    setForm((prevForm) => ({
      ...prevForm,
      id: o.id,
      day: o.day,
      steps: parseInt(o.steps, 10),
    }))
  }

  const handleRemove = (id) => {
    // props.handleRemove(id)
    setDays((prevDays) => prevDays.filter((o) => o.id !== id))
  }

  return (
    <div className="container">
      <h1>Steps Tracker</h1>
      <StepsForm
        form={form}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />

      <StepsTable
        days={days}
        handleEdit={handleEdit}
        handleRemove={handleRemove}
      />
    </div>
  )
}

Steps.propTypes = {
  prevData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      day: PropTypes.string.isRequired,
      steps: PropTypes.number.isRequired,
    })
  ),
}

export default Steps
