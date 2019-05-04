import React from 'react';
import './App.css';

class Child extends React.Component {
  constructor(){
    super()
    this.state = {text: ""}
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e){
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return(
      <div>
        <input onChange={this.handleInputChange} />
        <button onClick={() => this.props.onSubmit(this.state.text)}>
          Submit 
        </button>
      </div>
    );
  }
}

class Parent extends React.Component {
  constructor(){
    super();
    this.state = {text: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(text) {
    this.setState({
      text: text
    })
  }

  render(){
    return (
      <div>
        <h3>{this.state.text}</h3>
        <Child onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default Parent;
