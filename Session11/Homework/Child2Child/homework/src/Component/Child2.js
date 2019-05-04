import React, {Component} from 'react';

class Child2 extends React.Component{
    render(){
        return(
            <div>
                <h3>{this.props.text}</h3>
            </div>
        );
    }

}

export default Child2;