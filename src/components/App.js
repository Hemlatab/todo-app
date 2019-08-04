import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import todosData from "./todosData";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem"


  class App extends React.Component{
    constructor(props){
      super(props); 
      this.state = {value:'',todoItems:[]};
      this.handleChange=this.handleChange.bind(this);
      this.handleAddTodo=this.handleAddTodo.bind(this);
    }
    // const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)
    handleChange(event){
      // console.log(event.target.value)
      this.setState({value:event.target.value});
    }
    handleAddTodo(event){
    //  this.setState({todoItems:[]});
    event.preventDefault();
    if(this.state.value !== ""){
      // this.state.todoItems.push(this.state.value);
      this.setState({value:'',todoItems:[...this.state.todoItems,this.state.value]});
    }
   
    }

    render(){
    return(
      <div className="todo-list">
       <Header title='Todo App'/>
       
       <AddTodo  value={this.state.value} handleChange={this.handleChange} handleAddTodo={this.handleAddTodo}/>
       {this.state.todoItems.map(function(item){
        
        return <TodoItem todoText={item}/>
       })}
        <Footer />
      </div>

    )
}
  }
  export default App
  


