import React from 'react'
import PropTypes from 'prop-types'
import EditBtn from './EditBtn'
import RemoveBtn from './RemoveBtn'

function StepsTable(props) {
  const { days } = props

  const handleEdit = (o) => {
    props.handleEdit(o)
  }

  const handleRemove = (id) => {
    props.handleRemove(id)
  }

  return (
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
            <td>{o.steps.toLocaleString()}</td>
            <td>
              <EditBtn onEdit={handleEdit} el={o} />
              <RemoveBtn onRemove={handleRemove} el={o} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

StepsTable.propTypes = {
  days: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      day: PropTypes.string.isRequired,
      steps: PropTypes.number.isRequired,
    })
  ),
}

export default StepsTable
