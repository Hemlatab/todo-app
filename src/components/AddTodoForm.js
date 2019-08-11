import React from 'react';
import './AddTodoForm.css';
import TodoItem from './TodoItem';

class AddTodoForm extends React.Component{
    //state is an object 
    //todoText- store value from input text 
    //todoItems-store todoitems
    state={
        
        todoText:'',
        todoItems:[],
        currentIndex:0
    }
    //we receive event on change event
    //setstate is used to update state property

    handleTodoText = (event) => {
        let text = event.target.value
        let data = 'test data'
        this.setState({todoText:text,testing:data})
    }


    handleAddTodo = (event) => {
        event.preventDefault()
        if(this.state.todoText!==''){

            this.setState((state) => {
                return({
                    todoItems:[...state.todoItems,{title:state.todoText,completed:false, id:state.currentIndex}],
                    todoText:'',
                    
                    currentIndex:state.currentIndex +1
                })
            })
        }
    
        
    }

    handleCheckbox = (id) => {
       
       let result = this.state.todoItems.map(function(todo){
           
           if(todo.id === id){
                return{
                    completed:!todo.completed,
                    id:todo.id,
                    title:todo.title
                }
           }
           else{
                return todo
           }

       })
       console.log(result)

       this.setState({todoItems:result})
    }
    handleDelete = (event,id) => {
       
        let res = this.state.todoItems.filter(function(task){
            return task.id !== id;
            
        })
        this.setState({todoItems:res})
        console.log(res)
      

    }
    render(){
       
        return(
            // react.fragment
        <> 
        <form>
            <input type="text" name="todoText" value={this.state.todoText} onChange={this.handleTodoText}/>
            <button type="submit" name="AddTodo" onClick={this.handleAddTodo}>Add</button>
        </form> 
            {this.state.todoItems.map((task)=>{
          
        return <TodoItem 
         todo={task.title}
         handleCheckbox={this.handleCheckbox} 
         handleDelete={this.handleDelete}
         id={task.id} 
         status={task.completed} 
         key={task.id}/>
           })}
          
          
        </>
        )
    }
}

export default AddTodoForm