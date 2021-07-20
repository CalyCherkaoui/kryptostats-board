import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import CoinDetailInfo from '../components/CoinDetailInfo';
import store from '../redux/store';

describe(
  'Renders correctly CoinDetailInfo component',
  () => {
    let container;
    beforeEach(() => {
      container = shallow(
        <Provider store={store}>
          <Router>
            <CoinDetailInfo />
          </Router>
        </Provider>,
      );
    });

    it(
      'Contains Coin Info Header',
      () => {
        expect(container.find('.coin_info_header')).toBeTruthy();
      },
    );

    it(
      'Contains coin info market',
      () => {
        expect(container.find('.coin_info_market')).toBeTruthy();
      },
    );

    it(
      'Contains coin description',
      () => {
        expect(container.find('.coin_description')).toBeTruthy();
      },
    );

    it(
      'Matches CoinDetailInfo snapshot',
      () => {
        const rendered = renderer.create(
          <Provider store={store}>
            <Router>
              <CoinDetailInfo />
            </Router>
          </Provider>,
        );
        expect(rendered).toMatchSnapshot();
      },
    );
  },
);
