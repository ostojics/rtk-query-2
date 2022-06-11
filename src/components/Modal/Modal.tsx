import {ModalComponents} from 'constants/Modals';

import Backdrop from 'components/Backdrop/Backdrop';
import {useAppDispatch} from 'hooks/useAppDispatch';
import {useAppSelector} from 'hooks/useAppSelector';
import {createPortal} from 'react-dom';
import {setModalAC} from 'store/modal/modalSlice';

import './Modal.scss';
import TestModal from './Modals/TestModal/TestModal';

const Modal: React.FC = () => {
  const dispatch = useAppDispatch();
  const modalState = useAppSelector((state) => state.modal);
  const {modal} = modalState;

  const modalRoot = document.getElementById('modal-portal') as HTMLElement;

  const handleClose = () => {
    dispatch(setModalAC(null));
  };

  const renderModal = () => {
    switch (modal) {
      case ModalComponents.TEST:
        return <TestModal />;
      default:
        return null;
    }
  };

  return createPortal(
    <div className="modal">
      {modal && (
        <>
          <Backdrop onClick={handleClose} />
          <div className="modal__content">{renderModal()}</div>
        </>
      )}
    </div>,
    modalRoot,
  );
};

export default Modal;
