import {connectRouter} from 'connected-react-router';
import {History} from 'history';
import appReducer from 'store/app/appSlice';

import modalReducer from './modal/modalSlice';

const rootReducer = (history: History) => {
  return {
    app: appReducer.reducer,
    router: connectRouter(history),
    modal: modalReducer.reducer,
  };
};

export default rootReducer;
