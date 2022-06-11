import {render, screen} from '@testing-library/react';

import Text from '../Text';
import '@testing-library/jest-dom/extend-expect';

beforeEach(() => {
  render(<Text tag="h1">Test</Text>);
});

describe('Text', () => {
  it('should render with correct text', () => {
    const text = screen.getByText('Test');

    expect(text).toBeVisible();
  });
});
