import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import DayModel from '../models/DayModel'
import DateInput from './DateInput'
import StepsInput from './StepsInput'
import EditBtn from './EditBtn'
import RemoveBtn from './RemoveBtn'

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
      newArray.push(new DayModel(nanoid(), form.day, parseInt(form.steps)))
    } else if (oi >= 0) {
      // Update value for the day, if the day has been logged:
      newArray[oi] = {
        ...newArray[oi],
        steps: newArray[oi].steps + parseInt(form.steps, 10),
      }
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
    // setDays(prevDays => prevDays)
    console.log('Handle me!')
  }

  const handleRemove = (id) => {
    setDays((prevDays) => prevDays.filter((o) => o.id !== id))
  }

  return (
    <div className="container">
      <h1>Steps Tracker</h1>
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

      <table className="table">
        <thead>
          <tr>
            <th className="table-headers">Date</th>
            <th scope="col" className="table-headers">
              Steps made
            </th>
            <th scope="col" className="table-headers">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="table-body">
          {days.map((o) => (
            <tr key={o.id}>
              <th scope="row">{o.day}</th>
              <td>{o.steps}</td>
              <td>
                <EditBtn onEdit={handleEdit} el={o} />
                <RemoveBtn onRemove={handleRemove} el={o} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
