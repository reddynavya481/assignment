import React,{Component} from 'react'
// import Aux from '../hoc/Aux'
// import AddActivity from '../Activities/AddActivity'
import './SignUp.css'
import SideDrawer from '../components/SideDrawer'
//  import sand from '../SignUp/sandclock.jpg'
class SignUp extends Component{
    state={
        username:'',
        password:'',
        click:false,
        today:[{
            date:[],tasks:[],endTime:[],
            startTime:[]}],
        activities:[{
            activity:"",startTime:[],endTime:[]
        }]
        
    }
   
    inputChangeHandler=(e)=>{
        // console.log(e.target.value+" "+e.target.name)
        this.setState({
           [e.target.name]:e.target.value
        })
        e.preventDefault()
    }
    submitHandler=()=>{
       // console.log("hello i am submit"+this.state.username)
    //    this.props.history.push("submit")
       if(this.state.username==="" || this.state.password==="")
    {
        alert("Enter Credentials")
        this.setState({click:false})
     
    }
    else{

        this.setState({click:true})
        
        if(!localStorage.getItem(this.state.username))
        {
            localStorage.setItem(this.state.username,JSON.stringify(this.state))
        }
        else{
            let validity=JSON.parse(localStorage.getItem(this.state.username))
           console.log(validity.username)
            if(validity.username===this.state.username && validity.password===this.state.password){
            console.log(JSON.parse(localStorage.getItem(this.state.username))) 
            }  
            else{
                console.log(validity.username+"   "+this.state.username)
                console.log(validity.password+"  "+this.state.password)
                this.setState({click:false})
            alert("wrong crendentials! Try again")}
        }
        
        // console.log("u r first")
    }
}
    handleLogout = (e) => {
        this.setState({
            username: null,
            password: null,
            click: false
        });
    }
    render(){
       
        return(
            
           <div>
              
               {this.state.click?
               <div>
                   {/* <AddActivity name={this.state.username}/> */}
                   {/* {console.log("u r second")} */}
                   <SideDrawer username={this.state.username} onLogout={this.handleLogout}> </SideDrawer>
               </div>:
               
            <div style={{backgroundColor:'pink',
            backgroundPosition: 'center'
            }}>
            
                <h2 align="center" >TASK TRACKER</h2>
            Username:<input type="text" className="inputi" placeholder="enter username" name="username" onChange={this.inputChangeHandler}/><br/>
            Password:<input type="password" className="inputi" placeholder="enter password" name="password" onChange={this.inputChangeHandler}/><br/>
               <button className="submiti" onClick={this.submitHandler}>SignIn</button>
                </div>}
              
           </div> 
        )
    }
}

export default SignUp