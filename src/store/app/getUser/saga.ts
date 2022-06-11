import {AxiosResponse} from 'axios';
import {call, put} from 'redux-saga/effects';
import {getUserById} from 'services/user';
import {setUserAC} from 'store/app/appSlice';

import {getUserByIdACS} from '../requestAC';

export function* getUserSaga(action: ReturnType<typeof getUserByIdACS>) {
  try {
    const {payload} = action;

    const res: AxiosResponse<any> = yield call(getUserById, payload);

    yield put(setUserAC(res.data));
  } catch (error) {
    // eslint-disable-next-line
    console.log(error);
  }
}
