/* eslint-disable no-console */
import React, { useEffect, useContext } from 'react';
import coinGecko from '../apis/coinGecko';
import { TrackedCoinsListContext } from '../context/TrackedCoinsContext';

const TackedCoinsList = () => {
  // const [coins, setCoins] = useState([]);
  const { CoinsList } = useContext(TrackedCoinsListContext);
  console.log(CoinsList);
  useEffect(
    () => {
      const fetchData = async () => {
        const response = await coinGecko.get('coins/markets', {
          params: {
            vs_currency: 'usd',
            ids: CoinsList.join(','),
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
