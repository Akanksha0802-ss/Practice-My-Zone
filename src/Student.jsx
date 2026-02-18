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
import React from 'react'

const Student = ({Myname,age}) => {
    return (
    <div>
        <p>{Myname}</p>
        <p>{age}</p>
    </div>
  )
}

export default Student
