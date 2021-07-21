import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import SearchBar from '../components/SearchBar';

describe(
  'Renders correctly The navigation bar component',
  () => {
    it(
      'Matches LocalCurrencyFilter snapshot',
      () => {
        const rendered = renderer.create(
          <Provider store={store}>
            <Router>
              <SearchBar />
            </Router>
          </Provider>,
        );
        expect(rendered).toMatchSnapshot();
      },
    );
  },
);
