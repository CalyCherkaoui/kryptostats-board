import { combineReducers } from 'redux';
import CoinsListReducer from './CoinsListReducer';

const RootReducer = combineReducers({
  CoinsList: CoinsListReducer,
});

export default RootReducer;
