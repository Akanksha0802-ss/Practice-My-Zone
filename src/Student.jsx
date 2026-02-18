// import React from 'react'

// const Student = ({Myname,age}) => {
//here object destructuring ,never memory wastage
//     let obj = {
//         name: "Akanksha",
//         age: 24,
//         address: "Vns"
//     }
//     const { name } = obj;
//     console.log(name);
//     //console.log(props);
//     return (
//     <div>
//         <p>{Myname}</p>
//         <p>{age}</p>
//     </div>
//   )
// }

// export default Student

//---------------------------
// import React from 'react'

// const Student = ({Myname,age}) => {
//     return (
//     <div>
//         <p>{Myname}</p>
//         <p>{age}</p>
//     </div>
//   )
// }

// export default Student

//--------------------
import React from 'react'
import Card from './Card'

const Student = ({ Myname, age }) => {
    return (
    <div>
        <Card Myname={Myname} age={age}/>
    </div>
  )
}

export default Student

//here, app pass the data to the Student and Student pass the data to the card -> this is called the props drilling(in the nested form)

