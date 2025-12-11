import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';


interface RecepiDetail {
  id: string;
  title: string;
  src: string;
  alt?: string;
  instructions?: string;
}

const initialState = {
  cards: [] as RecepiDetail[],
};

const recepiDetailSlice= createSlice({
  name: 'recepiDetail',
  initialState,
  reducers: {
    setRecepiDetails(state, action) {
      state.cards = action.payload;
    },
  },
});

function cardSelector(state: RootState) {
      return state.recepiDetail.cards;
    };

export const { setRecepiDetails } = recepiDetailSlice.actions;
export { cardSelector };
export default recepiDetailSlice.reducer;