import React from 'react';
import Chip from './Chip';

const StudentItem = (props) => {
    return (
      <div>
        <div className= "item-name"> {props.name} </div> 
        <Chip text = {props.statusText} color = {props.statusColor} />
      </div>
    );
};


export default index;