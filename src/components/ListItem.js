import React from 'react';

import '../App.css';

const listItem = (props) => {
  return (
    <li className="ListItem" onClick={() => { props.clicked(props.venue) }}>
      {props.venue.name}
    </li>
  )
}

export default listItem;