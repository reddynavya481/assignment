import React, {Component} from "react";
import AddActivity from './AddActivity'
import './Style.css'
class ViewActivity extends Component{
    state={
        add:false
    }
    add(){
       this.setState({add:true})
    }
    render(){
        let user=JSON.parse(localStorage.getItem(this.props.name))
            return(
                <div align="center">
                <button onClick={()=>this.add()} style={{borderRadius:'10px'}}>Add Activity</button>
                <ul>
                    {user.today.map((item,key)=>{
                    return item.tasks.map((item1,key)=>{
                    return<div className="Style"> <strong>Date:</strong>{item.date[key]} <br/><strong>Task</strong>:{item1}<br/> <strong>duration</strong>:{item.startTime[key]}</div>})
                    })}
                </ul>
                {
                    this.state.add?<AddActivity name={this.props.name}/>:null
                }
                
                </div>
                )
            }}
    

export default ViewActivity