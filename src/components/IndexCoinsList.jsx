/* eslint-disable no-console */
import React, { useEffect } from 'react';
import coinGecko from '../apis/coinGecko';

const IndexCoinsList = () => {
  useEffect(
    () => {
      const fetchData = async () => {
        const response = await coinGecko.get('coins/markets', {
          params: {
            vs_currency: 'eur',
            per_page: 5,
            page: '1',
            price_change_percentage: '24h',
          },
        });

        console.log(response.data);
      };
      fetchData();
    },
    [],
  );
  return (
    <div>
      index list
    </div>
  );
};

export default IndexCoinsList;
