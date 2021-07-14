/* eslint-disable no-console */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GetCoinInfo } from '../redux/actions/CoinsActions';

const CoinDetailInfo = () => {
  const { coinid } = useParams();
  const dispatch = useDispatch();
  const coinInfoState = useSelector((state) => state.CoinInfo);
  React.useEffect(() => {
    dispatch(GetCoinInfo(coinid));
    console.log(coinid);
    console.log(coinInfoState);
  }, []);

  return (
    <div>
      coin
    </div>
  );
};

export default CoinDetailInfo;
