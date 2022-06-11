import {takeLatest} from '@redux-saga/core/effects';

import {getUserSaga} from './getUser/saga';
import {getUserByIdACS} from './requestAC';

export default function* appSaga() {
  yield takeLatest(getUserByIdACS.type, getUserSaga);
}
