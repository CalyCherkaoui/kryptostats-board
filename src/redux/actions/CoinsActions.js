import axios from 'axios';

export const GetCoinsIndexList = (
  pageNum,
  localCurrency,
  priceChangePercentage,
) => async (dispatch) => {
  try {
    dispatch({ type: 'COINS_LIST_LOADING' });
    const perPage = 6;
    const Url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${localCurrency}&order=market_cap_desc&per_page=${perPage}&page=${pageNum}&sparkline=false&price_change_percentage=${priceChangePercentage}`;
    const responseCoins = await axios.get(Url);
    dispatch({
      type: 'COINS_LIST_SUCCESS',
      payload: responseCoins.data,
    });
  } catch (e) {
    dispatch({ type: 'COINS_LIST_FAIL' });
  }
};

export const GetCoinInfo = (coinid) => async (dispatch) => {
  try {
    dispatch({ type: 'COIN_INFO_LOADING' });
    const Url = `https://api.coingecko.com/api/v3/coins/${coinid}`;
    const responseCoin = await axios.get(Url);
    dispatch({
      type: 'COIN_INFO_SUCCESS',
      payload: responseCoin.data,
      coinId: coinid,
    });
  } catch (e) {
    dispatch({ type: 'COIN_INFO_FAIL' });
  }
};
