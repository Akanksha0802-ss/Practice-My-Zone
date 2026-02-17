import React from 'react'

const Student = (props) => {
    console.log(props); //props keh andr object hota h
    return (
    <div>
        <p>{props.Myname}</p>
        <p>{props.age}</p>
    </div>
  )
}

export default Student

