import {render, screen} from '@testing-library/react';

import Backdrop from '../Backdrop';
import '@testing-library/jest-dom/extend-expect';

beforeEach(() => {
  render(<Backdrop />);
});

describe('Backdrop', () => {
  it('should render correctly with the right class', () => {
    const backdrop = screen.getByTestId('backdrop');
    expect(backdrop).toBeVisible();
    expect(backdrop).toHaveClass('backdrop');
  });
});
