import React from "react"
import Header from "./Header"
import "./Footer.css"

function Footer(){
    return(
        <div className="copyright">
            <p className="copyright">Copyright &copy; {new Date().getFullYear()} </p>
        </div>
    )
}

export default Footer