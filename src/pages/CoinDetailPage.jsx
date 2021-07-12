/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import coinGecko from '../apis/coinGecko';
import CoinDetailChart from '../components/CoinDetailChart';
import CoinDetailInfo from '../components/CoinDetailInfo';

const CoinDetailPage = () => {
  const { coinid } = useParams();
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(
    () => {
      const fetchData = async () => {
        setIsLoading(true);
        const [
          day, week, year, info, description,
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
          coinGecko.get('/coins/markets', {
            params: {
              id: coinid,
              vs_currency: 'usd',
              per_page: 5,
              page: '1',
              price_change_percentage: '24h',
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
          day: day.data.prices,
          week: week.data.prices,
          year: year.data.prices,
          info: info.data[0],
          infoImage: info.data[0].image,
          infoCurrentPrice: info.data[0].current_price,
          infoChange24: info.data[0].price_change_percentage_24h,
          infoVolume: info.data[0].total_volume,
          infoName: info.data[0].name,
          infoSymbol: info.data[0].symbol,
          infoDescription: description.data.description.en,
        });
        setIsLoading(false);
      };
      fetchData();
    },
    [],
  );
  const renderCoinData = () => {
    // console.log('rendering part');
    // console.log(coinData);
    if (isLoading) {
      return <div className="loading_wrapper">Loading data</div>;
    }
    return (
      <div className="coin_detail_container">
        <CoinDetailInfo
          infoImage={coinData.infoImage}
          infoName={coinData.infoName}
          infoSymbol={coinData.infoSymbol}
          infoDescription={coinData.infoDescription}
          infoCurrentPrice={coinData.infoCurrentPrice}
          infoChange24={coinData.infoChange24}
          infoVolume={coinData.infoVolume}
        />
        <CoinDetailChart />
      </div>
    );
  };
  return renderCoinData();
};

export default CoinDetailPage;
