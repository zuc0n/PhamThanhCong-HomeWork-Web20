import React, {Component} from 'react';
import Child from './Component/Child'
import './App.css';


class Parent extends React.Component {
  constructor(){
    super();
    this.state = {
      text: "",
      submit: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e){
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit(){
    this.setState({
      submit: this.state.text
    })
  }

  render(){
    return (
      <div>
        <input onChange={this.handleInputChange} />
        <button onClick={this.handleSubmit}>
          Submit 
        </button>
        <Child text={this.state.submit}/>
      </div>
    );
   }
}

export default Parent;

