import React from 'react';

import '../App.css';
import ListItem from './ListItem';

const venueList = (props) => {
  const contentMatch = <p className="Matching">No matching coffee shops</p>;
  return (
    <ol tabIndex="0" className="VenueList">
      {props.venues.length <= 0 && contentMatch}
      {props.venues && 
        props.venues.map( (venue, index) => ( 
          <ListItem key={index} venue={venue} clicked={() => { props.listItemClick(venue) }} /> 
          ))} 
    </ol>
  )
}

export default venueList;