import React, {Component} from 'react';

class Child extends React.Component {
    render(){
      return (
        <div>
          <h3> {this.props.text} </h3>
        </div>
      );
    }
  }

export default Child;