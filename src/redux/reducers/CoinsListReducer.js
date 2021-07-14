const InitialState = {
  loading: false,
  data: [],
  errorMessage: '',
};

const CoinsListReducer = (state = InitialState, action) => {
  switch (action.type) {
    case 'COINS_LIST_LOADING':
      return {
        ...state,
        loading: true,
        errorMessage: '',
      };
    case 'COINS_LIST_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMessage: '',
      };
    case 'COINS_LIST_FAIL':
      return {
        ...state,
        loading: false,
        errorMessage: 'Ooops! A problem occurred while loading Data..',
      };
    default:
      return state;
  }
};

export default CoinsListReducer;
