import { useState } from 'react';
import './Todo.css';
import TodoItems from './TodoItems'
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ToDoList() {
  let [todolist, setTodolist]  = useState([])

  let saveToDolist = (event) => {
    event.preventDefault();

    let toname = event.target.toname.value;

    if(!todolist.includes(toname)) {
      let finalDolist = [...todolist,toname]
      setTodolist(finalDolist);

      event.target.toname.value = '';
    }
    else {
      toast.error("ToDo name already exists...")
    }
  };

   let list = todolist.map((value,index)=> {
    return (
      <TodoItems value = {value} 
      key = {index} 
      indexNumber = {index}
      todolist = {todolist}
      setTodolist = {setTodolist}
      />
    );
   });

  return(
    <div className='App'>
      <h1>Todo List</h1>

      <form onSubmit={saveToDolist}>
        <input type = 'text' name= 'toname'/> 
        <button>Save</button>
      </form>

      <div className='outerDiv'>
        <ul>
          {list}
        </ul>
      </div>

      <ToastContainer />
    </div>
  );
}
export default ToDoList;