import React, { Component } from 'react'; 
import './App.css';
import './item.css';
import Chip from './StudentItems/Chip';
import StudentItem from './StudentItems';

const data = [
  {
    name: "Cao Ghi Danh",
    status: "Untested",
  },
  {
    name: 'Pham Thanh Cong',
    status: "Failed",
  },
  {
    name: 'Pham Thanh Cong',
    status: "Passed",
  },
];

// const simpleData = [
//   "Cao Ghi Danh",
//   'Pham Thanh Cong',
//   'Pham Thanh Cong',
// ]



//  simpleData.map(
//   (n, index) => (<div key = {index.toString()}> {n} </div>)
// ) 

class App extends Component {
  renderStudentItem() {
    return data.map((item, index) => (
      <StudentItem 
      name={item.name}
      status={item.status}
      key={index}
      />
    ))
  }
  render() {
    return (
      <div>
        {this.renderStudentItem()}
      </div> 
    );
  }
}

export default App;
