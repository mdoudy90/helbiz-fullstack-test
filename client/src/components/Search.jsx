import React, { useState } from 'react';

export const Search = ({ getVehicleStatusData }) => {
  const [entry, setEntry] = useState('');

  const clickHandler = (e) => {
    e.preventDefault();
    setEntry('');
    !!entry.length ? getVehicleStatusData({ variables: { bike_id: entry } }) : null;
  };

  return (
    <div>
      <input type='text' value={entry} onChange={(e) => setEntry(e.target.value)}></input>
      <button onClick={clickHandler}>Search</button>
    </div>
  );
};
