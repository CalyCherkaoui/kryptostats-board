/* eslint-disable no-console */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { IconContext } from 'react-icons';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import _ from 'lodash';
import { GetCoinInfo } from '../redux/actions/CoinsActions';
import styles from '../styles/CoinDetail.module.css';
import stylesCoin from '../styles/Coin.module.css';
import stylesCoinsList from '../styles/CoinsList.module.css';

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
        <div className={styles.coin_detail_container}>
          <div className={`${styles.coin_info_header} flex_row flex_center`}>
            <div className={styles.coin_info_header_left}>
              <img src={Cimage} alt={Cname} className={stylesCoin.coinlist_item_image} />
            </div>
            <div className={styles.coin_info_header_right}>
              <p className={styles.coin_info_title}>
                {Cname}
                <span> | </span>
                {Csymbol}
              </p>
              <div className={styles.coin_info_market}>
                <div className={`${stylesCoin.coin_info_wrapper} flex_col flex_center`}>
                  <div className={`${stylesCoin.coin_legend} normal_typography`}>Price:</div>
                  <div className={`${stylesCoin.coin_data} spaced_typography`}>
                    {currentPrice}
                  </div>
                </div>
                <div className={`${stylesCoin.coinlist_item_info} flex_col flex_center`}>
                  <div className={`${stylesCoin.coin_legend} normal_typography`}>Daily Change:</div>
                  <div className={`${stylesCoin.coin_data} spaced_typography`}>
                    <i className={stylesCoin.updouwn_icon}>
                      { upDownIconRender(priceChange)}
                    </i>
                    {priceChange}
                  </div>
                </div>
                <p className={styles.coin_detail_link}>{Clink}</p>
              </div>
            </div>
          </div>
          <div className={`${styles.coin_description} normal_typography`}>
            {parsedDescription}
          </div>
        </div>
      );
    }

    if (coinInfo.loading) {
      return <p className={stylesCoinsList.loading}>Loading..</p>;
    }

    if (coinInfo.errorMessage !== '') {
      return <p className={stylesCoinsList.error}>Error Loading data!</p>;
    }

    return <p className={stylesCoinsList.nodata}>No Data available for your input...</p>;
  };

  return (
    <div>
      {displayData()}
    </div>
  );
};

export default CoinDetailInfo;
