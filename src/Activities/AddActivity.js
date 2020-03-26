
import React,{Component} from 'react'
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Style.css'
import moment from 'moment'
// import SideDrawer from '../components/SideDrawer'
// import Toolbar from '../components/Toolbar/Toolbar'
import Output from '../components/Output/Output'
class AddActivity extends Component{
//     state={
//         taskname:'',
//         taskList:[],
//         starttime:"00:00",
//         endtime:"00:00",
//         date:new Date(),
//         sidedraweropen:false
//     }
constructor(props) {
    super(props);
    let currentDate = new Date();
     let currentDateEndTime = new Date();
     currentDateEndTime.setHours(23, 59);
    this.state = {
        activity: '',
        startTime: new Date(),
        endTime:currentDateEndTime,
        dateList: [],
        activityDate: new Date(),
        present: new Date(),
        display: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`,
        displayActivities: false,
    }
}
    inputChangeHandler=(e)=>{
        this.setState({activity:e.target.value})
    }
    endTimeHandler=(e)=>{
        this.setState({
            endTime:e.target.value
        })
        console.log(this.state.endTime)
    }
    startTimeHandler=(e)=>{
        this.setState({
            startTime:e.target.value
        })
        console.log(this.state.startTime)
    }
//     buttonHandler=(task,starttime,endtime)=>{
//         let item = {
//             value: task,
//             starttime: starttime,
//             endtime:endtime,
//             diff:endtime-starttime
//           }
//           let newList = [
//               ...this.state.taskList,
//               item
//             ]
//             this.setState({
//               taskList:newList,
//               taskname: '',
//             })
//         let i=0;
//         let lenOfTasks;
//         this.user=JSON.parse(localStorage.getItem(this.props.name));
//         lenOfTasks=this.user.today.length;
//         if(lenOfTasks===7)
//         {
//           this.user.today.shift()
//         }
//          while(i<lenOfTasks){
//            i++;
//          }
        
//          this.user.today[i-1].date.push(this.state.date);
//          this.user.today[i-1].startTime.push((this.state.endtime-this.state.starttime)/60000)
//          this.user.today[i-1].endTime.push(this.state.endtime)
//          this.user.today[i-1].tasks.push(this.state.taskname)
//          localStorage.setItem(this.props.name,JSON.stringify(this.user))
//          this.setState({
//             taskname:'',
//         taskList:[],
//         starttime:"00:00",
//         endtime:"00:00",
//         date:new Date() 
//          })
//         alert("added ur activity")
//     }
    handleChangedate=date=>{
        this.setState({activityDate:date})

    }
//     drawerHandler = () => {
//         this.setState((prevState)=>{
//           return{sidedraweropen:!prevState.sidedraweropen}
//         });
//       }

// render(){
//     let user=JSON.parse(localStorage.getItem(this.props.name))
//     // console.log(user)
//     // drawerHandler = () => {
//     //     this.setState((prevState)=>{
//     //       return{sidedraweropen:!prevState.sidedraweropen}
//     //     });
//     //   }
//     let sidedrawer;
//         if(this.state.sidedraweropen)
//         {
//           sidedrawer=<SideDrawer name={this.props.name}/>
//         }
//     return(

//         <div >
//          <div>
//                 <Toolbar drawerClicked={this.drawerHandler} username={this.props.name}/>
//                     {sidedrawer}
//                 </div>
//         <label>Enter Activity Name</label>
//             <input placeholder="Enter Activity Name" type="text" onChange={this.inputChangeHandler} value={this.state.taskname}/><br/><br/>
//             <label>Enter Start Time</label>
//             <TimePickerComponent
//                 onChange={this.startTimeHandler}
//                 value={this.state.starttime}> </TimePickerComponent><br></br> 
//             <label>Enter End Time</label>
//             <TimePickerComponent
//                 onChange={this.endTimeHandler}
//                 value={this.state.endtime}/><br/><br/>
//             <label>Enter date</label>
//             <DatePicker dateFormat='dd-MM-yyyy' selected={this.state.date} value={this.state.date} onChange={this.handleChangedate} /><br/><br/> 
//             <button id="btn1"
//                 type="submit"
//                 onClick={()=> this.buttonHandler(this.state.taskname,this.state.starttime,this.state.endtime)} 
//                 >Add</button><br/><br/>
//                 <ul>
//                     {user.today.map((item,key)=>{
//                     return item.tasks.map((item1,key)=>{
//                     return<div className="Style"> <strong>Date:</strong>{item.date[key]} <br/><strong>Task</strong>:{item1}<br/> <strong>duration</strong>:{item.startTime[key]}</div>})
//                     })}
//                 </ul>
//         </div>
//     )
// }
// }
  




// dateChangeHandler = date => {
//     this.setState({
//         activityDate: date
//     })
// }

onAddActivityHandler = () => {
    
    this.setState({
        displayActivities: true
    })
    let localStorageData = null;
    let item = {
        activity: this.state.activity,
        startTime: this.state.startTime,
        endTime: this.state.endTime,
    }

    localStorageData = JSON.parse(localStorage.getItem(this.props.username));

    let currDate = `${this.state.activityDate.getDate()}/${this.state.activityDate.getMonth() + 1}/${this.state.activityDate.getFullYear()}`
    let dateExists = true;

    if (localStorageData.activities != null) {
        let dates = Object.keys(localStorageData.activities)
        dateExists = dates.includes(currDate);
        //console.log(Object.keys(localStorageData.activities).length);
        // let lenActivities = Object.keys(localStorageData.activities).length;
        //console.log(localStorageData.activities[dates[0]]);
        // if (lenActivities === 7) {
            // delete localStorageData.activities[dates[0]]
        }
    
    if (dateExists) {
        localStorageData.activities[currDate].push(item)
        localStorage.setItem(this.props.username, JSON.stringify(localStorageData))

    }

    else {
        localStorageData.activities = {
            ...localStorageData.activities,
            [currDate]: [item]
        };
        localStorage.setItem(this.props.username, JSON.stringify(localStorageData))

    }
}

handlePrevious = () => {
    let date = this.state.present;
    date.setDate(date.getDate() - 1)
    this.setState({ present: date })
    let currDate = `${this.state.present.getDate()}/${this.state.present.getMonth() + 1}/${this.state.present.getFullYear()}`
    this.setState({ display: currDate })
}
handlePresent = (date) => {
    this.setState({ present: date })
}
handleNext = () => {
    let date = this.state.present;
    date.setDate(date.getDate() + 1)
    this.setState({ present: date })
    let currDate = `${this.state.present.getDate()}/${this.state.present.getMonth() + 1}/${this.state.present.getFullYear()}`
    console.log(currDate)
    this.setState({ display: currDate })
}

onShowActivitiesHandler = () => {
    this.setState({
        displayActivities: !this.state.displayActivities
    })
}

render() {

    return (
        <div className="Activities">
            {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous" /> */}
             {/* <link rel="stylesheet" type="text/css" href="Style.css" /> */}
             {this.state.displayActivities? (
             <div><div>
                <button className="submiti"
                    onClick={() => this.onShowActivitiesHandler()}>{!this.state.displayActivities ? 'ViewActivities' : 'Add Activities'}</button>
            </div>
            <div className='container' style={{backgroundColor:'pink',width:'50%',height:'fit-content'}}>
            <div class="table-wrapper-scroll-y my-custom-scrollbar">
                {this.state.displayActivities ?
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col" >
                                    <div className="form-group">
                                        <button className="submiti" onClick={this.handlePrevious}>Previous</button>
                                    </div>
                                </th>
                                <th colSpan='3' scope="col">
                                    <div className="input-group form-group">
                                        <DatePicker className="form-control" placeholder="date" onChange={this.handlePresent} selected={this.state.present} value={this.state.present} />
                                    </div>
                                </th>
                                <th scope="col">
                                    <div className="form-group">
                                        <button className="submiti" onClick={this.handleNext}>Next</button>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Title</th>
                                <th scope="col">Start Time</th>
                                <th scope="col">End Time</th>
                                <th scope="col">Duration</th>
                            </tr>
                        </thead>
                        

                        <Output date={this.state.display} username={this.props.username}></Output>
                        
                    </table>

                    : null
                }
            </div >
            </div>
            </div>)
             :
           
            (<div className="InputActivityDiv" style={{backgroundColor:'pink' ,height:'260px'}}>
            <fieldset>
              <legend>Activity:</legend>
                    <label style={{width:'500px'}}>Activity Name:</label><input 
                    type="text"
                    placeholder="Activity Name"
                    value={this.state.activity}
                    onChange={(event) => this.inputChangeHandler(event)} className="inp"/><br/><br/>

                {/* <div className="InputTime"> */}
                    <label>Date :</label>
                    <DatePicker
                        dateFormat='dd-MM-yyyy'
                        selected={this.state.activityDate}
                        onChange={this.handleChangedate}
                        className="inp"
                        value={this.state.activityDate}
                    /><br/><br/>
                {/* </div> */}

                {/* <div className="InputTime"> */}
                    {/* <label style={{ fontWeight: "bold" }}> */}
                    Start Time:
                    <TimePickerComponent
                        format={'HH:mm'}
                        onChange={this.startTimeHandler}
                        className="inp"
                        value={this.state.startTime}
                    /><br/><br/>
                {/* </div> */}

                {/* <div className="InputTime"> */}
                    {/* <label style={{ fontWeight: "bold" }}> */}
                    End Time :
                    <TimePickerComponent
                        format={'HH:mm'}
                        onChange={this.endTimeHandler}
                        className="inp"
                        value={this.state.endTime}
                    /><br/><br/>
                {/* </div> */}

                <button 
                    className="submiti" onClick={() => this.onAddActivityHandler()}>Add Activity</button>
                    </fieldset>
                    <button className="submiti"
                    onClick={() => this.onShowActivitiesHandler()}>{!this.state.displayActivities ? 'View Activities' : 'Add Activities'}</button>
            </div>
            )}
           </div>
    )
}
}

export default AddActivity;
// export default AddActivity