import {render, screen} from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import Notification from '../Notification';

beforeEach(() => {
  render(<Notification variant="success" message="test" />);
});

describe('Notification', () => {
  it('should render with correct text and class', () => {
    const notification = screen.getByText('test');

    expect(notification).toBeVisible();
    expect(notification).toHaveClass('notification--success');
  });
});
