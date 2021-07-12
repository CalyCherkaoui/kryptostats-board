/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import coinGecko from '../apis/coinGecko';

const CoinDetailInfo = () => {
  // const [coinInfo, setCoinInfo] = useState({});
  // const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="coin_page_info_wrapper">
      {/* <div className="coin_page_about">
        <img src={coinInfo.image.small} alt={coinInfo.name} className="coin_page_about_image" />
        <div className="coin_page_name_symbol">
          <span>{coinInfo.name}</span>
          <span>{coinInfo.symbol}</span>
          <span>{coinInfo.description.links}</span>
        </div>
        <div className="coin_page_about_description">{coinInfo.description.en}</div>
        <div className="coin_page_data">
          <div className="coin_page_data_current_price">
            {coinInfo.market_data.current_price.usd}
          </div>
          <div className="coin_page_data_total_vol">
            {coinInfo.market_data.total_volume.usd}
          </div>
          <div className="coin_page_data_change24h">
            {coinInfo.description.market_data.price_change_24h_in_currency.usd}
          </div>
        </div>
      </div> */}
      info
    </div>
  );
};

// CoinDetailInfo.propTypes = {
//   coinid: PropTypes.string.isRequired,
// };

export default CoinDetailInfo;
