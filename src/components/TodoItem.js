import React from "react"
import "./TodoItem.css"

function TodoItem(props){
    console.log(props);
    return(
        <div className="todo-item">
            <input type="checkbox" />
            <p>{props.todoText}</p>

        </div>
    )
}

export default TodoItem