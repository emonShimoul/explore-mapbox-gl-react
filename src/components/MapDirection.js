import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
// mapbox-direction is not installed properly. This import is just for avoiding displaying red line error. 
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'

// have to set the paid access token to see the map. 
mapboxgl.accessToken = 'give here access token';

const MapDirection = () => {
    useEffect(()=>{
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-79.4512, 43.6568],
            zoom: 13
            });
             
            map.addControl(
            new MapboxDirections({
            accessToken: mapboxgl.accessToken
            }),
            'top-left'
            );
    },[]);
    return (
        <div>
            <div id="map"></div>
        </div>
    );
};

export default MapDirection;