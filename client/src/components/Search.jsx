import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { SINGLE_VEHICLE_STATUS_DATA } from '../utils/queries';

export const Search = () => {
  const [entry, setEntry] = useState('');
  const [searchById, { loading, error, data }] = useLazyQuery(SINGLE_VEHICLE_STATUS_DATA, {
    fetchPolicy: 'network-only',
  });

  const clickHandler = (e) => {
    e.preventDefault();
    !!entry.length
      ? searchById({ variables: { bike_id: entry } })
      : null;
  }

  return (
    <>
      <input type='text' value={entry} onChange={(e) => setEntry(e.target.value)}></input>
      <button onClick={clickHandler}>Search</button>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>Error!</p> : null}
    </>
  );
};
