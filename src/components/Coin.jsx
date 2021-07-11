import React from 'react'
import { Link } from 'react-router-dom'

const Coin = ({coin}) => {
  return (
    <Link to='/coininfo'>
      <li className="coinlist_item">
        <img src={coin.image} alt={coin.id} className="coinlist_item_image" />
        <span className="coinlist_item_price">{coin.current_price}</span>
        <span className="coinlist_item_change">
          {coin.price_percentage_24}
        </span>
      </li>
    </Link>
  )
}

export default Coin
