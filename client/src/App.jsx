import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Table } from './components/Table';

const VEHICLE_STATUS_DATA = gql`
  query GetVehicleStatusData {
    vehicles {
      bike_id
      lat
      lon
      is_reserved
      is_disabled
      vehicle_type
    }
  }
`;

export const App = () => {
  const { loading, error, data } = useQuery(VEHICLE_STATUS_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <>
      {!!data ? <Table data={data} /> : null}
    </>
  );
};
