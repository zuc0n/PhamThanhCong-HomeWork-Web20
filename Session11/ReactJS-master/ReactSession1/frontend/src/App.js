import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import axios from "./axios.js";

class App extends Component {
  componentDidMount( ) {
    axios
    .get('/api/images')
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
       <NavBar />
      </div>
    );
  }
} 

export default App;
