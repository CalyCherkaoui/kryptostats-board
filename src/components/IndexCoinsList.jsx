/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import coinGecko from '../apis/coinGecko';
import Coin from './Coin';

const IndexCoinsList = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(
    () => {
      const fetchData = async () => {
        setIsLoading(true);
        const response = await coinGecko.get('coins/markets', {
          params: {
            vs_currency: 'eur',
            per_page: 5,
            page: '1',
            price_change_percentage: '24h',
          },
        });
        console.log(response.data);
        setCoins(response.data);
        setIsLoading(false);
        console.log(isLoading);
      };
      fetchData();
    },
    [],
  );
  const renderCoins = () => {
    if (isLoading) {
      return <div>Loading data</div>;
    }
    return (
      <ul className="coins_list">
        {coins.map(
          (coin) => <Coin key={coin.id} coin={coin} indexList />,
        )}
      </ul>
    );
  };
  return (
    <div>
      index
      <div>{renderCoins()}</div>
    </div>
  );
};

export default IndexCoinsList;
