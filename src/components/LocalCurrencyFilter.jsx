/* eslint-disable arrow-body-style */
import React from 'react';
import { PropTypes } from 'prop-types';

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
    <div className="local_currency_filter_wrapper">
      <select
        name="local_currency"
        id="local_currency"
        className="local_currency"
        onChange={(e) => changeLocalCurrency(e.target.value)}
      >
        {
          localCurrencies.map(
            (currency) => (
              <option value={currency.keyApi} key={currency.keyApi}>{currency.name}</option>
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
