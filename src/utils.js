// Thanks to Ryan Waite for Google Maps and Foursqure requests scripts
// https://github.com/ryanwaite28/script-store/blob/master/js/react_resolve_google_maps.js

export function load_google_maps() {
  return new Promise(function(resolve, reject) {
    // define the global callback that will run when google maps is loaded
    window.resolveGoogleMapsPromise = function() {
      // resolve the google object
      resolve(window.google);
      // delete the global callback to tidy up since it is no longer needed
      delete window.resolveGoogleMapsPromise;
    }
    // Now, Load the Google Maps API
    const script = document.createElement("script");
    const API_KEY = 'BIzaSyBuAooSCGcykt1snpWUEndQeXUkeIdV2rU';
    script.src = `https://maps.googleapis.com/maps/api/js?libraries=places&key=${API_KEY}&callback=resolveGoogleMapsPromise`;
    script.async = true;
    document.body.appendChild(script);
  });
}

// Get venues from Foursquare
export function load_places() {
  let city = 'Kansas City, MO';
    let query = 'Coffee';
    var apiURL = 'https://api.foursquare.com/v2/venues/search?client_id=B1J1MZDHB3RA0AYZCU0ZFATHOTSRHP1WQG2JJY4V01OFUZ0E&client_secret=IHXTS4GU2IPPZZINHQYU5PWLVXLLJ4THOXQIHV5Z2I2N5AP5&v=20130815%20&limit=30&near=' + city + '&query=' + query + '';
    return fetch(apiURL).then(resp => resp.json());
}