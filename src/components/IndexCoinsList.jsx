/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useState, useContext } from 'react';
import { TrackedCoinsListContext } from '../context/TrackedCoinsContext';
import coinGecko from '../apis/coinGecko';
import Coin from './Coin';

const IndexCoinsList = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { CoinsList, addCoin } = useContext(TrackedCoinsListContext);
  useEffect(
    () => {
      const fetchData = async () => {
        setIsLoading(true);
        const response = await coinGecko.get('/coins/markets', {
          params: {
            vs_currency: 'usd',
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
    [CoinsList],
  );
  const renderCoins = () => {
    if (isLoading) {
      return <div>Loading data</div>;
    }
    return (
      <ul className="coins_list">
        {coins.map(
          (coin) => (
            <Coin
              key={coin.id}
              coin={coin}
              indexList
              deleteCoin={() => false}
              addCoin={addCoin}
            />
          ),
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
