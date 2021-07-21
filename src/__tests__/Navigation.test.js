import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Navigation from '../components/Navigation';

describe(
  'Renders correctly The navigation bar component',
  () => {
    let container;
    beforeEach(() => {
      container = shallow(
        <Provider store={store}>
          <Router>
            <Navigation />
          </Router>
        </Provider>,
      );
    });

    it(
      'Contains SearchBar component',
      () => {
        expect(container.find('SearchBar')).toBeTruthy();
      },
    );

    it(
      'Matches Navigation snapshot',
      () => {
        const rendered = renderer.create(
          <Provider store={store}>
            <Router>
              <Navigation />
            </Router>
          </Provider>,
        );

        expect(rendered).toMatchSnapshot();
      },
    );
  },
);
