import React from 'react';
import GoogleMapReact from 'google-map-react';
import { GOOGLE_API_KEY } from '../../config';

const MapMarker = ({ bike_id }) => {
  return (
    <div className='marker'>
      <p>{bike_id}</p>
    </div>
  );
};

export const Map = ({ center, data }) => {
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '105%', filter: 'grayscale(100%)' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
        defaultCenter={center}
        defaultZoom={14}>
        {!!data &&
          data.vehicles.map(({ bike_id, lat, lon, is_reserved, is_disabled, vehicle_type }) => {
            return <MapMarker lat={lat} lng={lon} bike_id={bike_id} />;
          })}
      </GoogleMapReact>
    </div>
  );
};