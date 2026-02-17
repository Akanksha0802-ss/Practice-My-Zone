import React from 'react'

const Student = ({ Myname, age}) => {
  return (
    <div>
        <p>{Myname}</p>
        <p>{age}</p>
    </div>
  )
}

export default Student