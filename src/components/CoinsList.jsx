/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { GetCoinsIndexList } from '../redux/actions/CoinsActions';
import Coin from './Coin';

const CoinsList = () => {
  const dispatch = useDispatch();
  const coinsList = useSelector((state) => state.CoinsList);

  React.useEffect(() => {
    dispatch(GetCoinsIndexList(
      1, 'usd', '24h',
    ));
  }, []);

  const displayData = () => {
    if (!_.isEmpty(coinsList.data)) {
      return coinsList.data.map(
        (coin) => (
          <Coin coin={coin} key={`key_${coin.id}`} />
        ),
      );
    }

    if (coinsList.loading) {
      return <p>loading..</p>;
    }

    if (coinsList.errorMessage !== '') {
      return <p>error</p>;
    }

    return <p>default</p>;
  };

  return (
    <div>
      {displayData()}
    </div>
  );
};

export default CoinsList;
