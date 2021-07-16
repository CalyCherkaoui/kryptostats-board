/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { BsCircleFill } from 'react-icons/bs';
import SearchBar from './SearchBar';
import styles from '../styles/Navigation.module.css';

function Navigation() {
  return (
    <div className={`${styles.navigation_bar} flex_row flex_space_between shadowed_small`}>
      <div className={`${styles.navigation_left} flex_row flex_start_bl`}>
        <p className={`${styles.nav_logo} bold_typography`}>
          Krypto|
          <span className={styles.nav_logo_emph}>
            <IconContext.Provider value={{ className: 'logo_icon' }}>
              <BsCircleFill />
            </IconContext.Provider>
          </span>
        </p>
        <ul className="flex_row flex_start_bl">
          <li className={styles.nav_item}>
            <Link to="/about" className={styles.nav_link}>ABOUT</Link>
          </li>
          <li className={styles.nav_item}>
            <Link to="/" className={styles.nav_link}>CRYPTO-LIST</Link>
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
