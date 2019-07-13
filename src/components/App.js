import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Todos from "./Todos";
import AddTodo from "./AddTodo";


  function App (){
    let items= ['read','write','learn','code']
    return(
      <div className="todo-list">
       <Header />
       <AddTodo />
        <Todos todoitems={items} isactive='test' />
        <Footer />
      </div>
    )
  }

  export default App;
  


