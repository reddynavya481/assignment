import React, {Component} from "react";
import AddActivity from './AddActivity'
import './Style.css'
// import SideDrawer from '../components/SideDrawer'
// import Toolbar from '../components/Toolbar/Toolbar'
class ViewActivity extends Component{
    state={
        add:false
        // sidedraweropen:false
    }
    add(){
       this.setState({add:true})
    }
    // drawerHandler = () => {
    //     this.setState((prevState)=>{
    //       return{sidedraweropen:!prevState.sidedraweropen}
    //     });
    //   }
   
    render(){
        // let sidedrawer;
        // if(this.state.sidedraweropen)
        // {
        //   sidedrawer=<SideDrawer/>
        // }
        let user=JSON.parse(localStorage.getItem(this.props.name))
            return(
                <div align="center">
                
                {/* <h3>Hello {this.props.name}</h3> */}
                {/* <div>
                <Toolbar drawerClicked={this.drawerHandler} username={this.props.name}/>
                    {sidedrawer}
                </div> */}
                <button onClick={()=>this.add()} style={{borderRadius:'10px'}}>Add</button>
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