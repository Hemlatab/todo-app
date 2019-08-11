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

            // this.setState({
            //     todoItems:[...this.state.todoItems,{title:this.state.todoText,completed:false, id:this.state.currentIndex}],
            //     todoText:'',
                
            //     currentIndex:this.state.currentIndex +1
            // })
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
       
        let index=this.state.todoItems[id];
        console.log(index.id);
        let result = this.state.todoItems.filter(()=>{
            return index.id!==id;
            
        })
    
        console.log(id);
        console.log(this.state.todoItems[id].completed)
        // let title=this.state.todoItems[id].title;
        // let status=this.state.todoItems[id].completed;
        // this.setState({
        //     todoItems:[...result,{title:title,completed:!status}]})
        this.setState((state,props)=> {
            return ({todoItems:[...result,{title:state.todoItems[id].title,completed:!state.todoItems[id].completed}]})
        })
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
          
        return <h3 className={task.completed?'complete':''} key={task.id}><input type="checkbox" onClick={()=>this.handleCheckbox(task.id)} />{task.title}</h3>
        //return <TodoItem todo={task.title} handleCheckbox={this.handleCheckbox} id={id} status={this.state.todoItems[id].completed} key={id}/>
           })}
          
        </>
        )
    }
}

export default AddTodoForm