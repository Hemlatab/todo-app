import React from 'react';
import './Login.css';
class Login extends React.Component{

    state={
        username:'',
        password:''
        
    };
     handleChange = (event)=>{
         let name = event.target.name;
        //let name = 'username'
        let value = event.target.value;
        this.setState({[name]:value})  
        console.log(event.target);   

        
    }
    // handlePassword = (event)=>{
    //     let value= event.target.value;
    //       this.setState({password:value})
    // }
    handleSubmit = (event)=>{
       
        event.preventDefault();
        alert(`username - ${this.state.username} password - ${this.state.password}`);
    
    }
    render(){
        return(
            <div className="login">
            <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Username" name="username" onChange={this.handleChange}/>
                    <input type="text" placeholder="password" name="password" onChange={this.handleChange}/>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
    
}


export default Login