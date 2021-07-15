import axios from 'axios';

export const GetWithLocalCurrencyFilter = (
  pageNum,
  localCurrency,
  priceChangePercentage,
) => async (dispatch) => {
  try {
    dispatch({ type: 'FILTRED_COINS_LIST_LOADING' });
    const perPage = 6;
    const Url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${localCurrency}&order=market_cap_desc&per_page=${perPage}&page=${pageNum}&sparkline=false&price_change_percentage=${priceChangePercentage}`;
    const responseCoins = await axios.get(Url);
    dispatch({
      type: 'FILTRED_COINS_LIST_UPDATE',
      payload: responseCoins.data,
    });
  } catch (e) {
    dispatch({ type: 'FILTRED_COINS_LIST_FAIL' });
  }
};

export default GetWithLocalCurrencyFilter;
