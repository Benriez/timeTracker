import React from 'react';

import Clock from "./components/Clock";

import './App.css';

class App extends React.Component {
  
  render () {
    return (
      <div className="container">
        <h1>Time-Tracker-App</h1>
        <Clock />
        <p>0</p>
        <button>Start</button>
        <p>time tracked</p>
      </div>
      
    )
  }

}


export default App;