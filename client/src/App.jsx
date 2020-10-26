import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { Panel } from './components/Panel';
import { Map } from './components/Map';
import { VEHICLE_STATUS_DATA } from './utils/queries';

export const App = () => {
  const [data, setData] = useState({});

  const [getVehicleStatusData, { loading, error }] = useLazyQuery(VEHICLE_STATUS_DATA, {
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      setData(data);
    },
  });

  useEffect(() => {
    getVehicleStatusData({ variables: { bike_id: '' } });
  }, []);

  return (
    <>
      {!!data.vehicles && (
        <Panel
          loading={loading}
          error={error}
          data={data}
          getVehicleStatusData={getVehicleStatusData}
        />
      )}
      {!!data.vehicles && (
        <Map
          data={data}
          center={{ lat: 38.876441, lng: -77.070021 }}
        />
      )}
    </>
  );
};
