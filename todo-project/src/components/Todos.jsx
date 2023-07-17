import React from 'react'
import Todo from './Todo'
import './todos.css'
const Todos = (props) => {
    console.log(props.todos)
  return <section className='todos' >
    {
        props.todos.map((todo)=><Todo todo={todo} key={todo.id}/>)
    }
  </section>
}

export default Todos