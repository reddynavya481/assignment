// import React from 'react';
// import './SideDrawer.css';
// import {Switch,Route} from 'react-router-dom'
// import {BrowserRouter} from 'react-router-dom'
// import AddActivity from '../Activities/AddActivity'
// import {Switch,Route,Link} from 'react-router-dom'
// const sidedrawer = props =>(
//    <nav className="side">
//        <ul>
//            {/* <li><a href="AddActivity">Add Activity</a></li>
//            <BrowserRouter>
//            <Switch>
//            <Route path="/AddActivity" ><AddActivity/></Route>
//            </Switch></BrowserRouter>
//            <li><a href="/">View Report</a></li> */}
//            <div>
//                 <Menu >
//                 <Link to="/activities">activities</Link>
//                 <Link to="/report">report</Link>
//       </Menu>
//         <h1>Hello {this.props.name}</h1>
//       <Switch>
//           <Route path="/activities">
//             <Activities />
//           </Route>
//           <Route path="/report">
//             <Reports />
//           </Route>
//         </Switch>
//             </div>

//        </ul>
//     </nav>
// );

// export default sidedrawer;
import React from "react";
import { slide as Menu } from "react-burger-menu";
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Activities from '../Activities/AddActivity';
import Reports from './Report/Report';
import './SideDrawer.css';

class SideDrawer extends React.Component {
    render() {
        return (
            <div >
                
                <Menu >
                    <Link to="/activities">Activities</Link>
                    <Link to="/report">Report</Link>
                </Menu>
                <h1 style={{backgroundColor:'pink',height:'60px'}}>Hello {this.props.username}</h1>
                <button onClick={this.props.onLogout} className="LogoutBtn">LOG OUT</button>
              
                {/* <h1>Hello {this.props.name}</h1> */}
                <Switch>
                    <Route path="/activities">
                        <Activities username={this.props.username}/>
                    </Route>
                    <Route path="/report">
                        <Reports username={this.props.username} />
                    </Route>
                    <Route path="/">
                        <Activities username={this.props.username}/>
                    </Route>
                </Switch>
            </div>

        );
    }
};
export default SideDrawer