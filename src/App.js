import React, { Component } from 'react';
import './App.css';
import Timer from "./components/Timer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Stopwatch</h1>
        <Timer />
      </div>
    );
  }

}
export default App;