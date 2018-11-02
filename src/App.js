import React, { Component } from 'react';

import { load_google_maps, load_places } from './utils';
import Layout from './hoc/Layout/Layout';
import ContentError from './components/ContentError';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      filteredVenues: [],
      sideDrawerVisible: true
    }
  }

  // Load map and places from Google and Foursquare APIs after the DOM mounts  
  componentDidMount() {
    const googleMaps = load_google_maps();
    const foursquareContent = load_places();

    // Return a single Promise when maps and places are resolved or rejected
    Promise.all([
      googleMaps,
      foursquareContent
    ]).then(results => {
      console.log(results)
      const google = results[0];

      this.google = google;
      this.venues = results[1].response.venues;

      this.markers = [];

      // Create info window
      this.infowindow = new google.maps.InfoWindow();

      // Render map
      this.map = new google.maps.Map(document.getElementById('map') ,{
        center: {lat: this.venues[0].location.lat, lng: this.venues[0].location.lng,},
        zoom: 13
      })

      // Create a maker for each venue
      this.venues.forEach(venue => {
        let marker = new google.maps.Marker({
          map: this.map,
          position: { lat: venue.location.lat, lng: venue.location.lng },
          venue: venue,
          name: venue.name,
          id: venue.id,
          address: venue.location.address,
          animation: google.maps.Animation.DROP
        });

        // Generate content for each marker
        let address = marker.address ? marker.address : 'No address listed';
        let contentString = '<div class="InfoContent"><h3>' + marker.name + '</h3><p>' + address + '</p></div>';

        marker.addListener('click', () => {
          if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
          } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
          }

          setTimeout(() => { 
            marker.setAnimation(null) 
          }, 1300);
        });

        google.maps.event.addListener(marker, 'click', () => {
          this.infowindow.setContent(contentString);
          this.map.setCenter(marker.position);
          this.infowindow.open(this.map, marker);
        });
        this.markers.push(marker);
      });

      // Update venues in state
      this.setState({ filteredVenues: this.venues })

    }).catch((error) => {this.errorHandler(error)})
  }

  // Function to handler API request errors
  errorHandler = (error) => {
    console.log("INSIDE of errorHandler function");
    console.log(error);
    this.setState({ error });
  }

  // Function to toggle sidebar on/off
  sideDrawerClickHandler = () => {
    console.log('Hamburger Clicked!');
    this.setState({sideDrawerVisible: !this.state.sideDrawerVisible})
  }

  // Function to filter venues
  searchFilterHandler = (query) => {
    this.map.setZoom(13);
    this.infowindow.close();

    let matchedVenues = this.venues.filter(venue => venue.name.toLowerCase().includes(query.toLowerCase()));

    this.markers.forEach(marker => {
        marker.name.toLowerCase().includes(query.toLowerCase()) === true ?
        marker.setVisible(true) :
        marker.setVisible(false);
    });

    this.setState({filteredVenues: matchedVenues});
  }

  // Function to show marker and re-center map
  listItemClickHandler = (venue) => {
    let marker = this.markers.filter(marker => marker.id === venue.id)[0];
    let address = marker.address ? marker.address : 'No address listed';

    let contentClass = 'InfoContent';
    let contentString = '<div class='+ contentClass +'><h3>' + marker.name + '</h3><p>' + address + '</p></div>';

    this.map.setZoom(16);
    this.infowindow.setContent(contentString);
    this.map.setCenter(marker.position);
    this.map.setZoom(16);
    this.infowindow.open(this.map, marker);

    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(this.google.maps.Animation.BOUNCE);
    }
    setTimeout(() => { 
      marker.setAnimation(null);
    }, 1300);
  }

  render() {
    return (
      <Layout 
        venues={this.state.filteredVenues} 
        error={this.state.error}
        listItemClick={this.listItemClickHandler} 
        searchFilter={this.searchFilterHandler}
        hamburgerClick={this.sideDrawerClickHandler}
        sideDrawerOpen={this.state.sideDrawerVisible} >
        {this.state.error ? <ContentError /> : <div id="map"></div>}
      </Layout>
    );
  }
}
export default App;