/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
// import LocalCurrencyFilter from './LocalCurrencyFilter';

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
          </ul>
        </div>
      </div>
      <div className="navigation_right">
        {/* <LocalCurrencyFilter changeLocalCurrency={(val) => console.log(val)} /> */}
        <SearchBar />
      </div>
    </div>
  );
}

export default Navigation;
