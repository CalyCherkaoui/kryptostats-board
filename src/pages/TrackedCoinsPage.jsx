/* eslint-disable arrow-body-style */
import React from 'react';
import AddCoinToTrack from '../components/AddCoinToTrack';
import TrackedCoinsList from '../components/TackedCoinsList';

const TrackedCoinsPage = () => {
  return (
    <div>
      <AddCoinToTrack />
      <TrackedCoinsList />
    </div>
  );
};

export default TrackedCoinsPage;
