import { combineReducers } from 'redux';
import CoinInfoReducer from './CoinInfoReducer';
import CoinsListReducer from './CoinsListReducer';

const RootReducer = combineReducers({
  CoinsList: CoinsListReducer,
  CoinInfo: CoinInfoReducer,
});

export default RootReducer;
