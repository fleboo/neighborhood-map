import React from 'react';

import '../App.css';

const toolbar = (props) => {
  return (
    <nav className="Toolbar">
      <div className="Hamburger">
        <p >
          <svg onClick={props.hamburgerClick} tabIndex="0" width="33" height="31">
            <path d="M0,5 30,5" stroke="#00bec3" strokeWidth="5"/>
            <path d="M0,14 30,14" stroke="#00bec3" strokeWidth="5"/>
            <path d="M0,23 30,23" stroke="#00bec3" strokeWidth="5"/>
          </svg>
        </p>
      </div>
      <div  className="Navigation">
        <p tabIndex="0">Navigation</p>
      </div>
  </nav>
  )
};

export default toolbar;