import {render, screen} from '@testing-library/react';

import Icon from '../Icon';
import '@testing-library/jest-dom/extend-expect';

beforeEach(() => render(<Icon icon="account" />));

describe('Icon', () => {
  it('should render with correct icon', () => {
    const icon = screen.getByTestId('account-icon');

    expect(icon).toBeVisible();
  });
});
