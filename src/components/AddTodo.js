import React from "react";
import './AddTodo.css';

function AddTodo(props){
    console.log(props);
    return(
        <form className="todotext">
            <input type="text" name="todotext" placeholder="Add Todo item" value={props.value} onChange={props.handleChange}/>
            <button type="submit" onClick={props.handleAddTodo}>Add</button>
        </form>
    )
}

export default AddTodo;