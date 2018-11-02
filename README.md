# Neighborhood Map App Project
This is the final project for Udacity’s Front-End Nanodegree program. The goal of the project is to design a single-page neighborhood map application. For this project, I was tasked with designing the project from scratch and to completion. I used React UI framework and create-react-app to bootstrap my application. 

## Instructions
* Clone the application 
```$ git clone https://github.com/fleboo/neighborhood-map.git```
* Navigation to the project directory 
```$ cd neighborhood-map```
* Install dependencies 
```$ npm install```
* Open the application on a web browser as follows 
```$ npm start```
* Search for a coffee shop or navigate through the list of all available restaurants

## Service Worker
**Note:** The service worker will cache the application in production mode only. Hence, you must run the application in production to utilize the offline functionality. To run the application in production, follow these instructions.

* Create a production build with
```npm run build```
* Next, run the following command or point your webserver to the build directory 
```npm install -g serve```
* In the build directory, run the following command to host the app at http://localhost:5000
```serve -s build```

## Dependencies and Acknowledgements
* Javascript is required on the browser
* Google Maps API - map, makers, and icon data
* Foursquare API - restaurant data
* Ryan Waite (Github: ryanwaite28) - Functions to load Google Maps and Foursquare data

## References
https://developers.google.com/maps/documentation/javascript/tutorial
https://developer.foursquare.com/
