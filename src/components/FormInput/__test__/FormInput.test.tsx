import {render, screen} from '@testing-library/react';

import FormInput from '../FormInput';
import '@testing-library/jest-dom/extend-expect';

beforeEach(() => {
  render(<FormInput placeholder="test" value="" />);
});

describe('FormInput', () => {
  it('should render correctly', () => {
    const formInput = screen.getByTestId('form-input');
    const placeholder = screen.getByPlaceholderText('test');
    const button = screen.getByText('Submit');

    expect(formInput).toBeVisible();
    expect(placeholder).toBeVisible();
    expect(button).toBeVisible();
  });
});
