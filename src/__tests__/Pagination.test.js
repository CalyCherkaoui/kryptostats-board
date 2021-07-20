// import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Pagination from '../components/Pagination';

describe(
  'Renders correctly The navigation bar component',
  () => {
    const count = 1;
    const fetchData = () => true;

    it(
      'Matches Pagination snapshot',
      () => {
        const rendered = renderer.create(
          <Provider store={store}>
            <Router>
              <Pagination count={count} fetchData={fetchData} />
            </Router>
          </Provider>,
        );

        expect(rendered).toMatchSnapshot();
      },
    );
  },
);
