// import React from 'react'
// import Student from './Student'


// const App = () => {
//   return (
//     <div>
//       <Student Myname="vikas" age="18" salary="200000"/>
//       <Student Myname="akash" age="28" salary="500000" />
//     </div>
  
//   )
// }

// export default App

//---------------------
import React, { useState } from "react";
import Child from "./Child";

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <Child name={name} setName={setName} />
      <p>value coming from child:{name}</p>
    </div>
  )
}

export default App;