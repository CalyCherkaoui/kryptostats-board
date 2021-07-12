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
          day: day.data.prices,
          week: week.data.prices,
          year: year.data.prices,
          infoImage: info.data.image.small,
          infoCurrentPrice: info.data.market_data.current_price.usd,
          infoChange24: info.data.market_data.price_change_24h_in_currency.usd,
          infoVolume: info.data.market_data.total_volume.usd,
          infoName: info.data.name,
          infoSymbol: info.data.symbol,
          infoDescription: info.data.description.en,
        });
        setIsLoading(false);
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
