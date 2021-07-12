/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import coinGecko from '../apis/coinGecko';
import CoinDetailChart from '../components/CoinDetailChart';
import CoinDetailInfo from '../components/CoinDetailInfo';

// eslint-disable-next-line arrow-body-style
const CoinDetailPage = () => {
  const { coinid } = useParams();
  const [coinData, setCoinData] = useState({});
  // const [coinInfo, setCoinInfo] = useState({});
  // const [coinChart, setCoinChart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(
    () => {
      const fetchData = async () => {
        // setIsLoading(true);
        const [
          day, week, year, info,
        ] = await Promise.all([
          coinGecko.get(`coins/${coinid}/market_chart`, {
            params: {
              id: coinid,
              vs_currency: 'usd',
              days: 1,
            },
          }),
          coinGecko.get(`coins/${coinid}/market_chart`, {
            params: {
              id: coinid,
              vs_currency: 'usd',
              days: '7',
            },
          }),
          coinGecko.get(`coins/${coinid}/market_chart`, {
            params: {
              id: coinid,
              vs_currency: 'usd',
              days: '365',
            },
          }),
          coinGecko.get(`coins/${coinid}`, {
            params: {
              tickers: false,
              market_data: true,
              community_data: false,
              developer_data: false,
              sparkline: false,
            },
          }),
        ]);

        setCoinData({
          day,
          week,
          year,
          info,
        });
        console.log('in useEffect');
        // setIsLoading(false);
      };
      fetchData();
    },
    [],
  );
  const renderCoinData = () => {
    console.log('rendering part');
    console.log(coinData);
    return (
      <div className="coin_detail_container">
        <CoinDetailInfo />
        <CoinDetailChart />
      </div>
    );
  };
  return renderCoinData();
};

export default CoinDetailPage;
