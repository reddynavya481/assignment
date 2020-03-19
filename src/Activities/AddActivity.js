
import React,{Component} from 'react'
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Style.css'
import axios from 'axios'
class AddActivity extends Component{
    state={
        taskname:'',
        taskList:[],
        starttime:"00:00",
        endtime:"00:00",
        date:new Date()
    }
    inputChangeHandler=(e)=>{
        this.setState({taskname:e.target.value})
    }
    endTimeHandler=(e)=>{
        this.setState({
            endtime:e.target.value
        })
    }
    startTimeHandler=(e)=>{
        this.setState({
            starttime:e.target.value
        })
    }
    buttonHandler=(task,starttime,endtime)=>{
        let item = {
            value: task,
            starttime: starttime,
            endtime:endtime,
            diff:endtime-starttime
          }
          let newList = [
              ...this.state.taskList,
              item
            ]
            this.setState({
              taskList:newList,
              taskname: '',
            })
        let i=0;
        let lenOfTasks;
        this.user=JSON.parse(localStorage.getItem(this.props.name));
        lenOfTasks=this.user.today.length;
        if(lenOfTasks===7)
        {
          this.user.today.shift()
        }
         while(i<lenOfTasks){
           i++;
         }
        
         this.user.today[i-1].date.push(this.state.date);
         this.user.today[i-1].startTime.push((this.state.endtime-this.state.starttime)/60000)
         this.user.today[i-1].endTime.push(this.state.endtime)
         this.user.today[i-1].tasks.push(this.state.taskname)
         localStorage.setItem(this.props.name,JSON.stringify(this.user))
         this.setState({
            taskname:'',
        taskList:[],
        starttime:"00:00",
        endtime:"00:00",
        date:new Date() 
         })
         const data1={
             activity:this.state.taskname,
             startTime:this.state.starttime,
             endTime:this.state.endTime,
             date:this.state.date
         }
         axios.post('http://localhost:3000/activity',data1)
        alert("added ur activity")
    }
    handleChangedate=date=>{
        this.setState({date:date})

    }

render(){
    let user=JSON.parse(localStorage.getItem(this.props.name))
    console.log(user)
    return(
        <div align="center" className="AddActivity">
        <label>Enter Activity Name</label>
            <input placeholder="Enter Activity Name" type="text" onChange={this.inputChangeHandler} value={this.state.taskname}/><br/><br/>
            <label>Enter Start Time</label>
            <TimePickerComponent
                onChange={this.startTimeHandler}
                value={this.state.starttime}> </TimePickerComponent><br></br> 
            <label>Enter End Time</label>
            <TimePickerComponent
                onChange={this.endTimeHandler}
                value={this.state.endtime}/><br/><br/>
            <label>Enter date</label>
            <DatePicker dateFormat='dd-MM-yyyy' selected={this.state.date} value={this.state.date} onChange={this.handleChangedate} /><br/><br/> 
            <button id="btn1"
                type="submit"
                onClick={()=> this.buttonHandler(this.state.taskname,this.state.starttime,this.state.endtime)} 
                >Add</button><br/><br/>
        </div>
    )
}
}
export default AddActivity