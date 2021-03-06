import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import CoinDetailPage from '../pages/CoinDetailPage';

describe(
  'Renders correctly Coin Detail Page container',
  () => {
    it(
      'Matches Coin Detail Page snapshot',
      () => {
        const rendered = renderer.create(
          <Provider store={store}>
            <Router>
              <CoinDetailPage />
            </Router>
          </Provider>,
        );

        expect(rendered).toMatchSnapshot();
      },
    );
  },
);
