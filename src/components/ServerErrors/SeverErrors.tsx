import {useEffect} from 'react';

import Notification from 'components/Notification/Notification';
import {setServerErrorAC} from 'features/app/appSlice';
import {useAppDispatch} from 'hooks/useAppDispatch';
import {useAppSelector} from 'hooks/useAppSelector';

export default function ServerError() {
  const dispatch = useAppDispatch();

  const {serverError} = useAppSelector((state) => state.app);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setServerErrorAC(null));
      if (serverError) dispatch(setServerErrorAC(null));
    }, 5000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [serverError]);

  return <div>{serverError && <Notification variant="error" message={serverError} />}</div>;
}
