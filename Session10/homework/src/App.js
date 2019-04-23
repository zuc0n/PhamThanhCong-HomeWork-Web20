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
        <button onClick={() => this.add()} className = 'button-1'> + </button>
        <p className="count">{count}</p>
        <button onClick={() => this.sub()} className = 'button-2'> - </button>
      </div>
    );
  }
}

export default App;
