import React from 'react'
import './todo.css';
import{AiFillDelete} from 'react-icons/ai'
const Todo = (props) => {
    const {title,description} = props.todo;
    const {id} = props;

    const handleClick =(id)=>{
      props.onRemoveTodo(id)
    };

  return <article className='todo'> 
    <div>
        <h3> {title}</h3>
        <p>{description}</p>
    </div>
    <button className='btn' onClick={()=>{handleClick(id)}}> 
    <AiFillDelete/>
    </button>
  </article>
 
}

export default Todo