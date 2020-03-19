import React,{Component} from 'react'
import Aux from '../hoc/Aux'
import ViewActivity from '../Activities/ViewActivity'
import './SignUp.css'
import axios from 'axios'
class SignUp extends Component{
    state={
        username:'',
        password:'',
        submit:false,
        today:[{
            date:[],tasks:[],endTime:[],
            startTime:[]}],
        
    }
   
    inputChangeHandler=(e)=>{
        console.log(e.target.value+" "+e.target.name)
        this.setState({
           [e.target.name]:e.target.value
        })
    }
    submitHandler=()=>{
       // console.log("hello i am submit"+this.state.username)
        this.setState({submit:true})
        if(!localStorage.getItem(this.state.username)){
            localStorage.setItem(this.state.username,JSON.stringify(this.state))
        }
        else{
            console.log(JSON.parse(localStorage.getItem(this.state.username)))
            
        }
        const data={
            username:this.state.username,
            password:this.state.password
        }
        axios.post('http://localhost:3000/users',data)
    }
    render(){
        return(
           <div>
               
               <input type="text" className="inputi" placeholder="enter username" name="username" onChange={this.inputChangeHandler}/><br/>
               <input type="password" className="inputi" placeholder="enter password" name="password" onChange={this.inputChangeHandler}/><br/>
               <button className="submiti" onClick={this.submitHandler}>Submit</button>
               { this.state.submit?
                   <ViewActivity name={this.state.username}/>
               :null}
           </div> 
        )
    }
}

export default SignUp