import {connectRouter} from 'connected-react-router';
import {apiSlice} from 'features/api/apiSlice';
import appReducer from 'features/app/appSlice';
import beersSlice from 'features/beers/beersSlice';
import modalReducer from 'features/modal/modalSlice';
import {History} from 'history';

const rootReducer = (history: History) => {
  return {
    app: appReducer.reducer,
    router: connectRouter(history),
    modal: modalReducer.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    beers: beersSlice.reducer,
  };
};

export default rootReducer;
