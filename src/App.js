import  React, {useState, useRef} from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodosList from './components/TodosList';

function App() {
  const [input, setInput] = useState(" ");
  const [todos, setTodos] = useState([ ]);
  const [editTodo, setEditTodo] = useState(null);
  const todoInput = useRef(null)

  const onEdit = (val) => {
    todoInput.current.focus();
    setEditTodo(val)
  }

  return (
    <div className="App">
      <div className="big-container"> 
      <div className="container">
        <div>
        <Header/>
      </div>
      <div>
        <Form
          input={input} 
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          inputRef={todoInput}
          setEditTodo={setEditTodo}
        />
      </div>

     <TodosList  todos={todos} setTodos={setTodos} setEditTodo={onEdit} />
     {/* <button className="share-btn" onClick={onClick}>Share</button> */}
     <a href="https://web.whatsapp.com/"> 
     <img  className="whatsapp-btn"  src="https://cdn.discordapp.com/attachments/869858371816263710/873239120741273670/pngwing.com.png" width="40px" height="40px">

     </img>
     </a>

      </div>
      
    </div>
    </div>
  );
}

export default App;
