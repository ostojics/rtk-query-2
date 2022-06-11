import {ModalComponents} from 'constants/Modals';

import {createSlice} from '@reduxjs/toolkit';

interface IState {
  modal: ModalComponents | null;
}

const initialState: IState = {
  modal: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalAC: (state, action) => {
      state.modal = action.payload;
    },
  },
});

export default modalSlice;

export const {setModalAC} = modalSlice.actions;
