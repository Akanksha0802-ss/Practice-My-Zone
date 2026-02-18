import React from 'react'

const Card = ({Myname,age,salary,Address}) => {
    return (
    <div>
        <p>{Myname}</p>
        <p>{age}</p>
        <p>{salary}</p>
        <p>{Address}</p>
    </div>
  )
}

export default Card