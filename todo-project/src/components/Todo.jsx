import React from 'react'
import './todo.css';
import{AiFillDelete} from 'react-icons/ai'
const Todo = (props) => {
    const {id, title,description} = props.todo;
  return <article className='todo'>
    <div>
        <h3> {title}</h3>
        <p>{description}</p>
    </div>
    <button className='btn'> 
    <AiFillDelete/>
    </button>
  </article>
 
}

export default Todo