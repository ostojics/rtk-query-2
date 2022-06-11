import {render, screen} from '@testing-library/react';

import TestModal from '../TestModal';
import '@testing-library/jest-dom/extend-expect';

beforeEach(() => {
  render(<TestModal />);
});

describe('Test Modal', () => {
  it('should render correctly', () => {
    const modal = screen.getByTestId('test-modal');

    expect(modal).toBeVisible();
  });
});
