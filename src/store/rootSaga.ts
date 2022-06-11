import appSaga from 'features/app/appSaga';
import {all} from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([appSaga()]);
}
