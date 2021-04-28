import React, {useEffect, useRef} from 'react';


const Map = (props) =>{
  const mapRef = useRef();
  useEffect(() =>{
    const H = window.H;
    const platform = new H.service.Platform({
      apikey: "D_FJ3fW805Sk6BJFXQt78-0mx88yNWG5pjjhITjsMtg"
    })
    const defaultLayers = platform.createDefaultLayers();
    const map = new H.Map(
      mapRef.current,
      defaultLayers.vector.normal.map,
      {
        center: { lat: 31.3260, lng: 75.5762 },
        zoom: 1,
        pixelRatio: window.devicePixelRatio || 1
      }
    );
  },[])
  return(
    <div className = "map-wrapper">
      <div ref={mapRef} style={{  height: "500px" }} />
    </div>
  )
}

export default Map;
