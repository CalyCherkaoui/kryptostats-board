import CoinsListFixt from '../../fixtures/CoinsListFixt';
import CoinsListReducer from '../../redux/reducers/CoinsListReducer';

describe('Coins List reducer',
  () => {
    let initialState;
    beforeEach(() => {
      initialState = {
        loading: false,
        data: [],
        errorMessage: '',
      };
    });

    test('It should set initial state by default',
      () => {
        const state = CoinsListReducer(initialState, { type: '@@INIT' });
        expect(state).toEqual(initialState);
      });

    test('Should Have array of Coins in the store',
      () => {
        const action = {
          type: 'COINS_LIST_SUCCESS',
          payload: CoinsListFixt,
        };

        const initialState = {
          loading: true,
          data: {},
          errorMessage: '',
        };

        const state = CoinsListReducer(initialState, action);
        expect(state.data).toMatchObject(CoinsListFixt);
      });
  });
