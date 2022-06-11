import {ModalComponents} from 'constants/Modals';

import Button from 'components/Button/Button';
import Text from 'components/Text/Text';
import {getUserByIdACS} from 'features/app/requestAC';
import {setModalAC} from 'features/modal/modalSlice';
import {useAppDispatch} from 'hooks/useAppDispatch';
import {useAppSelector} from 'hooks/useAppSelector';
import LayoutNavbar from 'layouts/LayoutNavbar/LayoutNavbar';

import './Home.scss';

const Home = () => {
  const dispatch = useAppDispatch();
  const AppState = useAppSelector((state) => state.app);

  const handleModal = () => {
    dispatch(setModalAC(ModalComponents.TEST));
  };

  const handleGetUser = () => {
    dispatch(getUserByIdACS(1));
  };

  return (
    <LayoutNavbar pageName="home">
      <h1 data-cy="home-title">Home view</h1>
      <Button onClick={handleModal}>Toggle Modal</Button>
      <Button onClick={handleGetUser}>Get user with Saga</Button>
      {AppState.user && <Text tag="p">Logged In. {AppState.user.username}</Text>}
    </LayoutNavbar>
  );
};

export default Home;
