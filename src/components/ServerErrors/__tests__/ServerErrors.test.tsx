import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import {setServerErrorAC} from 'store/app/appSlice';

import store from '../../../store/store';
import ServerError from '../SeverErrors';

beforeEach(() => {
  render(
    <Provider store={store}>
      <ServerError />
    </Provider>,
  );
});

describe('Server Errors', () => {
  it('should render correctly when state is set', () => {
    store.dispatch(setServerErrorAC('test'));

    const error = screen.getByText('test');

    expect(error).toBeVisible();
  });

  it('should close when state is reset', () => {
    store.dispatch(setServerErrorAC('test'));

    const error = screen.getByText('test');

    expect(error).toBeVisible();

    store.dispatch(setServerErrorAC(null));

    expect(error).not.toBeVisible();
  });
});
