import React, { Component } from 'react';
import moment from 'moment';
//import Modal from 'react-modal';
import './Output.css';

class Report extends Component {
    render() {
        let c = 0;
        let outputData = JSON.parse(localStorage.getItem(this.props.username))
        console.log(outputData)
        let dates = Object.keys(outputData.activities)
        let bool = dates.includes(this.props.date)
        //console.log(this.props.date);
        if (bool) {
            return outputData.activities[this.props.date].map((obj) => {
                c++
                return (
                    <tbody border="1px">
                        <tr>
                            <td scope="row">{c}</td>
                            <td>{obj.activity}</td>
                            <td> {moment(obj.startTime).format('HH:mm')}</td>
                            <td>{moment(obj.endTime).format('HH:mm')}</td>
                            <td>{Math.abs(moment(obj.endTime).diff(moment(obj.startTime))) / 60000} minutes</td>

                        </tr>
                    </tbody>
                )
            })
        }
        else {
            return (<tbody><tr><td colSpan="5" ><p>No activities found on this date </p></td></tr></tbody>)
        }

    }
}

export default Report;