/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { createContext, useState } from 'react';

export const TrackedCoinsListContext = createContext();

export const TrackedCoinsListContextProvider = (props) => {
  const [CoinsList, setCoinsList] = useState(['bitcoin', 'ethereum', 'fiat']);
  return (
    <TrackedCoinsListContext.Provider value={{ CoinsList }}>
      {props.children}
    </TrackedCoinsListContext.Provider>
  );
};
