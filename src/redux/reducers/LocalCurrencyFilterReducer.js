const InitialState = {
  loading: false,
  listUpdated: false,
  data: [],
  errorMessage: '',
};

const LocalCurrencyFilterReducer = (state = InitialState, action) => {
  switch (action.type) {
    case 'FILTRED_COINS_LIST_LOADING':
      return {
        ...state,
        loading: true,
        listUpdated: false,
        errorMessage: '',
      };
    case 'FILTRED_COINS_LIST_UPDATE':
      return {
        ...state,
        loading: false,
        data: action.payload,
        listUpdated: true,
        errorMessage: '',
      };
    case 'FILTRED_COINS_LIST_CURRENT':
      return state;
    case 'FILTRED_COINS_LIST_FAIL':
      return {
        ...state,
        loading: false,
        listUpdated: false,
        errorMessageF: 'Ooops! A problem occurred while loading Data..',
      };
    default:
      return state;
  }
};

export default LocalCurrencyFilterReducer;
