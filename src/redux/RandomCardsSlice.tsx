import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';


interface CardData {
  id: string;
  title: string;
  src: string;
  alt?: string;
  instructions?: string;
}

const initialState = {
  cards: [] as CardData[],
};

const randomCardsSlice = createSlice({
  name: 'randomCards',
  initialState,
  reducers: {
    setRandomCards(state, action) {
      state.cards = action.payload;
    },
  },
});

function randomCardsSelector(state: RootState) {
  return state.randomCards.cards;
};

export const { setRandomCards } = randomCardsSlice.actions;
export { randomCardsSelector };
export default randomCardsSlice.reducer;