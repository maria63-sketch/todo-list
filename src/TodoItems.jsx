import React, { useState } from 'react'

export default function TodoItems({value,indexNumber,todolist,setTodolist}) {

  let [status,setStatus] = useState(false)

  let deleteRow = () => {
  
    let finalData = todolist.filter((v,i) => i !== indexNumber)
    setTodolist(finalData)
  }

  return (
      <div className='outerDiv'>
      <li onClick={() => setStatus(!status)} className={(status) ? 'completed' : ''}>
      {indexNumber +1}.{value}
        
        <span onClick={deleteRow}>&times;</span>
      </li>
      </div>
  );
}
