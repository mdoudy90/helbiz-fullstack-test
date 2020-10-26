import React from 'react';
import { Table } from './Table';
import { Search } from './Search';

export const Panel = ({ loading, error, data, getVehicleStatusData }) => {
  return (
    <div className='panel'>
      <div className='header'>
        <h2>ARLINGTON</h2>
      </div>
      <div className='panel-menu'>
        <button onClick={() => getVehicleStatusData({ variables: { bike_id: '' } })}>Show All</button>
        <Search getVehicleStatusData={getVehicleStatusData} />
      </div>
      <div className='table-container'>
        {!!loading && <p className='status-info'>Loading...</p>}
        {!!error && <p className='status-info'>Error!</p>}
        {!!data && !data.vehicles.length && !loading && !error && <p className='status-info'>No results found.</p>}
        {!!data && !!data.vehicles.length && !loading && !error && <Table data={data} />}
      </div>
    </div>
  );
};
