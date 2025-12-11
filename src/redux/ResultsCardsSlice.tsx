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

const resultsCardsSlice = createSlice({
  name: 'resultsCards',
  initialState,
  reducers: {
    setResultsCards(state, action) {
      state.cards = action.payload;
    },
    clearResultsCards(state) {
      state.cards = [];
    },
  },
});

function resultsSelector(state: RootState) {
  return state.resultsCards.cards;
}

export const { setResultsCards, clearResultsCards } = resultsCardsSlice.actions;
export { resultsSelector };
export default resultsCardsSlice.reducer;