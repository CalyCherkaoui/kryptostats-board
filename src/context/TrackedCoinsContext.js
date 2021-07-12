/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { createContext, useState } from 'react';

export const TrackedCoinsListContext = createContext();

export const TrackedCoinsListContextProvider = (props) => {
  const [CoinsList, setCoinsList] = useState(['bitcoin', 'ethereum', 'dogecoin']);
  // eslint-disable-next-line no-console
  // console.log(props.children);

  const deleteCoin = (coin) => {
    setCoinsList(CoinsList.filter(
      (element) => element !== coin,
    ));
  };

  const addCoin = (coin) => {
    // setCoinsList(CoinsList.push(coin));
    console.log(coin);
  };

  return (
    <TrackedCoinsListContext.Provider value={{ CoinsList, deleteCoin, addCoin }}>
      {props.children}
    </TrackedCoinsListContext.Provider>
  );
};
