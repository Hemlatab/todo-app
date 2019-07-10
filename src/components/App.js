import React from 'react';
import './App.css';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
 import TodoItem from "./TodoItem"


  function App (){
    return(
      <div className="todo-list">
        {/* <Header />
        <MainContent />
        <Footer /> */}
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    )
  }

  export default App;
  


