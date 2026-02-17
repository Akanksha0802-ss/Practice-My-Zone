import React from 'react'
import Student from './Student'

const App = () => {
  return (
    <div>
      //here, component load with student data feed, this is a props defination
      <Student Myname="vikas" age="18" salary="200000"/>
      <Student Myname="akash" age="28" salary="500000" />
    </div>
  )
}

export default App