import React from 'react'

class Learn extends React.Component{
    componentDidMount(){

fetch("https://jsonplaceholder.typicode.com/todos")
.then(function(response){
    let todos = response.json()
    console.log(todos)
})
    }
    render(){

        return(
            <div>
                <h1>Learn by doing</h1>
            </div>
        )
    }
}
export default Learn