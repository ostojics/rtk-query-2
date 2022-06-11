import {render, screen} from '@testing-library/react';

import Form from '../Form';
import '@testing-library/jest-dom/extend-expect';

beforeEach(() => {
  render(<Form />);
});

describe('Form', () => {
  it('should render', () => {
    const form = screen.getByTestId('form');

    expect(form).toBeVisible();
  });

  it('should render form input correctly', () => {
    const input = screen.getByPlaceholderText('Type something');

    expect(input).toBeVisible();
  });
});
