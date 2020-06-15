import React from 'react'
import PropTypes from 'prop-types'

function Steps(props) {
  return (
    <div className="container">
      <h1>Steps Tracker</h1>
      <form className="form">
        <div className="form-item">
          <label htmlFor="date">Date (MM.DD.YY)</label>
          <input
            type="text"
            name="date"
            id="date"
            className="form-input"
            max="8"
          />
        </div>
        <div className="form-item">
          <label htmlFor="steps">Steps made</label>
          <input
            type="number"
            name="steps"
            id="steps"
            className="form-input"
            min="0"
          />
        </div>
        <button type="submit" className="form-item form-cta form-input">
          ADD
        </button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th className="table-headers">Date (MM.DD.YY)</th>
            <th scope="col" className="table-headers">
              Steps made
            </th>
            <th scope="col" className="table-headers">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr>
            <th scope="row">06.14.2020</th>
            <td>2,035</td>
            <td>
              <button className="table-btn table-edit">
                <i className="material-icons" role="presentation">
                  edit
                </i>
                <span className="sr-only">Edit</span>
              </button>
              <button className="table-btn table-delete">
                <i className="material-icons" role="presentation">
                  clear
                </i>
                <span className="sr-only">Delete</span>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">06.13.2020</th>
            <td>3,946</td>
            <td>
              <button className="table-btn table-edit">
                <i className="material-icons" role="presentation">
                  edit
                </i>
                <span className="sr-only">Edit</span>
              </button>
              <button className="table-btn table-delete">
                <i className="material-icons" role="presentation">
                  clear
                </i>
                <span className="sr-only">Delete</span>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">06.12.2020</th>
            <td>2,431</td>
            <td>
              <button className="table-btn table-edit">
                <i className="material-icons" role="presentation">
                  edit
                </i>
                <span className="sr-only">Edit</span>
              </button>
              <button className="table-btn table-delete">
                <i className="material-icons" role="presentation">
                  clear
                </i>
                <span className="sr-only">Delete</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

Steps.propTypes = {}

export default Steps
