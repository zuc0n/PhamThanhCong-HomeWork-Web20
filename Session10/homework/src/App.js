import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
  super();
  this.state = {count: 0}
  };

  add() {
    this.setState({
      count: this.state.count + 1
    })
  }

  sub(){
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    const {count} = this.state;
    return (
      <div> 
        <button className = "button1" onClick={() => this.add()} > + </button>
        <p className="count">{count}</p>
        <button className = "button2" onClick={() => this.sub()} > - </button>
      </div>
    );
  }
}

export default App;
