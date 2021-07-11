import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { FaAngleUp } from 'react-icons/fa';
import { GrAddCircle } from 'react-icons/gr';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Coin = ({ coin, indexList }) => {
  const iconRender = () => {
    if (indexList) {
      return (
        <IconContext.Provider value={{ color: 'green', className: 'add_icon' }}>
          <GrAddCircle />
        </IconContext.Provider>
      );
    }
    return (
      <IconContext.Provider value={{ color: 'red', className: 'close_icon' }}>
        <AiOutlineCloseCircle />
      </IconContext.Provider>
    );
  };
  return (
    <Link to="/coininfo">
      <li className="coinlist_item">
        <img src={coin.image} alt={coin.id} className="coinlist_item_image" />
        <span className="coinlist_item_price">{coin.current_price}</span>
        <span className="coinlist_item_change">
          <IconContext.Provider value={{ color: 'green', className: 'priceup_icon' }}>
            <FaAngleUp />
          </IconContext.Provider>
          {coin.price_percentage_24}
        </span>
        <button className="coinlist_item_btn" type="button">
          { iconRender() }
        </button>
      </li>
    </Link>
  );
};

Coin.propTypes = {
  coin: PropTypes.shape(
    {
      id: PropTypes.string,
      image: PropTypes.string,
      current_price: PropTypes.number,
      price_percentage_24: PropTypes.number,
    },
  ).isRequired,
  indexList: PropTypes.bool.isRequired,
};

export default Coin;
