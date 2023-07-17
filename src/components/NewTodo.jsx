import React, { useState } from 'react'
import './newTodo.css';


const NewTodo = (props) => {
const[todo, setTodo] = useState({title: "", description:""});
const{title, description} = todo;


const handleChange=(e)=>{
  const name  = e.target.name;
  setTodo((prev) =>{
    return {...prev, [name]:e.target.value}
  })
}

const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(todo);
    props.onAddTodo(todo)
    setTodo({title:"", description:""})
    }
    
  return <form className='form' onSubmit={handleSubmit}>
<div className='form-field'>
    <label htmlFor="title" className='px-2'>Title:</label>
    <input type="text" id='title' name='title' placeholder='Todos name' value={title} onChange={handleChange} />
</div>
<div className='form-field'>
    <label htmlFor="description" className='px-2 mx-0'>Decription:</label>
    <input type="text" id='description' name='description' placeholder='Todos Description' value={description} onChange={handleChange} />
</div>
<button type='submit'>Add todo </button>
  </form>
   
  
}

export default NewTodo