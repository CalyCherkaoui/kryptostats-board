import React from 'react';
import { useParams } from 'react-router-dom';

// eslint-disable-next-line arrow-body-style
const CoinDetailPage = () => {
  const { coinid } = useParams();
  return (
    <div>
      Coin Details
      <span>{coinid}</span>
    </div>
  );
};

export default CoinDetailPage;
