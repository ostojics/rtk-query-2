import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {authApiSlice} from 'features/auth/authApiSlice';
import {User} from 'typescript/models/User';

export interface IState {
  user: User | null;
  serverError: string | null;
}

export const initialState: IState = {
  user: null,
  serverError: null,
};

export const appNamespace = 'app';

const appSlice = createSlice({
  name: appNamespace,
  initialState,
  reducers: {
    setUserAC: (state, action: PayloadAction<IState['user']>) => {
      localStorage.setItem('user', JSON.stringify(action.payload));
      state.user = action.payload;
    },
    setServerErrorAC: (state, action: PayloadAction<IState['serverError']>) => {
      state.serverError = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApiSlice.endpoints.signIn.matchFulfilled, (state, {payload}) => {
      state.user = payload;
    });
  },
});

export default appSlice;

export const {setUserAC, setServerErrorAC} = appSlice.actions;
