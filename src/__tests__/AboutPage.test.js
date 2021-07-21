import renderer from 'react-test-renderer';
import AboutPage from '../pages/AboutPage';

describe(
  'Renders correctly About page container',
  () => {
    it(
      'Matches About page snapshot',
      () => {
        const rendered = renderer.create(
          <AboutPage />,
        );
        expect(rendered).toMatchSnapshot();
      },
    );
  },
);
