import React from 'react';
import { useStopwatch } from 'react-timer-hook';
import {IconButton, TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography"
//import Clock from "./components/Clock";

function MyStopwatch() {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });


  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '100px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <Typography>{isRunning ? 'Running' : 'Not running'}</Typography>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
      <form>
        <label>
          Task
          <TextField style={{margin: '0 10px'}} type="text" name="task" />
        </label>
        <button onClick={reset}>Add</button>
      </form>
      <IconButton onClick={start}>Create New</IconButton>
    </div>
  );
}

export default MyStopwatch;