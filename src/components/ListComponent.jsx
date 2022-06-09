import React from 'react';

function ListComponent(props){
  return (
    <div className="ListComponent"> 
        <ul>
            {props.listdata.map(item => <li key = {item.id}>{item.val}</li>)}
        </ul>
    </div>

  );
}

export default ListComponent;