// import axios from "axios";
import coinGecko from '../../apis/coinGecko';

export const GetCoinsIndexList = (
  pageNum,
  localCurrency,
  priceChangePercentage,
) => async (dispatch) => {
  try {
    dispatch({ type: 'COINS_LIST_LOADING' });
    const perPage = 6;
    // const offset = (page * perPage) - page;
    const responseCoins = await coinGecko.get('coins/markets', {
      params: {
        vs_currency: localCurrency,
        per_page: perPage,
        page: pageNum,
        price_change_percentage: priceChangePercentage,
      },
    });

    dispatch({
      type: 'COINS_LIST_SUCCESS',
      payload: responseCoins.data,
    });
  } catch (e) {
    dispatch({ type: 'COINS_LIST_FAIL' });
  }
};

export const GetCoinInfo = () => async (dispatch) => {
  try {
    dispatch({ type: 'COIN_INFO_LOADING' });
  } catch (e) {
    dispatch({ type: 'COIN_INFO_FAIL' });
  }
};
