import {render, screen} from '@testing-library/react';

import Input from '../Input';
import '@testing-library/jest-dom/extend-expect';

beforeEach(() => {
  render(<Input value="" placeholder="test" />);
});

describe('Input', () => {
  it('should render correctly', () => {
    const input = screen.getByTestId('input');
    const placeholder = screen.getByPlaceholderText('test');

    expect(input).toBeVisible();
    expect(placeholder).toBeVisible();
  });
});
