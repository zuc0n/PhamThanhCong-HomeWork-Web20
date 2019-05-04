import React, {Component} from 'react';
import './App.css';
import Child1 from './Component/Child1';
import Child2 from './Component/Child2';

class Parent extends React.Component {
  constructor(){
    super();
    this.state = {
      text: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  handleSubmit(text){
    this.setState({
      text: text
    })
  }

  render(){
    return(
      <div>
        <Child1 onSubmit = {this.handleSubmit} />
        <Child2 text = {this.state.text} />
      </div>
    );
  }
}

export default Parent;
