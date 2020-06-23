import React from 'react';
import { useStopwatch } from 'react-timer-hook';
import {TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography"

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
   
          <TextField 
            style={{margin: '5px 10px '}} 
            type="text" name="task" 
            placeholder="Add New task"/>
        </label>
        <button onClick={reset}>Add</button>
      </form>
      
    </div>
  );
}

export default MyStopwatch;