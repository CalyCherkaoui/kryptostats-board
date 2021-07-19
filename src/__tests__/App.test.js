import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/store';

describe(
  'Renders correctely App component',
  () => {
    let container;
    beforeEach(() => {
      container = shallow(<App />);
    });

    it(
      'Contains Navigation Bar',
      () => {
        expect(container.find('Navigation')).toBeTruthy();
      },
    );

    it(
      'Contains CoinsList component',
      () => {
        expect(container.find('CoinsList')).toBeTruthy();
      },
    );

    it(
      'Contains AboutPage component',
      () => {
        expect(container.find('AboutPage')).toBeTruthy();
      },
    );

    it(
      'Contains CoinDetailPage component',
      () => {
        expect(container.find('CoinDetailPage')).toBeTruthy();
      },
    );

    it(
      'Matches App snapshot',
      () => {
        const rendered = renderer.create(
          <Provider store={store}>
            <Router>
              <App />
            </Router>
          </Provider>,
        );
        expect(rendered).toMatchSnapshot();
      },
    );
  },
);
