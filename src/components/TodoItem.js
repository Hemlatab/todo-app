
import React from 'react';


const TodoItem = (props) => {
    return(
<h3 key={props.id} className={props.status?'complete':''}><input type="checkbox" onClick={()=>props.handleCheckbox(props.id)} />{props.todo}</h3>
    )
}

export default TodoItem;

