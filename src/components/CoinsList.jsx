/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import ReactPaginate from 'react-paginate';
import { GetCoinsIndexList } from '../redux/actions/CoinsActions';
import Coin from './Coin';

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
    // eslint-disable-next-line no-console
    console.log(coinsList);
  }, []);

  const displayData = () => {
    if (coinsList.loading) {
      return <p>loading..</p>;
    }

    if (!_.isEmpty(coinsList.data)) {
      return coinsList.data.map(
        (coin) => (
          <Coin coin={coin} key={`key_${coin.id}`} />
        ),
      );
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
        <ReactPaginate
          // pageCount={Math.ceil(coinsList.data.length / 6)}
          pageCount={100}
          pageRangeDisplayed={1}
          marginPagesDisplayed={2}
          onPageChange={(data) => fetchData(data.selected + 1)}
          containerClassName="pagination_container"
        />
        )}
      </div>
    </div>
  );
};

export default CoinsList;
