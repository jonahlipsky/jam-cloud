import React from 'react';

export default (props) => {

  return(
    <>
      <li className="dropdown-componenet-list-item" key={props.listItemPosition} onClick={() => props.action()}>{props.title}</li>
    </>
  )
}