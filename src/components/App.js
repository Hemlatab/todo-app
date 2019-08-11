import React from 'react';
import AddTodoForm from './AddTodoForm';
import Header from './Header';
import './App.css';

function App(){
  return(
    <div className="app">
  <Header />
  <AddTodoForm />
    </div>
  )
}

export default App;