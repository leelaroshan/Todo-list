import React from 'react';
import {v4 as uuidv4} from 'uuid';

export default function Form({input, setInput,todos, setTodos, editTodo, setEditTodo}) {


    const updateTodo = (title,id,completed)=>{
        const newTodo = todos.map((todo)=>  
            todo.id === id ? { title,id,completed} : todo
         )
        setTodos(newTodo);
        setEditTodo(" ");
        
    }






    const onInputChange =(event)=>{
        setInput(event.target.value);
        // console.log(event.target.value);

    }
    
   
    const onFormSubmit =(event)=>{
       event.preventDefault();

       if(!editTodo) { 
    setTodos([...todos, {id:uuidv4(), title:input,completed:false}]);
    setInput(" ");
   }
  else{
      updateTodo(input,editTodo.id, editTodo.completed)
  }
    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
            <input type="text"  placeholder="enter a task"  value={input} 
            onChange={onInputChange} required></input>
            <button  className="add-btn "  type="submit"> Add</button>
            </form>
           
        </div>
    )
}
