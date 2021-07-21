import CoinDetailFixt from '../../fixtures/CoinDetailFixt';
import CoinInfoReducer from '../../redux/reducers/CoinInfoReducer';

describe('Coin Detail Info reducer',
  () => {
    let initialState;
    beforeEach(() => {
      initialState = {
        loading: false,
        data: {},
        errorMessage: '',
      };
    });

    test('It should set initial state by default',
      () => {
        const state = CoinInfoReducer(initialState, { type: '@@INIT' });
        expect(state).toEqual(initialState);
      });

    test('Should Have a Coin in the store',
      () => {
        const action = {
          type: 'COIN_INFO_SUCCESS',
          payload: CoinDetailFixt,
          coinId: 'bitcoin',
        };

        const initialState = {
          loading: true,
          data: {},
          errorMessage: '',
        };

        const state = CoinInfoReducer(initialState, action);
        expect(state.data).toMatchObject({
          [action.coinId]: CoinDetailFixt,
        });
      });
  });
