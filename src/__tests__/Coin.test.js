// import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Coin from '../components/Coin';

describe(
  'Renders correctly The navigation bar component',
  () => {
    let coin;
    beforeEach(() => {
      coin = {
        id: 'testcoin',
        image: 'image_link',
        current_price: 1,
        price_change_percentage_24h: 1,
      };
    });

    it(
      'Matches Coin snapshot',
      () => {
        const rendered = renderer.create(
          <Provider store={store}>
            <Router>
              <Coin coin={coin} />
            </Router>
          </Provider>,
        );

        expect(rendered).toMatchSnapshot();
      },
    );
  },
);
