// import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import LocalCurrencyFilter from '../components/LocalCurrencyFilter';

describe(
  'Renders correctly The navigation bar component',
  () => {
    const testFunction = () => true;

    it(
      'Matches LocalCurrencyFilter snapshot',
      () => {
        const rendered = renderer.create(
          <Provider store={store}>
            <Router>
              <LocalCurrencyFilter changeLocalCurrency={testFunction} />
            </Router>
          </Provider>,
        );
        expect(rendered).toMatchSnapshot();
      },
    );
  },
);
