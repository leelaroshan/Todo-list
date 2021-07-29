import React from 'react';

export default function TodosList({todos,setTodos}) {
     return (
        <div>  
            { todos.map((todo)=>(<li className="todos-list" key={todo.id}>{todo.title}
                {/* <input type="text" value={todo.title} class="input"
                onChange={(event)=> event.preventDefault()} /> */}
             </li>))
             } 
       </div>
     )
}
