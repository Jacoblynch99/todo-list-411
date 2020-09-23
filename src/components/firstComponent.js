import React from 'react';

function FirstComponent(props) {
  return (
      <ul>
        {props.items.map((item, index)=>{
          return <li key={index} className={props.className}>{props.items[index]}
          <button onClick={() => props.removeItem(index)}>EXTERMINATE</button>
          </li>
        })}
      </ul>
  )
}


export default FirstComponent;