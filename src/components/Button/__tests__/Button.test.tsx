import {render, screen} from '@testing-library/react';
import Button from 'components/Button/Button';
import '@testing-library/jest-dom/extend-expect';

beforeEach(() => {
  render(<Button>Button</Button>);
});

describe('Button', () => {
  it('should render with correct text', () => {
    const btn = screen.getByText('Button');

    expect(btn.textContent).toBe('Button');
  });
});
