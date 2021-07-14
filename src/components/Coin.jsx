/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

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
    <Link to={`/coininfo/${coin.id}`}>
      <li className="coinlist_item">
        <img src={coin.image} alt={coin.name} className="coinlist_item_image" />
        <span className="coinlist_item_price">{coin.current_price}</span>
        <span className="coinlist_item_change">
          <i className="upDown_icon">
            { upDownIconRender()}
          </i>
          {coin.price_change_percentage_24h}
        </span>
      </li>
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
