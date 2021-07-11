/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useContext, useState } from 'react';
import coinGecko from '../apis/coinGecko';
import { TrackedCoinsListContext } from '../context/TrackedCoinsContext';
import Coin from './Coin';

const TackedCoinsList = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { CoinsList, deleteCoin } = useContext(TrackedCoinsListContext);
  console.log(CoinsList);
  useEffect(
    () => {
      const fetchData = async () => {
        setIsLoading(true);
        const response = await coinGecko.get('coins/markets', {
          params: {
            vs_currency: 'usd',
            ids: CoinsList.join(','),
          },
        });
        setCoins(response.data);
        setIsLoading(false);
        console.log(response.data);
        console.log(isLoading);
      };
      fetchData();
    },
    [], // fetch the data once
  );

  const renderCoins = () => {
    if (isLoading) {
      return <div>Loading data</div>;
    }
    return (
      <ul className="coins_list">
        {coins.map(
          (coin) => <Coin key={coin.id} coin={coin} indexList={false} deleteCoin={deleteCoin} />,
        )}
      </ul>
    );
  };
  return (
    <div>
      list of tracked coins
      <div>{renderCoins()}</div>
    </div>
  );
};

export default TackedCoinsList;
