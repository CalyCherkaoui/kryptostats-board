/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import styles from '../styles/Navigation.module.css';

function Navigation() {
  return (
    <div className={`${styles.navigation_bar} flex_row flex_space_between`}>
      <div className={`${styles.navigation_left} flex_row flex_start_bl`}>
        <p className={`${styles.nav_logo} bold_typography`}>
          Krypto|
          <span className={styles.nav_logo_emph}>stats</span>
        </p>
        <ul className="flex_row flex_start_bl">
          <li className={`${styles.nav_item} normal_typography`}>
            <Link to="/about" className="nav_link">About</Link>
          </li>
          <li className={`${styles.nav_item} normal_typography`}>
            <Link to="/" className="nav_link">Index</Link>
          </li>
        </ul>
      </div>
      <div className={styles.navigation_right}>
        <SearchBar />
      </div>
    </div>
  );
}

export default Navigation;
