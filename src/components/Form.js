import React, {useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';

export default function Form({input, setInput,todos, setTodos, editTodo, setEditTodo, inputRef}) {

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    useEffect(()=>{
        if(editTodo){
            setInput(editTodo.title);
        }else{
            setInput("")
        }
    },[setInput,editTodo])

    const updateTodo = (title,id,completed)=>{
        const newTodo = todos.map((todo)=>  
            todo.id === id ? { title,id,completed} : todo
         )
        setTodos(newTodo);
        setEditTodo("");
        
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
            <input ref={inputRef} className="task-input" type="text" placeholder="Enter a todo ..." value={input} 
            onChange={onInputChange} required></input>
           
            <button  className="add-btn"  type="submit"> {(editTodo)?  "Update" : "Add"}</button>
            </form>

           
        </div>
    )
}
