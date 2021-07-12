/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { GrAddCircle } from 'react-icons/gr';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Coin = ({
  coin,
  indexList,
  deleteCoin,
  addCoin,
}) => {
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

  const btnIconRender = () => {
    if (indexList) {
      return (
        <button
          className="coinlist_item_btn"
          type="button"
          onClick={
            (e) => {
              e.preventDefault();
              addCoin(coin.id);
              console.log('added');
            }
          }
        >
          <IconContext.Provider value={{ color: 'green', className: 'add_icon' }}>
            <GrAddCircle />
          </IconContext.Provider>
        </button>
      );
    }
    return (
      <button
        className="coinlist_item_btn"
        type="button"
        onClick={
          (e) => {
            e.preventDefault();
            deleteCoin(coin.id);
            console.log('deleted');
          }
        }
      >
        <IconContext.Provider value={{ color: 'red', className: 'close_icon' }}>
          <AiOutlineCloseCircle />
        </IconContext.Provider>
      </button>
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
        { btnIconRender() }
      </li>
    </Link>
  );
};

Coin.propTypes = {
  coin: PropTypes.shape(
    {
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      current_price: PropTypes.number,
      price_change_percentage_24h: PropTypes.number,
    },
  ).isRequired,
  indexList: PropTypes.bool.isRequired,
  deleteCoin: PropTypes.func.isRequired,
  addCoin: PropTypes.func.isRequired,
};

export default Coin;
