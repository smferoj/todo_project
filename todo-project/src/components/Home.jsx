import React from 'react'
import Todos from './Todos'
import './home.css'
import NewTodo from './NewTodo'

const dummyTodos = [
   { id:1,
    title:"first todo",
    description: "Lorem,ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aspernatur"},
   { id:2,
    title:"second todo",
    description: "Lorem,ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aspernatur"},
   { id:3,
    title:"thrid todo",
    description: "Lorem,ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aspernatur"},
]

const Home = () => {
  return (
    <div className='container'>
      <h1 >Todo App</h1>
       <NewTodo />
        <Todos todos={dummyTodos}/>
    </div>
  )
}

export default Home