import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import CoinsList from '../components/CoinsList';
import store from '../redux/store';

describe(
  'Renders correctly CoinDetailInfo component',
  () => {
    let container;
    beforeEach(() => {
      container = shallow(
        <Provider store={store}>
          <Router>
            <CoinsList />
          </Router>
        </Provider>,
      );
    });

    it(
      'Contains coins list container',
      () => {
        expect(container.find('.coins_list_container')).toBeTruthy();
      },
    );

    it(
      'Contains coins list wrapper',
      () => {
        expect(container.find('.coins_list')).toBeTruthy();
      },
    );

    it(
      'Contains pagination wrapper',
      () => {
        expect(container.find('.pagination_wrapper')).toBeTruthy();
      },
    );

    it(
      'Matches CoinDetailInfo snapshot',
      () => {
        const rendered = renderer.create(
          <Provider store={store}>
            <Router>
              <CoinsList />
            </Router>
          </Provider>,
        );
        expect(rendered).toMatchSnapshot();
      },
    );
  },
);
