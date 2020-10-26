import React from 'react';
import { useQuery } from '@apollo/client';
import { Table } from './components/Table';
import { Search } from './components/Search';
import { VEHICLE_STATUS_DATA } from './utils/queries';

export const App = () => {
  const { loading, error, data } = useQuery(VEHICLE_STATUS_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <>
      {!!data ? <Table data={data} /> : null}
      {/* <Search /> */}
    </>
  );
};
