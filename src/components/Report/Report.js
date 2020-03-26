import React, { Component } from 'react';
import "./Report.css";
import moment from 'moment';
import { setHours } from 'date-fns';
// import Table from 'react-bootstrap/Table'
class Report extends Component {
    render() {
        //  let outputData = JSON.parse(localStorage.getItem(this.props.username))
        //  console.log(outputData)
        //  let keys = Object.keys(outputData.activities)
        // let dates = keys.filter(isPast)

        //  //console.log(keys)

        // function isPast(value) {

        //     var today = value
        //     let values=Object.values(outputData.activities)
            // var diff=values.map((val)=>{
            //    return val.starttime-val.endtime
            // })
        //     let i=0
        //     let j=0
        //     for(j=0;j<today.length;j++){
        //     for(i=0;i<8;i++){
        //    var diff=outputData.today[j].startTime[i]-outputData.today[j].endTime[i]
        //     console.log(diff)}}
            // today = new Date(today.split('/')[2], today.split('/')[1] - 1, today.split('/')[0]);
            // var date2 = `${new Date().getDate()}/${new Date().getMonth() }/${new Date().getFullYear()}`
            // date2 = new Date(date2.split('/')[2], date2.split('/')[1] , date2.split('/')[0]);
            // var timeDiff = Math.abs(date2.getTime() - today.getTime());
            // var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            
            // return diffDays < 7
           // console.log(value)
        
        // }

        // let prevDates = [];
        // // let nowDate = `${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`;
        // for(let i =20;i<27;i++){
        //     prevDates.push(`${new Date().getDate() - i}/${new Date().getMonth()+1}/${new Date().getFullYear()}`)
        //     // prevDates.push(`\n\n\n`)
        //     let now=`${new Date().getDate() - i}/${new Date().getMonth()+1}/${new Date().getFullYear()}`
            
        //     let diff=outputData.activities[this.props.date].map((obj)=>{})
        //     prevDates.push(<br/>)
           
        // }
       // console.log(prevDates);
       //let user1=JSON.parse(localStorage.getItem(this.props.username))
    //    let user1 = JSON.parse(localStorage.getItem(this.props.username))
    //    var dateObj = new Date();
    //    dateObj.setDate(dateObj.getDate()+1)
    //   console.log(user1)
    //    var c=0;
    //    let durlist=[]
    //    var datelist=[]
    //    var taskscou=[]
    //    for(let i=0;i<7;i++){
    //        c=0;
    //        let dur=0;
    //        dateObj.setDate(dateObj.getDate()-1)
    //        console.log(moment( dateObj).format('HH:mm'))
    //        user1.activities.map((item,key)=>{
               
    //                console.log(item)
    //            if((moment(dateObj).format('HH:mm')) === moment(item).format('HH:mm'))
    //            {
    //                    c++;
    //                    dur=dur+(user1.activities.startTime[key])
    //                    dur=Math.abs(moment(item.endTime).diff(moment(item.startTime))) / 60000
    //            }
                   
    //           if(!datelist.includes(moment( dateObj).format('HH:mm')))
    //           {
    //            datelist.push(moment( dateObj).format('HH:mm'))
    //            taskscou.push(c)
    //            durlist.push(dur)}
    //            else{
    //                let h=datelist.indexOf(moment( dateObj).format('HH:mm'))
    //                taskscou[h]=c
    //                durlist[h]=dur
    //            }
               
    //    })
    // }
    //     return (
    //         <div>
    //         <h4>Report of Activities</h4>
    //         {/* {prevDates.map((i)=>
    //         ) */}
    //         <table >
    //         <thead>
    //             <tr>
    //                 <th scope="col">Date</th>
    //                 <th scope="col">Count Of Activities</th>
    //                 <th scope="col">Duration</th>
    //                 </tr>
    //                 </thead>
    //                 <tbody>
    //                 <tr>
    //                 {
    //             datelist.map((item,key)=>{
    //                 return <tr>
    //             <td style={{width:'100%'}} >{item}   </td>
    //             <td style={{width:'100%'}}>{taskscou[key]}   </td>
    //             <td style={{width:'100%'}}>{durlist[key]}    </td>
    //                 </tr>
    //             })
    //             }
    //             </tr>
    //             </tbody>
    //             </table>
    //             </div>
            

    //     )

    // }
    let outputData = JSON.parse(localStorage.getItem(this.props.username))
        let keys = Object.keys(outputData.activities)
        let dates = keys.filter(isPast)
        // console.log(dates)
        function isPast(value) {
            var today = value
            // console.log(today.split('/')[2])
            today = new Date(today.split('/')[2], today.split('/')[1] - 1, today.split('/')[0]);
            var date2 = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
            date2 = new Date(date2.split('/')[2], date2.split('/')[1], date2.split('/')[0]);
            var timeDiff = Math.abs(date2.getTime() - today.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            return diffDays < 7
        }
        let prevDates = [];
        for (let i = 0; i < 7; i++) {
            let date = new Date();
            let prevdate = date.getDate() - i;
            date.setDate(prevdate)
            let nowDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
            prevDates.push(nowDate)
        }
        //  console.log(prevDates);
        let index = 0 , count=0;
        return (
            <div className='Report' style={{backgroundColor:'pink'}}>
                {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous" />
                <link rel="stylesheet" type="text/css" href="styles.css" /> */}
                <div className="Header"> ACTIVITIES REPORT FOR PAST 7 DAYS
                </div>
                <div className="TableDiv">
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">no.</th>
                                <th scope="col">Date</th>
                                <th scope="col">Count of Activities</th>
                                <th scope="col">Total Duration</th>
                            </tr>
                        </thead>
                        {prevDates.map(date => {
                            if (dates.includes(date)) {
                                // count = outputData.activities[date].length;
                                let duration = 0;
                                let durDisplay
                                let endtest=new Date()
                                endtest.setHours(23,59)
                                outputData.activities[date].map((obj) => {
                                    if(moment(obj.endTime).format('HH:mm') !==moment(endtest).format('HH:mm')){
                                    count++;
                                    duration = duration + (Math.floor((moment(obj.endTime).diff(moment(obj.startTime))) / 60000))
                                    durDisplay = `${Math.floor((duration/60))} Hrs ${(duration%60)} mins` ;
                                    }
                                })
                                // console.log(`count of activities for ${date} is ${count} and duration is ${duration}`);
                                index++;
                                return (
                                    <tbody>
                                        <tr>
                                            <td scope="row">{index}</td>
                                            <td>{date}</td>
                                            <td> {count}</td>
                                            <td>{durDisplay}</td>
                                        </tr>
                                    </tbody>
                                )
                            }
                            else {
                                index++
                                return (
                                    <tbody>
                                        <tr>
                                            <td scope="row">{index}</td>
                                            <td>{date}</td>
                                            <td> 0 </td>
                                            <td>{"-"}</td>
                                        </tr>
                                    </tbody>
                                )
                            }
                        })}
                    </table>
                </div>
            </div >
        )
    }
}

export default Report;