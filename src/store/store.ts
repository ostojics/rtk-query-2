import {configureStore} from '@reduxjs/toolkit';
import {routerMiddleware} from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import {history} from 'utils/history/history';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer(history),
  middleware: [sagaMiddleware, routerMiddleware(history)],
});

sagaMiddleware.run(rootSaga);

export default store;
