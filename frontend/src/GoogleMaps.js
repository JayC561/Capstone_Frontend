import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';


const Map = () =>{
  return(
    <GoogleMap defaultZoom = {1} defaultCenter = {{lat: 31.3260, lng: 75.5762}}/>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const GoogleMaps = () =>{
  console.log(process.env.REACT_APP_GOOGLE_KEY);
  return(
    <div style = {{height: "500px", width: "500px"}}>
      <WrappedMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAYRnI7iohBnRQTkuHlDHNq2S2WnAuuuYc`}
      loadingElement = {<div style={{height: "100%"}}/>}
      containerElement = {<div style={{height: "100%"}}/>}
      mapElement = {<div style={{height: "100%"}}/>}
      />
    </div>
  )
}

export default GoogleMaps
