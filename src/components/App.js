import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import todosData from "./todosData";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem"


  function App (){
    const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)
    return(
      <div className="todo-list">
       <Header />
       <AddTodo />
        {todoItems}
        <Footer />
      </div>
    )
  }

  export default App;
  


