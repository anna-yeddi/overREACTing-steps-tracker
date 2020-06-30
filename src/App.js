import React from 'react'
import './App.css'
import DayModel from '../src/models/DayModel'
import Steps from '../src/components/Steps'

function App() {
  const prevDataSample = new DayModel('testId000001', '2020-06-14', 9768)
  const prevData = [prevDataSample]

  return (
    <div className="App">
      <Steps prevData={prevData} />
    </div>
  )
}

export default App
