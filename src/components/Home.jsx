import React, { useState } from 'react'
import Todos from './Todos'
import './home.css'
import {v4 as uuidv4} from 'uuid';
import NewTodo from './NewTodo'


const Home = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo)=>{
    // console.log(todo)
    setTodos((prevTodos)=>{
      return[...prevTodos, {id: uuidv4(), todo}]
    })
  };

  const handleRemoveTodo=(id)=>{
    setTodos((prevTodos)=>{
      const filteredTodos = prevTodos.filter((todo)=>todo.id !== id)
      return filteredTodos;
    })
  }
  return (
    <div className='container'>
      <h1 >Todo App</h1>
       <NewTodo onAddTodo = {handleAddTodo} />
        <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  )
}

export default Home

