import React from "react"
import "./Header.css"

function Header(props){
    return(
        <div className="container">

        <h2>{props.title}</h2>
        </div>
    )
}

export default Header