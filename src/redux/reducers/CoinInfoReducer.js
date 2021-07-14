const initialState = {
  loading: false,
  data: {},
  errorMessage: '',
};

const CoinInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COIN_INFO_LOADING':
      return {
        ...state,
        loading: true,
        errorMessage: '',
      };
    case 'COIN_INFO_SUCCESS':
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          [action.coinId]: action.payload,
        },
        errorMessage: '',
      };
    case 'COIN_INFO_FAIL':
      return {
        ...state,
        loading: false,
        errorMessage: 'Ooops! A problem occurred while loading Data..',
      };
    default:
      return state;
  }
};

export default CoinInfoReducer;
