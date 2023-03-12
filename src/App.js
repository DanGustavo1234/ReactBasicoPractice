
import React from 'react'
import TodoCounter from "./TodoCounter"
import TodoSearch from "./TodoSearch"
import TodoList from "./TodoList.js"
import CreateTodoButton from './CreateTodoButton'





function App() {
  return (
    <div>
    <TodoCounter/>
    <h2>You cmplete two of three Todos</h2>
    <TodoSearch/>
   
   <TodoList/>
    <CreateTodoButton/>



   
    

    </div>

  );
}

export default App;
