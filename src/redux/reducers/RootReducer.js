import { combineReducers } from 'redux';
import LocalCurrencyFilterReducer from './LocalCurrencyFilterReducer';
import CoinInfoReducer from './CoinInfoReducer';
import CoinsListReducer from './CoinsListReducer';

const RootReducer = combineReducers({
  CoinsList: CoinsListReducer,
  CoinInfo: CoinInfoReducer,
  FilteredCoinsByLocalCurrency: LocalCurrencyFilterReducer,
});

export default RootReducer;
