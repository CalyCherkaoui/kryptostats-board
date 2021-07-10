/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import coinGecko from '../apis/coinGecko';

const TackedCoinsList = () => {
  // const [coins, setCoins] = useState([]);
  useEffect(
    () => {
      const fetchData = async () => {
        const response = await coinGecko.get('coins/markets', {
          params: {
            vs_currency: 'usd',
            ids: 'bitcoin,ethereum',
          },
        });

        console.log(response.data);
      };
      fetchData();
    },
    [], // fetch the data once
  );
  return (
    <div>
      list of tracked coins
    </div>
  );
};

export default TackedCoinsList;
