import React from 'react';
import HEREMap from 'react-here-maps';

const HereMap = () =>{
  return(
    <HEREMap
    appId = "F1iFBJCLVlUAYSODmFV4"
    appCode = "Ee2TDiMoPxyaGfKcclSdRZLBPrjHGFO7r0aMEe6n0Oo"
    center={{ lat: 10.998666, lng: -63.79841 }}
    zoom={12}
    />
  )
}

export default HereMap;
