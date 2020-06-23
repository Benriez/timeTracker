import React from 'react';
//import { useStopwatch } from 'react-timer-hook';
//import {IconButton, TextField} from "@material-ui/core";
//import Typography from "@material-ui/core/Typography"
import Clock from "./components/Clock";
import MyStopwatch from "./components/Timer"

class App extends React.Component {
  render (){
    return (
      <div>
        <Clock />
        <h1 style={{textAlign: 'center'}}>React Timetracker</h1>
        <MyStopwatch />


      </div>
    );
  }
}

export default App;