
import React from 'react';
import './TodoItem.css';

const TodoItem = (props) => {
    return(
<h3 
key={props.id} 
className={props.status?'complete':''}>
<input type="checkbox" 
onClick={()=>props.handleCheckbox(props.id)} />
{props.todo}
<button className="delete-btn" type="button" 
onClick={(event)=>props.handleDelete(event,props.id)}>X
</button>
</h3>
    )
}

export default TodoItem;

