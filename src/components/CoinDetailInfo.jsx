/* eslint-disable no-console */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { IconContext } from 'react-icons';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import _ from 'lodash';
import { GetCoinInfo } from '../redux/actions/CoinsActions';

const CoinDetailInfo = () => {
  const { coinid } = useParams();
  const dispatch = useDispatch();
  const coinInfo = useSelector((state) => state.CoinInfo);
  React.useEffect(() => {
    dispatch(GetCoinInfo(coinid));
  }, []);

  const upDownIconRender = (val) => {
    if (val >= 0) {
      return (
        <IconContext.Provider value={{ color: 'green', className: 'up_icon' }}>
          <FaAngleUp />
        </IconContext.Provider>
      );
    }
    return (
      <IconContext.Provider value={{ color: 'red', className: 'down_icon' }}>
        <FaAngleDown />
      </IconContext.Provider>
    );
  };

  const displayData = () => {
    const coin = coinInfo.data[coinid];
    if (!_.isEmpty(coin)) {
      const parsedDescription = parse(coin.description.en);
      const Cimage = coin.image.large;
      const Cname = coin.name;
      const Csymbol = coin.symbol;
      const Clink = coin.links.homepage[0];
      const currentPrice = coin.market_data.current_price.usd;
      const priceChange = coin.market_data.price_change_percentage_24h;

      return (
        <div className="coin_info_container">
          <div className="coin_info_header">
            <div className="coin_info_header_left">
              <img src={Cimage} alt={Cname} className="coin_info_image" />
            </div>
            <div className="coin_info_header_right">
              <p>
                {Cname}
                <span>|</span>
                {Csymbol}
              </p>
              <div className="coin_info_market">
                <div className="coin_info_current_price">{currentPrice}</div>
                <div className="coin_info_change_percent">
                  <i className="upDown_icon">
                    { upDownIconRender(priceChange)}
                  </i>
                  {priceChange}
                </div>
              </div>
              <p>{Clink}</p>
            </div>
          </div>
          <div className="coin_info_text">
            {parsedDescription}
          </div>
        </div>
      );
    }

    if (coinInfo.loading) {
      return <p>loading..</p>;
    }

    if (coinInfo.errorMessage !== '') {
      return <p>error</p>;
    }

    return <p>No Data available for your input...</p>;
  };

  return (
    <div>
      {displayData()}
    </div>
  );
};

export default CoinDetailInfo;
