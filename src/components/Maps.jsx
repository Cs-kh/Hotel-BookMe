import React, { useEffect, useState } from "react";

import Map, { Marker ,Layer, GeolocateControl } from "react-map-gl";
const Maps = (props) => {
 
    const [viewState, setViewState] = useState({
        longitude: -100,
        latitude: 40,
        zoom: 3.5
      });

      useEffect(() => {
        setViewState({
            longitude: props.center.lng,
            latitude: props.center.lat,
            zoom: props.zoom
        })
        }, [props.center, props.zoom])

    const parkLayer = {
        id: 'landuse_park',
        type: 'fill',
        source: 'mapbox',
        'source-layer': 'landuse',
        filter: ['==', 'class', 'park'],
        paint: {
          'fill-color': '#4E3FC8'
        }
      };
  return <div className="w-full h-full">
<Map
    {...viewState}
    onMove={evt => setViewState(evt.viewState)}
    mapStyle="mapbox://styles/khalid0/ckzwawb7f002r14t8qxk3xwr6"
    style={{width: '100%', height: '100%'}}

    mapboxAccessToken ='pk.eyJ1Ijoia2hhbGlkMCIsImEiOiJja3p2bHQxMnM2bHFpMm9vMTZyZGtpeDVxIn0.OxORHQTF9t6orpug29gsGA'
    attributionControl={false}
  >
       <Marker longitude={props.center.lng} latitude={props.center.lat} >

   
    </Marker>
    <Layer {...parkLayer} />
    <GeolocateControl />
    
</Map>

  </div>;
};

export default Maps;
