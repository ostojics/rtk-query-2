import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';

import Navbar from '../Navbar';

import '@testing-library/jest-dom/extend-expect';

beforeEach(() => {
  render(
    <Router>
      <Navbar />
    </Router>,
  );
});

describe('Navbar', () => {
  it('should render correctly', () => {
    const navbar = screen.getByTestId('nav');
    const navbarLink = screen.getByText('Home');

    expect(navbar).toBeVisible();
    expect(navbarLink).toBeVisible();
  });
});
