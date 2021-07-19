import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';
import App from '../App';

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
  },
);
