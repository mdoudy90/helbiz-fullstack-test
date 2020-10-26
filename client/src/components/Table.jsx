import React from 'react';

export const Table = ({ data }) => {
  return (
    <div className='table-container'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Reserved</th>
            <th>Disabled</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {data.vehicles.map(({ bike_id, lat, lon, is_reserved, is_disabled, vehicle_type }) => (
            <tr key={bike_id}>
              <td>{bike_id}</td>
              <td>{!isNaN(lat) ? String(lat.toPrecision(7)) : '-'}</td>
              <td>{!isNaN(lon) ? String(lon.toPrecision(7)) : '-'}</td>
              <td>{is_reserved ? 'yes' : '-'}</td>
              <td>{is_disabled ? 'yes' : '-'}</td>
              <td>{!!vehicle_type ? vehicle_type : '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
