/* eslint-disable arrow-body-style */
import React from 'react';
import { PropTypes } from 'prop-types';
import styles from '../styles/Filter.module.css';

const LocalCurrencyFilter = ({ changeLocalCurrency }) => {
  const localCurrencies = [
    { name: 'USD', keyApi: 'usd' },
    { name: 'EUR', keyApi: 'eur' },
    { name: 'JPY', keyApi: 'jpy' },
    { name: 'CAD', keyApi: 'cad' },
    { name: 'BTC', keyApi: 'btc' },
    { name: 'ETH', keyApi: 'eth' },
  ];

  return (
    <div className={`${styles.filter_wrapper} flex_row`}>
      <div className={`${styles.filter_legend} spaced_typography`}>Convert prices to:</div>
      <select
        name="local_currency"
        id="local_currency"
        className={styles.filter_selector}
        onChange={(e) => changeLocalCurrency(e.target.value)}
      >
        {
          localCurrencies.map(
            (currency) => (
              <option
                value={currency.keyApi}
                key={currency.keyApi}
                className={styles.filter_option}
              >
                {currency.name}
              </option>
            ),
          )
        }
      </select>
    </div>
  );
};

LocalCurrencyFilter.propTypes = {
  changeLocalCurrency: PropTypes.func.isRequired,
};

export default LocalCurrencyFilter;
