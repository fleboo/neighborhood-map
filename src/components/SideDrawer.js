import React from 'react';

import '../App.css';
import VenueList from '../components/VenueList';

const sideDrawer = (props) => {
  let sideDrawerClass = props.sideDrawerVisible ? "ShowDrawer" : "HideDrawer";
  return (
    <div className={sideDrawerClass}>
      <div className="CloseIconWrapper">
        <div tabIndex="0" className="CloseIcon" aria-label="Close">
          <span onClick={props.closeIconClick} type="button" aria-hidden="true">&times;</span>
        </div> 
      </div>
      <div className="SearchInputWrapper">
        <input 
          tabIndex="0"
          type="text" 
          placeholder="Filter Coffee Shops"
          onChange={(event) => {props.changed(event.target.value)}} />
      </div>
      <VenueList venues={props.venues} listItemClick={props.listItemClick} />
    </div>
  );
}

export default sideDrawer;