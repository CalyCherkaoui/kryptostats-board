/* eslint-disable arrow-body-style */
import React from 'react';

const LocalCurrencyFilter = ({ changeLocalCurrency }) => {
  const localCurrencies = [
    { name: 'USD', keyApi: 'usd' },
    { name: 'EUR', keyApi: 'eur' },
    { name: 'MAD', keyApi: 'mad' },
    { name: 'JPY', keyApi: 'jpy' },
  ];

  return (
    <div className="local_currency_filter_wrapper">
      <select
        name="local_currency"
        id="local_currency"
        className="local_currency"
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

export default LocalCurrencyFilter;
