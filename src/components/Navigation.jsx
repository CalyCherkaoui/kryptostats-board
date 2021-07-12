import React from 'react';
import { Link } from 'react-router-dom';
import LocalCurrencyFilter from './LocalCurrencyFilter';

function Navigation() {
  return (
    <div className="navigation_bar">
      <div className="navigation_left">
        <div>
          <h1 className="nav_logo">Krypto-stats | Dashboard</h1>
          <ul>
            <li className="nav_item">
              <Link to="/about" className="nav_link">About</Link>
            </li>
            <li className="nav_item">
              <Link to="/" className="nav_link">Index</Link>
            </li>
            <li className="nav_item">
              <Link to="/tracked" className="nav_link">Tracked Items</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navigation_right">
        <LocalCurrencyFilter />
      </div>
    </div>
  );
}

export default Navigation;
