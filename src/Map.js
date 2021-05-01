import React, {useState, useEffect, useRef} from 'react';

const isEmpty = (obj) =>{
  return Object.keys(obj).length === 0;
}

const Map = ({quakes}) =>{
  const mapRef = useRef();
  const [coords, setCoords] = useState([]);
  const [map, setMap] = useState({});
  useEffect(() =>{
    const coordinates = quakes.result.map(quake =>{
      return [quake.geometry.coordinates[1], quake.geometry.coordinates[0]];
    })
    setCoords(coordinates);
  }, [quakes])

  useEffect(() =>{
    const H = window.H;
    if(coords.length && !isEmpty(map)){
      coords.forEach(coord =>{
        const marker = new H.map.Marker({lat:coord[0], lng:coord[1]});
        map.addObject(marker);
      })
    }
  }, [coords])

  useEffect(() =>{
    const H = window.H;
    const platform = new H.service.Platform({
      apikey: "0_vO-CK8XwH6Z5pITpgI5DZeOEn-auKHhn_7kvLQkc4"
    })
    const defaultLayers = platform.createDefaultLayers();
    const mapObj = new H.Map(
      mapRef.current,
      defaultLayers.vector.normal.map,
      {
        center: { lat: 47.6062, lng: -122.3321 },
        zoom: 4,
        pixelRatio: window.devicePixelRatio || 1
      }
    );
    setMap(mapObj);
    window.addEventListener('resize', () => mapObj.getViewPort().resize());
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(mapObj));
  },[])
  return(
    <div className = "map-wrapper" id="map">
      <div ref={mapRef} style={{  height: "500px" }} />
    </div>
  )
}

export default Map;
