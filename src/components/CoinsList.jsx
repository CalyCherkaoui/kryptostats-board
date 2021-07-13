/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { GetCoinInfo } from '../redux/actions/CoinsActions';

const CoinsList = () => {
  const dispatch = useDispatch();
  const coinsList = useSelector((state) => state.CoinsList);

  const FetchData = (
    page = 1,
    localCurrency = 'usd',
    priceChangePercentage = '24h',
  ) => {
    dispatch(GetCoinInfo(
      page,
      localCurrency,
      priceChangePercentage,
    ));
  };

  const displayData = () => {
    if (!_.isEmpty(coinsList.data)) {
      return <div className="display_coinslist">Coins</div>;
    }

    if (coinsList.loading) {
      return <p>Loading data....</p>;
    }

    if (coinsList.errorMessage !== '') {
      return <p>{coinsList.errorMessage}</p>;
    }
    console.log(coinsList);
    return 'Error!';
  };

  useEffect(() => {
    FetchData(1, 'usd', '24h');
  }, []);

  return (
    <div>
      {displayData()}
    </div>
  );
};

export default CoinsList;
