import React, { Component } from 'react';

import Button from './components/Button'
import WorkingBanner from './components/WorkingBanner'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    working: false,
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Broski</h2>
        </div>
        <div style={{ marginLeft:30, marginTop:50}}>
          <WorkingBanner
            isWorking={this.state.working}
            />

        <Button
          label="hello"
          onClick={() => console.log("Hello")}
          />
          </div>
      </div>
    );
  }
}

export default App;
