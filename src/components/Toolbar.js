import React from 'react';

import '../App.css';

const toolbar = (props) => {
  return (
    <nav className="Toolbar">
      <div className="Hamburger">
        <h1>
          <svg onClick={props.hamburgerClick} tabIndex="0" width="33" height="31">
            <path d="M0,5 30,5" stroke="#00bec3" strokeWidth="5"/>
            <path d="M0,14 30,14" stroke="#00bec3" strokeWidth="5"/>
            <path d="M0,23 30,23" stroke="#00bec3" strokeWidth="5"/>
          </svg>
        </h1>
      </div>
      <div  className="Navigation">
        <h1 tabIndex="0">KC Coffee</h1>
      </div>
  </nav>
  )
};

export default toolbar;