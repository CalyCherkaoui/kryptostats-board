import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import styles from '../styles/Coin.module.css';

const Coin = ({ coin }) => {
  const upDownIconRender = () => {
    if (coin.price_change_percentage_24h >= 0) {
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

  return (
    <Link to={`/coininfo/${coin.id}`} className={`${styles.coin_wrapper} shadowed_small flex_space_even`}>
      <img src={coin.image} alt={coin.name} className={styles.coinlist_item_image} />
      <div className={`${styles.coin_info_wrapper} flex_col flex_center`}>
        <div className={`${styles.coinlist_item_info} flex_col flex_center`}>
          <div className={`${styles.coin_legend} normal_typography`}>Price:</div>
          <div className={`${styles.coin_data} spaced_typography`}>
            {coin.current_price}
          </div>
        </div>
        <div className={`${styles.coinlist_item_info} flex_col flex_center`}>
          <div className={`${styles.coin_legend} normal_typography`}>Daily Change:</div>
          <div className={`${styles.coin_data} spaced_typography`}>
            <i className={styles.updouwn_icon}>
              { upDownIconRender()}
            </i>
            {coin.price_change_percentage_24h}
          </div>
        </div>
      </div>
    </Link>
  );
};

Coin.propTypes = {
  coin: PropTypes.shape(
    {
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
      current_price: PropTypes.number,
      price_change_percentage_24h: PropTypes.number,
    },
  ).isRequired,
};

export default Coin;
