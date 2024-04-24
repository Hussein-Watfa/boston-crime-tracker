import React from 'react'
import './BostonMap.css'
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api'

const containerStyle = {
    width: '100%',
    height: '100%',
  };
  
const center = {
  lat: 42.3601,
  lng: -71.0589,
};

const mapOptions = {
  disableDefaultUI: true,
  styles: [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }],
    },
    {
      featureType: 'transit',
      elementType: 'all',
      stylers: [{ visibility: 'off' }],
    },
  ],
};

const markers = [
  { lat: 42.3601, lng: -71.0589 },
  { lat: 42.3331, lng: -71.0897 },
  { lat: 42.3772, lng: -71.1167 },
];

const markerIcon = {
  path: 'M-8,0a8,8 0 1,0 16,0a8,8 0 1,0 -16,0',
  fillColor: '#FF0000',
  fillOpacity: 0.9,
  strokeWeight: 0,
  scale: 0.5,
};

export default function InteractiveMap() {
  return (
    <div className = "Map">
        <LoadScript googleMapsApiKey = {process.env.REACT_APP_GOOGLE_MAPS_API_KEY} loadingElement={<div>Loading...</div>}>
        <GoogleMap mapContainerStyle = {containerStyle} center = {center} zoom = {11} options={mapOptions}>
            {markers.map((marker, index) => (
                <MarkerF key={index} position={marker} icon = {markerIcon} />
            ))}     
        </GoogleMap>
        </LoadScript>
    </div>
  )
}
