import React, {Component} from 'react';

class Child1 extends React.Component{
    constructor(){
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e){
        this.setState({
            text: e.target.value
        })
    }
    render(){
        return(
            <div>
                <input onChange = {this.handleInputChange} />
                <button onClick = {() => this.props.onSubmit(this.state.text)}>Submit</button>
            </div>
        );
    }
}

export default Child1;