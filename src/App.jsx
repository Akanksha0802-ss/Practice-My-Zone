import React from 'react'
import Student from './Student'
import Card from './Card'

const App = () => {
  return (
    <div>
      <Student Myname="vikas" age="18" salary="200000"/>
      <Student Myname="akash" age="28" salary="500000" />
       <Card Myname="Akanksha" age="24" salary="100000" Address="Vns" />
    </div>
  
  )
}

export default App