import React from "react";
import './AddTodo.css';

function AddTodo(){
    return(
        <form className="todotext">
            <input type="text" name="todotext" placeholder="Add Todo item" />
            <button type="submit">Add</button>
        </form>
    )
}

export default AddTodo;