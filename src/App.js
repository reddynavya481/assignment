import React,{Component} from 'react';
// import {Switch,Route} from 'react-router-dom'
import SignUp from './SignUp/SignUp'
// import AddActivity from './Activities/AddActivity';
// import ViewActivity from './Activities/ViewActivity';
class App extends Component{
  render(){
    return(
      <div align="center">
        {/* <h2 align="center">TASK TRACKER</h2> */}
         {/* <Switch> */}
        {/* <Route path="/AddActivity" ><AddActivity name={this.}/></Route>  */}
        {/* <Route path="/" exact component={SignUp}/> */}
        {/* <Route path="/AddActivity.js" component={AddActivity}/> */}
        {/* </Switch> */}
      <SignUp/>
      </div>
    )
  }
}

export default App;
