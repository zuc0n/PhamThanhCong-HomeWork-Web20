import React, { Component } from 'react'; 
import './App.css';
import './item.css';
import Chip from './Chip';

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

 const Item = (props) => {
  return (
    <div>
      <div className= "item-name"> {props.name} </div> 
      <Item text = {props.statusText} color = {props.statusColor} />
    </div>
  );
 };

//  simpleData.map(
//   (n, index) => (<div key = {index.toString()}> {n} </div>)
// ) 

class App extends Component {
  render() {
    return (
      <div>
        {
          data.map(
            (n,index) => (<div key = {index.toString()}> 
            {n.name},
            <Item text = {n.status} className = {`${n.status}`}/>  
            </div>)
          )
        }
      </div> 
    );
  }
}

export default App;
