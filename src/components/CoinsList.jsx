/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import ReactPaginate from 'react-paginate';
import { GetCoinsIndexList } from '../redux/actions/CoinsActions';
import { GetWithLocalCurrencyFilter } from '../redux/actions/FiltresActions';
import Coin from './Coin';
import LocalCurrencyFilter from './LocalCurrencyFilter';
import styles from '../styles/CoinsList.module.css';

const CoinsList = () => {
  const dispatch = useDispatch();
  const [localCurrency, setLocalCurrency] = useState('usd');
  const coinsList = useSelector((state) => state.CoinsList);
  const filteredCoinsByLocalCurrency = useSelector((state) => state.FilteredCoinsByLocalCurrency);

  const fetchData = (page = 1) => {
    dispatch(GetCoinsIndexList(
      page, 'usd', '24h',
    ));
  };

  const fetchDataPaginator = (page = 1) => {
    if (filteredCoinsByLocalCurrency.listUpdated) {
      dispatch(GetWithLocalCurrencyFilter(
        page, localCurrency, '24h',
      ));
    } else {
      dispatch(GetCoinsIndexList(
        page, 'usd', '24h',
      ));
    }
  };

  const changeLocalCurrencyHandler = (currency) => {
    dispatch(GetWithLocalCurrencyFilter(
      1, currency, '24h',
    ));
    setLocalCurrency(currency);
    console.log(currency);
    console.log('filtred handler');
    console.log(filteredCoinsByLocalCurrency.data);
  };

  React.useEffect(() => {
    fetchData(1);
    console.log('coinslist');
    console.log(coinsList);
    console.log('filtred useeffect');
    console.log(filteredCoinsByLocalCurrency.data);
  }, [filteredCoinsByLocalCurrency]);

  const displayData = (myCoinsList) => {
    if (myCoinsList.loading) {
      return <p className={styles.loading}>loading data......</p>;
    }

    if (!_.isEmpty(myCoinsList.data)) {
      return myCoinsList.data.map(
        (coin) => (
          <Coin coin={coin} key={`key_${coin.id}`} />
        ),
      );
    }

    if (myCoinsList.errorMessage !== '') {
      return <p className={styles.error}>Error Loading Data!</p>;
    }

    return <p className={styles.nodata}>NO Data Available...</p>;
  };

  const showList = () => {
    if (filteredCoinsByLocalCurrency.listUpdated) {
      return displayData(filteredCoinsByLocalCurrency);
    }
    return displayData(coinsList);
  };

  return (
    <div className={styles.coins_list_container}>
      <div className={`${styles.coin_list_filters} flex_row flex_start`}>
        <LocalCurrencyFilter changeLocalCurrency={changeLocalCurrencyHandler} />
      </div>
      <div className={styles.coins_list}>
        { showList() }
      </div>
      <div className={`${styles.pagination_wrapper}`}>
        {!_.isEmpty(coinsList.data)
        && (
        <ReactPaginate
          pageCount={100}
          pageRangeDisplayed={1}
          marginPagesDisplayed={2}
          onPageChange={(data) => fetchDataPaginator(data.selected + 1)}
          containerClassName={`${styles.pagination_container} flex_row flex_space_even normal_typography`}
        />
        )}
      </div>
    </div>
  );
};

export default CoinsList;
