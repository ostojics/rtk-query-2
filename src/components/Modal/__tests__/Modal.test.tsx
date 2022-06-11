import {ModalComponents} from 'constants/Modals';

import {render, screen, fireEvent} from '@testing-library/react';
import {Provider} from 'react-redux';
import {setModalAC} from 'store/modal/modalSlice';

import store from '../../../store/store';
import Modal from '../Modal';

import '@testing-library/jest-dom/extend-expect';

let modalRoot = document.getElementById('modal-portal');

if (!modalRoot) {
  modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal-portal');
  document.body.appendChild(modalRoot);
}

beforeEach(() => {
  render(
    <Provider store={store}>
      <Modal />
    </Provider>,
  );
});

describe('Modal', () => {
  it('should open the right modal with backdrop', () => {
    store.dispatch(setModalAC(ModalComponents.TEST));

    const modal = screen.getByTestId('test-modal');
    const backdrop = screen.getByTestId('backdrop');

    expect(backdrop).toBeVisible();
    expect(modal).toBeVisible();
  });

  it('should properly close the modal when backdrop is clicked', () => {
    store.dispatch(setModalAC(ModalComponents.TEST));

    const modal = screen.getByTestId('test-modal');
    const backdrop = screen.getByTestId('backdrop');

    expect(modal).toBeVisible();
    expect(backdrop).toBeVisible();

    fireEvent.click(backdrop);

    expect(modal).not.toBeVisible();
    expect(backdrop).not.toBeVisible();
  });
});
