import {configureStore} from '@reduxjs/toolkit';
import {routerMiddleware} from 'connected-react-router';
import {apiSlice} from 'features/api/apiSlice';
import createSagaMiddleware from 'redux-saga';
import {history} from 'utils/history/history';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer(history),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([sagaMiddleware, routerMiddleware(history), apiSlice.middleware]),
});

sagaMiddleware.run(rootSaga);

export default store;
