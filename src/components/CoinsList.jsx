/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { GetCoinsIndexList } from '../redux/actions/CoinsActions';
import Coin from './Coin';
import Pagination from './Pagination';
import ReactPaginate from 'react-paginate';


const CoinsList = () => {
  const dispatch = useDispatch();
  const coinsList = useSelector((state) => state.CoinsList);

  const fetchData = (page = 1) => {
    dispatch(GetCoinsIndexList(
      page, 'usd', '24h',
    ));
  };

  React.useEffect(() => {
    fetchData(1);
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
    <div className="coins_list_container">
      <div className="coins_list">
        {displayData()}
      </div>
      <div className="pagination_wrapper">
        {!_.isEmpty(coinsList.data)
        && (
        <Pagination
          count={100}
          fetchData={(dataPg) => fetchData(dataPg.selected + 1)}
        />
        )}
      </div>
    </div>
  );
};

export default CoinsList;
