import  React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodosList from './components/TodosList';

function App() {
  const [input, setInput] = useState(" ");
  const [todos, setTodos] = useState([ ]);
  const [editTodo, setEditTodo] = useState(null);





  return (
    <div className="App">
      <div className="big-container"> 
      <div className="container">
        <div>
        <Header/>
      </div>
      <div>
        <Form  input={input} 
        setInput={setInput}
        todos={todos} setTodos={setTodos}  editTodo={editTodo}  setEditTodo={setEditTodo}/>
      </div>

     <TodosList  todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
      </div>
    </div>
    </div>
  );
}

export default App;
