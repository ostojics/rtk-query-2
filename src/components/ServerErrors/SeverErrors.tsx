import {useEffect} from 'react';

import Notification from 'components/Notification/Notification';
import {useAppDispatch} from 'hooks/useAppDispatch';
import {useAppSelector} from 'hooks/useAppSelector';
import {setServerErrorAC} from 'store/app/appSlice';

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
