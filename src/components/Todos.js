import React from "react";

function Todos(props){
    console.log(props)
    return(
        <div>
            <p>todos items</p>
            {props.todoitems.map(function(item){
                return <p>{item}</p>
               
            })}
        </div>
    )
}

export default Todos;